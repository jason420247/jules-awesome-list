package com.universal.base64;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class Base64UtilTest {

    @Test
    public void testEncodeDecode() {
        String originalString = "Hello, World!";
        String encodedString = Base64Util.encode(originalString);
        String decodedString = Base64Util.decode(encodedString);

        assertEquals("SGVsbG8sIFdvcmxkIQ==", encodedString);
        assertEquals(originalString, decodedString);
    }
}
