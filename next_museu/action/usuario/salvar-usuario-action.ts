import { UsuarioCreate, UsuarioResponse } from '../../schema/usuario-schemas';
import { UsuarioService } from '../../service/connection/UsuarioService';
import { ApiResponse } from '../../type/api';

export async function salvarUsuarioAction(
  prevState: ApiResponse<UsuarioResponse> | null,
  payload: {
    usuarioRequest: UsuarioCreate;
    url: string;
  },
): Promise<ApiResponse<UsuarioResponse>> {
  //const dict = await getServerDictionary(); // dicionário i18n
  if (!payload.url) {
    return {
      status: 400,
      mensagem: 'Erro de rotas do servidor.',
      erro: 'O servidor não informou o recurso necessário.',
      timestamp: new Date().toISOString(),
    };
  }

  try {
    const usuarioService = new UsuarioService(payload.url);
    const result = await usuarioService.salvar(payload.usuarioRequest);
    return result;
  } catch (error: any) {
    const apiError = error as ApiResponse<never> & { isNetWorkError?: boolean };

    return {
      status: apiError.status || 503,
      mensagem: apiError.mensagem || 'Erro interno no servidor.',
      erro: apiError.erro || 'Erro de comunicação com o servidor.',
      errors: apiError.errors || {},
      timestamp: new Date().toISOString(),
      isNetworkError: true,
    } as ApiResponse<UsuarioResponse> & { isNetWorkError?: boolean };
  }
}
