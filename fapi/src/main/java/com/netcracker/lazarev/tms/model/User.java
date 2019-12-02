package com.netcracker.lazarev.tms.model;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class User {
    private Long id;
    @NotBlank
    private String password;
    @NotBlank
    private String role;
    @NotBlank
    private String email;
}
