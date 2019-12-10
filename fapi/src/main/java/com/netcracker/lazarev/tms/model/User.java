package com.netcracker.lazarev.tms.model;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class User {
    private Long id;
    @NotNull
    private String password;
    @NotNull
    private String role;
    @NotNull
    private String email;
}
