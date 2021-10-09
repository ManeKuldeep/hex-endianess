# Endianess Formatting

# Install


```sh
$ npm i hex-endianess
```

# Usage

A simple function to change the sequence of bytes of hex value in given endianess.


**endianness_formatting APIs**

## _Format the hex string accroding to given endianess_

   Rearranges hexadecimal string based on endianness. 
   Returns a string.

   **Parameters**

   - hexString: hexadecimal string
   - endianness: order of hexadecimal digits needed in output.
   

   **_Example_**

   ```javascript

   const { formatEndianess } = require('hex-endianess');

   const hexString = "1326485b";
   /* hexString value can be of length 8 or 16 depending upon the hex data */

   const endianness = "Little Endian"; 
   /* 
    Possible endianess values are: 
    1. Mid-Little Endian
    2. Little Endian
    3. Mid-Big Endian
    4. Big Endian
   */

   const result = formatEndianess(hexString, endianness);

   console.log("result = ",result);
   ```

   **Output**

   result = 5b482613