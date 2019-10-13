package com.netcracker.lazarev.tms.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "password")
    private String password;
    @Column(name = "role")
    private String role;
    @Column(name = "email")
    private String email;
}
