package com.potholeraja.potholeraja.util;

public class RequestException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public RequestException(String message) {
		super(message);
	}

	public RequestException(String message, Throwable t) {
		super(message, t);
	}
}
