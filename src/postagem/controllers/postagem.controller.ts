import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { Postagem } from "../entities/postagem.entity";
import { PostagemService } from "../services/postagem.service";

@Controller("//postagens")
export class PostagemController {
    constructor(private readonly postagemService: PostagemService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findA11(): Promise<Postagem[]> {
        return this.postagemService.findA11();
    }

}