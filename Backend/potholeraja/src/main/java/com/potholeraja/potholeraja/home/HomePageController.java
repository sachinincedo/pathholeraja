package com.potholeraja.potholeraja.home;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class HomePageController {

	@Autowired
	HomePageService homePageService;
	
	@GetMapping("/home")
	public ResponseEntity<HomeResponce> homePage(@RequestParam Long userId){
		ResponseEntity<HomeResponce> homeResponce = homePageService.getHomePageDetails(userId);
		return homeResponce;
	}
}
