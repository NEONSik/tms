package com.netcracker.lazarev.tms.controller;

import com.netcracker.lazarev.tms.dto.CommentDto;
import com.netcracker.lazarev.tms.dto.Converter;
import com.netcracker.lazarev.tms.dto.UserDto;
import com.netcracker.lazarev.tms.entity.Comment;
import com.netcracker.lazarev.tms.entity.Task;
import com.netcracker.lazarev.tms.service.CommentService;
import com.netcracker.lazarev.tms.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/comments")
public class CommentController {
    private final CommentService commentService;
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }
    @GetMapping("/{id}")
    private CommentDto get(@PathVariable(name = "id") Long id) {
        Comment comment = commentService.get(id);
        return Converter.toDto(comment);
    }
    @GetMapping
    private List<CommentDto> getAll(@RequestParam(value = "taskId") Long task_id){
        List<Comment> comments = commentService.getAll(task_id);
        return comments.stream().map(Converter::toDto).collect(Collectors.toList());
    }
    @PostMapping
    private CommentDto create(@RequestBody CommentDto commentDto) {
        Comment comment = commentService.create(Converter.fromDto(commentDto));
        return Converter.toDto(comment);
    }

    @PutMapping("/{id}")
    private CommentDto update(@RequestBody CommentDto commentDto,
                           @PathVariable(name = "id") Long id) {
        Comment comment = commentService.update(Converter.fromDto(commentDto), id);
        return Converter.toDto(comment);
    }

    @DeleteMapping("/{id}")
    private void delete(@PathVariable(name = "id") Long id) {
        commentService.delete(id);
    }
}
