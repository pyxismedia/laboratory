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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("mongoose");
const post_service_1 = require("./post.service");
const section_service_1 = require("../section/section.service");
let PostResolver = class PostResolver {
    constructor(postService, sectionService) {
        this.postService = postService;
        this.sectionService = sectionService;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postService.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postService.findById(id);
        });
    }
    section(post) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.sectionService.findById(post.section);
        });
    }
};
__decorate([
    graphql_1.Query('posts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "findAll", null);
__decorate([
    graphql_1.Query('post'),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "findById", null);
__decorate([
    graphql_1.ResolveProperty('section'),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "section", null);
PostResolver = __decorate([
    graphql_1.Resolver('Post'),
    __metadata("design:paramtypes", [post_service_1.PostService,
        section_service_1.SectionService])
], PostResolver);
exports.PostResolver = PostResolver;
//# sourceMappingURL=post.resolver.js.map