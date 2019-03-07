"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post/post.service");
const post_resolver_1 = require("./post/post.resolver");
const mongoose_1 = require("@nestjs/mongoose");
const post_schema_1 = require("./post/post.schema");
const section_service_1 = require("./section/section.service");
const section_schema_1 = require("./section/section.schema");
let PostsModule = class PostsModule {
};
PostsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Post', schema: post_schema_1.PostSchema },
                { name: 'Section', schema: section_schema_1.SectionSchema },
            ]),
        ],
        providers: [
            post_service_1.PostService,
            post_resolver_1.PostResolver,
            section_service_1.SectionService,
        ],
    })
], PostsModule);
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map