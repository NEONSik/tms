package com.netcracker.lazarev.tms.model;

import lombok.Data;

@Data
public class User {
    private Long id;
    private String password;
    private String role;
    private String email;
}
