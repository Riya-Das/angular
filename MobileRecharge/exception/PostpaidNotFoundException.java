package com.app.MobileRecharge.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)

public class PostpaidNotFoundException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public PostpaidNotFoundException(String message) {
        super(message);
    }

}
