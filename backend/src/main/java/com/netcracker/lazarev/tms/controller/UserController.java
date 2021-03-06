package com.netcracker.lazarev.tms.controller;

import com.netcracker.lazarev.tms.dto.Converter;
import com.netcracker.lazarev.tms.dto.UserDto;
import com.netcracker.lazarev.tms.entity.User;
import com.netcracker.lazarev.tms.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    private Page<UserDto> getAll(
            @RequestParam(value = "page", required = false) Integer page,
            @RequestParam(value = "size", required = false) Integer size,
            @RequestParam(value = "sort", required = false) String sort,
            @RequestParam(value = "role", required = false) String role) {
        return userService.findAll(page, size, sort, role).map(Converter::toDto);
    }

    @GetMapping("/{id}")
    private UserDto get(@PathVariable(name = "id") Long id) {
        User user = userService.get(id);
        return Converter.toDto(user);
    }

    @GetMapping("/email/{email}")
    private UserDto get(@PathVariable String email) {
        return Converter.toDto(userService.getByEmail(email));
    }

    @PostMapping
    private UserDto create(@RequestBody UserDto userDto) {
        User user = userService.create(Converter.fromDto(userDto));
        return Converter.toDto(user);
    }

    @PutMapping("/{id}")
    private UserDto update(@RequestBody UserDto userDto,
                           @PathVariable(name = "id") Long id) {
        User user = userService.update(Converter.fromDto(userDto), id);
        return Converter.toDto(user);
    }

    @DeleteMapping("/{id}")
    private void delete(@PathVariable(name = "id") Long id) {
        userService.delete(id);
    }
}
