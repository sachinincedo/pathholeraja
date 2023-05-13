package com.potholeraja.potholeraja.home;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class HomeResponce {
	Long potholeIreport;
	Long totalPotholeReported;

	public HomeResponce() {
		super();
	}

	public HomeResponce(Long potholeIreport, Long totalPotholeReported) {
		super();
		this.potholeIreport = potholeIreport;
		this.totalPotholeReported = totalPotholeReported;
	}

	public Long getPotholeIreport() {
		return potholeIreport;
	}

	public void setPotholeIreport(Long potholeIreport) {
		this.potholeIreport = potholeIreport;
	}

	public Long getTotalPotholeReported() {
		return totalPotholeReported;
	}

	public void setTotalPotholeReported(Long totalPotholeReported) {
		this.totalPotholeReported = totalPotholeReported;
	}

	@Override
	public String toString() {
		return "HomeResponce [potholeIreport=" + potholeIreport + ", totalPotholeReported=" + totalPotholeReported
				+ "]";
	}

}
