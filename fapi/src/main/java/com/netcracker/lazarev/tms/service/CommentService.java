package com.netcracker.lazarev.tms.service;

import com.netcracker.lazarev.tms.model.Comment;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class CommentService {
    private RestTemplate restTemplate;
    @Value("${backend.url}")
    private String backendURL;
    public CommentService(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

    public Comment get(Long id) {
        return restTemplate.getForObject(backendURL + "comments/" + id, Comment.class);
    }
    public List<Comment> getAll(Long taskId) {
        return Arrays.asList(restTemplate.getForObject(backendURL+"comments?taskId="+taskId, Comment[].class));
    }
    public Comment create(Comment comment) {
        return restTemplate.postForObject(backendURL + "comments/", comment, Comment.class);
    }

    public void update(Comment comment, Long id) {
        restTemplate.put(backendURL + "comments/" + id, comment);
    }

    public void delete(Long id) {
        restTemplate.delete(backendURL + "comments/" + id);
    }

}
