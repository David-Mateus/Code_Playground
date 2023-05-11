package br.com.alura.linguagens.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LinguagemController {

   
    @Autowired
    private LinguagemRepository repositorio;

    @GetMapping("/linguagens")
    public List<Linguagem> obterLinguagem(){
        List<Linguagem>linguagens = repositorio.findAll();
        return linguagens;
    }
    

    @PostMapping("/linguagens")
    public Linguagem cadastrarLinguagem(@RequestBody Linguagem linguagem){
        Linguagem linguagemSalva = repositorio.save(linguagem);
        return linguagemSalva;
    }

    @PutMapping("/linguagens/{id}")
    public Linguagem atualizarLinguagem(@PathVariable String id, @RequestBody Linguagem linguagem){
        Optional<Linguagem> linguagemEncontrada = repositorio.findById(id);
        if(linguagemEncontrada.isPresent()){
            Linguagem linguagemAtualizada = linguagemEncontrada.get();
            linguagemAtualizada.setTitle(linguagem.getTitle());
            linguagemAtualizada.setImage(linguagem.getImage());
            linguagemAtualizada.setRanking(linguagem.getRanking());
            repositorio.save(linguagemAtualizada);
            return linguagemAtualizada;
        }
        return null;
    }

    @DeleteMapping("/linguagens/{id}")
    public void deletarLinguagem(@PathVariable String id){
        repositorio.deleteById(id);
    }
    
   
}
