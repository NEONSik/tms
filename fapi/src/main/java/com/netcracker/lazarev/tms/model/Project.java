package com.netcracker.lazarev.tms.model;

import lombok.Data;

@Data
public class Project {
    private Long id;
    private String projectCode;
    private String summary;
    private User projectManager;
}
