package com.potholeraja.potholeraja.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.potholeraja.potholeraja.entities.TicketEntity;
import com.potholeraja.potholeraja.entities.UserEntity;

public interface TicketRepository extends JpaRepository<TicketEntity, Long> {
 
//	List<TicketEntity> userTicketList(Long userId);
    
	
//	List<TicketEntity> findAllByUserId(Long userId);
	
	
}
