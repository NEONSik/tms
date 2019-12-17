package com.netcracker.lazarev.tms.controller;

import com.netcracker.lazarev.tms.model.Comment;
import com.netcracker.lazarev.tms.service.CommentService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/comments")
public class CommentController {
    private final CommentService commentService;
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }
@GetMapping("/{id}")

    private Comment get(@PathVariable(name="id")Long id){return commentService.get(id);}
    @GetMapping
    public List<Comment> getAll(@RequestParam(value="taskId")Long taskId) {
        return commentService.getAll(taskId);
    }
    @PostMapping
    private Comment create(@Valid @RequestBody Comment comment){
        return commentService.create(comment);
    }
    @PutMapping("/{id}")
    private void update(@Valid @RequestBody Comment comment,@PathVariable(name="id")Long id){commentService.update(comment,id);}

    @DeleteMapping("/{id}")
    private void delete(@PathVariable(name = "id") Long id) {
        commentService.delete(id);
    }
}
