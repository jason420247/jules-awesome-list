package com.universal.base64;

import java.util.Base64;

public class Base64Util {

    public static String encode(String inputString) {
        return Base64.getEncoder().encodeToString(inputString.getBytes());
    }

    public static String decode(String encodedString) {
        return new String(Base64.getDecoder().decode(encodedString));
    }
}
