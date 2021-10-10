import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    // boardsService 주입
    constructor(private boardsService: BoardsService){}

    @Get()
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(@Body() createBoardDto: CreateBoardDto): Board {
        return this.boardsService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoardById(@Param('id') id: string): void {
        this.boardsService.deleteBoardById(id);
    }
}
