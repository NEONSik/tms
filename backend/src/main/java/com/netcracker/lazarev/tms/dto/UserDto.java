package com.netcracker.lazarev.tms.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@AllArgsConstructor
@Data
public class UserDto {
    private Long id;
    private String password;
    private String role;
    private String email;
}
