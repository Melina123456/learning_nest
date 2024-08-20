import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'list of messages.';
  }

  @Post()
  createMessages(@Body() body: createMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log(id);
  }
}
