package com.netcracker.lazarev.tms.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;

@Data
public class User {
    private Long id;
    @NotEmpty
    private String name;
    @NotEmpty
    private String password;
    @NotEmpty
    private String role;
    @NotEmpty
    private String email;
}
