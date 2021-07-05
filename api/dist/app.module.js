"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const hotposts_module_1 = require("./hotposts/hotposts.module");
const typeorm_1 = require("@nestjs/typeorm");
const post_entity_1 = require("./hotposts/entities/post.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([post_entity_1.Post]),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mssql',
                host: process.env.dbhost || 'localhost',
                port: process.env.dbport ? parseInt(process.env.dbport) : 5000,
                database: process.env.database || 'reddithot',
                logging: false,
                entities: [post_entity_1.Post],
                synchronize: false,
                options: {
                    encrypt: false,
                },
                authentication: {
                    type: 'default',
                    options: {
                        userName: process.env.user || 'sa',
                        password: process.env.pass || 'Your_password123',
                    },
                },
            }),
            graphql_1.GraphQLModule.forRoot({
                path: '/',
                introspection: true,
                playground: {
                    workspaceName: 'Loribao Gonçalves Sanjinez',
                    faviconUrl: 'https://assets.website-files.com/600f14d617ea3d4f40ecfa21/600f14d617ea3db3f9ecfa76_Favicon.png',
                    endpoint: '/',
                    title: 'Winnin - desafio',
                },
                installSubscriptionHandlers: true,
                autoSchemaFile: 'schema.gql',
            }),
            hotposts_module_1.HotPostsModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map