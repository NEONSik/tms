package com.netcracker.lazarev.tms.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Data
@Builder
public class CommentDto {
    private Long id;
    private String content;
    private UserDto user;
    private TaskDto task;
}
