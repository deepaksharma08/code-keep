package com.deepakallcode.codesnippetmanager.services;

import com.deepakallcode.codesnippetmanager.models.SnippetAPIModel.SnippetAPIResponseDTO;
import com.deepakallcode.codesnippetmanager.models.SnippetResponseDTO;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class SnippetService {

    private final RestTemplate restTemplate;
    private final String apiKey = "AIzaSyAsC__l64bMX62gDGYvtpdUXQlFQ5wAYP0";
    private final ObjectMapper objectMapper;
    private static final String TITLE_INDENTIFIER = "TITLEOFTHISCODE=";
    private static final String DESCRIPTION_IDENTIFIER = "SNIPPETDESCRIPTION=";

    public SnippetService(RestTemplate restTemplate,
                          ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
    }

    public SnippetResponseDTO getSnippetDetailsFromChatGpt(String code) throws Exception {
        StringBuilder promptBuilder = new StringBuilder();
        promptBuilder.append("I will give you a code snippet in next line.")
                .append("Please give me a explanatory tile for this by ")
                .append("writing " + TITLE_INDENTIFIER +"the title you come up with")
                .append("Then after the period give brief description as "+ DESCRIPTION_IDENTIFIER +"the description you come up with on what this code does in 200 characters")
                .append("\n")
                .append(code);
        String url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey;


        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        Map<String, Object> requestBody = new HashMap<>();
        Map<String, Object> parts = new HashMap<>();
        parts.put("text", promptBuilder.toString());

        Map<String, Object> partsObj = new HashMap<>();
        partsObj.put("parts",parts);

        List<Map<String, Object>> contentParts = new ArrayList<>();
        contentParts.add(partsObj);

        requestBody.put("contents", contentParts);
        String body = "";
        try {
             body = objectMapper.writeValueAsString(requestBody);

        } catch (Exception e) {
            throw e;
        }

        HttpEntity<String> httpEntity = new HttpEntity<>(body, headers);
        ResponseEntity<String> responseEntity;
        SnippetResponseDTO responseDTO = new SnippetResponseDTO();
        String description;
        String title;
        try {
            if (!requestBody.isEmpty()) {
                responseEntity = restTemplate.exchange(url, HttpMethod.POST, httpEntity, String.class);
                SnippetAPIResponseDTO apiResponseDTO = objectMapper.readValue(responseEntity.getBody(), SnippetAPIResponseDTO.class);
                String text = apiResponseDTO.candidates.get(0).content.parts.get(0).text;
                description = text.substring(text.indexOf(DESCRIPTION_IDENTIFIER) + DESCRIPTION_IDENTIFIER.length());
                title = text.substring(text.indexOf(TITLE_INDENTIFIER) + TITLE_INDENTIFIER.length(), text.indexOf(DESCRIPTION_IDENTIFIER));
                responseDTO.setDescription(description);
                responseDTO.setTitle(title);
            } else {
                throw new Exception("The request body is empty");
            }
        } catch (Exception e) {
            throw e;
        }
        return responseDTO;
    }
}
