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
exports.Usuario = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_entity_1 = require("./post.entity");
let Usuario = class Usuario {
    constructor(data = null) {
        if (data) {
            this.nome = data.nome ? data.nome : '';
            this.ups = data.ups ? data.ups : 0;
            this.posts = data.posts ? data.posts : [];
            this.total_coments_posts = data.total_coments_posts
                ? data.total_coments_posts
                : 0;
        }
    }
};
__decorate([
    graphql_1.Field(() => String, { description: 'Nome do usuario' }),
    __metadata("design:type", String)
], Usuario.prototype, "nome", void 0);
__decorate([
    graphql_1.Field(() => [post_entity_1.Post], { description: 'Posts do usuario', nullable: true }),
    __metadata("design:type", Array)
], Usuario.prototype, "posts", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, {
        description: 'Numero total de ups no total de postagens',
    }),
    __metadata("design:type", Number)
], Usuario.prototype, "ups", void 0);
__decorate([
    graphql_1.Field(() => graphql_1.Int, { description: 'Numero de postagens' }),
    __metadata("design:type", Number)
], Usuario.prototype, "total_coments_posts", void 0);
Usuario = __decorate([
    graphql_1.ObjectType(),
    __metadata("design:paramtypes", [Object])
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=user.entity.js.map