package com.potholeraja.potholeraja.util;

import java.time.LocalDateTime;

public class ErrorDTO {

	private String status;

	private LocalDateTime timestamp;

	private String error;

	private String message;

	public ErrorDTO() {
		super();
	}

	public ErrorDTO(String status, String error, String message) {
		super();
		this.status = status;
		this.error = error;
		this.message = message;
		this.timestamp = LocalDateTime.now();
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "ErrorDTO [status=" + status + ", timestamp=" + timestamp + ", error=" + error + ", message=" + message
				+ "]";
	}

}
