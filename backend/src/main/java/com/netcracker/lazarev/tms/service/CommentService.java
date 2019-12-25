package com.netcracker.lazarev.tms.service;

import com.netcracker.lazarev.tms.entity.Comment;
import com.netcracker.lazarev.tms.entity.Task;
import com.netcracker.lazarev.tms.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment get(Long id) {
        return commentRepository.findById(id).get();
    }

    public Comment create(Comment comment) {
        return commentRepository.save(comment);
    }

    public Comment update(Comment comment, Long id) {
        comment.setId(id);
        return commentRepository.save(comment);
    }

    public List<Comment> getAll(Long task_id) {
        return commentRepository.findByTaskId(task_id);
    }

    public void delete(Long id) {
        commentRepository.deleteById(id);
    }
}
