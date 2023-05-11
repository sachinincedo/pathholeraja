package com.potholeraja.potholeraja.status;

import java.util.List;

import com.potholeraja.potholeraja.entities.TicketEntity;

public interface StatusService {

	List<TicketEntity> getStatus(Long userId);

}
