class Validation
{
  constructor()
  {}

  static is_int(n)
  {
    return Number(n) === n && n % 1 === 0;
  }

  static is_float(n)
  {
    return Number(n) === n && n % 1 !== 0;
  }

  static is_number(n)
  {
    return this.is_int(n) || this.is_float(n);
  }

  static is_json(str)
  {
    try
    {
      JSON.parse(str);
    }
    catch (e)
    {
      return false;
    }

    return true;
  }
}

export { Validation };
