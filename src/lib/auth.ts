import bcrypt from 'bcryptjs';

/**
 * Hash de password usando bcryptjs
 * @param password - Password en texto plano
 * @returns Password hasheado
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}

/**
 * Verificar password contra hash
 * @param password - Password en texto plano
 * @param hash - Hash almacenado en BD
 * @returns true si coincide, false si no
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}
