package com.netcracker.lazarev.tms.model;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class Comment {
private Long id;
    @NotBlank
    private String content;
    @NotNull
    private User user;
    private Task task;
}
