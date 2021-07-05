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
exports.Hotpot = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_entity_1 = require("./post.entity");
const user_entity_1 = require("./user.entity");
let Hotpot = class Hotpot {
};
__decorate([
    graphql_1.Field(() => user_entity_1.Usuario, {
        description: `Usuarios que postaram no reddit.com/r/artificial`,
    }),
    __metadata("design:type", user_entity_1.Usuario)
], Hotpot.prototype, "usuario", void 0);
__decorate([
    graphql_1.Field(() => post_entity_1.Post, { description: `Postagem no reddit.com/r/artificial/hot` }),
    __metadata("design:type", post_entity_1.Post)
], Hotpot.prototype, "posts", void 0);
Hotpot = __decorate([
    graphql_1.ObjectType()
], Hotpot);
exports.Hotpot = Hotpot;
//# sourceMappingURL=hotpost.entity.js.map