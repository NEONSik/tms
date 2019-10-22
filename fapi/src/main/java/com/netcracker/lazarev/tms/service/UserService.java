package com.netcracker.lazarev.tms.service;

import com.netcracker.lazarev.tms.model.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class UserService {

    private RestTemplate restTemplate;
    @Value("${backend.url}")
    private String backendURL;

    public UserService(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

    public User get(Long id) {
        return restTemplate.getForObject(backendURL+"users/"+id, User.class);
    }

    public List<User> getAll() {
        return Arrays.asList(restTemplate.getForObject(backendURL+"users/", User[].class));
    }

    public User create(User user) {
        return restTemplate.postForObject(backendURL+"users/", user, User.class);
    }

    public void update(User user, Long id) {
        restTemplate.put(backendURL+"users/"+id, user);
    }

    public void delete(Long id) {
        restTemplate.delete(backendURL+"users/"+id);
    }
}
