package com.netcracker.lazarev.tms.repository;

import com.netcracker.lazarev.tms.entity.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
//    @Query("select  tasks.ticket_code as taskscode,users.id as usersId, tasks.id as taskId from users\n" +
//            "join tasks\n" +
//            "on users.id=tasks.assignee_id\n" +
//            "where name=:name", nativeQuery = true)
//    List<Task> findByAssignee(@Param("name") String name);
}
