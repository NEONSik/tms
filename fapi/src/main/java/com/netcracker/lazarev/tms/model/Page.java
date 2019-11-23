package com.netcracker.lazarev.tms.model;

import lombok.Data;

import java.util.List;

@Data
public class Page<T> {
    private List<T> content;
    private long totalElements;
    private int totalPages;
    private int size;
    private int numberOfElements;
}
