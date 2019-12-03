package com.netcracker.lazarev.tms.model;

import lombok.Data;

import java.util.List;

@Data
public class Page<T> {
    private Sort sort;
    private Pageable pageable;
    private List<T> content;
    private long totalElements;
    private int totalPages;
    private int size;
    private boolean last;
    private int number;
    private int numberOfElements;
    private boolean first;
    private boolean empty;
}

