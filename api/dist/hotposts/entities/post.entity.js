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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let Post = class Post {
    constructor(data = null) {
        if (data !== null) {
            this.autor = data === null || data === void 0 ? void 0 : data.autor;
            this.data_obtido = data.data_obtido;
            this.dominio = data === null || data === void 0 ? void 0 : data.dominio;
            this.id = data === null || data === void 0 ? void 0 : data.id;
            this.num_comentarios = data === null || data === void 0 ? void 0 : data.num_comentarios;
            this.timestamp = data === null || data === void 0 ? void 0 : data.timestamp;
            this.titulo = data === null || data === void 0 ? void 0 : data.titulo;
            this.ups = data === null || data === void 0 ? void 0 : data.ups;
            this.uuid_insercao = data.uuid_insercao;
        }
    }
    getDateStm() {
        return new Date((this === null || this === void 0 ? void 0 : this.timestamp) * 1000);
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    graphql_1.Field(() => String, { description: 'Titulo da postagem' }),
    typeorm_1.Column('varchar', { length: 250 }),
    __metadata("design:type", String)
], Post.prototype, "titulo", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: 'Data da publicação em segundos' }),
    typeorm_1.Column('integer'),
    __metadata("design:type", Number)
], Post.prototype, "timestamp", void 0);
__decorate([
    graphql_1.Field(() => String, { description: 'Autor da postagem' }),
    typeorm_1.Column('varchar', { length: 140 }),
    __metadata("design:type", String)
], Post.prototype, "autor", void 0);
__decorate([
    graphql_1.Field(() => String, { description: 'Dominio' }),
    typeorm_1.Column('varchar', { length: 100 }),
    __metadata("design:type", String)
], Post.prototype, "dominio", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: 'Quantidade de up da postagem' }),
    typeorm_1.Column('integer'),
    __metadata("design:type", Number)
], Post.prototype, "ups", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: 'Quantidade de comentarios' }),
    typeorm_1.Column('integer'),
    __metadata("design:type", Number)
], Post.prototype, "num_comentarios", void 0);
__decorate([
    graphql_1.Field(() => Date, { description: 'Data de obtenção da informação' }),
    typeorm_1.Column('datetime'),
    __metadata("design:type", Date)
], Post.prototype, "data_obtido", void 0);
__decorate([
    graphql_1.Field(() => String, {
        description: 'codigo do lote de dados, referente a data de obtenção no site oficial',
    }),
    typeorm_1.Column('varchar', { length: 50 }),
    __metadata("design:type", String)
], Post.prototype, "uuid_insercao", void 0);
Post = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity({ name: 'HotPost' }),
    __metadata("design:paramtypes", [Object])
], Post);
exports.Post = Post;
//# sourceMappingURL=Post.entity.js.map