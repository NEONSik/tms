package com.netcracker.lazarev.tms.model;

import lombok.Data;

@Data
public class Pageable {
    private Sort sort;
    private int offset;
    private int pageNumber;
    private int pageSize;
    private boolean paged;
    private boolean unpaged;
}
