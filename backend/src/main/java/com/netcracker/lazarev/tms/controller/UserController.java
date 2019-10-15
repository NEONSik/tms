package com.netcracker.lazarev.tms.controller;

import com.netcracker.lazarev.tms.entity.User;
import com.netcracker.lazarev.tms.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    private List<User> getAll() {
        return userService.getAll();
    }

    @GetMapping(value = "/{id}")
    private User get(@PathVariable(name = "id") Long id) {
        return userService.get(id);
    }
}
