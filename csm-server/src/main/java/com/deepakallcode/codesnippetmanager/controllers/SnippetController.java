package com.deepakallcode.codesnippetmanager.controllers;

import com.deepakallcode.codesnippetmanager.models.CodeSnippetDTO;
import com.deepakallcode.codesnippetmanager.models.SnippetResponseDTO;
import com.deepakallcode.codesnippetmanager.services.SnippetService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("v1/api/snippet")
public class SnippetController {

    private final SnippetService snippetService;

    SnippetController(SnippetService snippetService){
        this.snippetService = snippetService;
    }

    @PostMapping("getDetails")
    public ResponseEntity<SnippetResponseDTO> getSnippetDetails(@RequestBody CodeSnippetDTO codeSnippet) {
        ResponseEntity<SnippetResponseDTO> responseEntity = null;
        try {
            SnippetResponseDTO details =  snippetService.getSnippetDetailsFromChatGpt(codeSnippet.getCode());
            responseEntity = new ResponseEntity<>(details, HttpStatus.OK);
        } catch (Exception e) {
            responseEntity = new ResponseEntity<>(new SnippetResponseDTO(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return responseEntity;

    }
}
