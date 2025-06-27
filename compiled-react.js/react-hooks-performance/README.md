# React Hooks

**useState - realiza a craição de um estado**
**useEffect - manipula os Ciclos de vida de um componente**

**Memo - salvar o valor de um component completo**
**useMemo - memorizar variaveis**
**useCallback - memorizar a declarção de um função**

---

## Algoritmo de Reconciliação

**Um Component após sofre uma mudança, não sera gerado novamente do zero. O react, ira gerar apenas a parte do código que realmente foi alterada!**

---

## Quando usar o Memo?

**1 - Pure Functional Components --> Todo o component, é baseado nas propriedades que são passadas para ele!**

**2 - Renders too often --> Quando o component renderiza muitas vezes**

**3 - Re-renders with same props --> Quando um component renderiza varias vezes e sempre com as mesmas propriedades**

**4 - Medium to big Components --> Components que são muito grandes ou medianos, com diversas funcionalidades, é aprezentando muitos conteúdos em tela**

---

## Quando usar o useMemo?

**1 - Evitar re-cálculos complexos**
**2 - Resolver o problema de igualdade refenrecial**

---

## Quando usar o useCallback?

**1 - Resolver o problema de igualdade refenrecial**
