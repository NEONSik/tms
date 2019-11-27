package com.netcracker.lazarev.tms.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Builder
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @NotBlank @NotNull @Column(name = "password")
    private String password;
    @NotBlank @NotNull @Column(name = "role")
    private String role;
    @NotNull @NotBlank @Column(name = "email")
    private String email;
}
