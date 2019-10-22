package com.netcracker.lazarev.tms.controller;


import com.netcracker.lazarev.tms.model.User;
import com.netcracker.lazarev.tms.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    private List<User> getAll() {
        return userService.getAll();
    }

    @GetMapping("/{id}")
    private User get(@PathVariable(name = "id") Long id) {
        return userService.get(id);
    }

    @PostMapping
    private User create(@RequestBody User user) {
        return userService.create(user);
    }

    @PutMapping("/{id}")
    private void create(@RequestBody User user,
                        @PathVariable(name = "id") Long id) {
        userService.update(user, id);
    }

    @DeleteMapping("/{id}")
    private void create(@PathVariable(name = "id") Long id) {
        userService.delete(id);
    }
}
