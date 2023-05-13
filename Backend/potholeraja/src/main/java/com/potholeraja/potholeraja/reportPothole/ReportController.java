package com.potholeraja.potholeraja.reportPothole;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/potholes")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @PostMapping("/report")
    public ResponseEntity<ReportResponce> report(@RequestBody ReportRequest reportRequest){
    	ReportResponce reportResponce = reportService.createTicket(reportRequest);
    	return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(reportResponce);
    }
    
}
