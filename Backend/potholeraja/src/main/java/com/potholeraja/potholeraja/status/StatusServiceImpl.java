package com.potholeraja.potholeraja.status;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.potholeraja.potholeraja.entities.TicketEntity;
import com.potholeraja.potholeraja.entities.UserEntity;
import com.potholeraja.potholeraja.repositories.TicketRepository;
import com.potholeraja.potholeraja.repositories.UserRepository;
import com.potholeraja.potholeraja.util.RequestException;

@Service
public class StatusServiceImpl implements StatusService {

	@Autowired
	private TicketRepository ticketRepository;

	@Autowired
	private UserRepository userRepository;

	@Override
	public List<TicketEntity> getStatus(Long userId) {

		Optional<UserEntity> user = userRepository.findById(userId);
		if (user.isEmpty()) {
			throw new RequestException("User Not Found");
		}
		List<TicketEntity> ticket = ticketRepository.findAll();
		List<TicketEntity> tk = ticket.stream()
				.filter(user1 -> user1.getUser().getUserId()==userId)
				.collect(Collectors.toList());
		return tk;
	}

}
