package com.deepakallcode.codesnippetmanager.controllers;


import com.deepakallcode.codesnippetmanager.models.SnippetResponseDTO;
import com.deepakallcode.codesnippetmanager.services.SnippetService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("v1/api/snippet")
public class SnippetController extends BaseController {

    private final SnippetService snippetService;

    SnippetController(SnippetService snippetService) {
        this.snippetService = snippetService;
    }

    @PostMapping("saveSnippetDetails")
    public ResponseEntity<SnippetResponseDTO> saveSnippet(@RequestBody SnippetResponseDTO snippetResponseDTO) {
        ResponseEntity<SnippetResponseDTO> responseEntity = null;
        try {
            SnippetResponseDTO details = snippetService.saveSnippet(snippetResponseDTO);
            responseEntity = buildOk(details);
        } catch (Exception e) {
            responseEntity = new ResponseEntity<>(new SnippetResponseDTO(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @GetMapping("getAllSnippets/{userId}")
    public ResponseEntity<List<SnippetResponseDTO>> getAllSnippet(@PathVariable("userId") String userId) {
        ResponseEntity<List<SnippetResponseDTO>> response = null;

        try {
            List<SnippetResponseDTO> snippets = snippetService.getSnippets(userId);
            response = buildOk(snippets);
        } catch (Exception e) {
            response = new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return response;
    }

    @GetMapping("getSnippetsByType")
    public ResponseEntity<List<SnippetResponseDTO>> getSnippetsByType(@RequestParam("type") String type,
                                                                      @RequestParam("userId") String userId) {
        ResponseEntity<List<SnippetResponseDTO>> response = null;

        try {
            List<SnippetResponseDTO> snippets = snippetService.getSnippetsByType(type, userId);
            response = buildOk(snippets);
        } catch (Exception e) {
            response = new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return response;
    }

    @GetMapping("deleteSnippet/{id}")
    public ResponseEntity<String> deleteSnippetById(@PathVariable("id") String id) {
        ResponseEntity<String> response = null;

        try {
            String status = snippetService.deleteSnippetById(id);
            response = buildOk(status);
        } catch (Exception e) {
            response = new ResponseEntity<>("FAILED", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return response;
    }

    @PostMapping("editSnippet")
    public ResponseEntity<SnippetResponseDTO> editSnippet(@RequestBody SnippetResponseDTO editedSnippet) {
        ResponseEntity<SnippetResponseDTO> responseEntity;

        try {
            SnippetResponseDTO snippet = snippetService.editSnippet(editedSnippet);
            responseEntity = buildOk(snippet);
        } catch (Exception e) {
            responseEntity = buildError(e);
        }
        return responseEntity;
    }
}
