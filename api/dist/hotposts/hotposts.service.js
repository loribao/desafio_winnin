"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotPostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./entities/post.entity");
const user_entity_1 = require("./entities/user.entity");
let HotPostsService = class HotPostsService {
    constructor(PostRepository) {
        this.PostRepository = PostRepository;
    }
    postsUsuario(nome, posts) {
        return posts.filter((elem) => elem.autor == nome);
    }
    contarUpsPorUsuario(nome, posts) {
        return posts
            .filter((elem) => elem.autor == nome)
            .map((elem) => elem.ups)
            .reduce((prev, elem) => prev + elem);
    }
    contarTotalComentariosEmPostsDeUsuario(nome, posts) {
        return posts
            .filter((elem) => elem.autor == nome)
            .map((elem) => elem.num_comentarios)
            .reduce((prev, elem) => prev + elem);
    }
    ordenarUpsOuNumComentariosPorPosts(orderby, dados) {
        if (orderby == 'ups') {
            return dados.sort((a, b) => b.ups - a.ups);
        }
        if (orderby === 'num_comentarios') {
            return dados.sort((a, b) => b.num_comentarios - a.num_comentarios);
        }
    }
    ordernarUsuarioPorNumPostsOuTotalNumComentarios(orderby, usuarios) {
        if (orderby == 'ups') {
            return usuarios.sort((a, b) => b.ups - a.ups);
        }
        if (orderby === 'total_coments_posts') {
            return usuarios.sort((a, b) => b.total_coments_posts - a.total_coments_posts);
        }
    }
    async buscarUltimoLoteDeDados() {
        const lote = await this.PostRepository.query(`
        select top(1) * from [reddithot].[dbo].[HotPost]
        order by data_obtido desc
    `);
        return lote[0].uuid_insercao;
    }
    async buscarUsuarios(orderby) {
        const lote = await this.buscarUltimoLoteDeDados();
        const _Posts = await this.PostRepository.createQueryBuilder('HotPost')
            .where(`HotPost.uuid_insercao = :lote`, { lote: lote })
            .getMany();
        const users = _Posts.map((x) => x.autor);
        const lista_usuarios_nome = [...new Set(users)];
        const data = lista_usuarios_nome.map(async (nome) => new user_entity_1.Usuario({
            nome: nome,
            ups: this.contarUpsPorUsuario(nome, _Posts),
            total_coments_posts: this.contarTotalComentariosEmPostsDeUsuario(nome, _Posts),
            posts: this.postsUsuario(nome, _Posts),
        }));
        const data_resolvida = await Promise.all(data);
        return this.ordernarUsuarioPorNumPostsOuTotalNumComentarios(orderby, data_resolvida);
    }
    async buscarPosts(datainicio, datafim, orderby = 'ups') {
        const inicio = datainicio.getTime() / 1000;
        const fim = datafim.getTime() / 1000;
        const lote = await this.buscarUltimoLoteDeDados();
        const dados = await this.PostRepository.createQueryBuilder('HotPost')
            .where('HotPost.uuid_insercao = :datalote  and timestamp >= :inicio and timestamp <= :fim', {
            datalote: lote,
            inicio: inicio,
            fim: fim,
        })
            .getMany();
        return this.ordenarUpsOuNumComentariosPorPosts(orderby, dados);
    }
};
HotPostsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HotPostsService);
exports.HotPostsService = HotPostsService;
//# sourceMappingURL=hotposts.service.js.map