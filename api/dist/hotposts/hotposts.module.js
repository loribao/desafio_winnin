"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotPostsModule = void 0;
const common_1 = require("@nestjs/common");
const hotposts_service_1 = require("./hotposts.service");
const hotposts_resolver_1 = require("./hotposts.resolver");
const post_entity_1 = require("./entities/post.entity");
const typeorm_1 = require("@nestjs/typeorm");
let HotPostsModule = class HotPostsModule {
};
HotPostsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([post_entity_1.Post])],
        providers: [hotposts_service_1.HotPostsService, hotposts_resolver_1.HotPostsResolver],
    })
], HotPostsModule);
exports.HotPostsModule = HotPostsModule;
//# sourceMappingURL=hotposts.module.js.map