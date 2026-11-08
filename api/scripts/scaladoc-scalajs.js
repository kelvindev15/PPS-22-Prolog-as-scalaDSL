let dropdownHandler,filterFunction;
(function(){
'use strict';
var $p;
var $fileLevelThis = this;
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $Long(lo, hi) {
  this.l = lo;
  this.h = hi;
}
$p = $Long.prototype;
$p.toString = (function() {
  return $s_RTLong__toString__I__I__T(this.l, this.h);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.h() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.se();
      }
    }
  }
}
function $dp_codePointAt__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__codePointAt__I__I(instance, x0);
  } else {
    return instance.sa(x0);
  }
}
function $dp_compareTo__O__I(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__compareTo__O__I(instance, x0);
    }
    case "number": {
      return $f_jl_Double__compareTo__O__I(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__compareTo__O__I(instance, x0);
    }
    default: {
      if ((instance instanceof $Long)) {
        return $f_jl_Long__compareTo__O__I(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__compareTo__O__I(instance.c, x0);
      } else {
        return instance.nB(x0);
      }
    }
  }
}
function $dp_compareTo__T__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__compareTo__T__I(instance, x0);
  } else {
    return instance.sb(x0);
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.p(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.p.call(instance, x0);
      }
    }
  }
}
function $dp_getChars__I__I__AC__I__V(instance, x0, x1, x2, x3) {
  if (((typeof instance) === "string")) {
    return $f_T__getChars__I__I__AC__I__V(instance, x0, x1, x2, x3);
  } else {
    return instance.sd(x0, x1, x2, x3);
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.u();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.u.call(instance);
      }
    }
  }
}
function $dp_repeat__I__T(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__repeat__I__T(instance, x0);
  } else {
    return instance.sh(x0);
  }
}
function $dp_split__T__I__AT(instance, x0, x1) {
  if (((typeof instance) === "string")) {
    return $f_T__split__T__I__AT(instance, x0, x1);
  } else {
    return instance.si(x0, x1);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $dp_trim__T(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__trim__T(instance);
  } else {
    return instance.sj();
  }
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__J(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__I__I__O__D(arg0.l, arg0.h, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if (((arg0 !== arg2) || (((arg3 - arg1) >>> 0) > (arg4 >>> 0)))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $bL(arg0, arg1) {
  return new $Long(arg0, arg1);
}
var $bL0 = $bL(0, 0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $bL0 : arg0);
}
function $ct_O__($thiz) {
  return $thiz;
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.p = (function(that) {
  return (this === that);
});
$p.v = (function() {
  var i = this.u();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.v();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = null;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.s = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.h = (function() {
  return new $ac_O(this.a.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = false;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.s = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.h = (function() {
  return new $ac_Z(this.a.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Uint16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.s = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.h = (function() {
  return new $ac_C(this.a.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int8Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.s = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.h = (function() {
  return new $ac_B(this.a.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.s = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.h = (function() {
  return new $ac_S(this.a.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.s = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.h = (function() {
  return new $ac_I(this.a.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.s = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.h = (function() {
  return new $ac_J(this.a.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.s = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.h = (function() {
  return new $ac_F(this.a.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float64Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.s = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.h = (function() {
  return new $ac_D(this.a.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass, (arrayEncodedName === "J"));
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isLongArray, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    B: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (isLongArray ? ((array) => {
    var len = (array.length | 0);
    var result = new arrayClass(len);
    var u = result.a;
    for (var i = 0; (i < len); i = ((i + 1) | 0)) {
      var srcElem = array[i];
      u[(i << 1)] = srcElem.l;
      u[(((i << 1) + 1) | 0)] = srcElem.h;
    }
    return result;
  }) : (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array))));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.a = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.a[i] = null;
      }
    } else {
      this.a = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.s = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.h = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    B: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), false, ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p($bL0, "J", "long", $ac_J, Int32Array);
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
var $typedArraysAreBigEndian = (new Int8Array(new Int32Array([1]).buffer)[0] === 0);
function $constArrayBuffer_B(len, encoded) {
  var buf = new ArrayBuffer(len);
  var view = new DataView(buf);
  var regularChunksEnd = ((encoded.length - 4) | 0);
  var i = 0;
  var j = 0;
  var chunk = 0;
  while (true) {
    chunk = (((encoded.charCodeAt(i) | (encoded.charCodeAt(((i + 1) | 0)) << 8)) | (encoded.charCodeAt(((i + 2) | 0)) << 16)) | (encoded.charCodeAt(((i + 3) | 0)) << 24));
    chunk = ((((chunk - 808464432) | 0) - ((chunk & 1616928864) >>> 3)) | 0);
    chunk = (((chunk & 1056980736) >>> 2) | (chunk & 4128831));
    chunk = (((chunk & 268369920) >>> 4) | (chunk & 4095));
    if ((i === regularChunksEnd)) {
      break;
    }
    view.setUint32(j, chunk, true);
    i = ((i + 4) | 0);
    j = ((j + 3) | 0);
  }
  var trailing = ((len - j) | 0);
  view.setUint8(j, chunk);
  if ((trailing !== 1)) {
    view.setUint8(((j + 1) | 0), (chunk >>> 8));
    if ((trailing === 3)) {
      view.setUint8(((j + 2) | 0), (chunk >>> 16));
    }
  }
  return buf;
}
function $constArrayBuffer_S(len, encoded) {
  var buf = $constArrayBuffer_B((len << 1), encoded);
  if ($typedArraysAreBigEndian) {
    var view = new DataView(buf);
    var i = 0;
    while ((i !== len)) {
      view.putInt16(i, view.getInt16(i, true), false);
      i = ((i + 2) | 0);
    }
  }
  return buf;
}
function $constArrayBuffer_I(len, encoded) {
  var buf = $constArrayBuffer_B((len << 2), encoded);
  if ($typedArraysAreBigEndian) {
    var view = new DataView(buf);
    var i = 0;
    while ((i !== len)) {
      view.putInt32(i, view.getInt32(i, true), false);
      i = ((i + 4) | 0);
    }
  }
  return buf;
}
function $constArrayBuffer_J(len, encoded) {
  return $constArrayBuffer_I((len << 1), encoded);
}
function $constTypedArrayU_I(len, encoded, prevMask) {
  var buf = new Int32Array(len);
  var inLen = (encoded.length | 0);
  var prev = 0;
  var i = 0;
  var j = 0;
  var v = 0;
  while ((i !== inLen)) {
    var c = encoded.charCodeAt(i);
    if ((c < 80)) {
      v = ((v | (c - 48)) << 5);
    } else {
      v = (v | (c - 93));
      prev = (((prev & prevMask) + v) | 0);
      buf[j] = prev;
      j = ((j + 1) | 0);
      v = 0;
    }
    i = ((i + 1) | 0);
  }
  return buf;
}
function $constTypedArrayS_I(len, encoded, prevMask) {
  var buf = new Int32Array(len);
  var inLen = (encoded.length | 0);
  var prev = 0;
  var i = 0;
  var j = 0;
  var v = 0;
  var first = true;
  while ((i !== inLen)) {
    var c = encoded.charCodeAt(i);
    if ((c < 80)) {
      if (first) {
        v = (((c - 48) << 27) >> 22);
        first = false;
      } else {
        v = ((v | (c - 48)) << 5);
      }
    } else {
      if (first) {
        v = (((c - 93) << 27) >> 27);
      } else {
        v = (v | (c - 93));
        first = true;
      }
      prev = (((prev & prevMask) + v) | 0);
      buf[j] = prev;
      j = ((j + 1) | 0);
    }
    i = ((i + 1) | 0);
  }
  return buf;
}
function $constArrRaw_B(len, encoded) {
  return new $ac_B(new Int8Array($constArrayBuffer_B(len, encoded)));
}
function $constArrRaw_S(len, encoded) {
  return new $ac_S(new Int16Array($constArrayBuffer_S(len, encoded)));
}
function $constArrRaw_C(len, encoded) {
  return new $ac_C(new Uint16Array($constArrayBuffer_S(len, encoded)));
}
function $constArrRaw_I(len, encoded) {
  return new $ac_I(new Int32Array($constArrayBuffer_I(len, encoded)));
}
function $constArrRaw_J(len, encoded) {
  return new $ac_J(new Int32Array($constArrayBuffer_J(len, encoded)));
}
function $constArrUVals_I(len, encoded) {
  return new $ac_I($constTypedArrayU_I(len, encoded, 0));
}
function $constArrUDiffs_I(len, encoded) {
  return new $ac_I($constTypedArrayU_I(len, encoded, (-1)));
}
function $constArrSVals_I(len, encoded) {
  return new $ac_I($constTypedArrayS_I(len, encoded, 0));
}
function $constArrSDiffs_I(len, encoded) {
  return new $ac_I($constTypedArrayS_I(len, encoded, (-1)));
}
function $constArrUVals_J(len, encoded) {
  return new $ac_J($constTypedArrayU_I((len << 1), encoded, 0));
}
function $constArrUDiffs_J(len, encoded) {
  return new $ac_J($constTypedArrayU_I((len << 1), encoded, (-1)));
}
function $constArrSVals_J(len, encoded) {
  return new $ac_J($constTypedArrayS_I((len << 1), encoded, 0));
}
function $constArrSDiffs_J(len, encoded) {
  return new $ac_J($constTypedArrayS_I((len << 1), encoded, (-1)));
}
function $p_Ldotty_tools_scaladoc_CodeSnippets__getScastieConfiguration__sjs_js_Dynamic($thiz) {
  var s = scastieConfiguration;
  return ({
    "sbtConfig": s,
    "targetType": "scala3"
  });
}
function $p_Ldotty_tools_scaladoc_CodeSnippets__getButtonsSection__Lorg_scalajs_dom_HTMLElement__s_Option($thiz, snippet) {
  var x1 = snippet.querySelector("div.buttons");
  if ((!(!(x1 instanceof HTMLDivElement)))) {
    return new $c_s_Some(x1);
  }
  return $m_s_None$();
}
function $p_Ldotty_tools_scaladoc_CodeSnippets__handleHideableCode__Lorg_scalajs_dom_HTMLElement__V($thiz, snippet) {
  $p_Ldotty_tools_scaladoc_CodeSnippets__toggleHide$1__Lorg_scalajs_dom_ParentNode__V($thiz, snippet);
  var buttonsSection = $p_Ldotty_tools_scaladoc_CodeSnippets__getButtonsSection__Lorg_scalajs_dom_HTMLElement__s_Option($thiz, snippet);
  var hideables = snippet.querySelectorAll(".hideable");
  if (((hideables !== null) && (!$f_sc_SeqOps__isEmpty__Z(new $c_Lorg_scalajs_dom_DOMList$DOMListSeq(hideables))))) {
    var showHideButton = $p_Ldotty_tools_scaladoc_CodeSnippets__createShowHideButton$1__Lorg_scalajs_dom_HTMLElement__Lorg_scalajs_dom_HTMLDivElement($thiz, snippet);
    if ((!buttonsSection.g())) {
      var x0 = buttonsSection.R();
      x0.appendChild(showHideButton);
    }
  }
}
function $p_Ldotty_tools_scaladoc_CodeSnippets__snippetAnchor__Lorg_scalajs_dom_HTMLElement__V($thiz, snippet) {
  var x7 = snippet.querySelector(".snippet-meta .snippet-label");
  if ((!(!(x7 instanceof HTMLElement)))) {
    var name = $f_T__trim__T(x7.textContent);
    var $x_1 = $m_Ldotty_tools_scaladoc_utils_HTML$().dZ;
    var this$1 = $m_Ldotty_tools_scaladoc_utils_HTML$().es;
    var value = ("snippet-" + name);
    var anchor = $x_1.cm($ct_T2__O__O__(new $c_T2(), this$1.t, value), new $c_sjsr_WrappedVarArgs([]));
    snippet.insertBefore(anchor, snippet.firstChild);
    return (void 0);
  }
}
function $p_Ldotty_tools_scaladoc_CodeSnippets__handleImportedCode__Lorg_scalajs_dom_HTMLElement__V($thiz, snippet) {
  var included = snippet.querySelectorAll("code span.include");
  var pre = snippet.querySelector("pre");
  if ((((included !== null) && (!$f_sc_SeqOps__isEmpty__Z(new $c_Lorg_scalajs_dom_DOMList$DOMListSeq(included)))) && (pre !== null))) {
    var this$6 = $f_sc_IterableOps__collect__s_PartialFunction__O(new $c_Lorg_scalajs_dom_DOMList$DOMListSeq(included), new $c_Ldotty_tools_scaladoc_CodeSnippets$$anon$1()).c1();
    var f = ((_$4$2) => (!(!_$4$2.hasAttribute("name"))));
    _return: {
      var result;
      var l$tailLocal1 = this$6;
      while (true) {
        if (l$tailLocal1.g()) {
          var result = $m_sci_Nil$();
          break;
        } else {
          var h = l$tailLocal1.m();
          var t = l$tailLocal1.o();
          if ((!(!(!f(h))))) {
            l$tailLocal1 = t;
            continue;
          }
          var start = l$tailLocal1;
          var remaining$tailLocal1 = t;
          while (true) {
            if (remaining$tailLocal1.g()) {
              var result = start;
              break _return;
            } else {
              var x = remaining$tailLocal1.m();
              if ((!(!f(x)))) {
                remaining$tailLocal1 = remaining$tailLocal1.o();
                continue;
              }
              var firstMiss = remaining$tailLocal1;
              var newHead = new $c_sci_$colon$colon(start.m(), $m_sci_Nil$());
              var toProcess = start.o();
              var currentLast = newHead;
              while ((toProcess !== firstMiss)) {
                var newElem = new $c_sci_$colon$colon(toProcess.m(), $m_sci_Nil$());
                currentLast.M = newElem;
                currentLast = newElem;
                toProcess = toProcess.o();
              }
              var next = firstMiss.o();
              var nextToCopy = next;
              while ((!next.g())) {
                var head = next.m();
                if ((!(!f(head)))) {
                  next = next.o();
                } else {
                  while ((nextToCopy !== next)) {
                    var newElem$2 = new $c_sci_$colon$colon(nextToCopy.m(), $m_sci_Nil$());
                    currentLast.M = newElem$2;
                    currentLast = newElem$2;
                    nextToCopy = nextToCopy.o();
                  }
                  nextToCopy = next.o();
                  next = next.o();
                }
              }
              if ((!nextToCopy.g())) {
                currentLast.M = nextToCopy;
              }
              var result = newHead;
              break _return;
            }
          }
        }
      }
    }
    var f$1 = ((_$5$2) => _$5$2.getAttribute("name"));
    if ((result === $m_sci_Nil$())) {
      var $x_1 = $m_sci_Nil$();
    } else {
      var x0 = result.m();
      var h$1 = new $c_sci_$colon$colon(f$1(x0), $m_sci_Nil$());
      var t$1 = h$1;
      var rest = result.o();
      while ((rest !== $m_sci_Nil$())) {
        var x0$1 = rest.m();
        var nx = new $c_sci_$colon$colon(f$1(x0$1), $m_sci_Nil$());
        t$1.M = nx;
        t$1 = nx;
        rest = rest.o();
      }
      var $x_1 = h$1;
    }
    var this$23 = $f_sc_SeqOps__distinct__O($x_1);
    var f$2 = ((name$2) => {
      var $x_3 = $m_Ldotty_tools_scaladoc_utils_HTML$().dZ;
      var $x_2 = $ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "unselectable");
      var this$12 = $m_Ldotty_tools_scaladoc_utils_HTML$().fW;
      var value = ("#snippet-" + name$2);
      return $x_3.D(new $c_sjsr_WrappedVarArgs([$x_2, $ct_T2__O__O__(new $c_T2(), this$12.t, value)]), new $c_sjsr_WrappedVarArgs(["included", $m_Ldotty_tools_scaladoc_utils_HTML$().cf.a1(new $c_sjsr_WrappedVarArgs([name$2]))]));
    });
    if ((this$23 === $m_sci_Nil$())) {
      var $x_4 = $m_sci_Nil$();
    } else {
      var x0$3 = this$23.m();
      var h$2 = new $c_sci_$colon$colon(f$2(x0$3), $m_sci_Nil$());
      var t$2 = h$2;
      var rest$1 = this$23.o();
      while ((rest$1 !== $m_sci_Nil$())) {
        var x0$4 = rest$1.m();
        var nx$1 = new $c_sci_$colon$colon(f$2(x0$4), $m_sci_Nil$());
        t$2.M = nx$1;
        t$2 = nx$1;
        rest$1 = rest$1.o();
      }
      var $x_4 = h$2;
    }
    var includes = $x_4;
    var includesDiv = $m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "included-section hideable")]), new $c_sjsr_WrappedVarArgs([includes]));
    snippet.insertBefore(includesDiv, pre);
  }
}
function $p_Ldotty_tools_scaladoc_CodeSnippets__copyRunButtons__Lorg_scalajs_dom_HTMLElement__V($thiz, snippet) {
  var buttonsSection = $p_Ldotty_tools_scaladoc_CodeSnippets__getButtonsSection__Lorg_scalajs_dom_HTMLElement__s_Option($thiz, snippet);
  if ((!buttonsSection.g())) {
    var x0 = buttonsSection.R();
    x0.appendChild($p_Ldotty_tools_scaladoc_CodeSnippets__copyButton$1__Lorg_scalajs_dom_HTMLElement__Lorg_scalajs_dom_HTMLDivElement($thiz, snippet));
    if ((!(!snippet.hasAttribute("runnable")))) {
      x0.appendChild($p_Ldotty_tools_scaladoc_CodeSnippets__runButton$1__Lorg_scalajs_dom_HTMLElement__Lorg_scalajs_dom_HTMLDivElement($thiz, snippet));
    }
  }
}
function $p_Ldotty_tools_scaladoc_CodeSnippets__toggleHide$1__Lorg_scalajs_dom_ParentNode__V($thiz, e) {
  var this$2 = new $c_Lorg_scalajs_dom_DOMList$DOMListSeq(e.querySelectorAll(".hideable"));
  var it = this$2.c();
  while (it.i()) {
    var x0 = it.e();
    if ((!(!(x0 instanceof HTMLElement)))) {
      (!(!x0.classList.toggle("hidden")));
    }
  }
}
function $p_Ldotty_tools_scaladoc_CodeSnippets__createShowHideButton$1__Lorg_scalajs_dom_HTMLElement__Lorg_scalajs_dom_HTMLDivElement($thiz, toggleRoot) {
  return $m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "snippet-showhide-container")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_Ldotty_tools_scaladoc_utils_HTML$().lr.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "snippet-showhide-button")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_s_util_ChainingOps$().f3($m_Ldotty_tools_scaladoc_utils_HTML$().jf.cm(($m_Ldotty_tools_scaladoc_utils_HTML$(), $ct_T2__O__O__(new $c_T2(), "type", "checkbox")), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "snippet-showhide")])))), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$3) => {
    _$1$3.addEventListener("change", ((_$2$2) => {
      $p_Ldotty_tools_scaladoc_CodeSnippets__toggleHide$1__Lorg_scalajs_dom_ParentNode__V($thiz, toggleRoot);
    }));
  }))), $m_Ldotty_tools_scaladoc_utils_HTML$().b1.cm($ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "snippet-showhide-text"), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([]))))]))))]))));
}
function $p_Ldotty_tools_scaladoc_CodeSnippets__copyButton$1__Lorg_scalajs_dom_HTMLElement__Lorg_scalajs_dom_HTMLDivElement($thiz, snippet$1) {
  var $x_1 = $m_Ldotty_tools_scaladoc_utils_HTML$().ax;
  var a = $m_Ldotty_tools_scaladoc_utils_HTML$().hZ.cm($ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "copy-button icon-button"), new $c_sjsr_WrappedVarArgs([]));
  a.addEventListener("click", ((_$7$2) => {
    var code = $f_sc_IterableOnceOps__mkString__T__T__T__T($f_sc_IterableOps__map__F1__O(new $c_Lorg_scalajs_dom_DOMList$DOMListSeq(snippet$1.querySelectorAll("code>span:not(.hidden)")), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$8$2) => _$8$2.textContent))), "", "", "");
    return window.navigator.clipboard.writeText(code);
  }));
  return $x_1.a1(new $c_sjsr_WrappedVarArgs([a]));
}
function $p_Ldotty_tools_scaladoc_CodeSnippets__handler$lzyINIT1$1__sr_LazyRef__Lorg_scalajs_dom_HTMLDivElement__F1($thiz, handler$lzy1$1, popup$1) {
  return (handler$lzy1$1.iC ? handler$lzy1$1.iD : handler$lzy1$1.r1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((e$3) => {
    if ((e$3.fromPopup === (void 0))) {
      document.body.removeChild(popup$1);
      var \u03b41$ = document.body;
      \u03b41$.removeEventListener("click", $m_sjs_js_Any$().kH($p_Ldotty_tools_scaladoc_CodeSnippets__handler$1__sr_LazyRef__Lorg_scalajs_dom_HTMLDivElement__F1($thiz, handler$lzy1$1, popup$1)));
    }
  }))));
}
function $p_Ldotty_tools_scaladoc_CodeSnippets__handler$1__sr_LazyRef__Lorg_scalajs_dom_HTMLDivElement__F1($thiz, handler$lzy1$3, popup$3) {
  return (handler$lzy1$3.iC ? handler$lzy1$3.iD : $p_Ldotty_tools_scaladoc_CodeSnippets__handler$lzyINIT1$1__sr_LazyRef__Lorg_scalajs_dom_HTMLDivElement__F1($thiz, handler$lzy1$3, popup$3));
}
function $p_Ldotty_tools_scaladoc_CodeSnippets__runButton$1__Lorg_scalajs_dom_HTMLElement__Lorg_scalajs_dom_HTMLDivElement($thiz, snippet$4) {
  var runButton = $m_Ldotty_tools_scaladoc_utils_HTML$().hZ.D(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "run-button icon-button")]), new $c_sjsr_WrappedVarArgs([$m_Ldotty_tools_scaladoc_utils_HTML$().b1.a1(new $c_sjsr_WrappedVarArgs(["\u25b6"]))]));
  runButton.addEventListener("click", ((e$2) => {
    var handler$lzy1 = new $c_sr_LazyRef();
    var $x_2 = $m_Ldotty_tools_scaladoc_utils_HTML$().ax;
    var $x_1 = new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "snippet-popup")]);
    var a = $m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "snippet-popup-content body-small")]), new $c_sjsr_WrappedVarArgs([$m_Ldotty_tools_scaladoc_utils_HTML$().lt.a1(new $c_sjsr_WrappedVarArgs([$m_Ldotty_tools_scaladoc_utils_HTML$().lo.a1(new $c_sjsr_WrappedVarArgs([snippet$4.querySelector("pre").textContent]))]))]));
    a.addEventListener("click", ((e$2$1) => {
      e$2$1.fromPopup = true;
    }));
    var popup = $x_2.D($x_1, new $c_sjsr_WrappedVarArgs([a]));
    document.body.appendChild(popup);
    var \u03b42$ = document.body;
    \u03b42$.addEventListener("click", $m_sjs_js_Any$().kH($p_Ldotty_tools_scaladoc_CodeSnippets__handler$1__sr_LazyRef__Lorg_scalajs_dom_HTMLDivElement__F1($thiz, handler$lzy1, popup)));
    scastie.Embedded(popup.querySelector("pre"), $thiz.rM());
    popup.querySelector("li.btn.run-button").click();
    e$2.stopPropagation();
  }));
  return $m_Ldotty_tools_scaladoc_utils_HTML$().ax.a1(new $c_sjsr_WrappedVarArgs([runButton]));
}
/** @constructor */
function $c_Ldotty_tools_scaladoc_CodeSnippets() {
  this.l6 = null;
  this.l7 = false;
  window.addEventListener("dynamicPageLoad", ((e$2) => {
    this.qn();
  }));
}
$p = $c_Ldotty_tools_scaladoc_CodeSnippets.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_CodeSnippets;
/** @constructor */
function $h_Ldotty_tools_scaladoc_CodeSnippets() {
}
$h_Ldotty_tools_scaladoc_CodeSnippets.prototype = $p;
$p.rM = (function() {
  if ((!this.l7)) {
    this.l6 = $p_Ldotty_tools_scaladoc_CodeSnippets__getScastieConfiguration__sjs_js_Dynamic(this);
    this.l7 = true;
  }
  return this.l6;
});
$p.qn = (function() {
  var this$2 = new $c_Lorg_scalajs_dom_DOMList$DOMListSeq(document.querySelectorAll("div.snippet[scala-snippet]"));
  var it = this$2.c();
  while (it.i()) {
    var x0 = it.e();
    matchResult2: {
      if ((!(!(x0 instanceof HTMLElement)))) {
        x0.addEventListener("click", ((e$2) => {
          e$2.fromSnippet = true;
        }));
        $p_Ldotty_tools_scaladoc_CodeSnippets__snippetAnchor__Lorg_scalajs_dom_HTMLElement__V(this, x0);
        $p_Ldotty_tools_scaladoc_CodeSnippets__handleHideableCode__Lorg_scalajs_dom_HTMLElement__V(this, x0);
        $p_Ldotty_tools_scaladoc_CodeSnippets__handleImportedCode__Lorg_scalajs_dom_HTMLElement__V(this, x0);
        $p_Ldotty_tools_scaladoc_CodeSnippets__copyRunButtons__Lorg_scalajs_dom_HTMLElement__V(this, x0);
        break matchResult2;
      }
      throw new $c_s_MatchError(x0);
    }
  }
});
var $d_Ldotty_tools_scaladoc_CodeSnippets = new $TypeData().i($c_Ldotty_tools_scaladoc_CodeSnippets, "dotty.tools.scaladoc.CodeSnippets", ({
  d2: 1
}));
function $p_Ldotty_tools_scaladoc_DropdownHandler__addVersionsList__T__V($thiz, json) {
  var ver = JSON.parse(json);
  var ddc = document.getElementById("version-dropdown");
  var currentUrl = window.location.href;
  var this$3 = new $c_sc_MapOps$$anon$2(new $c_sjs_js_WrappedDictionary(ver.versions));
  _return: {
    while (this$3.ij.i()) {
      var a = this$3.e();
      if ((!(!currentUrl.startsWith(a)))) {
        var versionPrefix = new $c_s_Some(a);
        break _return;
      }
    }
    var versionPrefix = $m_s_None$();
  }
  if (versionPrefix.g()) {
    var this$8 = $m_s_None$();
  } else {
    var x0 = versionPrefix.R();
    var beginIndex = x0.length;
    var this$8 = new $c_s_Some(currentUrl.substring(beginIndex));
  }
  var urlSuffix = (this$8.g() ? "" : this$8.R());
  var dict$1 = ver.versions;
  var it = new $c_sjs_js_WrappedDictionary$DictionaryIterator(dict$1);
  while (it.i()) {
    var x0$1 = it.gw();
    matchResult3: {
      if ((x0$1 !== null)) {
        var k = x0$1.aa();
        var versionUrl = x0$1.ab();
        var child = $m_Ldotty_tools_scaladoc_utils_HTML$().dZ.D(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "text-button"), $ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().fW.t, versionUrl)]), new $c_sjsr_WrappedVarArgs([k]));
        child.addEventListener("click", ((versionUrl, urlSuffix) => ((e$2) => {
          e$2.preventDefault();
          var fullUrl = (("" + versionUrl) + urlSuffix);
          var req = $m_sjs_js_Thenable$ThenableOps$().oF(fetch(fullUrl, (() => {
            var this$2$1 = ({});
            this$2$1.method = "HEAD";
            return this$2$1;
          })())).hJ(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => ((_$1$2.status | 0) === 200))), $m_s_concurrent_ExecutionContext$().em()).oi(new $c_Ldotty_tools_scaladoc_DropdownHandler$$anon$2(), $m_s_concurrent_ExecutionContext$().em());
          var timeoutPromise = $ct_s_concurrent_impl_Promise$DefaultPromise__(new $c_s_concurrent_impl_Promise$DefaultPromise());
          window.setTimeout((() => $f_s_concurrent_Promise__success__O__s_concurrent_Promise(timeoutPromise, (void 0))), 100.0);
          $m_s_concurrent_Future$().qB(new $c_sci_$colon$colon(req, new $c_sci_$colon$colon(timeoutPromise.hJ(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => false)), $m_s_concurrent_ExecutionContext$().em()), $m_sci_Nil$())), $m_s_concurrent_ExecutionContext$().em()).nX(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
            var linkIsAlive = (!(!v1$2));
            window.location.href = (linkIsAlive ? fullUrl : versionUrl);
          })), $m_s_concurrent_ExecutionContext$().em());
        }))(versionUrl, urlSuffix));
        ddc.appendChild(child);
        break matchResult3;
      }
      throw new $c_s_MatchError(x0$1);
    }
  }
}
function $p_Ldotty_tools_scaladoc_DropdownHandler__disableButton__V($thiz) {
  var btn = document.getElementById("dropdown-trigger");
  btn.classList.add("disabled");
  btn.classList.add("hidden");
}
function $p_Ldotty_tools_scaladoc_DropdownHandler__getURLContent__T__s_concurrent_Future($thiz, url) {
  return $m_sjs_js_Thenable$Implicits$().oE(fetch(url)).nW(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$3$2) => $m_sjs_js_Thenable$Implicits$().oE(_$3$2.text()))), $m_s_concurrent_ExecutionContext$().em());
}
/** @constructor */
function $c_Ldotty_tools_scaladoc_DropdownHandler() {
  this.gC = null;
  this.hU = null;
  this.gC = "versions-json";
  this.hU = "undefined_versions";
  matchResult7: {
    var x14 = window.sessionStorage.getItem(this.gC);
    if ((x14 === null)) {
      if (((typeof versionsDictionaryUrl) === "undefined")) {
        window.sessionStorage.setItem(this.gC, this.hU);
        $p_Ldotty_tools_scaladoc_DropdownHandler__disableButton__V(this);
      } else {
        $p_Ldotty_tools_scaladoc_DropdownHandler__getURLContent__T__s_concurrent_Future(this, versionsDictionaryUrl).j0(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3) => {
          matchResult4: {
            if ((x$1$3 instanceof $c_s_util_Success)) {
              var x10 = x$1$3.fx;
              if ((x10 !== null)) {
                window.sessionStorage.setItem(this.gC, x10);
                $p_Ldotty_tools_scaladoc_DropdownHandler__addVersionsList__T__V(this, x10);
                break matchResult4;
              }
            }
            if ((x$1$3 instanceof $c_s_util_Failure)) {
              window.sessionStorage.setItem(this.gC, this.hU);
              $p_Ldotty_tools_scaladoc_DropdownHandler__disableButton__V(this);
              break matchResult4;
            }
            throw new $c_s_MatchError(x$1$3);
          }
        })), $m_s_concurrent_ExecutionContext$().em());
      }
      break matchResult7;
    }
    if ((this.hU === x14)) {
      $p_Ldotty_tools_scaladoc_DropdownHandler__disableButton__V(this);
    } else {
      $p_Ldotty_tools_scaladoc_DropdownHandler__addVersionsList__T__V(this, x14);
    }
  }
  document.addEventListener("click", ((e$2) => {
    document.getElementById("version-dropdown").classList.remove("expanded");
    document.getElementById("dropdown-trigger").classList.remove("selected");
  }));
  var \u03b41$ = document.getElementById("version-dropdown");
  \u03b41$.addEventListener("click", ((e$2$1) => {
    e$2$1.stopPropagation();
  }));
}
$p = $c_Ldotty_tools_scaladoc_DropdownHandler.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_DropdownHandler;
/** @constructor */
function $h_Ldotty_tools_scaladoc_DropdownHandler() {
}
$h_Ldotty_tools_scaladoc_DropdownHandler.prototype = $p;
var $d_Ldotty_tools_scaladoc_DropdownHandler = new $TypeData().i($c_Ldotty_tools_scaladoc_DropdownHandler, "dotty.tools.scaladoc.DropdownHandler", ({
  d4: 1
}));
/** @constructor */
function $c_Ldotty_tools_scaladoc_DropdownHandler$package$() {
}
$p = $c_Ldotty_tools_scaladoc_DropdownHandler$package$.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_DropdownHandler$package$;
/** @constructor */
function $h_Ldotty_tools_scaladoc_DropdownHandler$package$() {
}
$h_Ldotty_tools_scaladoc_DropdownHandler$package$.prototype = $p;
$p.ql = (function(e) {
  e.stopPropagation();
  if (((new $c_Lorg_scalajs_dom_DOMList$DOMListSeq(document.getElementById("version-dropdown").getElementsByTagName("a")).l() > 0) && ($dp_toString__T(window.getSelection()).length === 0))) {
    document.getElementById("version-dropdown").classList.toggle("expanded");
    document.getElementById("dropdown-trigger").classList.toggle("selected");
  }
});
$p.qx = (function() {
  var input = document.getElementById("dropdown-input");
  var this$1 = input.value;
  var filter = this$1.toUpperCase();
  var div = document.getElementById("version-dropdown");
  var as = div.getElementsByTagName("a");
  var this$3 = new $c_Lorg_scalajs_dom_DOMList$DOMListSeq(as);
  var it = this$3.c();
  while (it.i()) {
    var x0 = it.e();
    var txtValue = x0.innerText;
    var cl = x0.classList;
    var this$4 = txtValue.toUpperCase();
    if (((this$4.indexOf(filter) | 0) > (-1))) {
      cl.remove("filtered");
    } else {
      cl.add("filtered");
    }
  }
});
var $d_Ldotty_tools_scaladoc_DropdownHandler$package$ = new $TypeData().i($c_Ldotty_tools_scaladoc_DropdownHandler$package$, "dotty.tools.scaladoc.DropdownHandler$package$", ({
  d6: 1
}));
var $n_Ldotty_tools_scaladoc_DropdownHandler$package$;
function $m_Ldotty_tools_scaladoc_DropdownHandler$package$() {
  if ((!$n_Ldotty_tools_scaladoc_DropdownHandler$package$)) {
    $n_Ldotty_tools_scaladoc_DropdownHandler$package$ = new $c_Ldotty_tools_scaladoc_DropdownHandler$package$();
  }
  return $n_Ldotty_tools_scaladoc_DropdownHandler$package$;
}
/** @constructor */
function $c_Ldotty_tools_scaladoc_InkuireJSSearchEngine() {
  this.l8 = null;
  this.hV = null;
  this.l8 = (pathToRoot + "scripts/");
  this.hV = new Worker((this.l8 + "inkuire-worker.js"));
}
$p = $c_Ldotty_tools_scaladoc_InkuireJSSearchEngine.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_InkuireJSSearchEngine;
/** @constructor */
function $h_Ldotty_tools_scaladoc_InkuireJSSearchEngine() {
}
$h_Ldotty_tools_scaladoc_InkuireJSSearchEngine.prototype = $p;
$p.qm = (function(d) {
  return new $c_Ldotty_tools_scaladoc_InkuireMatch(d.prettifiedSignature, d.functionName, d.packageLocation, d.pageLocation, d.entryType, (d.mq | 0));
});
$p.rx = (function(s, callback, endCallback) {
  this.hV.onmessage = ((_$1$2) => (void 0));
  var func = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((msg$3) => {
    matchResult1: {
      var x1 = msg$3.data;
      if ((x1 === "engine_ready")) {
        break matchResult1;
      }
      if ((x1 === "new_query")) {
        break matchResult1;
      }
      if ((!(!x1.startsWith("query_ended")))) {
        endCallback.d($m_sc_StringOps$().nN(x1, 11));
        break matchResult1;
      }
      var matches = JSON.parse(x1).matches;
      var len = (matches.length | 0);
      var res = new Array(len);
      var i = 0;
      while ((i < len)) {
        res[i] = this.qm(matches[i]);
        i = ((1 + i) | 0);
      }
      $m_sjs_js_ArrayOps$().qD(res, callback);
    }
  }));
  this.hV.onmessage = $m_sjs_js_Any$().kH(func);
  this.hV.postMessage(s);
});
var $d_Ldotty_tools_scaladoc_InkuireJSSearchEngine = new $TypeData().i($c_Ldotty_tools_scaladoc_InkuireJSSearchEngine, "dotty.tools.scaladoc.InkuireJSSearchEngine", ({
  d7: 1
}));
function $s_Ldotty_tools_scaladoc_Main__main__AT__V(args) {
  try {
    $m_Ldotty_tools_scaladoc_Main$package$().pm();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().rP(e);
    } else {
      throw e;
    }
  }
}
/** @constructor */
function $c_Ldotty_tools_scaladoc_Main$package$() {
}
$p = $c_Ldotty_tools_scaladoc_Main$package$.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_Main$package$;
/** @constructor */
function $h_Ldotty_tools_scaladoc_Main$package$() {
}
$h_Ldotty_tools_scaladoc_Main$package$.prototype = $p;
$p.pm = (function() {
  new $c_Ldotty_tools_scaladoc_Searchbar();
  new $c_Ldotty_tools_scaladoc_DropdownHandler();
  new $c_Ldotty_tools_scaladoc_TooltipNormalizer();
  return new $c_Ldotty_tools_scaladoc_CodeSnippets();
});
var $d_Ldotty_tools_scaladoc_Main$package$ = new $TypeData().i($c_Ldotty_tools_scaladoc_Main$package$, "dotty.tools.scaladoc.Main$package$", ({
  d8: 1
}));
var $n_Ldotty_tools_scaladoc_Main$package$;
function $m_Ldotty_tools_scaladoc_Main$package$() {
  if ((!$n_Ldotty_tools_scaladoc_Main$package$)) {
    $n_Ldotty_tools_scaladoc_Main$package$ = new $c_Ldotty_tools_scaladoc_Main$package$();
  }
  return $n_Ldotty_tools_scaladoc_Main$package$;
}
function $p_Ldotty_tools_scaladoc_PageSearchEngine__kindScoreBonus__T__I($thiz, kind) {
  switch (kind) {
    case "class": {
      return 5;
      break;
    }
    case "object":
    case "enum": {
      return 4;
      break;
    }
    case "trait": {
      return 3;
      break;
    }
    case "def":
    case "val":
    case "given":
    case "type": {
      return 1;
      break;
    }
    default: {
      return 0;
    }
  }
}
function $p_Ldotty_tools_scaladoc_PageSearchEngine__matchCompletnessBonus__I__I__I($thiz, nameCharacters, matchCharacters) {
  return ((((Math.imul(6, matchCharacters) / $checkIntDivisor(nameCharacters)) | 0) + ((nameCharacters === matchCharacters) ? 2 : 0)) | 0);
}
function $p_Ldotty_tools_scaladoc_PageSearchEngine__matchPages__Ldotty_tools_scaladoc_NameAndKindQuery__sci_List($thiz, query) {
  if ((query !== null)) {
    var x29 = query.gF;
    var x30 = query.gE;
    if (($m_s_None$() === x29)) {
      if (($m_s_None$() === x30)) {
        $m_sci_List$();
        return $m_sci_Nil$();
      }
      if ((x30 instanceof $c_s_Some)) {
        var kind = x30.c2;
        var this$6 = $p_Ldotty_tools_scaladoc_PageSearchEngine__filterKind__sci_List__T__sci_List($thiz, $thiz.fU, kind);
        var f = ((_$2$2) => new $c_Ldotty_tools_scaladoc_MatchResult(1, _$2$2, $m_sci_Set$EmptySet$()));
        if ((this$6 === $m_sci_Nil$())) {
          var $x_1 = $m_sci_Nil$();
        } else {
          var x0 = this$6.m();
          var h = new $c_sci_$colon$colon(f(x0), $m_sci_Nil$());
          var t = h;
          var rest = this$6.o();
          while ((rest !== $m_sci_Nil$())) {
            var x0$1 = rest.m();
            var nx = new $c_sci_$colon$colon(f(x0$1), $m_sci_Nil$());
            t.M = nx;
            t = nx;
            rest = rest.o();
          }
          var $x_1 = h;
        }
        return $x_1;
      }
    }
    if ((x29 instanceof $c_s_Some)) {
      var x22 = x29.c2;
      if ((x22 === "")) {
        if (x30.g()) {
          var $x_2 = $thiz.fU;
        } else {
          var x0$2 = x30.R();
          var $x_2 = $p_Ldotty_tools_scaladoc_PageSearchEngine__filterKind__sci_List__T__sci_List($thiz, $thiz.fU, x0$2);
        }
        var this$10 = $x_2;
        var f$1 = ((_$4$2) => new $c_Ldotty_tools_scaladoc_MatchResult(1, _$4$2, $m_sci_Set$EmptySet$()));
        if ((this$10 === $m_sci_Nil$())) {
          var $x_3 = $m_sci_Nil$();
        } else {
          var x0$3 = this$10.m();
          var h$1 = new $c_sci_$colon$colon(f$1(x0$3), $m_sci_Nil$());
          var t$1 = h$1;
          var rest$1 = this$10.o();
          while ((rest$1 !== $m_sci_Nil$())) {
            var x0$4 = rest$1.m();
            var nx$1 = new $c_sci_$colon$colon(f$1(x0$4), $m_sci_Nil$());
            t$1.M = nx$1;
            t$1 = nx$1;
            rest$1 = rest$1.o();
          }
          var $x_3 = h$1;
        }
        return $x_3;
      }
      if (x30.g()) {
        var kindFiltered = $thiz.fU;
      } else {
        var x0$5 = x30.R();
        var kindFiltered = $p_Ldotty_tools_scaladoc_PageSearchEngine__filterKind__sci_List__T__sci_List($thiz, $thiz.fU, x0$5);
      }
      var prematchedPages = $thiz.rt(kindFiltered, x22);
      if ((x22.length > 1)) {
        var f$2 = ((prematched$2) => {
          var finalMatch = $p_Ldotty_tools_scaladoc_PageSearchEngine__matchPage__Ldotty_tools_scaladoc_MatchResult__T__Ldotty_tools_scaladoc_MatchResult($thiz, prematched$2, x22);
          var bonusScore = (($p_Ldotty_tools_scaladoc_PageSearchEngine__kindScoreBonus__T__I($thiz, prematched$2.bV.dx) + $p_Ldotty_tools_scaladoc_PageSearchEngine__matchCompletnessBonus__I__I__I($thiz, prematched$2.bV.er.length, x22.length)) | 0);
          return new $c_Ldotty_tools_scaladoc_MatchResult(((finalMatch.cK + bonusScore) | 0), finalMatch.bV, finalMatch.dw);
        });
        if ((prematchedPages === $m_sci_Nil$())) {
          var $x_4 = $m_sci_Nil$();
        } else {
          var x0$6 = prematchedPages.m();
          var h$2 = new $c_sci_$colon$colon(f$2(x0$6), $m_sci_Nil$());
          var t$2 = h$2;
          var rest$2 = prematchedPages.o();
          while ((rest$2 !== $m_sci_Nil$())) {
            var x0$7 = rest$2.m();
            var nx$2 = new $c_sci_$colon$colon(f$2(x0$7), $m_sci_Nil$());
            t$2.M = nx$2;
            t$2 = nx$2;
            rest$2 = rest$2.o();
          }
          var $x_4 = h$2;
        }
        return $x_4;
      } else {
        return prematchedPages;
      }
    }
  }
  throw new $c_s_MatchError(query);
}
function $p_Ldotty_tools_scaladoc_PageSearchEngine__filterKind__sci_List__T__sci_List($thiz, pages, kind) {
  var f = ((_$6$2) => (_$6$2.dx === kind));
  var l$tailLocal1 = pages;
  while (true) {
    if (l$tailLocal1.g()) {
      return $m_sci_Nil$();
    } else {
      var h = l$tailLocal1.m();
      var t = l$tailLocal1.o();
      if ((!(!(!f(h))))) {
        l$tailLocal1 = t;
        continue;
      }
      var start = l$tailLocal1;
      var remaining$tailLocal1 = t;
      while (true) {
        if (remaining$tailLocal1.g()) {
          return start;
        } else {
          var x = remaining$tailLocal1.m();
          if ((!(!f(x)))) {
            remaining$tailLocal1 = remaining$tailLocal1.o();
            continue;
          }
          var firstMiss = remaining$tailLocal1;
          var newHead = new $c_sci_$colon$colon(start.m(), $m_sci_Nil$());
          var toProcess = start.o();
          var currentLast = newHead;
          while ((toProcess !== firstMiss)) {
            var newElem = new $c_sci_$colon$colon(toProcess.m(), $m_sci_Nil$());
            currentLast.M = newElem;
            currentLast = newElem;
            toProcess = toProcess.o();
          }
          var next = firstMiss.o();
          var nextToCopy = next;
          while ((!next.g())) {
            var head = next.m();
            if ((!(!f(head)))) {
              next = next.o();
            } else {
              while ((nextToCopy !== next)) {
                var newElem$2 = new $c_sci_$colon$colon(nextToCopy.m(), $m_sci_Nil$());
                currentLast.M = newElem$2;
                currentLast = newElem$2;
                nextToCopy = nextToCopy.o();
              }
              nextToCopy = next.o();
              next = next.o();
            }
          }
          if ((!nextToCopy.g())) {
            currentLast.M = nextToCopy;
          }
          return newHead;
        }
      }
    }
  }
}
function $p_Ldotty_tools_scaladoc_PageSearchEngine__prematchPage__Ldotty_tools_scaladoc_PageEntry__T__Ldotty_tools_scaladoc_MatchResult($thiz, page, search) {
  var pageName = page.er;
  var result = $p_Ldotty_tools_scaladoc_PageSearchEngine__prematchPageAcc$1__T__Ldotty_tools_scaladoc_PageEntry__T__I__I__sci_Set__I__I__Ldotty_tools_scaladoc_MatchResult($thiz, search, page, pageName, 0, 0, $m_sci_Set$EmptySet$(), 0, 0);
  return new $c_Ldotty_tools_scaladoc_MatchResult(((result.cK + $p_Ldotty_tools_scaladoc_PageSearchEngine__kindScoreBonus__T__I($thiz, page.dx)) | 0), result.bV, result.dw);
}
function $p_Ldotty_tools_scaladoc_PageSearchEngine__matchPage__Ldotty_tools_scaladoc_MatchResult__T__Ldotty_tools_scaladoc_MatchResult($thiz, prematched, nameSearch) {
  var this$4 = $m_Ldotty_tools_scaladoc_StringUtils$().kr(nameSearch);
  var f = ((_$9$2) => {
    var this$2 = $m_s_Predef$().l5(_$9$2);
    $m_sci_List$();
    return $m_sci_Nil$().cd(this$2);
  });
  if ((this$4 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0 = this$4.m();
    var h = new $c_sci_$colon$colon(f(x0), $m_sci_Nil$());
    var t = h;
    var rest = this$4.o();
    while ((rest !== $m_sci_Nil$())) {
      var x0$1 = rest.m();
      var nx = new $c_sci_$colon$colon(f(x0$1), $m_sci_Nil$());
      t.M = nx;
      t = nx;
      rest = rest.o();
    }
    var $x_1 = h;
  }
  var searchTokens = $x_1;
  var this$8 = prematched.bV.fT;
  var f$1 = ((_$10$2) => {
    var this$6 = $m_s_Predef$().l5(_$10$2);
    $m_sci_List$();
    return $m_sci_Nil$().cd(this$6);
  });
  if ((this$8 === $m_sci_Nil$())) {
    var $x_2 = $m_sci_Nil$();
  } else {
    var x0$2 = this$8.m();
    var h$1 = new $c_sci_$colon$colon(f$1(x0$2), $m_sci_Nil$());
    var t$1 = h$1;
    var rest$1 = this$8.o();
    while ((rest$1 !== $m_sci_Nil$())) {
      var x0$3 = rest$1.m();
      var nx$1 = new $c_sci_$colon$colon(f$1(x0$3), $m_sci_Nil$());
      t$1.M = nx$1;
      t$1 = nx$1;
      rest$1 = rest$1.o();
    }
    var $x_2 = h$1;
  }
  var pageTokens = $x_2;
  var pageName = prematched.bV.er;
  var searchTokensLifted = new $c_s_PartialFunction$Lifted(searchTokens);
  var pageTokensLifted = new $c_s_PartialFunction$Lifted(pageTokens);
  var matchedTokens = $p_Ldotty_tools_scaladoc_PageSearchEngine__matchTokens$1__F1__F1__I__I__sci_Set__sci_Set($thiz, searchTokensLifted, pageTokensLifted, 0, 0, $m_sci_Set$EmptySet$());
  var f$2 = ((_$13$2) => _$13$2.l());
  if ((searchTokens === $m_sci_Nil$())) {
    var $x_3 = $m_sci_Nil$();
  } else {
    var x0$4 = searchTokens.m();
    var h$2 = new $c_sci_$colon$colon(f$2(x0$4), $m_sci_Nil$());
    var t$2 = h$2;
    var rest$2 = searchTokens.o();
    while ((rest$2 !== $m_sci_Nil$())) {
      var x0$5 = rest$2.m();
      var nx$2 = new $c_sci_$colon$colon(f$2(x0$5), $m_sci_Nil$());
      t$2.M = nx$2;
      t$2 = nx$2;
      rest$2 = rest$2.o();
    }
    var $x_3 = h$2;
  }
  var this$11 = $x_3;
  $m_sci_List$();
  var b = new $c_scm_ListBuffer();
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(b, this$11, 0);
  var acc = 0;
  b.gn(acc);
  var it = this$11.c();
  while (it.i()) {
    var x0$6 = acc;
    var x1 = it.e();
    acc = (((x0$6 | 0) + (x1 | 0)) | 0);
    b.gn(acc);
  }
  var searchTokenPositions = b.c1();
  var f$3 = ((_$16$2) => _$16$2.l());
  if ((pageTokens === $m_sci_Nil$())) {
    var $x_4 = $m_sci_Nil$();
  } else {
    var x0$7 = pageTokens.m();
    var h$3 = new $c_sci_$colon$colon(f$3(x0$7), $m_sci_Nil$());
    var t$3 = h$3;
    var rest$3 = pageTokens.o();
    while ((rest$3 !== $m_sci_Nil$())) {
      var x0$8 = rest$3.m();
      var nx$3 = new $c_sci_$colon$colon(f$3(x0$8), $m_sci_Nil$());
      t$3.M = nx$3;
      t$3 = nx$3;
      rest$3 = rest$3.o();
    }
    var $x_4 = h$3;
  }
  var this$14 = $x_4;
  $m_sci_List$();
  var b$1 = new $c_scm_ListBuffer();
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(b$1, this$14, 0);
  var acc$1 = 0;
  b$1.gn(acc$1);
  var it$1 = this$14.c();
  while (it$1.i()) {
    var x0$9 = acc$1;
    var x1$1 = it$1.e();
    acc$1 = (((x0$9 | 0) + (x1$1 | 0)) | 0);
    b$1.gn(acc$1);
  }
  var pageTokensPositions = b$1.c1();
  var highScoreMatch = $p_Ldotty_tools_scaladoc_PageSearchEngine__findHighScoreMatch$1__T__Ldotty_tools_scaladoc_MatchResult__T__sci_List__sci_Set__sci_List__I__I__I__I__sci_Set__I__I__s_Option($thiz, nameSearch, prematched, pageName, searchTokenPositions, matchedTokens, pageTokensPositions, 0, 0, 0, 0, $m_sci_Set$EmptySet$(), 0, 0);
  return (highScoreMatch.g() ? prematched : highScoreMatch.R());
}
function $p_Ldotty_tools_scaladoc_PageSearchEngine__prematchPageAcc$1__T__Ldotty_tools_scaladoc_PageEntry__T__I__I__sci_Set__I__I__Ldotty_tools_scaladoc_MatchResult($thiz, search$2, page$1, pageName$1, nameIndex, searchIndex, acc, scoreAcc, consecutiveMatches) {
  var consecutiveMatches$tailLocal1 = consecutiveMatches;
  var scoreAcc$tailLocal1 = scoreAcc;
  var acc$tailLocal1 = acc;
  var searchIndex$tailLocal1 = searchIndex;
  var nameIndex$tailLocal1 = nameIndex;
  while (true) {
    if ((searchIndex$tailLocal1 >= search$2.length)) {
      return new $c_Ldotty_tools_scaladoc_MatchResult(scoreAcc$tailLocal1, page$1, acc$tailLocal1);
    } else if ((nameIndex$tailLocal1 >= pageName$1.length)) {
      return new $c_Ldotty_tools_scaladoc_MatchResult(0, page$1, $m_sci_Set$EmptySet$());
    } else if ((($m_sc_StringOps$(), $m_jl_Character$().j8(pageName$1.charCodeAt(nameIndex$tailLocal1))) === ($m_sc_StringOps$(), $m_jl_Character$().j8(search$2.charCodeAt(searchIndex$tailLocal1))))) {
      var score$1 = ((((consecutiveMatches$tailLocal1 > 0) | 0) + $thiz.jb.eY(nameIndex$tailLocal1)) | 0);
      var nameIndex$tailLocal1$tmp1 = ((1 + nameIndex$tailLocal1) | 0);
      var searchIndex$tailLocal1$tmp1 = ((1 + searchIndex$tailLocal1) | 0);
      var acc$tailLocal1$tmp1 = acc$tailLocal1.dT(nameIndex$tailLocal1);
      var scoreAcc$tailLocal1$tmp1 = ((scoreAcc$tailLocal1 + score$1) | 0);
      var consecutiveMatches$tailLocal1$tmp1 = ((1 + consecutiveMatches$tailLocal1) | 0);
      nameIndex$tailLocal1 = nameIndex$tailLocal1$tmp1;
      searchIndex$tailLocal1 = searchIndex$tailLocal1$tmp1;
      acc$tailLocal1 = acc$tailLocal1$tmp1;
      scoreAcc$tailLocal1 = scoreAcc$tailLocal1$tmp1;
      consecutiveMatches$tailLocal1 = consecutiveMatches$tailLocal1$tmp1;
    } else {
      var nameIndex$tailLocal1$tmp2 = ((1 + nameIndex$tailLocal1) | 0);
      nameIndex$tailLocal1 = nameIndex$tailLocal1$tmp2;
      consecutiveMatches$tailLocal1 = 0;
    }
  }
}
function $p_Ldotty_tools_scaladoc_PageSearchEngine__matchTokens$1__F1__F1__I__I__sci_Set__sci_Set($thiz, searchTokensLifted$1, pageTokensLifted$1, searchTokenIndex, pageTokenIndex, acc) {
  var acc$tailLocal2 = acc;
  var pageTokenIndex$tailLocal1 = pageTokenIndex;
  var searchTokenIndex$tailLocal1 = searchTokenIndex;
  while (true) {
    var this$1 = searchTokensLifted$1.d(searchTokenIndex$tailLocal1);
    var _1 = (this$1.g() ? $m_s_None$() : new $c_s_Some(this$1.R()));
    var this$3 = pageTokensLifted$1.d(pageTokenIndex$tailLocal1);
    var _2 = (this$3.g() ? $m_s_None$() : new $c_s_Some(this$3.R()));
    matchAlts5: {
      matchAlts6: {
        if (($m_s_None$() === _1)) {
          break matchAlts6;
        }
        if (($m_s_None$() === _2)) {
          break matchAlts6;
        }
        break matchAlts5;
      }
      return acc$tailLocal2;
    }
    if ((_1 instanceof $c_s_Some)) {
      var x58 = _1.c2;
      if ((x58 instanceof $c_sci_$colon$colon)) {
        var searchHead = $uC(x58.g9);
        if ((_2 instanceof $c_s_Some)) {
          var x53 = _2.c2;
          if ((x53 instanceof $c_sci_$colon$colon)) {
            if ((searchHead === $uC(x53.g9))) {
              var searchTokenIndex$tailLocal1$tmp1 = ((1 + searchTokenIndex$tailLocal1) | 0);
              var pageTokenIndex$tailLocal1$tmp1 = ((1 + pageTokenIndex$tailLocal1) | 0);
              var acc$tailLocal2$tmp1 = acc$tailLocal2.dT(new $c_T2$mcII$sp(searchTokenIndex$tailLocal1, pageTokenIndex$tailLocal1));
              searchTokenIndex$tailLocal1 = searchTokenIndex$tailLocal1$tmp1;
              pageTokenIndex$tailLocal1 = pageTokenIndex$tailLocal1$tmp1;
              acc$tailLocal2 = acc$tailLocal2$tmp1;
              continue;
            } else {
              pageTokenIndex$tailLocal1 = ((1 + pageTokenIndex$tailLocal1) | 0);
              continue;
            }
          }
        }
      }
      if ((_2 instanceof $c_s_Some)) {
        if ((_2.c2 instanceof $c_sci_$colon$colon)) {
          var x45 = _2.c2;
          searchTokenIndex$tailLocal1 = ((1 + searchTokenIndex$tailLocal1) | 0);
          continue;
        }
      }
      if ((x58 instanceof $c_sci_$colon$colon)) {
        if ((_2 instanceof $c_s_Some)) {
          pageTokenIndex$tailLocal1 = ((1 + pageTokenIndex$tailLocal1) | 0);
          continue;
        }
      }
    }
    var searchTokenIndex$tailLocal1$tmp2 = ((1 + searchTokenIndex$tailLocal1) | 0);
    var pageTokenIndex$tailLocal1$tmp2 = ((1 + pageTokenIndex$tailLocal1) | 0);
    searchTokenIndex$tailLocal1 = searchTokenIndex$tailLocal1$tmp2;
    pageTokenIndex$tailLocal1 = pageTokenIndex$tailLocal1$tmp2;
  }
}
function $p_Ldotty_tools_scaladoc_PageSearchEngine__recalculateTokenIndex$1__sci_Seq__I__I__I($thiz, tokenPositions, previousIndex, position) {
  return (((tokenPositions.l() <= ((1 + previousIndex) | 0)) || ((tokenPositions.r(((1 + previousIndex) | 0)) | 0) > position)) ? previousIndex : ((1 + previousIndex) | 0));
}
function $p_Ldotty_tools_scaladoc_PageSearchEngine__getMatchScore$1__I__I__I__I($thiz, consecutiveMatches$tailLocal2$1, matchedPagePosition, matchedPageTokenStart) {
  var consecutiveMatchesScore = ((consecutiveMatches$tailLocal2$1 > 0) | 0);
  var matchPositionScore = $thiz.jb.eY(((matchedPagePosition - matchedPageTokenStart) | 0));
  return ((((consecutiveMatchesScore + matchPositionScore) | 0) + (((matchPositionScore > 0) && (matchedPageTokenStart === 0)) ? 3 : 0)) | 0);
}
function $p_Ldotty_tools_scaladoc_PageSearchEngine__findHighScoreMatch$1__T__Ldotty_tools_scaladoc_MatchResult__T__sci_List__sci_Set__sci_List__I__I__I__I__sci_Set__I__I__s_Option($thiz, nameSearch$2, prematched$1, pageName$2, searchTokenPositions$1, matchedTokens$1, pageTokensPositions$1, searchTokenIndex, searchPosition, pageTokenIndex, pagePosition, positionAcc, scoreAcc, consecutiveMatches) {
  var consecutiveMatches$tailLocal2 = consecutiveMatches;
  var scoreAcc$tailLocal2 = scoreAcc;
  var positionAcc$tailLocal1 = positionAcc;
  var pagePosition$tailLocal1 = pagePosition;
  var pageTokenIndex$tailLocal2 = pageTokenIndex;
  var searchPosition$tailLocal1 = searchPosition;
  var searchTokenIndex$tailLocal2 = searchTokenIndex;
  while (true) {
    if ((searchPosition$tailLocal1 >= nameSearch$2.length)) {
      return new $c_s_Some(new $c_Ldotty_tools_scaladoc_MatchResult(scoreAcc$tailLocal2, prematched$1.bV, positionAcc$tailLocal1));
    } else if ((pagePosition$tailLocal1 >= pageName$2.length)) {
      return $m_s_None$();
    } else {
      var currentSearchTokenStart = ($f_sc_LinearSeqOps__apply__I__O(searchTokenPositions$1, searchTokenIndex$tailLocal2) | 0);
      var this$4 = matchedTokens$1.hC(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((searchTokenIndex$tailLocal2$1) => ((_$19$2) => (_$19$2.nj() === searchTokenIndex$tailLocal2$1)))(searchTokenIndex$tailLocal2)));
      var matchingPageToken = (this$4.g() ? $m_s_None$() : new $c_s_Some(this$4.R().kg()));
      var searchChar = $m_jl_Character$().j8(nameSearch$2.charCodeAt(searchPosition$tailLocal1));
      var pageChar = $m_jl_Character$().j8(pageName$2.charCodeAt(pagePosition$tailLocal1));
      if ((matchingPageToken instanceof $c_s_Some)) {
        var matchingToken = (matchingPageToken.c2 | 0);
        if ((searchPosition$tailLocal1 === currentSearchTokenStart)) {
          var matchedTokenPosition = ($f_sc_LinearSeqOps__apply__I__O(pageTokensPositions$1, matchingToken) | 0);
          var searchTokenIndex$tailLocal2$tmp1 = $p_Ldotty_tools_scaladoc_PageSearchEngine__recalculateTokenIndex$1__sci_Seq__I__I__I($thiz, searchTokenPositions$1, searchTokenIndex$tailLocal2, ((1 + searchPosition$tailLocal1) | 0));
          var searchPosition$tailLocal1$tmp1 = ((1 + searchPosition$tailLocal1) | 0);
          var pageTokenIndex$tailLocal2$tmp1 = $p_Ldotty_tools_scaladoc_PageSearchEngine__recalculateTokenIndex$1__sci_Seq__I__I__I($thiz, pageTokensPositions$1, pageTokenIndex$tailLocal2, ((1 + matchedTokenPosition) | 0));
          var pagePosition$tailLocal1$tmp1 = ((1 + matchedTokenPosition) | 0);
          var positionAcc$tailLocal1$tmp1 = positionAcc$tailLocal1.dT(matchedTokenPosition);
          var scoreAcc$tailLocal2$tmp1 = ((scoreAcc$tailLocal2 + $p_Ldotty_tools_scaladoc_PageSearchEngine__getMatchScore$1__I__I__I__I($thiz, consecutiveMatches$tailLocal2, matchedTokenPosition, matchedTokenPosition)) | 0);
          var consecutiveMatches$tailLocal2$tmp1 = ((1 + consecutiveMatches$tailLocal2) | 0);
          searchTokenIndex$tailLocal2 = searchTokenIndex$tailLocal2$tmp1;
          searchPosition$tailLocal1 = searchPosition$tailLocal1$tmp1;
          pageTokenIndex$tailLocal2 = pageTokenIndex$tailLocal2$tmp1;
          pagePosition$tailLocal1 = pagePosition$tailLocal1$tmp1;
          positionAcc$tailLocal1 = positionAcc$tailLocal1$tmp1;
          scoreAcc$tailLocal2 = scoreAcc$tailLocal2$tmp1;
          consecutiveMatches$tailLocal2 = consecutiveMatches$tailLocal2$tmp1;
          continue;
        }
      }
      if ((searchChar === pageChar)) {
        var this$10 = (matchingPageToken.g() ? $m_s_None$() : new $c_s_Some($f_sc_LinearSeqOps__apply__I__O(pageTokensPositions$1, (matchingPageToken.R() | 0))));
        var matchedTokenPosition$2 = ((this$10.g() ? 0 : this$10.R()) | 0);
        var searchTokenIndex$tailLocal2$tmp2 = $p_Ldotty_tools_scaladoc_PageSearchEngine__recalculateTokenIndex$1__sci_Seq__I__I__I($thiz, searchTokenPositions$1, searchTokenIndex$tailLocal2, ((1 + searchPosition$tailLocal1) | 0));
        var searchPosition$tailLocal1$tmp2 = ((1 + searchPosition$tailLocal1) | 0);
        var pageTokenIndex$tailLocal2$tmp2 = $p_Ldotty_tools_scaladoc_PageSearchEngine__recalculateTokenIndex$1__sci_Seq__I__I__I($thiz, pageTokensPositions$1, pageTokenIndex$tailLocal2, ((1 + pagePosition$tailLocal1) | 0));
        var pagePosition$tailLocal1$tmp2 = ((1 + pagePosition$tailLocal1) | 0);
        var positionAcc$tailLocal1$tmp2 = positionAcc$tailLocal1.dT(pagePosition$tailLocal1);
        var scoreAcc$tailLocal2$tmp2 = ((scoreAcc$tailLocal2 + $p_Ldotty_tools_scaladoc_PageSearchEngine__getMatchScore$1__I__I__I__I($thiz, consecutiveMatches$tailLocal2, pagePosition$tailLocal1, matchedTokenPosition$2)) | 0);
        var consecutiveMatches$tailLocal2$tmp2 = ((1 + consecutiveMatches$tailLocal2) | 0);
        searchTokenIndex$tailLocal2 = searchTokenIndex$tailLocal2$tmp2;
        searchPosition$tailLocal1 = searchPosition$tailLocal1$tmp2;
        pageTokenIndex$tailLocal2 = pageTokenIndex$tailLocal2$tmp2;
        pagePosition$tailLocal1 = pagePosition$tailLocal1$tmp2;
        positionAcc$tailLocal1 = positionAcc$tailLocal1$tmp2;
        scoreAcc$tailLocal2 = scoreAcc$tailLocal2$tmp2;
        consecutiveMatches$tailLocal2 = consecutiveMatches$tailLocal2$tmp2;
        continue;
      }
      var pageTokenIndex$tailLocal2$tmp3 = $p_Ldotty_tools_scaladoc_PageSearchEngine__recalculateTokenIndex$1__sci_Seq__I__I__I($thiz, pageTokensPositions$1, pageTokenIndex$tailLocal2, ((1 + pagePosition$tailLocal1) | 0));
      var pagePosition$tailLocal1$tmp3 = ((1 + pagePosition$tailLocal1) | 0);
      pageTokenIndex$tailLocal2 = pageTokenIndex$tailLocal2$tmp3;
      pagePosition$tailLocal1 = pagePosition$tailLocal1$tmp3;
      consecutiveMatches$tailLocal2 = 0;
    }
  }
}
/** @constructor */
function $c_Ldotty_tools_scaladoc_PageSearchEngine(pages) {
  this.fU = null;
  this.jb = null;
  this.fU = pages;
  this.jb = new $c_s_PartialFunction$OrElse(new $c_sci_$colon$colon(8, new $c_sci_$colon$colon(4, new $c_sci_$colon$colon(2, new $c_sci_$colon$colon(1, $m_sci_Nil$())))), ($m_s_PartialFunction$(), new $c_s_PartialFunction$$anon$2(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$3) => 0)))));
}
$p = $c_Ldotty_tools_scaladoc_PageSearchEngine.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_PageSearchEngine;
/** @constructor */
function $h_Ldotty_tools_scaladoc_PageSearchEngine() {
}
$h_Ldotty_tools_scaladoc_PageSearchEngine.prototype = $p;
$p.rw = (function(query) {
  var this$3 = $p_Ldotty_tools_scaladoc_PageSearchEngine__matchPages__Ldotty_tools_scaladoc_NameAndKindQuery__sci_List(this, query);
  var f = ((x$1$2) => {
    if ((x$1$2 !== null)) {
      return (x$1$2.cK >= 0);
    }
    throw new $c_s_MatchError(x$1$2);
  });
  _return: {
    var $x_1;
    var l$tailLocal1 = this$3;
    while (true) {
      if (l$tailLocal1.g()) {
        var $x_1 = $m_sci_Nil$();
        break;
      } else {
        var h = l$tailLocal1.m();
        var t = l$tailLocal1.o();
        if ((!(!(!f(h))))) {
          l$tailLocal1 = t;
          continue;
        }
        var start = l$tailLocal1;
        var remaining$tailLocal1 = t;
        while (true) {
          if (remaining$tailLocal1.g()) {
            var $x_1 = start;
            break _return;
          } else {
            var x = remaining$tailLocal1.m();
            if ((!(!f(x)))) {
              remaining$tailLocal1 = remaining$tailLocal1.o();
              continue;
            }
            var firstMiss = remaining$tailLocal1;
            var newHead = new $c_sci_$colon$colon(start.m(), $m_sci_Nil$());
            var toProcess = start.o();
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $c_sci_$colon$colon(toProcess.m(), $m_sci_Nil$());
              currentLast.M = newElem;
              currentLast = newElem;
              toProcess = toProcess.o();
            }
            var next = firstMiss.o();
            var nextToCopy = next;
            while ((!next.g())) {
              var head = next.m();
              if ((!(!f(head)))) {
                next = next.o();
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $c_sci_$colon$colon(nextToCopy.m(), $m_sci_Nil$());
                  currentLast.M = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = nextToCopy.o();
                }
                nextToCopy = next.o();
                next = next.o();
              }
            }
            if ((!nextToCopy.g())) {
              currentLast.M = nextToCopy;
            }
            var $x_1 = newHead;
            break _return;
          }
        }
      }
    }
  }
  return $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O($x_1, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$1) => {
    if ((x$1$2$1 !== null)) {
      return ((-x$1$2$1.cK) | 0);
    }
    throw new $c_s_MatchError(x$1$2$1);
  })), $m_s_math_Ordering$Int$());
});
$p.rt = (function(pages, search) {
  var f = ((_$7$2) => $p_Ldotty_tools_scaladoc_PageSearchEngine__prematchPage__Ldotty_tools_scaladoc_PageEntry__T__Ldotty_tools_scaladoc_MatchResult(this, _$7$2, search));
  if ((pages === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0 = pages.m();
    var h = new $c_sci_$colon$colon(f(x0), $m_sci_Nil$());
    var t = h;
    var rest = pages.o();
    while ((rest !== $m_sci_Nil$())) {
      var x0$1 = rest.m();
      var nx = new $c_sci_$colon$colon(f(x0$1), $m_sci_Nil$());
      t.M = nx;
      t = nx;
      rest = rest.o();
    }
    var $x_1 = h;
  }
  var this$4 = $x_1;
  var f$1 = ((_$8$2) => (!_$8$2.dw.g()));
  var l$tailLocal1 = this$4;
  while (true) {
    if (l$tailLocal1.g()) {
      return $m_sci_Nil$();
    } else {
      var h$1 = l$tailLocal1.m();
      var t$1 = l$tailLocal1.o();
      if ((!(!(!f$1(h$1))))) {
        l$tailLocal1 = t$1;
        continue;
      }
      var start = l$tailLocal1;
      var remaining$tailLocal1 = t$1;
      while (true) {
        if (remaining$tailLocal1.g()) {
          return start;
        } else {
          var x = remaining$tailLocal1.m();
          if ((!(!f$1(x)))) {
            remaining$tailLocal1 = remaining$tailLocal1.o();
            continue;
          }
          var firstMiss = remaining$tailLocal1;
          var newHead = new $c_sci_$colon$colon(start.m(), $m_sci_Nil$());
          var toProcess = start.o();
          var currentLast = newHead;
          while ((toProcess !== firstMiss)) {
            var newElem = new $c_sci_$colon$colon(toProcess.m(), $m_sci_Nil$());
            currentLast.M = newElem;
            currentLast = newElem;
            toProcess = toProcess.o();
          }
          var next = firstMiss.o();
          var nextToCopy = next;
          while ((!next.g())) {
            var head = next.m();
            if ((!(!f$1(head)))) {
              next = next.o();
            } else {
              while ((nextToCopy !== next)) {
                var newElem$2 = new $c_sci_$colon$colon(nextToCopy.m(), $m_sci_Nil$());
                currentLast.M = newElem$2;
                currentLast = newElem$2;
                nextToCopy = nextToCopy.o();
              }
              nextToCopy = next.o();
              next = next.o();
            }
          }
          if ((!nextToCopy.g())) {
            currentLast.M = nextToCopy;
          }
          return newHead;
        }
      }
    }
  }
});
var $d_Ldotty_tools_scaladoc_PageSearchEngine = new $TypeData().i($c_Ldotty_tools_scaladoc_PageSearchEngine, "dotty.tools.scaladoc.PageSearchEngine", ({
  da: 1
}));
/** @constructor */
function $c_Ldotty_tools_scaladoc_QueryParser() {
  this.lb = null;
  this.la = null;
  this.lc = null;
  this.l9 = null;
  this.ld = null;
  this.lb = $m_sci_Seq$().nx(new $c_sjsr_WrappedVarArgs(["class", "trait", "enum", "object", "def", "val", "var", "package", "given", "type"]));
  this.la = $m_sc_StringOps$().j1((("(?i)" + $f_sc_IterableOnceOps__mkString__T__T__T__T(this.lb, "(", "|", ")")) + " (.*)"));
  this.lc = $m_sc_StringOps$().j1("(.*)");
  this.l9 = $m_sc_StringOps$().j1("`(.*)`");
  this.ld = $m_sc_StringOps$().j1("(.*=>.*)");
}
$p = $c_Ldotty_tools_scaladoc_QueryParser.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_QueryParser;
/** @constructor */
function $h_Ldotty_tools_scaladoc_QueryParser() {
}
$h_Ldotty_tools_scaladoc_QueryParser.prototype = $p;
$p.rs = (function(query) {
  if ((query !== null)) {
    var x9 = this.l9.ja(query);
    if ((!x9.g())) {
      var x10 = x9.R();
      if ((x10.aH(1) === 0)) {
        return new $c_Ldotty_tools_scaladoc_NameAndKindQuery(new $c_s_Some($f_sc_LinearSeqOps__apply__I__O(x10, 0)), $m_s_None$());
      }
    }
    var x5 = this.la.ja(query);
    if ((!x5.g())) {
      var x6 = x5.R();
      if ((x6.aH(2) === 0)) {
        var x7 = $f_sc_LinearSeqOps__apply__I__O(x6, 0);
        return new $c_Ldotty_tools_scaladoc_NameAndKindQuery(new $c_s_Some($f_sc_LinearSeqOps__apply__I__O(x6, 1)), new $c_s_Some(x7));
      }
    }
    var x2 = this.lc.ja(query);
    if ((!x2.g())) {
      var x3 = x2.R();
      if ((x3.aH(1) === 0)) {
        return new $c_Ldotty_tools_scaladoc_NameAndKindQuery(new $c_s_Some($f_sc_LinearSeqOps__apply__I__O(x3, 0)), $m_s_None$());
      }
    }
  }
  return new $c_Ldotty_tools_scaladoc_NameAndKindQuery($m_s_None$(), $m_s_None$());
});
$p.rr = (function(query) {
  if ((query !== null)) {
    var x13 = this.ld.ja(query);
    if ((!x13.g())) {
      var x14 = x13.R();
      if ((x14.aH(1) === 0)) {
        return new $c_Ldotty_tools_scaladoc_SignatureQuery($f_sc_LinearSeqOps__apply__I__O(x14, 0));
      }
    }
  }
  return this.rs(query);
});
var $d_Ldotty_tools_scaladoc_QueryParser = new $TypeData().i($c_Ldotty_tools_scaladoc_QueryParser, "dotty.tools.scaladoc.QueryParser", ({
  db: 1
}));
function $ct_Ldotty_tools_scaladoc_SafeLocalStorage__T__sjs_js_Any__($thiz, key, defaultValue) {
  $thiz.hX = key;
  $thiz.fV = defaultValue;
  try {
    window.localStorage.setItem("__TEST__KEY__", "");
    window.localStorage.removeItem("__TEST__KEY__");
    var $x_1 = true;
  } catch (e) {
    var $x_1 = false;
  }
  $thiz.hW = $x_1;
  return $thiz;
}
function $p_Ldotty_tools_scaladoc_SafeLocalStorage__parseData__T__sjs_js_Any($thiz, data) {
  try {
    var this$1 = $m_s_Option$().hy(JSON.parse(data));
    return (this$1.g() ? $thiz.fV : this$1.R());
  } catch (e) {
    return $thiz.fV;
  }
}
/** @constructor */
function $c_Ldotty_tools_scaladoc_SafeLocalStorage() {
  this.hX = null;
  this.fV = null;
  this.hW = false;
}
$p = $c_Ldotty_tools_scaladoc_SafeLocalStorage.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_SafeLocalStorage;
/** @constructor */
function $h_Ldotty_tools_scaladoc_SafeLocalStorage() {
}
$h_Ldotty_tools_scaladoc_SafeLocalStorage.prototype = $p;
$p.iV = (function() {
  var defaultValue = this.fV;
  return (this.hW ? $p_Ldotty_tools_scaladoc_SafeLocalStorage__parseData__T__sjs_js_Any(this, window.localStorage.getItem(this.hX)) : defaultValue);
});
$p.rN = (function(data) {
  if (this.hW) {
    var a = JSON.stringify(data);
    window.localStorage.setItem(this.hX, a);
  }
});
$p.g = (function() {
  return $m_sr_BoxesRunTime$().n(this.iV(), this.fV);
});
/** @constructor */
function $c_Ldotty_tools_scaladoc_Searchbar() {
  this.lg = null;
  this.lh = null;
  this.li = null;
  this.lf = null;
  var this$2 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), pages);
  $m_sci_List$();
  var this$5 = $m_sci_Nil$().cd(this$2);
  var f = ((jsObj$2) => $m_Ldotty_tools_scaladoc_PageEntry$().pM(jsObj$2));
  if ((this$5 === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var x0 = this$5.m();
    var h = new $c_sci_$colon$colon(f(x0), $m_sci_Nil$());
    var t = h;
    var rest = this$5.o();
    while ((rest !== $m_sci_Nil$())) {
      var x0$1 = rest.m();
      var nx = new $c_sci_$colon$colon(f(x0$1), $m_sci_Nil$());
      t.M = nx;
      t = nx;
      rest = rest.o();
    }
    var $x_1 = h;
  }
  this.lg = $x_1;
  this.lh = new $c_Ldotty_tools_scaladoc_QueryParser();
  this.li = new $c_Ldotty_tools_scaladoc_PageSearchEngine(this.lg);
  this.lf = new $c_Ldotty_tools_scaladoc_InkuireJSSearchEngine();
  new $c_Ldotty_tools_scaladoc_SearchbarComponent(this.li, this.lf, this.lh);
}
$p = $c_Ldotty_tools_scaladoc_Searchbar.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_Searchbar;
/** @constructor */
function $h_Ldotty_tools_scaladoc_Searchbar() {
}
$h_Ldotty_tools_scaladoc_Searchbar.prototype = $p;
var $d_Ldotty_tools_scaladoc_Searchbar = new $TypeData().i($c_Ldotty_tools_scaladoc_Searchbar, "dotty.tools.scaladoc.Searchbar", ({
  de: 1
}));
function $p_Ldotty_tools_scaladoc_SearchbarComponent__generateRootDiv__Lorg_scalajs_dom_HTMLDivElement($thiz) {
  var cancelButton = $m_Ldotty_tools_scaladoc_utils_HTML$().b1.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "scaladoc-searchbar-cancel-button body-small")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["Cancel"]))));
  cancelButton.onclick = ((event$2) => document.body.removeChild($thiz.bW));
  var inputContainer = $m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "scaladoc-searchbar-input-container")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$thiz.ct, cancelButton]))));
  var element = $m_s_util_ChainingOps$().f3($m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().es.t, "scaladoc-searchbar")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([inputContainer, $thiz.ai])))), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((elem$3) => {
    elem$3.addEventListener("mousedown", ((e$2) => ((e$2.target.id !== "scaladoc-searchbar") ? (e$2.stopPropagation(), (void 0)) : (void 0))));
    elem$3.addEventListener("keydown", ((x$1$2) => {
      matchResult9: {
        if ((!(!(x$1$2 instanceof KeyboardEvent)))) {
          if (((x$1$2.keyCode | 0) === 40)) {
            $p_Ldotty_tools_scaladoc_SearchbarComponent__handleArrowDown__V($thiz);
            break matchResult9;
          } else if (((x$1$2.keyCode | 0) === 38)) {
            $p_Ldotty_tools_scaladoc_SearchbarComponent__handleArrowUp__V($thiz);
            break matchResult9;
          } else if (((x$1$2.keyCode | 0) === 13)) {
            $p_Ldotty_tools_scaladoc_SearchbarComponent__handleEnter__V($thiz);
            break matchResult9;
          } else if (((x$1$2.keyCode | 0) === 27)) {
            $p_Ldotty_tools_scaladoc_SearchbarComponent__handleEscape__Lorg_scalajs_dom_Node($thiz);
            break matchResult9;
          } else {
            break matchResult9;
          }
        }
        throw new $c_s_MatchError(x$1$2);
      }
    }));
  })));
  var searchbarFooter = $m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().es.t, "searchbar-footer"), $ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "body-small")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_Ldotty_tools_scaladoc_utils_HTML$().b1.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "searchbar-footer-left-container")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_Ldotty_tools_scaladoc_utils_HTML$().b1.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["Smart search:"])))), $m_Ldotty_tools_scaladoc_utils_HTML$().b1.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_Ldotty_tools_scaladoc_utils_HTML$().cf.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["CC "])))), "to find CamelCase phrases"])))), $m_Ldotty_tools_scaladoc_utils_HTML$().b1.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_Ldotty_tools_scaladoc_utils_HTML$().cf.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["A=>B "])))), "to find CamelCase signatures"]))))])))), $m_Ldotty_tools_scaladoc_utils_HTML$().b1.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "searchbar-footer-right-container")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_Ldotty_tools_scaladoc_utils_HTML$().b1.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_Ldotty_tools_scaladoc_utils_HTML$().cf.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["Esc "])))), "to close"])))), $m_Ldotty_tools_scaladoc_utils_HTML$().b1.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_Ldotty_tools_scaladoc_utils_HTML$().cf.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["Arrows "])))), "to navigate"])))), $m_Ldotty_tools_scaladoc_utils_HTML$().b1.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_Ldotty_tools_scaladoc_utils_HTML$().cf.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["Enter "])))), "to select"]))))]))))]))));
  var rootParent = $m_s_util_ChainingOps$().f3($m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().es.t, "searchbar-container")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([element, searchbarFooter])))), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((rootElem$3) => {
    rootElem$3.addEventListener("mousedown", ((e$2$1) => $p_Ldotty_tools_scaladoc_SearchbarComponent__handleEscape__Lorg_scalajs_dom_Node($thiz)));
  })));
  $thiz.ln.addEventListener("mousedown", ((e$2$2) => {
    e$2$2.stopPropagation();
  }));
  var \u03b43$ = document.body;
  \u03b43$.addEventListener("mousedown", ((e$2$3) => ((!(!document.body.contains(element))) ? ($p_Ldotty_tools_scaladoc_SearchbarComponent__handleEscape__Lorg_scalajs_dom_Node($thiz), (void 0)) : (void 0))));
  return rootParent;
}
function $p_Ldotty_tools_scaladoc_SearchbarComponent__handleArrowUp__V($thiz) {
  var selectedElement = $thiz.ai.querySelector("[selected]");
  if ((selectedElement !== null)) {
    selectedElement.removeAttribute("selected");
    var sibling = $p_Ldotty_tools_scaladoc_SearchbarComponent__recur$1__Lorg_scalajs_dom_Element__Lorg_scalajs_dom_Element($thiz, selectedElement);
    if ((sibling !== null)) {
      sibling.setAttribute("selected", "");
      $thiz.ai.scrollTop = ((+sibling.offsetTop) - ((sibling.clientHeight | 0) << 1));
    }
  }
}
function $p_Ldotty_tools_scaladoc_SearchbarComponent__handleArrowDown__V($thiz) {
  var selectedElement = $thiz.ai.querySelector("[selected]");
  if ((selectedElement !== null)) {
    var sibling = $p_Ldotty_tools_scaladoc_SearchbarComponent__recur$2__Lorg_scalajs_dom_Element__Lorg_scalajs_dom_Element($thiz, selectedElement);
    if ((sibling !== null)) {
      selectedElement.removeAttribute("selected");
      sibling.setAttribute("selected", "");
      $thiz.ai.scrollTop = ((+sibling.offsetTop) - ((sibling.clientHeight | 0) << 1));
    }
  } else {
    var firstResult = $thiz.ai.firstElementChild;
    if ((firstResult !== null)) {
      var toSelect = (((!(!firstResult.classList.contains("scaladoc-searchbar-row"))) && (!(!firstResult.hasAttribute("result")))) ? firstResult : $p_Ldotty_tools_scaladoc_SearchbarComponent__recur$2__Lorg_scalajs_dom_Element__Lorg_scalajs_dom_Element($thiz, firstResult));
      toSelect.setAttribute("selected", "");
      $thiz.ai.scrollTop = ((+toSelect.offsetTop) - ((toSelect.clientHeight | 0) << 1));
    }
  }
}
function $p_Ldotty_tools_scaladoc_SearchbarComponent__handleEnter__V($thiz) {
  var selectedElement = $thiz.ai.querySelector("[selected] a");
  if ((selectedElement !== null)) {
    selectedElement.click();
  }
}
function $p_Ldotty_tools_scaladoc_SearchbarComponent__handleEscape__Lorg_scalajs_dom_Node($thiz) {
  $thiz.ct.value = "";
  $thiz.ct.dispatchEvent(new Event("input"));
  return document.body.removeChild($thiz.bW);
}
function $p_Ldotty_tools_scaladoc_SearchbarComponent__handleHover__Lorg_scalajs_dom_HTMLElement__V($thiz, elem) {
  var selectedElement = $thiz.ai.querySelector("[selected]");
  if ((selectedElement !== null)) {
    selectedElement.removeAttribute("selected");
  }
  elem.setAttribute("selected", "");
}
function $p_Ldotty_tools_scaladoc_SearchbarComponent__handleGlobalKeyDown__Lorg_scalajs_dom_KeyboardEvent__V($thiz, e) {
  if (((e.key === "s") || (e.key === "/"))) {
    var tag = e.target.tagName;
    if (((tag !== "INPUT") && (tag !== "TEXTAREA"))) {
      if ((!(!(!document.body.contains($thiz.bW))))) {
        e.preventDefault();
        document.body.appendChild($thiz.bW);
        window.setTimeout((() => {
          $thiz.ct.focus();
        }), 1.0);
      }
    }
  }
}
function $p_Ldotty_tools_scaladoc_SearchbarComponent__showHints__Lorg_scalajs_dom_Node($thiz) {
  var hintsDiv = $m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "searchbar-hints")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_Ldotty_tools_scaladoc_utils_HTML$().b1.cm($ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "lightbulb"), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([])))), $m_Ldotty_tools_scaladoc_utils_HTML$().i0.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "body-medium")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["A bunch of search hints to make your life easier"])))), $m_Ldotty_tools_scaladoc_utils_HTML$().lv.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "searchbar-hints-list")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_Ldotty_tools_scaladoc_utils_HTML$().i0.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "h100")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["Members or Static sites by any phrase"])))), $m_Ldotty_tools_scaladoc_utils_HTML$().f8.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "mono-small-inline")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["Any phrase to find", $m_Ldotty_tools_scaladoc_utils_HTML$().cf.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([" Name"])))), " or ", $m_Ldotty_tools_scaladoc_utils_HTML$().cf.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["Title"])))), ""])))), $m_Ldotty_tools_scaladoc_utils_HTML$().ax.cm($ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "divider"), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([])))), $m_Ldotty_tools_scaladoc_utils_HTML$().f8.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "mono-small-inline")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["cC, caCa, camCa", $m_Ldotty_tools_scaladoc_utils_HTML$().cf.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([" to find"])))), " camelCase"])))), $m_Ldotty_tools_scaladoc_utils_HTML$().i0.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "h100")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["Members by signature"])))), $m_Ldotty_tools_scaladoc_utils_HTML$().f8.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "mono-small-inline")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["String => Int", $m_Ldotty_tools_scaladoc_utils_HTML$().cf.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([" to find"])))), " String.size, String.toInt"])))), $m_Ldotty_tools_scaladoc_utils_HTML$().ax.cm($ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "divider"), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([])))), $m_Ldotty_tools_scaladoc_utils_HTML$().f8.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "mono-small-inline")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["String => String => String", $m_Ldotty_tools_scaladoc_utils_HTML$().cf.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([" to find "])))), "String.mkString, String.stripPrefix"])))), $m_Ldotty_tools_scaladoc_utils_HTML$().ax.cm($ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "divider"), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([])))), $m_Ldotty_tools_scaladoc_utils_HTML$().f8.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "mono-small-inline")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["Some[A] => A", $m_Ldotty_tools_scaladoc_utils_HTML$().cf.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([" to find"])))), " Some.value"])))), $m_Ldotty_tools_scaladoc_utils_HTML$().f8.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "link body-small")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["Availability of searching by inkuire depends on the configuration of Scaladoc. For more info, ", $m_Ldotty_tools_scaladoc_utils_HTML$().dZ.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().fW.t, "https://docs.scala-lang.org/scala3/guides/scaladoc/search-engine.html")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["the documentation"]))))]))))]))))]))));
  return $thiz.ai.appendChild(hintsDiv);
}
function $p_Ldotty_tools_scaladoc_SearchbarComponent__createLoadMoreElement$1__Lorg_scalajs_dom_HTMLDivElement($thiz) {
  var a = $m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "scaladoc-searchbar-row mono-small-inline"), ($m_Ldotty_tools_scaladoc_utils_HTML$(), $ct_T2__O__O__(new $c_T2(), "loadmore", ""))]), new $c_sjsr_WrappedVarArgs([$m_Ldotty_tools_scaladoc_utils_HTML$().dZ.a1(new $c_sjsr_WrappedVarArgs([$m_Ldotty_tools_scaladoc_utils_HTML$().b1.a1(new $c_sjsr_WrappedVarArgs(["Load more"]))]))]));
  a.addEventListener("mouseover", ((_$8$2) => {
    $p_Ldotty_tools_scaladoc_SearchbarComponent__handleHover__Lorg_scalajs_dom_HTMLElement__V($thiz, a);
  }));
  return a;
}
function $p_Ldotty_tools_scaladoc_SearchbarComponent__loadMoreResults$1__Lorg_scalajs_dom_HTMLDivElement__sci_List__V($thiz, loadMoreElement$2, entries) {
  loadMoreElement$2.onclick = ((event$2) => {
    var this$2 = entries.oC($thiz.jd);
    var these = this$2;
    while ((!these.g())) {
      var x0 = these.m();
      x0.classList.remove("hidden");
      these = these.o();
    }
    var nextElems = $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(entries, $thiz.jd, entries);
    return ((!nextElems.g()) ? ($p_Ldotty_tools_scaladoc_SearchbarComponent__loadMoreResults$1__Lorg_scalajs_dom_HTMLDivElement__sci_List__V($thiz, loadMoreElement$2, nextElems), (void 0)) : (loadMoreElement$2.classList.add("hidden"), (void 0)));
  });
}
function $p_Ldotty_tools_scaladoc_SearchbarComponent__recur$1__Lorg_scalajs_dom_Element__Lorg_scalajs_dom_Element($thiz, elem) {
  var elem$tailLocal1 = elem;
  while (true) {
    var prev = elem$tailLocal1.previousElementSibling;
    if ((prev === null)) {
      return null;
    } else if ((((!(!(!prev.classList.contains("hidden")))) && (!(!prev.classList.contains("scaladoc-searchbar-row")))) && ((!(!prev.hasAttribute("result"))) || (!(!prev.hasAttribute("loadmore")))))) {
      return prev;
    } else {
      elem$tailLocal1 = prev;
    }
  }
}
function $p_Ldotty_tools_scaladoc_SearchbarComponent__recur$2__Lorg_scalajs_dom_Element__Lorg_scalajs_dom_Element($thiz, elem) {
  var elem$tailLocal2 = elem;
  while (true) {
    var next = elem$tailLocal2.nextElementSibling;
    if ((next === null)) {
      return null;
    } else if ((((!(!(!next.classList.contains("hidden")))) && (!(!next.classList.contains("scaladoc-searchbar-row")))) && ((!(!next.hasAttribute("result"))) || (!(!next.hasAttribute("loadmore")))))) {
      return next;
    } else {
      elem$tailLocal2 = next;
    }
  }
}
/** @constructor */
function $c_Ldotty_tools_scaladoc_SearchbarComponent(engine, inkuireEngine, parser) {
  this.lj = null;
  this.ll = null;
  this.lm = null;
  this.lk = 0;
  this.jd = 0;
  this.jc = null;
  this.je = null;
  this.ln = null;
  this.ct = null;
  this.ai = null;
  this.bW = null;
  this.lj = engine;
  this.ll = inkuireEngine;
  this.lm = parser;
  this.lk = 5;
  this.jd = 20;
  var this$1 = $m_s_Option$().hy(new URLSearchParams(window.location.search).get("search"));
  if (this$1.g()) {
    var $x_1 = true;
  } else {
    var x0 = this$1.R();
    $m_sc_StringOps$();
    var $x_1 = (x0 !== "");
  }
  this.jc = ($x_1 ? this$1 : $m_s_None$());
  this.je = null;
  var icon = document.getElementById("search-toggle");
  icon.onclick = ((event$2) => ((!(!document.body.contains(this.bW))) ? document.body.removeChild(this.bW) : (document.body.appendChild(this.bW), this.ct.focus(), (void 0))));
  var \u03b41$ = document.body;
  \u03b41$.addEventListener("keydown", ((e$2) => {
    $p_Ldotty_tools_scaladoc_SearchbarComponent__handleGlobalKeyDown__Lorg_scalajs_dom_KeyboardEvent__V(this, e$2);
  }));
  this.ln = icon;
  var mobileSearch = document.getElementById("mobile-scaladoc-searchbar-input");
  mobileSearch.onfocus = ((event$2$1) => ((!(!document.body.contains(this.bW))) ? (void 0) : (document.body.appendChild(this.bW), this.ct.focus(), (void 0))));
  var \u03b42$ = document.body;
  \u03b42$.addEventListener("keydown", ((e$2$1) => {
    $p_Ldotty_tools_scaladoc_SearchbarComponent__handleGlobalKeyDown__Lorg_scalajs_dom_KeyboardEvent__V(this, e$2$1);
  }));
  var this$8 = this.jc;
  var initialValue = (this$8.g() ? "" : this$8.R());
  var a = $m_Ldotty_tools_scaladoc_utils_HTML$().jf.cm($ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "scaladoc-searchbar-input"), new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().lu.t, "search"), $ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().ls.t, "Find anything"), $ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().lw.t, initialValue)]));
  a.addEventListener("input", ((e$2$2) => {
    $m_sjs_js_timers_package$().q0(this.je);
    var inputValue = e$2$2.target.value;
    return ((inputValue === "") ? (this.nA(), ($m_Ldotty_tools_scaladoc_RecentQueryStorage$().g() ? $p_Ldotty_tools_scaladoc_SearchbarComponent__showHints__Lorg_scalajs_dom_Node(this) : (this.o8(""), (void 0)))) : (this.qV(inputValue), (void 0)));
  }));
  a.autocomplete = "off";
  this.ct = a;
  this.ai = $m_Ldotty_tools_scaladoc_utils_HTML$().ax.cm($ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().es.t, "scaladoc-searchbar-results"), new $c_sjsr_WrappedVarArgs([]));
  this.bW = $p_Ldotty_tools_scaladoc_SearchbarComponent__generateRootDiv__Lorg_scalajs_dom_HTMLDivElement(this);
  this.ct.dispatchEvent(new Event("input"));
  if (((!this.jc.g()) && (!(!(!document.body.contains(this.bW)))))) {
    document.body.appendChild(this.bW);
    this.ct.focus();
  }
}
$p = $c_Ldotty_tools_scaladoc_SearchbarComponent.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_SearchbarComponent;
/** @constructor */
function $h_Ldotty_tools_scaladoc_SearchbarComponent() {
}
$h_Ldotty_tools_scaladoc_SearchbarComponent.prototype = $p;
$p.oh = (function() {
  return window.document.documentElement.getAttribute("data-pathToRoot");
});
$p.s2 = (function(p, boldChars) {
  var location = (p.fS ? p.f7 : (("" + this.oh()) + p.f7));
  var extensionTargetMessage = ((p.f5 === "") ? "" : (" extension on " + p.f5));
  return $m_s_util_ChainingOps$().f3($m_s_util_ChainingOps$().f3($m_Ldotty_tools_scaladoc_utils_HTML$().dZ.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "scaladoc-searchbar-row mono-small-inline"), $ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().fW.t, location)]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$f_sc_IterableOps__zipWithIndex__O($m_s_Predef$().l5(p.fR)).aw(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var c = $uC(x$1$2.aa());
    var i = x$1$2.kg();
    return ((c === 32) ? $m_Ldotty_tools_scaladoc_utils_HTML$().pn("&nbsp;") : (boldChars.b8(i) ? $m_Ldotty_tools_scaladoc_utils_HTML$().cf.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([("" + $cToS(c))])))) : ("" + $cToS(c))));
  }))), $m_Ldotty_tools_scaladoc_utils_HTML$().b1.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_Ldotty_tools_scaladoc_utils_HTML$().lq.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([extensionTargetMessage]))))])))), $m_Ldotty_tools_scaladoc_utils_HTML$().b1.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "pull-right scaladoc-searchbar-location")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([p.fQ])))), ((p.f6 === "") ? "" : $m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "scaladoc-searchbar-extra-info")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([p.f6])))))])))), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$3) => {
    _$2$3.onclick = ((event$2) => ((!(!document.body.contains(this.bW))) ? (document.body.removeChild(this.bW), (void 0)) : (void 0)));
  }))), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((wrapper$3) => {
    wrapper$3.addEventListener("mouseover", ((x$1$2$1) => {
      matchResult1: {
        if ((!(!(x$1$2$1 instanceof MouseEvent)))) {
          $p_Ldotty_tools_scaladoc_SearchbarComponent__handleHover__Lorg_scalajs_dom_HTMLElement__V(this, wrapper$3);
          break matchResult1;
        }
        throw new $c_s_MatchError(x$1$2$1);
      }
    }));
  })));
});
$p.oG = (function(m) {
  if ((($m_sc_StringOps$(), m.eq.charCodeAt(0)) === 101)) {
    var this$3 = m.eq;
    var location = this$3.substring(1);
  } else {
    var $x_1 = this.oh();
    var this$6 = m.eq;
    var location = (("" + $x_1) + this$6.substring(1));
  }
  return $m_s_util_ChainingOps$().f3($m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "scaladoc-searchbar-row mono-small-inline"), ($m_Ldotty_tools_scaladoc_utils_HTML$(), $ct_T2__O__O__(new $c_T2(), "result", "")), ($m_Ldotty_tools_scaladoc_utils_HTML$(), $ct_T2__O__O__(new $c_T2(), "inkuire-result", "")), ($m_Ldotty_tools_scaladoc_utils_HTML$(), $ct_T2__O__O__(new $c_T2(), "mq", ("" + m.f4)))]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_s_util_ChainingOps$().f3($m_Ldotty_tools_scaladoc_utils_HTML$().dZ.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().fW.t, location)]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([m.fN, $m_Ldotty_tools_scaladoc_utils_HTML$().b1.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "pull-right scaladoc-searchbar-inkuire-signature")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([m.fP]))))])))), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$3$3) => {
    _$3$3.onclick = ((event$2) => ((!(!document.body.contains(this.bW))) ? (document.body.removeChild(this.bW), (void 0)) : (void 0)));
  }))), $m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "scaladoc-searchbar-inkuire-package")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_Ldotty_tools_scaladoc_utils_HTML$().b1.cm($ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "micon pa"), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([])))), $m_Ldotty_tools_scaladoc_utils_HTML$().b1.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([m.fO]))))]))))])))), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((wrapper$3) => {
    wrapper$3.addEventListener("mouseover", ((x$1$2) => {
      matchResult2: {
        if ((!(!(x$1$2 instanceof MouseEvent)))) {
          $p_Ldotty_tools_scaladoc_SearchbarComponent__handleHover__Lorg_scalajs_dom_HTMLElement__V(this, wrapper$3);
          break matchResult2;
        }
        throw new $c_s_MatchError(x$1$2);
      }
    }));
  })));
});
$p.s3 = (function(rq) {
  var a = $m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "scaladoc-searchbar-row mono-small-inline"), ($m_Ldotty_tools_scaladoc_utils_HTML$(), $ct_T2__O__O__(new $c_T2(), "result", ""))]), new $c_sjsr_WrappedVarArgs([$m_Ldotty_tools_scaladoc_utils_HTML$().dZ.a1(new $c_sjsr_WrappedVarArgs([$m_Ldotty_tools_scaladoc_utils_HTML$().b1.a1(new $c_sjsr_WrappedVarArgs([rq.query]))]))]));
  a.addEventListener("click", ((_$5$2) => {
    this.ct.value = rq.query;
    return (!(!this.ct.dispatchEvent(new Event("input"))));
  }));
  a.addEventListener("mouseover", ((x$1$2) => {
    matchResult3: {
      if ((!(!(x$1$2 instanceof MouseEvent)))) {
        $p_Ldotty_tools_scaladoc_SearchbarComponent__handleHover__Lorg_scalajs_dom_HTMLElement__V(this, a);
        break matchResult3;
      }
      throw new $c_s_MatchError(x$1$2);
    }
  }));
  return a;
});
$p.ks = (function(kind, customClass) {
  var $x_3 = $m_Ldotty_tools_scaladoc_utils_HTML$().ax;
  var $x_2 = new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "scaladoc-searchbar-row mono-small-inline"), ($m_Ldotty_tools_scaladoc_utils_HTML$(), $ct_T2__O__O__(new $c_T2(), "divider", ""))]);
  var $x_1 = $m_Ldotty_tools_scaladoc_utils_HTML$().b1;
  var this$9 = $m_Ldotty_tools_scaladoc_utils_HTML$().A;
  var value = ((("micon " + $m_sc_StringOps$().oD(kind, 2)) + " ") + customClass);
  return $x_3.D($x_2, new $c_sjsr_WrappedVarArgs([$x_1.cm($ct_T2__O__O__(new $c_T2(), this$9.t, value), new $c_sjsr_WrappedVarArgs([])), $m_Ldotty_tools_scaladoc_utils_HTML$().b1.a1(new $c_sjsr_WrappedVarArgs([kind]))]));
});
$p.qU = (function(query) {
  return $m_s_concurrent_Future$().pQ(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.lj.rw(query))), $m_s_concurrent_ExecutionContext$().em()).hJ(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((result$2) => {
    if (result$2.g()) {
      var noResultsDiv = $m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().es.t, "no-results-container")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O([$m_Ldotty_tools_scaladoc_utils_HTML$().ax.cm($ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "no-result-icon"), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([])))), $m_Ldotty_tools_scaladoc_utils_HTML$().lp.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "h200 no-result-header")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["No results match your filter criteria."])))), $m_Ldotty_tools_scaladoc_utils_HTML$().jg.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "body-small no-result-content")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["Try adjusting or clearing your filters", $m_Ldotty_tools_scaladoc_utils_HTML$().jg.a1(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["to display better result"]))))])))), $m_s_util_ChainingOps$().f3($m_Ldotty_tools_scaladoc_utils_HTML$().hZ.D(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().I(new ($d_s_Equals.r().C)([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().es.t, "searchbar-clear-button"), $ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "clearButton label-only-button")]))), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().z(new $ac_O(["Clear all filters"])))), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$6$3) => {
        _$6$3.addEventListener("click", ((_$7$2) => {
          this.ct.value = "";
          return (!(!this.ct.dispatchEvent(new Event("input"))));
        }));
      })))]))));
      this.ai.scrollTop = 0.0;
      return this.ai.appendChild(noResultsDiv);
    } else {
      var resultWithDocBonus = result$2.iY(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entry$2) => {
        if ((entry$2.bV.dx === "static")) {
          var this$47 = window.location.href;
          var $x_1 = (!((this$47.indexOf("api") | 0) !== (-1)));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          return new $c_Ldotty_tools_scaladoc_MatchResult(((7 + entry$2.cK) | 0), entry$2.bV, entry$2.dw);
        } else {
          return entry$2;
        }
      })));
      var fragment = document.createDocumentFragment();
      $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O($f_sc_IterableOps__groupBy__F1__sci_Map(resultWithDocBonus, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$9$2) => _$9$2.bV.dx))).aw(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
        if ((x$1$2 !== null)) {
          var kind = x$1$2.aa();
          var results = x$1$2.ab();
          var this$48 = $f_sc_IterableOnceOps__maxByOption__F1__s_math_Ordering__s_Option(results, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$10$2) => _$10$2.cK)), $m_s_math_Ordering$Int$());
          var f$2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$11$2) => _$11$2.cK));
          return new $c_T3(kind, (this$48.g() ? $m_s_None$() : new $c_s_Some(f$2.d(this$48.R()))), results);
        }
        throw new $c_s_MatchError(x$1$2);
      }))).c1(), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$1) => {
        if ((x$1$2$1 !== null)) {
          var topScore = x$1$2$1.g4;
          var default$1 = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => 0));
          return ((-((topScore.g() ? default$1.Q() : topScore.R()) | 0)) | 0);
        }
        throw new $c_s_MatchError(x$1$2$1);
      })), $m_s_math_Ordering$Int$()).iY(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => {
        if ((x$1$2$2 !== null)) {
          return $ct_T2__O__O__(new $c_T2(), x$1$2$2.g3, x$1$2$2.g5.oC(40));
        }
        throw new $c_s_MatchError(x$1$2$2);
      }))).iY(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3) => {
        matchResult7: {
          if ((x$1$3 !== null)) {
            var kind$2 = x$1$3.aa();
            var results$2 = x$1$3.ab();
            var kindSeparator = this.ks(kind$2, "");
            var htmlEntries = results$2.iY(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((result$2$1) => this.s2(result$2$1.bV, result$2$1.dw))));
            var loadMoreElement = $p_Ldotty_tools_scaladoc_SearchbarComponent__createLoadMoreElement$1__Lorg_scalajs_dom_HTMLDivElement(this);
            fragment.appendChild(kindSeparator);
            var f$4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((newChild$2) => fragment.appendChild(newChild$2)));
            var these = htmlEntries;
            while ((!these.g())) {
              f$4.d(these.m());
              these = these.o();
            }
            fragment.appendChild(loadMoreElement);
            var nextElems = $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(htmlEntries, this.lk, htmlEntries);
            if ((!nextElems.g())) {
              var f$5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$13$3) => {
                _$13$3.classList.add("hidden");
              }));
              var these$1 = nextElems;
              while ((!these$1.g())) {
                f$5.d(these$1.m());
                these$1 = these$1.o();
              }
              $p_Ldotty_tools_scaladoc_SearchbarComponent__loadMoreResults$1__Lorg_scalajs_dom_HTMLDivElement__sci_List__V(this, loadMoreElement, nextElems);
              break matchResult7;
            } else {
              loadMoreElement.classList.add("hidden");
              break matchResult7;
            }
          }
          throw new $c_s_MatchError(x$1$3);
        }
      })));
      this.ai.scrollTop = 0.0;
      return this.ai.appendChild(fragment);
    }
  })), $m_s_concurrent_ExecutionContext$().em());
});
$p.o8 = (function(query) {
  var recentQueries = $m_Ldotty_tools_scaladoc_RecentQueryStorage$().iV();
  if ((query !== "")) {
    $m_Ldotty_tools_scaladoc_RecentQueryStorage$().px(new ($a_Ldotty_tools_scaladoc_RecentQuery())(query, (+Date.now())));
  }
  var res = [];
  var len = (recentQueries.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = recentQueries[i];
    var this$6 = x0.query;
    _return: {
      var len$1 = this$6.length;
      if ((!((query === null) || (query.length !== len$1)))) {
        var i$1 = 0;
        while ((i$1 !== len$1)) {
          var thisCP = $f_T__codePointAt__I__I(this$6, i$1);
          if (($m_jl_Character$().hS($m_jl_Character$().j9(thisCP)) !== $m_jl_Character$().hS($m_jl_Character$().j9($f_T__codePointAt__I__I(query, i$1))))) {
            var $x_1 = false;
            break _return;
          }
          i$1 = ((i$1 + ((thisCP >= 65536) ? 2 : 1)) | 0);
        }
        var $x_1 = true;
      } else {
        var $x_1 = false;
      }
    }
    if ((!$x_1)) {
      (res.push(x0) | 0);
    }
    i = ((1 + i) | 0);
  }
  var res$1 = [];
  var len$2 = (res.length | 0);
  var i$2 = 0;
  while ((i$2 < len$2)) {
    var x0$1 = res[i$2];
    $m_sc_StringOps$();
    var x = x0$1.query;
    var v = query;
    var i$3 = 0;
    var len$3 = x.length;
    while ((i$3 < len$3)) {
      var x0$2 = v;
      var index = i$3;
      var x1 = x.charCodeAt(index);
      if ((x0$2 !== "")) {
        var this$15 = $m_sc_StringOps$().qX(x0$2);
        var this$18 = ("" + $cToS(this$15));
        var anotherString = ("" + $cToS(x1));
        _return$1: {
          var len$4 = this$18.length;
          if ((anotherString.length === len$4)) {
            var i$4 = 0;
            while ((i$4 !== len$4)) {
              var thisCP$1 = $f_T__codePointAt__I__I(this$18, i$4);
              if (($m_jl_Character$().hS($m_jl_Character$().j9(thisCP$1)) !== $m_jl_Character$().hS($m_jl_Character$().j9($f_T__codePointAt__I__I(anotherString, i$4))))) {
                var $x_2 = false;
                break _return$1;
              }
              i$4 = ((i$4 + ((thisCP$1 >= 65536) ? 2 : 1)) | 0);
            }
            var $x_2 = true;
          } else {
            var $x_2 = false;
          }
        }
        if ($x_2) {
          v = $m_sc_StringOps$().j7(x0$2);
        } else {
          v = x0$2;
        }
      } else {
        v = "";
      }
      i$3 = ((1 + i$3) | 0);
    }
    if ((v === "")) {
      (res$1.push(x0$1) | 0);
    }
    i$2 = ((1 + i$2) | 0);
  }
  if (((res$1.length | 0) !== 0)) {
    this.ai.appendChild(this.ks("Recently searched", ""));
    var len$5 = (res$1.length | 0);
    var res$2 = new Array(len$5);
    var i$5 = 0;
    while ((i$5 < len$5)) {
      res$2[i$5] = this.s3(res$1[i$5]);
      i$5 = ((1 + i$5) | 0);
    }
    var len$6 = (res$2.length | 0);
    var i$6 = 0;
    while ((i$6 < len$6)) {
      var x0$4 = res$2[i$6];
      this.ai.appendChild(x0$4);
      i$6 = ((1 + i$6) | 0);
    }
  }
});
$p.qe = (function() {
  return $m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "loading-wrapper")]), new $c_sjsr_WrappedVarArgs([$m_Ldotty_tools_scaladoc_utils_HTML$().ax.cm($ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "loading"), new $c_sjsr_WrappedVarArgs([]))]));
});
$p.s4 = (function(s) {
  return $m_Ldotty_tools_scaladoc_utils_HTML$().ax.D(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "scaladoc-searchbar-row mono-small-inline"), ($m_Ldotty_tools_scaladoc_utils_HTML$(), $ct_T2__O__O__(new $c_T2(), "error", ""))]), new $c_sjsr_WrappedVarArgs([$m_Ldotty_tools_scaladoc_utils_HTML$().b1.D(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $m_Ldotty_tools_scaladoc_utils_HTML$().A.t, "search-error")]), new $c_sjsr_WrappedVarArgs([s]))]));
});
$p.qV = (function(query) {
  this.ai.scrollTop = 0.0;
  this.ai.onscroll = ((event$2) => (void 0));
  document.createDocumentFragment();
  var $x_1 = $m_sjs_js_timers_package$();
  var this$3 = new $c_s_concurrent_duration_package$DurationInt(($m_s_concurrent_duration_package$(), 300));
  var unit = $m_s_concurrent_duration_package$().iz;
  var this$ = this$3.hh;
  $m_s_concurrent_duration_Duration$();
  var hi = (this$ >> 31);
  this.je = $x_1.rO(new $c_s_concurrent_duration_FiniteDuration(this$, hi, unit), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    this.nA();
    this.o8(query);
    matchResult8: {
      var x21 = this.lm.rr(query);
      if ((x21 instanceof $c_Ldotty_tools_scaladoc_NameAndKindQuery)) {
        this.qU(x21);
        break matchResult8;
      }
      if ((x21 instanceof $c_Ldotty_tools_scaladoc_SignatureQuery)) {
        var loading = this.qe();
        var kindSeparator = this.ks("inkuire", "");
        this.ai.appendChild(loading);
        this.ai.appendChild(kindSeparator);
        this.ll.rx(query, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((m$3) => {
          var this$10 = new $c_Lorg_scalajs_dom_DOMList$DOMListSeq(this.ai.children);
          _return: {
            var it = this$10.c();
            while (it.i()) {
              var a = it.e();
              if (((!(!a.hasAttribute("mq"))) && ($m_jl_Integer$().kP(a.getAttribute("mq"), 10, 214748364) > m$3.f4))) {
                var next = new $c_s_Some(a);
                break _return;
              }
            }
            var next = $m_s_None$();
          }
          if (next.g()) {
            this.ai.appendChild(this.oG(m$3));
          } else {
            var x0 = next.R();
            this.ai.insertBefore(this.oG(m$3), x0);
          }
        })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((s$3) => {
          this.ai.removeChild(loading);
          this.ai.appendChild(this.s4(s$3));
        })));
        break matchResult8;
      }
      throw new $c_s_MatchError(x21);
    }
  })));
});
$p.nA = (function() {
  while ((!(!this.ai.hasChildNodes()))) {
    this.ai.removeChild(this.ai.lastChild);
  }
});
var $d_Ldotty_tools_scaladoc_SearchbarComponent = new $TypeData().i($c_Ldotty_tools_scaladoc_SearchbarComponent, "dotty.tools.scaladoc.SearchbarComponent", ({
  df: 1
}));
/** @constructor */
function $c_Ldotty_tools_scaladoc_StringUtils$() {
}
$p = $c_Ldotty_tools_scaladoc_StringUtils$.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_StringUtils$;
/** @constructor */
function $h_Ldotty_tools_scaladoc_StringUtils$() {
}
$h_Ldotty_tools_scaladoc_StringUtils$.prototype = $p;
$p.kr = (function(s) {
  if ((s === "")) {
    $m_sci_List$();
    return $m_sci_Nil$();
  } else {
    var x = $m_sc_StringOps$().j7(s);
    $m_sc_StringOps$();
    $m_sc_StringOps$();
    var from = 0;
    _return: {
      var len = x.length;
      var i = from;
      while ((i < len)) {
        if ($m_jl_UnicodeData$().kO(x.charCodeAt(i))) {
          var $x_1 = i;
          break _return;
        }
        i = ((1 + i) | 0);
      }
      var $x_1 = (-1);
    }
    if (($x_1 === (-1))) {
      return new $c_sci_$colon$colon(s, $m_sci_Nil$());
    } else {
      var $x_6 = $m_sc_StringOps$();
      var x$1 = $m_sc_StringOps$().j7(s);
      $m_sc_StringOps$();
      $m_sc_StringOps$();
      var from$1 = 0;
      _return$1: {
        var len$1 = x$1.length;
        var i$1 = from$1;
        while ((i$1 < len$1)) {
          if ($m_jl_UnicodeData$().kO(x$1.charCodeAt(i$1))) {
            var $x_5 = i$1;
            break _return$1;
          }
          i$1 = ((1 + i$1) | 0);
        }
        var $x_5 = (-1);
      }
      var $x_4 = new $c_sci_$colon$colon($x_6.oD(s, ((1 + $x_5) | 0)), $m_sci_Nil$());
      var $x_3 = $m_sc_StringOps$();
      var x$2 = $m_sc_StringOps$().j7(s);
      $m_sc_StringOps$();
      $m_sc_StringOps$();
      var from$2 = 0;
      _return$2: {
        var len$2 = x$2.length;
        var i$2 = from$2;
        while ((i$2 < len$2)) {
          if ($m_jl_UnicodeData$().kO(x$2.charCodeAt(i$2))) {
            var $x_2 = i$2;
            break _return$2;
          }
          i$2 = ((1 + i$2) | 0);
        }
        var $x_2 = (-1);
      }
      return $x_4.pL(this.kr($x_3.nN(s, ((1 + $x_2) | 0))));
    }
  }
});
var $d_Ldotty_tools_scaladoc_StringUtils$ = new $TypeData().i($c_Ldotty_tools_scaladoc_StringUtils$, "dotty.tools.scaladoc.StringUtils$", ({
  dg: 1
}));
var $n_Ldotty_tools_scaladoc_StringUtils$;
function $m_Ldotty_tools_scaladoc_StringUtils$() {
  if ((!$n_Ldotty_tools_scaladoc_StringUtils$)) {
    $n_Ldotty_tools_scaladoc_StringUtils$ = new $c_Ldotty_tools_scaladoc_StringUtils$();
  }
  return $n_Ldotty_tools_scaladoc_StringUtils$;
}
/** @constructor */
function $c_Ldotty_tools_scaladoc_TooltipNormalizer() {
  document.addEventListener("mouseover", ((e$2) => {
    if ((!(!(!(!e$2.target.closest(".snippet-error.tooltip")))))) {
      var tooltipParent = e$2.target;
      var tooltipContainer = tooltipParent.querySelector(".tooltip-container");
      if (((typeof tooltipContainer) === "undefined")) {
      } else if ((!(!(tooltipContainer instanceof HTMLSpanElement)))) {
        var a = (+tooltipParent.offsetLeft);
        var $x_1 = $m_RTLong$().kG((+Math.round(a)));
        tooltipContainer.style = ("left: " + $s_RTLong__toString__I__I__T($x_1.l, $x_1.h));
      }
      return (void 0);
    } else {
      return (void 0);
    }
  }));
}
$p = $c_Ldotty_tools_scaladoc_TooltipNormalizer.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_TooltipNormalizer;
/** @constructor */
function $h_Ldotty_tools_scaladoc_TooltipNormalizer() {
}
$h_Ldotty_tools_scaladoc_TooltipNormalizer.prototype = $p;
var $d_Ldotty_tools_scaladoc_TooltipNormalizer = new $TypeData().i($c_Ldotty_tools_scaladoc_TooltipNormalizer, "dotty.tools.scaladoc.TooltipNormalizer", ({
  dh: 1
}));
/** @constructor */
function $c_Ldotty_tools_scaladoc_utils_HTML$() {
  this.ax = null;
  this.b1 = null;
  this.dZ = null;
  this.jg = null;
  this.i0 = null;
  this.lp = null;
  this.hZ = null;
  this.jf = null;
  this.lr = null;
  this.lv = null;
  this.f8 = null;
  this.lo = null;
  this.lt = null;
  this.cf = null;
  this.lq = null;
  this.A = null;
  this.fW = null;
  this.es = null;
  this.lu = null;
  this.ls = null;
  this.lw = null;
  $n_Ldotty_tools_scaladoc_utils_HTML$ = this;
  this.ax = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("div");
  this.b1 = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("span");
  this.dZ = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("a");
  this.jg = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("p");
  this.i0 = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("h1");
  this.lp = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("h2");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("h3");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("h4");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("h5");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("h6");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("dl");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("dd");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("dt");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("svg");
  this.hZ = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("button");
  this.jf = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("input");
  this.lr = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("label");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("script");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("link");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("footer");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("html");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("head");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("meta");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("main");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("title");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("body");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("nav");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("img");
  this.lv = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("ul");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("ol");
  this.f8 = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("li");
  this.lo = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("code");
  this.lt = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("pre");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("table");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("thead");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("tbody");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("th");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("tr");
  $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("td");
  this.cf = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("b");
  this.lq = $m_Ldotty_tools_scaladoc_utils_HTML$Tag$().E("i");
  this.A = new $c_Ldotty_tools_scaladoc_utils_HTML$Attr("class");
  this.fW = new $c_Ldotty_tools_scaladoc_utils_HTML$Attr("href");
  this.es = new $c_Ldotty_tools_scaladoc_utils_HTML$Attr("id");
  this.lu = new $c_Ldotty_tools_scaladoc_utils_HTML$Attr("type");
  this.ls = new $c_Ldotty_tools_scaladoc_utils_HTML$Attr("placeholder");
  this.lw = new $c_Ldotty_tools_scaladoc_utils_HTML$Attr("value");
}
$p = $c_Ldotty_tools_scaladoc_utils_HTML$.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_utils_HTML$;
/** @constructor */
function $h_Ldotty_tools_scaladoc_utils_HTML$() {
}
$h_Ldotty_tools_scaladoc_utils_HTML$.prototype = $p;
$p.pn = (function(content) {
  var x = document.createElement("a");
  x.innerHTML = content;
  return x;
});
var $d_Ldotty_tools_scaladoc_utils_HTML$ = new $TypeData().i($c_Ldotty_tools_scaladoc_utils_HTML$, "dotty.tools.scaladoc.utils.HTML$", ({
  di: 1
}));
var $n_Ldotty_tools_scaladoc_utils_HTML$;
function $m_Ldotty_tools_scaladoc_utils_HTML$() {
  if ((!$n_Ldotty_tools_scaladoc_utils_HTML$)) {
    $n_Ldotty_tools_scaladoc_utils_HTML$ = new $c_Ldotty_tools_scaladoc_utils_HTML$();
  }
  return $n_Ldotty_tools_scaladoc_utils_HTML$;
}
/** @constructor */
function $c_jl_BoundsChecks$() {
}
$p = $c_jl_BoundsChecks$.prototype = new $h_O();
$p.constructor = $c_jl_BoundsChecks$;
/** @constructor */
function $h_jl_BoundsChecks$() {
}
$h_jl_BoundsChecks$.prototype = $p;
$p.r5 = (function(index, length) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((("Index " + index) + " out of bounds [0, ") + length) + "]"));
});
var $d_jl_BoundsChecks$ = new $TypeData().i($c_jl_BoundsChecks$, "java.lang.BoundsChecks$", ({
  dq: 1
}));
var $n_jl_BoundsChecks$;
function $m_jl_BoundsChecks$() {
  if ((!$n_jl_BoundsChecks$)) {
    $n_jl_BoundsChecks$ = new $c_jl_BoundsChecks$();
  }
  return $n_jl_BoundsChecks$;
}
var $d_jl_Runnable = new $TypeData().i(1, "java.lang.Runnable", ({
  aF: 1
}));
function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
  var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().dt("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
  var trace = [];
  var i = 0;
  while ((i < (lines.length | 0))) {
    var line = lines[i];
    if ((line !== "")) {
      var mtch = NormalizedFrameLine.exec(line);
      if ((mtch !== null)) {
        var classAndMethodName = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, mtch[1]);
        var $x_5 = classAndMethodName[0];
        var $x_4 = classAndMethodName[1];
        var $x_3 = mtch[2];
        var x$2 = mtch[3];
        var $x_2 = parseInt(x$2);
        var x$3 = mtch[4];
        var $x_1 = trace.push(new $c_jl_StackTraceElement($x_5, $x_4, $x_3, ($x_2 | 0), ((x$3 !== (void 0)) ? (parseInt(x$3) | 0) : (-1))));
      } else {
        (trace.push(new $c_jl_StackTraceElement("<jscode>", line, null, (-1), (-1))) | 0);
      }
    }
    i = ((1 + i) | 0);
  }
  var len = (trace.length | 0);
  var result = new ($d_jl_StackTraceElement.r().C)(len);
  i = 0;
  while ((i < len)) {
    result.a[i] = trace[i];
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractClassMethod__T__O($thiz, functionName) {
  var PatBC = $m_jl_StackTrace$StringRE$().dt("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
  var PatS = $m_jl_StackTrace$StringRE$().dt("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
  var PatCT = $m_jl_StackTrace$StringRE$().dt("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
  var PatN = $m_jl_StackTrace$StringRE$().dt("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
  var PatM = $m_jl_StackTrace$StringRE$().dt("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
  var matchBC = PatBC.exec(functionName);
  var matchBCOrS = ((matchBC !== null) ? matchBC : PatS.exec(functionName));
  if ((matchBCOrS !== null)) {
    return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchBCOrS[1]), $p_jl_StackTrace$__decodeMethodName__T__T($thiz, matchBCOrS[2])];
  } else {
    var matchCT = PatCT.exec(functionName);
    var matchCTOrN = ((matchCT !== null) ? matchCT : PatN.exec(functionName));
    if ((matchCTOrN !== null)) {
      return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchCTOrN[1]), "<init>"];
    } else {
      var matchM = PatM.exec(functionName);
      return ((matchM !== null) ? [$p_jl_StackTrace$__decodeClassName__T__T($thiz, matchM[1]), "<clinit>"] : ["<jscode>", functionName]);
    }
  }
}
function $p_jl_StackTrace$__decodeClassName__T__T($thiz, encodedName) {
  var dict = $p_jl_StackTrace$__decompressedClasses__O($thiz);
  if ((!(!$m_jl_Utils$Cache$().g2.call(dict, encodedName)))) {
    var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
    var base = dict$1[encodedName];
  } else {
    var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
  }
  var this$3 = base.split("_").join(".");
  return this$3.split("\uff3f").join("_");
}
function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
  if (((((1 & $thiz.cL) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.O = "java_lang_Object";
    dict.T = "java_lang_String";
    var index = 0;
    while ((index <= 22)) {
      if ((index >= 2)) {
        var key = ("T" + index);
        var value = ("scala_Tuple" + index);
        dict[key] = value;
      }
      var key$1 = ("F" + index);
      var value$1 = ("scala_Function" + index);
      dict[key$1] = value$1;
      index = ((1 + index) | 0);
    }
    $thiz.jj = dict;
    $thiz.cL = (((1 | $thiz.cL) << 24) >> 24);
  }
  return $thiz.jj;
}
function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
  return (((((1 & $thiz.cL) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.jj);
}
function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
  if (((((2 & $thiz.cL) << 24) >> 24) === 0)) {
    var dict = ({});
    dict.sjsr_ = "scala_scalajs_runtime_";
    dict.sjs_ = "scala_scalajs_";
    dict.sci_ = "scala_collection_immutable_";
    dict.scm_ = "scala_collection_mutable_";
    dict.scg_ = "scala_collection_generic_";
    dict.sc_ = "scala_collection_";
    dict.sr_ = "scala_runtime_";
    dict.s_ = "scala_";
    dict.jl_ = "java_lang_";
    dict.ju_ = "java_util_";
    $thiz.jk = dict;
    $thiz.cL = (((2 | $thiz.cL) << 24) >> 24);
  }
  return $thiz.jk;
}
function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
  return (((((2 & $thiz.cL) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.jk);
}
function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
  if (((((4 & $thiz.cL) << 24) >> 24) === 0)) {
    $thiz.ji = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
    $thiz.cL = (((4 | $thiz.cL) << 24) >> 24);
  }
  return $thiz.ji;
}
function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
  return (((((4 & $thiz.cL) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.ji);
}
function $p_jl_StackTrace$__decodeMethodName__T__T($thiz, encodedName) {
  if ((!(!encodedName.startsWith("init___")))) {
    return "<init>";
  } else {
    var methodNameLen = (encodedName.indexOf("__") | 0);
    return ((methodNameLen < 0) ? encodedName : encodedName.substring(0, methodNameLen));
  }
}
function $p_jl_StackTrace$__normalizeStackTraceLines__O__O($thiz, e) {
  return ((!(!(!(!(!e))))) ? [] : ((!(!(!(!(e.arguments && e.stack))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : ((!(!(!(!(e.stack && e.sourceURL))))) ? $p_jl_StackTrace$__extractSafari__O__O($thiz, e) : ((!(!(!(!(e.stack && e.number))))) ? $p_jl_StackTrace$__extractIE__O__O($thiz, e) : ((!(!(!(!(e.stack && e.fileName))))) ? $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) : ((!(!(!(!(e.message && e["opera#sourceloc"]))))) ? ((!(!(!(!(!e.stacktrace))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : ((!(!(!(!((e.message.indexOf("\n") > (-1.0)) && (e.message.split("\n").length > e.stacktrace.split("\n").length)))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e))) : ((!(!(!(!((e.message && e.stack) && e.stacktrace))))) ? ((!(!(!(!(e.stacktrace.indexOf("called from line") < 0.0))))) ? $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera11__O__O($thiz, e)) : ((!(!(!(!(e.stack && (!e.fileName)))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : $p_jl_StackTrace$__extractOther__O__O($thiz, e)))))))));
}
function $p_jl_StackTrace$__extractChrome__O__O($thiz, e) {
  return (e.stack + "\n").replace($m_jl_StackTrace$StringRE$().dt("^[\\s\\S]+?\\s+at\\s+"), " at ").replace($m_jl_StackTrace$StringRE$().cr("^\\s+(at eval )?at\\s+", "gm"), "").replace($m_jl_StackTrace$StringRE$().cr("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2").replace($m_jl_StackTrace$StringRE$().cr("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)").replace($m_jl_StackTrace$StringRE$().cr("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2").split("\n").slice(0, (-1));
}
function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().cr("(?:\\n@:0)?\\s+$", "m"), "").replace($m_jl_StackTrace$StringRE$().cr("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@").split("\n");
}
function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
  var qual$1 = e.stack.replace($m_jl_StackTrace$StringRE$().cr("^\\s*at\\s+(.*)$", "gm"), "$1").replace($m_jl_StackTrace$StringRE$().cr("^Anonymous function\\s+", "gm"), "{anonymous}() ").replace($m_jl_StackTrace$StringRE$().cr("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2").split("\n");
  return qual$1.slice(1);
}
function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
  return e.stack.replace($m_jl_StackTrace$StringRE$().cr("\\[native code\\]\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().cr("^(?=\\w+Error\\:).*$\\n", "m"), "").replace($m_jl_StackTrace$StringRE$().cr("^@", "gm"), "{anonymous}()@").split("\n");
}
function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().cr("Line (\\d+).*script (?:in )?(\\S+)", "i");
  var lines = e.message.split("\n");
  var result = [];
  var i = 2;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      (result.push(((("{anonymous}()@" + mtch[2]) + ":") + mtch[1])) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().cr("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var x = mtch[3];
      var fnName = ((x !== (void 0)) ? x : "{anonymous}");
      (result.push(((((fnName + "()@") + mtch[2]) + ":") + mtch[1])) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().dt("^(.*)@(.+):(\\d+)$");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var x = mtch[1];
      var fnName = ((x !== (void 0)) ? (x + "()") : "global code");
      (result.push(((((fnName + "@") + mtch[2]) + ":") + mtch[3])) | 0);
    }
    i = ((1 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOpera11__O__O($thiz, e) {
  var lineRE = $m_jl_StackTrace$StringRE$().dt("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
  var lines = e.stacktrace.split("\n");
  var result = [];
  var i = 0;
  var len = (lines.length | 0);
  while ((i < len)) {
    var mtch = lineRE.exec(lines[i]);
    if ((mtch !== null)) {
      var location = ((((mtch[4] + ":") + mtch[1]) + ":") + mtch[2]);
      var x$3 = mtch[2];
      var fnName0 = ((x$3 !== (void 0)) ? x$3 : "global code");
      var fnName = fnName0.replace($m_jl_StackTrace$StringRE$().dt("<anonymous function: (\\S+)>"), "$1").replace($m_jl_StackTrace$StringRE$().dt("<anonymous function>"), "{anonymous}");
      (result.push(((fnName + "@") + location)) | 0);
    }
    i = ((2 + i) | 0);
  }
  return result;
}
function $p_jl_StackTrace$__extractOther__O__O($thiz, e) {
  return [];
}
function $p_jl_StackTrace$__loop$1__I__T__T($thiz, i, encodedName$1) {
  while (true) {
    if ((i < ($p_jl_StackTrace$__compressedPrefixes__O($thiz).length | 0))) {
      var prefix = $p_jl_StackTrace$__compressedPrefixes__O($thiz)[i];
      if ((!(!encodedName$1.startsWith(prefix)))) {
        var dict = $p_jl_StackTrace$__decompressedPrefixes__O($thiz);
        return (("" + dict[prefix]) + encodedName$1.substring(prefix.length));
      } else {
        i = ((1 + i) | 0);
      }
    } else {
      return ((!(!encodedName$1.startsWith("L"))) ? encodedName$1.substring(1) : encodedName$1);
    }
  }
}
/** @constructor */
function $c_jl_StackTrace$() {
  this.jj = null;
  this.jk = null;
  this.ji = null;
  this.cL = 0;
}
$p = $c_jl_StackTrace$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$;
/** @constructor */
function $h_jl_StackTrace$() {
}
$h_jl_StackTrace$.prototype = $p;
$p.qt = (function(jsError) {
  return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError));
});
var $d_jl_StackTrace$ = new $TypeData().i($c_jl_StackTrace$, "java.lang.StackTrace$", ({
  dF: 1
}));
var $n_jl_StackTrace$;
function $m_jl_StackTrace$() {
  if ((!$n_jl_StackTrace$)) {
    $n_jl_StackTrace$ = new $c_jl_StackTrace$();
  }
  return $n_jl_StackTrace$;
}
/** @constructor */
function $c_jl_StackTrace$StringRE$() {
}
$p = $c_jl_StackTrace$StringRE$.prototype = new $h_O();
$p.constructor = $c_jl_StackTrace$StringRE$;
/** @constructor */
function $h_jl_StackTrace$StringRE$() {
}
$h_jl_StackTrace$StringRE$.prototype = $p;
$p.dt = (function(this$) {
  return new RegExp(this$);
});
$p.cr = (function(this$, mods) {
  return new RegExp(this$, mods);
});
var $d_jl_StackTrace$StringRE$ = new $TypeData().i($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
  dG: 1
}));
var $n_jl_StackTrace$StringRE$;
function $m_jl_StackTrace$StringRE$() {
  if ((!$n_jl_StackTrace$StringRE$)) {
    $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$();
  }
  return $n_jl_StackTrace$StringRE$;
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.ly = null;
  this.g1 = null;
  $n_jl_System$Streams$ = this;
  this.ly = new $c_jl_JSConsoleBasedPrintStream(false);
  this.g1 = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  dJ: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.22.0";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.jl = null;
  this.lz = null;
  $n_jl_System$SystemProperties$ = this;
  this.jl = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.lz = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.kJ = (function(key, default$1) {
  if ((this.jl !== null)) {
    var dict = this.jl;
    return ((!(!$m_jl_Utils$Cache$().g2.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.lz.kJ(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  dK: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Thread$() {
  this.lA = null;
  $n_jl_Thread$ = this;
  this.lA = new $c_jl_Thread((void 0));
}
$p = $c_jl_Thread$.prototype = new $h_O();
$p.constructor = $c_jl_Thread$;
/** @constructor */
function $h_jl_Thread$() {
}
$h_jl_Thread$.prototype = $p;
var $d_jl_Thread$ = new $TypeData().i($c_jl_Thread$, "java.lang.Thread$", ({
  dL: 1
}));
var $n_jl_Thread$;
function $m_jl_Thread$() {
  if ((!$n_jl_Thread$)) {
    $n_jl_Thread$ = new $c_jl_Thread$();
  }
  return $n_jl_Thread$;
}
/** @constructor */
function $c_jl_ThreadLocal() {
  this.jm = false;
  this.lB = null;
  this.jm = false;
}
$p = $c_jl_ThreadLocal.prototype = new $h_O();
$p.constructor = $c_jl_ThreadLocal;
/** @constructor */
function $h_jl_ThreadLocal() {
}
$h_jl_ThreadLocal.prototype = $p;
$p.R = (function() {
  if ((!this.jm)) {
    this.hR(null);
  }
  return this.lB;
});
$p.hR = (function(o) {
  this.lB = o;
  this.jm = true;
});
var $d_jl_ThreadLocal = new $TypeData().i($c_jl_ThreadLocal, "java.lang.ThreadLocal", ({
  dN: 1
}));
/** @constructor */
function $c_jl_UnicodeData$() {
  this.lF = null;
  $n_jl_UnicodeData$ = this;
  this.lF = $constArrUDiffs_I(2891, "D4u4_@_4|7^80003f3H0004u3y3t4i3|4^3z3o8m3d4s100004]300004`3m80003w3H0004v3j<j3f2Lu3eL^30t3f10|70^23|60^G]7|9]@^:|8^7|A^7|;]8^;|9^7|L^?|@^:|9^?|7^4`4y7^8`?y4_4|7^4{7_4|23|2<^7^4{?]9]7;^G|9^7|8^>|=]13^8@`3z8003<_3H0014]8000L]3H0008t?f1@t8001Gf3H000DtKf4t3f4t23h8008D]3H0004]58x?`4t4c6|80008a3H0003{<s3f3|@x7c100004t300003f;|4^3|4^9^6|1O|4^14^4=]7|7]8^<|2O^@|7u4f;|8^6|68^60|47x3gD^8w6L^1G|<2|4^4G|8a4qGg54s3y3i8y7{3c4c3N]1Fk5o2o5k6o5k6o5k1w10b3;x@b@p7e1<mHf;|8_3{8a9g1:o3u4e;j3O|4^1:^1B]6]J`18l?j:^1|<<p3j6^Jg4i3g:]={:_6s3g>]1|8a17y<t7f4p1Ge4m3r6^1|3J^1N]1;w8b;6^19|3x1Hf17y44^13{8u3y;i3y8c4q7h2J^6]7{6_11{6_9{6_>]3w8u1Ke4b34^;w8u3e4b1;xDb30s3gGx4m7mHcO|53|4_1:]1>]8g5sJ]J]2<_1z6J^4_2{9_;{10_={6_6z7^>]9|1:^6o7n18l3i4^1N^4_5u4bOx8b7x8b2Gx4bKx4b3x<b?x9c9_;{=w:e5u:e6z6x12e1u@b7x4b>^5w8f17y8r7nHn3{3h4p3k3w:c8_1u4bGx@b7x8b2Gx4bKx4b7x4b7x4b7x8c3w6e;{5wBc5w:c6]3w>c1wLb?x4b3xLf19z5|>^2o3e1:c8_1u4b13x4b;x4b2Gx4bKx4b7x4bCx9c9_;{Aw6c8_1u6e5{3w8b3x1Lb:^5w8f18l4_3cLb6^:];w6c4_5u4bOx8b7x8b2Gx4bKx4b7x4bCx9c9_3{4_3{=w:e5u:e5{3wLc6]4_1u@b7x4b>^5w8f18p3f4cGr1:c1|3x4bGx<b;x4b?x<b7x4b3x4b7x<b7x<b;x<b1?xBe7{4_5u>e9u6e9{3w8b3xJe1u1Hf18_<nG{4_3aFc4_;{1|Ox4b;x4b2Kx4b1Ox9c9]<_=u6c9w6c:]3wNc5w4b;x8b3x8b:^5w8f17tLu3pLn3f6^4_6m3jOx4b;x4b2Kx4b17x4bCx9c9_3{4_Au6c4_5u6e7{2]3wNe5uHb7x4b:^5w8f17t4b:`1u1Bc8_5z13x4b;x4b54^7|6`;{=w6e9u6e:z7t3a@b>`2`Kw>^5w8f18_14n3fGx6c4_5u4b27x<b2Ox4b13x4b3x8bKx<c3wBe;{9w6c1w6eMuHf17t:e6m3e1@b62^1|:^Iw@w3hG|4_J]2]4o3n18l7e4Db7x4b3x4bCx4b2Ox4b3x4b1:^1|:^F]6]5|3x8bCx4a3y4cF]2]3w4f17t8b?x40b4t;y1La3y4a;g8sGj18_18n3g4s3g4s3g5l>p7zOx4b4?xBc1H_3{>]4o3k7|F^19w6c4=w4yOg4sGa4y7yDa?y7e4Db5>`7{@_3{B]6_1{:_7{5|4a18lGjJ`7{5|B^9|6`9z:`Iz>^=|1F^4_7{8_G{1|6`2^19|;{2s7b4G|4^3|D^3|8_5<s80003i3H0003{<`193x4b?x8bKx4b3x4b?x8b53x4b?x8b43x4b?x8bKx4b3x4b?x8b1Kx4b73x4b?x8b8;x8c<o100013p300014]1;r<b20t17aH^:G|8_G{8q3n2=@t3y3j24d3v39n6g<b9<p;o;xOxLb2:^6]4_3u14b2>^6_4m7e14b2:^5w1@b1Cx4b;x6c5w1@b6@^:_3{L_O{4_5{1<o;i4q<_4h6x8f17tHh17rHuGy4a?k<g3s4`17tHb4;|4^6CxLb20000F^200005|4:^1|3xDb8Gx18b3Kx6c<_?{8_9uBe7{4_E{;w@y3a<u7n17y3Gx8bCx1<b5?x@b37xHf100018_300003r<y47f2N^8_7{1w8u7j6F`3{4_3{Iw4c6_3{4_7{10_G{6]Ow8c4`17tHf17tHuKi4qGe8c1H^5|6]1>]9w66c@_1z5L^6_3{D_3{4_C{4_2]3zOx<f18lLa17g14s13y7e6c8_1z3J`3{@_7{6_3{6]5|8a17y5@^6_3{8_;{4_3{:_7u10u?j4B`O{10_7{2]3w<uCn17t<b<a17y3G|Hq7g13{L^5;|8^<tOe10c<o3k1D_3{K|A]7]E^6|4`3{7|3xD_8005@_3H007K{8001D_3H0003{80048_3H004D_4N]1F]1<xBG^10|<7^O|10^G{8^G|8_O|10^O|10^G{8^G|8_O{4^3|4^3|4^3|5_7]K|10^1G{8_10^O|10^O|10^O|C{4_7|@_4u3d4v;d;{4_7|@_4u;d?{8_7|?|4x;dO|Dw;b8_;{4_7|@_4u7b4i1<aDaHa9b6u4e8^3t4e3x10r7`Cy4i15c6w?|8^<^4z7_1<^3|3|4^17q4aCm4m17x80003v3H0003y8hHk<z80006k3H0004d18k<z6g80004a3H001Cy<w43c1Lc1D^?|4^;|1?w1Ly7b4x?b4x8c6|8^7|<^4w3b4x200007z200003eDxGb4x3b4x3b4x3b20000@x200004b7]<^4`?z4w7c7|8uDf7]<w3z4`7c4w3l@001O|3H0020]3H0020]<u7e@^4n7a@vD`Cz8`?z4`7z4`7z4`Kz4`3Kz8`7z4`3z4`3Kz11@`10v?d2?z8`Lw7c:3z4`3Gz34`4OzH`8Ca34y1;a2Dh7@n@0038]3H0038]3H0037l2HnFKz4`13z4`6Gz10`=Kz4`O0v1Fs3Hn5?zDz7`3Ly17a20`OOz@<z2G`7Ly?a40y7a108`5Oz2D`7zH`4Ka8y3Oa4y=3b60^60|;]8^9]J|=]<^;]8000D_3H0007z=]<;^4wHc?a<x6|Du?p4j7g4G{4_3{D_3{8b6OxLa4q3e1Ib7]2Gx14bKx4bKx4bKx4bKx4bKx4bKx4bKx4bKx6c3No9b>x=c6w5b6x13y4a7y4a5b6x9b7uO`Ci4q17y8a?y4a3z4`1Da7y<{N{3i48y37a4y;3a1@yJGa38y1?a@i4i<a3e4^4b5h17d8vN|5_7]4c3k13y@_8i3mDu7k;w4^4p4a7a4b:Gx8c200008r200007f8^4l3n;8p3i<^3xDb5;x4b;Gx4y7l@n17f40t4?a1@b20t3Ka4h18n3Gl10n3l1Ln3Ol18n4Kl1Ln17OfIH0t7Of2B2C|4^4>Kx<y6Ka14b4O|Hq7j11?|4q;j20a17y7x2A^5Ha7_<n5kN]8o3i4z8003?`3H000:_5|8Hb17y8oGe10x2Kf14t8c1G^8|8007G`3H0003{11]C|17`4t8d?`4y?^8|2C]A]7]A]1O]=^:{E^6|4_3{5^B|80030a3H000<{7`80003|3H0007{4`N^1|=^6|>^1|2N`7{8_2q?g3w<hHn7{4_3aHb6@p?e12e5z6:`1M{6]1w10u7n17tHc27|Hp;j4p3j:^2`17y3B^B]<o7j2N^1<_2]3u1<u3j3Cx>c<_1z5L^6_7{@_7{8_6]4m1Ce4a4b17t@u7jF^1{4^14a17yCx4b56^H_7{8_7{5w14b>^1|12^4_1u8f17t8u?j1O|4^Ht;f6`3{4_1z6:^1|6^9|:^5|F^2|>x30b7|4q7j1>`3{8_6m7j3|:a1{3w18bGx8bGx8bGx14bKx4bKx4_5<v80003f3H000?{80014_3H0004t7b@_:0`4>`7{4_7{4_6m3m3{3w8f17tHb1;D?x1@b2Kx@b63x@p7OO|HOOp1=Gx8b=7x4H_K{1@_C{Db6^1|18q3i1Cx4bCx4b3x4b7x4b7x4b=@s23b20b1==n7c1Of7Ox8b6GxLy3a40b1@r4_;g20oL{7_3eHc20o3y8`8|1O_8{7_?|<^;e4u?y5_G_<^3x4b;d4u4_3{7e@bCx4b@Kx8m3m4u<_3{<z7`4^3|3y4a7n18l8^;|7f38q4`3{4b3y4a3d38p4a3z4`4z7_4z7`7j17|4^5C|8^3Kx<bGx8bGx8bGx8b;x<w7|4_4^3{7c4y3z@`7a18m<i7a8b1?x4b37x4b2;x4b7x4b1Kx8b1Gx48b?;xDu;e@h5Cr<y13k6D^@n23l8n;a4y1Ca<y3a5Ly5Cg3w@8b3Cx<b63x1Lc4b3;r@b40c?r14b2@b3x10b3sDb4J^AwDb3Gx4u3j4?x@b10p3oCs58^50^50`9Gx8f17tH^4?|@_4?{@b4Ox10b6?x1<u3f1;|4^1K|4^K|4^7|4_1;{4_1K{4_K{4_7{8<b16Kx14b2Gx18bOx80030a3H0004]80008]3H000;y80004a3H0057y80004a3H0013y8DbGx8b3x4b5?x4b7x<b3x8b2Kx4u3pOw2Lt7lKw3Kx10h13r60b2;x4b7xDhCw2HcGr<u3j37xDu3e80b6Ox@h7w8c1Or8h5Gw6^9w6c5wFc=|?x4b;x4b3Cx8c;w@c4b13rLu13eLb3Dc8j3j3Dc;r40b10t3f3@^7w@hDjKe14b6Gx<uKj2Gx8hOw2;xDhOw27xLu?e1@hKr:0b93x6L^6;|1D_6;{LhGw4B^=w10f17t14Hh3Kr4b57x6c6k3i8b7x9<c;|3Dc17w3x10b2H^1<b@jCe2Hb28^@o?e4Hb2DcKr2@b2Kx16e3{4_1z6F^1F]4oKe@h2?{18z6|6^5|3x14c6]8_1z5F`;{@_5{8o7u4eAk1w18m3m8b33xLf17tJc9|4B^D_3{F]7w4f18l?j6`5z3x10b4<^4o7j3x16c8_1z62`;{14_2]3z@p?k@o5m3{2`17y4p3j4p;e4h2?r1<b27x4b36`;{<_7{2_3{6]2oIk1|:^1w7HbKx4b3x4b?x4b1Kx4b18p3eHb5N^4_;{F]7wDf17tJc8_5u4bOx8b7x8b2Gx4bKx4b7x4bCx4c7|6`7{4_=u:e5u:e6]3u8b3xJe1uDbF`5u8cKw<cCwA<b6F`;{10_5{6]8_2{6|<pCn18l7e4u4k6|7x3Hb62`;{H_3{4_?{8_1{7|8p3j3x10f17tDHb5N`;{=w:e?{8_1{8o2KjB^5w48b62`;{10_7{4_1{6]2o;j3x1<f17tHu1Ce2<b5>^4_3{4_7{F_4z7p3eHf17t6Hb3;x:c<_7{@_3{>]3w@f18_8j<a3fKxG4b5B`;{14_1{8o3e<@^40^40d18_13r1@bOx8b3x8bOx4b7x4b32`Eu6e5u:c6_4{9_1z6`1{4o;e14f17t8HbOx8b4N`;{=w:c8_>{7o3j6`1u3<b6^15|50^:]@_1z6^>oOk3w10b6^H_7{9|5J^1D_1{8o;j4pCe1Db93xLu17eNHb13x4b4F`3{Iw6cH_2z7pCe18f18_2;r<u7j3Gx:c2Ew6e3{L_3{8_3{5w94bKx4b7x4b4J^Ew>c1w6c5w6c:]6]2]7|6^1w10f17tHbGx4b7x4b42`Au6c5w6e7{4_2z6xLf17t16Hb2>^8_6m7eNc5|6`1z1Cx4b4:`7{Aw>e7{2_3{4o1Cn17t:Hb3x1Lh2DnO{@_23a1Du3j3C7x<Hg=Ks4uCe1<bH?x:9@b<4p7e1Db460h20s6|D^1Kw?E8b28Kx11G4b273xLb3Kx4f17t@u7j9Kx4f17tHb3Gx8cDo3e18b60^LoDa?e@q4a3a18f17t4hKr4b2CxDb2;x2F0^40^40f2Lj?e<Db9;xBc1|6`6IuNc={1Cy80a8q3i4_3w1>e5u1HbGNOx10b4JGx58b13x12LLa?y4aKy4a7y4b14;x1Lb3x3Db;x8b3x1Hb?x10b1A?x90@b=;xDb1Cx<b13xLb17x8y3g6]2o3u?mB;@c5Gw8c2Kw14y>?a7@yNGa18y4Ka8y7?i7{<s;iHeOs10s7gLs3Gg@s7Ca2Dy87g<s3a?8h2?r1@h2?r1@y:Ka14h33r@L^38^37|38^K{4_27|38^37|3|4^7|8^3|8^7|8^?|4^10^?{4_3{4_K{4_1;|38^37|7|4^?|8^O|4^K|4_37|7|4^?|4^C|4^3|<^K|4_37|38^37|38^37|38^37|38^37|38^37|38^3?{8^34u3f34t3fG|34u3f34t3fG|34u3f34t3fG|34u3f34t3fG|34u3f34t3fH|6|8f68p1OOg6Ls?g68sOg4s1Gg4s7yCe1LcCw4c1Kw4:0_18`3z2?{H_G{JFcIw6c21w:cIw6c5w6cAw8000Da3H007Gy46c1w>0b5Cx<cK{Ky8f17t@b4t3a180b3H^3w24b5@^@`17tDw3c1J0b3;|4_@`17t2LHbKx4b?x4b7x4b1Kx4bHCx8h13xKw54^48^48a>]2];{3y@f17t@u7e324h7<n3l<l3n?r9@h5Dn3l1KrH8b?x4b3;x4b7x4b3x8b3x4b17x4b?x4b3x4b3xHb3x@b3x4b3x4b3x4b;x4b7x4b3x8b3x4b3x4b3x4b3x4b3x4b7x4b3x8b?x4bKx4b?x4b?x4b3x4b17x4b23xDb;x4bCx4b23x6@v7d11Hy5?a@y<?a1@y1Ka8y1Ka4y1Ka4y4Ca18h1Dn@004<]3@0038]@000H]3@0038]@000H]3@0038]4?a70y3Ca1Dy5?a@y13aLy7a1HyGaC8yO;|D^2JOa@y23a<y1Ca<y>Ka@y;KaHy1?a@y3a1Ly1?a@y6Oa10y17aHy4Oa10y3Ga8y7a9Hy1:?a1@y1Ga8y1Ca<y13aLy5Ga4yKa10y1Ga@y13aLy13aLyB;a4y6Ka4Df17t40Hb56KOx40b@77xHbKGx8bF@7x1HbM63x<3Lb23Gx5L8bC9;xDb@;Ox2FL:4m3m3Hm;Om@0cMOw7N20o7OOGk8o7OOGk");
}
$p = $c_jl_UnicodeData$.prototype = new $h_O();
$p.constructor = $c_jl_UnicodeData$;
/** @constructor */
function $h_jl_UnicodeData$() {
}
$h_jl_UnicodeData$.prototype = $p;
$p.r6 = (function(cp) {
  if (((cp >>> 0) > 1114111)) {
    return 0;
  } else {
    var shiftedCP = (cp << 7);
    var dataRanges = this.lF;
    var low = 0;
    var high = 2891;
    while ((((1 + low) | 0) !== high)) {
      var mid = ((((low + high) | 0) >>> 1) | 0);
      if (((shiftedCP >>> 0) < ((268435328 & dataRanges.a[mid]) >>> 0))) {
        high = mid;
      } else {
        low = mid;
      }
    }
    var data = dataRanges.a[low];
    var parityBit = ((1 & cp) & ((data >>> 5) | 0));
    return ((((-268435329) & data) ^ parityBit) ^ (parityBit << 1));
  }
});
$p.kO = (function(cp) {
  if (((cp >>> 0) < 161)) {
    return ((((cp - 65) | 0) >>> 0) <= 25);
  } else {
    var data = this.r6(cp);
    return (((2 & (1 << data)) | (536870912 & data)) !== 0);
  }
});
var $d_jl_UnicodeData$ = new $TypeData().i($c_jl_UnicodeData$, "java.lang.UnicodeData$", ({
  dO: 1
}));
var $n_jl_UnicodeData$;
function $m_jl_UnicodeData$() {
  if ((!$n_jl_UnicodeData$)) {
    $n_jl_UnicodeData$ = new $c_jl_UnicodeData$();
  }
  return $n_jl_UnicodeData$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.g2 = null;
  $n_jl_Utils$Cache$ = this;
  this.g2 = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  dQ: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bC)));
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  bC: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.b9 = (function(array) {
  if ((array instanceof $ac_O)) {
    return array.a.length;
  } else if ((array instanceof $ac_Z)) {
    return array.a.length;
  } else if ((array instanceof $ac_C)) {
    return array.a.length;
  } else if ((array instanceof $ac_B)) {
    return array.a.length;
  } else if ((array instanceof $ac_S)) {
    return array.a.length;
  } else if ((array instanceof $ac_I)) {
    return array.a.length;
  } else if ((array instanceof $ac_J)) {
    return ((array.a.length >>> 1) | 0);
  } else if ((array instanceof $ac_F)) {
    return array.a.length;
  } else {
    if ((!(array instanceof $ac_D))) {
      $p_jl_reflect_Array$__mismatch__O__E(this, array);
    }
    return array.a.length;
  }
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  dR: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.ow = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.cp(a, new $ac_I(a.a.length), 0, end, comparator, ops);
  } else {
    this.cH(a, 0, end, comparator, ops);
  }
});
$p.rS = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$IntArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.cp(a, new $ac_I(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.cH(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.ox = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var end = ((a.a.length >>> 1) | 0);
  if ((end > 16)) {
    this.cp(a, new $ac_J(((a.a.length >>> 1) | 0)), 0, end, comparator, ops);
  } else {
    this.cH(a, 0, end, comparator, ops);
  }
});
$p.rT = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$LongArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.cp(a, new $ac_J(((a.a.length >>> 1) | 0)), fromIndex, toIndex, comparator, ops);
  } else {
    this.cH(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.oy = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.cp(a, new $ac_S(a.a.length), 0, end, comparator, ops);
  } else {
    this.cH(a, 0, end, comparator, ops);
  }
});
$p.rU = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ShortArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.cp(a, new $ac_S(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.cH(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.ov = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.cp(a, new $ac_C(a.a.length), 0, end, comparator, ops);
  } else {
    this.cH(a, 0, end, comparator, ops);
  }
});
$p.rR = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$CharArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.cp(a, new $ac_C(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.cH(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.ou = (function(a) {
  var comparator = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var end = a.a.length;
  if ((end > 16)) {
    this.cp(a, new $ac_B(a.a.length), 0, end, comparator, ops);
  } else {
    this.cH(a, 0, end, comparator, ops);
  }
});
$p.rQ = (function(a, fromIndex, toIndex) {
  var comparator = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  var ops = $m_ju_internal_GenericArrayOps$ByteArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.cp(a, new $ac_B(a.a.length), fromIndex, toIndex, comparator, ops);
  } else {
    this.cH(a, fromIndex, toIndex, comparator, ops);
  }
});
$p.gz = (function(array, comparator) {
  var comparator$1 = ((comparator === null) ? $m_ju_Arrays$NaturalComparator$() : comparator);
  var ops = $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  var end = array.a.length;
  if ((end > 16)) {
    this.cp(array, $objectGetClass(array).L.Q().L.U(array.a.length), 0, end, comparator$1, ops);
  } else {
    this.cH(array, 0, end, comparator$1, ops);
  }
});
$p.rV = (function(array, fromIndex, toIndex, comparator) {
  var comparator$1 = ((comparator === null) ? $m_ju_Arrays$NaturalComparator$() : comparator);
  var ops = $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  if ((fromIndex > toIndex)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"));
  }
  if ((((toIndex - fromIndex) | 0) > 16)) {
    this.cp(array, $objectGetClass(array).L.Q().L.U(array.a.length), fromIndex, toIndex, comparator$1, ops);
  } else {
    this.cH(array, fromIndex, toIndex, comparator$1, ops);
  }
});
$p.cp = (function(a, temp, start, end, comparator, ops) {
  var length = ((end - start) | 0);
  if ((length > 16)) {
    var middle = ((start + (((length + ((length >>> 31) | 0)) | 0) >> 1)) | 0);
    this.cp(a, temp, start, middle, comparator, ops);
    this.cp(a, temp, middle, end, comparator, ops);
    var outIndex = start;
    var leftInIndex = start;
    var rightInIndex = middle;
    while ((outIndex < end)) {
      if (((leftInIndex < middle) && ((rightInIndex >= end) || (comparator.av(ops.c0(a, leftInIndex), ops.c0(a, rightInIndex)) <= 0)))) {
        ops.du(temp, outIndex, ops.c0(a, leftInIndex));
        leftInIndex = ((1 + leftInIndex) | 0);
      } else {
        ops.du(temp, outIndex, ops.c0(a, rightInIndex));
        rightInIndex = ((1 + rightInIndex) | 0);
      }
      outIndex = ((1 + outIndex) | 0);
    }
    temp.s(start, a, start, length);
  } else {
    this.cH(a, start, end, comparator, ops);
  }
});
$p.cH = (function(a, start, end, comparator, ops) {
  var n = ((end - start) | 0);
  if ((n >= 2)) {
    var aStart = ops.c0(a, start);
    var aStartPlusOne = ops.c0(a, ((1 + start) | 0));
    if ((comparator.av(aStart, aStartPlusOne) > 0)) {
      ops.du(a, start, aStartPlusOne);
      ops.du(a, ((1 + start) | 0), aStart);
    }
    var m = 2;
    while ((m < n)) {
      var next = ops.c0(a, ((start + m) | 0));
      if ((comparator.av(next, ops.c0(a, ((((start + m) | 0) - 1) | 0))) < 0)) {
        var iA = start;
        var iB = ((((start + m) | 0) - 1) | 0);
        while ((((iB - iA) | 0) > 1)) {
          var ix = ((((iA + iB) | 0) >>> 1) | 0);
          if ((comparator.av(next, ops.c0(a, ix)) < 0)) {
            iB = ix;
          } else {
            iA = ix;
          }
        }
        var ix$2 = ((iA + ((comparator.av(next, ops.c0(a, iA)) >= 0) | 0)) | 0);
        var i = ((start + m) | 0);
        while ((i > ix$2)) {
          ops.du(a, i, ops.c0(a, ((i - 1) | 0)));
          i = ((i - 1) | 0);
        }
        ops.du(a, ix$2, next);
      }
      m = ((1 + m) | 0);
    }
  }
});
$p.pW = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.a.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.a[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
        continue;
      }
      if ((cmp !== 0)) {
        startIndex = ((1 + mid) | 0);
        continue;
      }
      return mid;
    }
  }
});
$p.nS = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = ((a.a.length >>> 1) | 0);
  if ((((b.a.length >>> 1) | 0) !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a;
    var $x_2 = (i$1 << 1);
    var a$1_$_lo = $x_1[$x_2];
    var a$1_$_hi = $x_1[(($x_2 + 1) | 0)];
    var i$2 = i;
    var $x_3 = b.a;
    var $x_4 = (i$2 << 1);
    var b$1_$_lo = $x_3[$x_4];
    var b$1_$_hi = $x_3[(($x_4 + 1) | 0)];
    if ((!(((a$1_$_lo ^ b$1_$_lo) | (a$1_$_hi ^ b$1_$_hi)) === 0))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.iR = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.nT = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.nR = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.nQ = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.nU = (function(a, b) {
  if ((a === b)) {
    return true;
  }
  if (((a === null) || (b === null))) {
    return false;
  }
  var len = a.a.length;
  if ((b.a.length !== len)) {
    return false;
  }
  var i = 0;
  while ((i !== len)) {
    var i$1 = i;
    var $x_1 = a.a[i$1];
    var i$2 = i;
    if ((!($x_1 === b.a[i$2]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
$p.qw = (function(a, value) {
  var toIndex = a.a.length;
  var i = 0;
  while ((i !== toIndex)) {
    var i$1 = i;
    a.a[i$1] = value;
    i = ((1 + i) | 0);
  }
});
$p.ad = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = $objectGetClass(original).L.Q().L.U(newLength);
  original.s(0, ret, 0, copyLength);
  return ret;
});
$p.kq = (function(original, newLength, newType) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = newType.L.Q().L.U(newLength);
  original.s(0, ret, 0, copyLength);
  return ret;
});
$p.nH = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_B(newLength);
  original.s(0, ret, 0, copyLength);
  return ret;
});
$p.nL = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_S(newLength);
  original.s(0, ret, 0, copyLength);
  return ret;
});
$p.nJ = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_I(newLength);
  original.s(0, ret, 0, copyLength);
  return ret;
});
$p.nK = (function(original, newLength) {
  var b = ((original.a.length >>> 1) | 0);
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_J(newLength);
  original.s(0, ret, 0, copyLength);
  return ret;
});
$p.nI = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_C(newLength);
  original.s(0, ret, 0, copyLength);
  return ret;
});
$p.qd = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_F(newLength);
  original.s(0, ret, 0, copyLength);
  return ret;
});
$p.qc = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_D(newLength);
  original.s(0, ret, 0, copyLength);
  return ret;
});
$p.nM = (function(original, newLength) {
  var b = original.a.length;
  var copyLength = ((newLength < b) ? newLength : b);
  var ret = new $ac_Z(newLength);
  original.s(0, ret, 0, copyLength);
  return ret;
});
$p.aM = (function(original, from, to) {
  if ((from > to)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
  }
  var len = original.a.length;
  var retLength = ((to - from) | 0);
  var b = ((len - from) | 0);
  var copyLength = ((retLength < b) ? retLength : b);
  var ret = $objectGetClass(original).L.Q().L.U(retLength);
  original.s(from, ret, 0, copyLength);
  return ret;
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  dS: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $p_ju_regex_PatternCompiler__parseError__T__E($thiz, desc) {
  throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.bd, $thiz.b);
}
function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
  var m = $m_ju_regex_PatternCompiler$().lY.exec($thiz.bd);
  if ((m !== null)) {
    var x = m[1];
    if ((x !== (void 0))) {
      var end = x.length;
      var i = 0;
      while ((i < end)) {
        var value = i;
        $thiz.a5 = ($thiz.a5 | $m_ju_regex_PatternCompiler$().oc(x.charCodeAt(value)));
        i = ((1 + i) | 0);
      }
    }
    if (((256 & $thiz.a5) !== 0)) {
      $thiz.a5 = (64 | $thiz.a5);
    }
    var x$1 = m[2];
    if ((x$1 !== (void 0))) {
      var end$1 = x$1.length;
      var i$1 = 0;
      while ((i$1 < end$1)) {
        var value$1 = i$1;
        $thiz.a5 = ($thiz.a5 & (~$m_ju_regex_PatternCompiler$().oc(x$1.charCodeAt(value$1))));
        i$1 = ((1 + i$1) | 0);
      }
    }
    $thiz.b = (($thiz.b + m[0].length) | 0);
  }
}
function $p_ju_regex_PatternCompiler__literal__T__T($thiz, s) {
  var result = "";
  var len = s.length;
  var i = 0;
  while ((i !== len)) {
    var cp = $f_T__codePointAt__I__I(s, i);
    result = (("" + result) + $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp));
    i = ((i + ((cp >= 65536) ? 2 : 1)) | 0);
  }
  return result;
}
function $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp) {
  var s = $m_ju_regex_PatternCompiler$().fF(cp);
  if ((cp < 128)) {
    switch (cp) {
      case 94:
      case 36:
      case 92:
      case 46:
      case 42:
      case 43:
      case 63:
      case 40:
      case 41:
      case 91:
      case 93:
      case 123:
      case 125:
      case 124: {
        return ("\\" + s);
        break;
      }
      default: {
        return (((66 & $thiz.a5) !== 2) ? s : (((((cp - 65) | 0) >>> 0) <= 25) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().fF(((32 + cp) | 0))) + "]") : (((((cp - 97) | 0) >>> 0) <= 25) ? ((("[" + $m_ju_regex_PatternCompiler$().fF(((cp - 32) | 0))) + s) + "]") : s)));
      }
    }
  } else {
    return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
  }
}
function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
  var pattern = $thiz.bd;
  var len = pattern.length;
  while (true) {
    if (($thiz.b !== len)) {
      switch (pattern.charCodeAt($thiz.b)) {
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          $thiz.b = ((1 + $thiz.b) | 0);
          continue;
          break;
        }
        case 35: {
          $thiz.kR();
          continue;
          break;
        }
      }
    }
    break;
  }
}
function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
  var pattern = $thiz.bd;
  var len = pattern.length;
  var startOfRepeater = $thiz.b;
  var repeaterDispatchChar = ((startOfRepeater === len) ? 46 : pattern.charCodeAt(startOfRepeater));
  if (((((repeaterDispatchChar === 42) || (repeaterDispatchChar === 63)) || (repeaterDispatchChar === 43)) || (repeaterDispatchChar === 123))) {
    switch (compiledToken.charCodeAt(0)) {
      case 94:
      case 36: {
        var isTokenAnAssertion = true;
        break;
      }
      case 40: {
        var isTokenAnAssertion = ((compiledToken.charCodeAt(1) === 63) && (compiledToken.charCodeAt(2) !== 58));
        break;
      }
      case 92: {
        var c = compiledToken.charCodeAt(1);
        var isTokenAnAssertion = ((c === 66) || (c === 98));
        break;
      }
      default: {
        var isTokenAnAssertion = false;
      }
    }
    var wrappedToken = (isTokenAnAssertion ? (("(?:" + compiledToken) + ")") : compiledToken);
    var baseRepeater = $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar);
    if (($thiz.b !== len)) {
      switch (pattern.charCodeAt($thiz.b)) {
        case 43: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, wrappedToken, baseRepeater);
          break;
        }
        case 63: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return ((("" + wrappedToken) + baseRepeater) + "?");
          break;
        }
        default: {
          return (("" + wrappedToken) + baseRepeater);
        }
      }
    } else {
      return (("" + wrappedToken) + baseRepeater);
    }
  } else {
    return compiledToken;
  }
}
function $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar) {
  var pattern = $thiz.bd;
  var startOfRepeater = $thiz.b;
  $thiz.b = ((1 + $thiz.b) | 0);
  if ((repeaterDispatchChar === 123)) {
    var len = pattern.length;
    if ((($thiz.b === len) || (!((((pattern.charCodeAt($thiz.b) - 48) | 0) >>> 0) <= 9)))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    while ((($thiz.b !== len) && ((((pattern.charCodeAt($thiz.b) - 48) | 0) >>> 0) <= 9))) {
      $thiz.b = ((1 + $thiz.b) | 0);
    }
    if (($thiz.b === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    if ((pattern.charCodeAt($thiz.b) === 44)) {
      $thiz.b = ((1 + $thiz.b) | 0);
      while ((($thiz.b !== len) && ((((pattern.charCodeAt($thiz.b) - 48) | 0) >>> 0) <= 9))) {
        $thiz.b = ((1 + $thiz.b) | 0);
      }
    }
    if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 125))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
    }
    $thiz.b = ((1 + $thiz.b) | 0);
  }
  return pattern.substring(startOfRepeater, $thiz.b);
}
function $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken, baseRepeater) {
  var end = ($thiz.cv.length | 0);
  var i = 0;
  while ((i < end)) {
    var value = i;
    var mapped = ($thiz.cv[value] | 0);
    if ((mapped > compiledGroupCountBeforeThisToken)) {
      $thiz.cv[value] = ((1 + mapped) | 0);
    }
    i = ((1 + i) | 0);
  }
  var amendedToken = compiledToken.replace($m_ju_regex_PatternCompiler$().lZ, ((arg1$2, arg2$2, arg3$2) => {
    var num = arg2$2.length;
    var t = ((num >>> 31) | 0);
    if (((((1 & ((num + t) | 0)) - t) | 0) === 0)) {
      return arg1$2;
    } else {
      var groupNumber = (parseInt(arg3$2, 10) | 0);
      return ((groupNumber > compiledGroupCountBeforeThisToken) ? (("" + arg2$2) + ((1 + groupNumber) | 0)) : arg1$2);
    }
  }));
  $thiz.cu = ((1 + $thiz.cu) | 0);
  var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
  return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")");
}
function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
  var pattern = $thiz.bd;
  var len = pattern.length;
  if ((((1 + $thiz.b) | 0) === len)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\ at end of pattern");
  }
  $thiz.b = ((1 + $thiz.b) | 0);
  var index = $thiz.b;
  var dispatchChar = pattern.charCodeAt(index);
  switch (dispatchChar) {
    case 100:
    case 68:
    case 104:
    case 72:
    case 115:
    case 83:
    case 118:
    case 86:
    case 119:
    case 87:
    case 112:
    case 80: {
      var cls = $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar);
      var x1$2 = cls.i5;
      switch (x1$2) {
        case 0: {
          return (("\\p{" + cls.dz) + "}");
          break;
        }
        case 1: {
          return (("\\P{" + cls.dz) + "}");
          break;
        }
        case 2: {
          return (("[" + cls.dz) + "]");
          break;
        }
        case 3: {
          return $m_ju_regex_PatternCompiler$().iW(cls.dz);
          break;
        }
        default: {
          throw new $c_jl_AssertionError(x1$2);
        }
      }
      break;
    }
    case 98: {
      if ((pattern.substring($thiz.b, ((4 + $thiz.b) | 0)) === "b{g}")) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\b{g} is not supported");
      } else if (((320 & $thiz.a5) !== 0)) {
        $thiz.gv("\\b with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\b";
      }
      break;
    }
    case 66: {
      if (((320 & $thiz.a5) !== 0)) {
        $thiz.gv("\\B with UNICODE_CASE", "2018");
      } else {
        $thiz.b = ((1 + $thiz.b) | 0);
        return "\\B";
      }
      break;
    }
    case 65: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "^";
      break;
    }
    case 71: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\G in the middle of a pattern is not supported");
      break;
    }
    case 90: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return (("(?=" + (((1 & $thiz.a5) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])")) + "?$)");
      break;
    }
    case 122: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "$";
      break;
    }
    case 82: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return "(?:\r\n|[\n-\r\u0085\u2028\u2029])";
      break;
    }
    case 88: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\X is not supported");
      break;
    }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57: {
      var start = $thiz.b;
      var end = ((1 + start) | 0);
      while (true) {
        if (((end !== len) && ((((pattern.charCodeAt(end) - 48) | 0) >>> 0) <= 9))) {
          var s = pattern.substring(start, ((1 + end) | 0));
          var $x_1 = ((parseInt(s, 10) | 0) <= ((($thiz.cv.length | 0) - 1) | 0));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          end = ((1 + end) | 0);
        } else {
          break;
        }
      }
      var groupString = pattern.substring(start, end);
      var groupNumber = (parseInt(groupString, 10) | 0);
      if ((groupNumber > ((($thiz.cv.length | 0) - 1) | 0))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"));
      }
      var compiledGroupNumber = ($thiz.cv[groupNumber] | 0);
      $thiz.b = end;
      return (("(?:\\" + compiledGroupNumber) + ")");
      break;
    }
    case 107: {
      $thiz.b = ((1 + $thiz.b) | 0);
      if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 60))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\k is not followed by '<' for named capturing group");
      }
      $thiz.b = ((1 + $thiz.b) | 0);
      var groupName = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
      var dict = $thiz.gK;
      if ((!(!(!$m_jl_Utils$Cache$().g2.call(dict, groupName))))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"));
      }
      var groupNumber$2 = (dict[groupName] | 0);
      var compiledGroupNumber$2 = ($thiz.cv[groupNumber$2] | 0);
      $thiz.b = ((1 + $thiz.b) | 0);
      return (("(?:\\" + compiledGroupNumber$2) + ")");
      break;
    }
    case 81: {
      var start$2 = ((1 + $thiz.b) | 0);
      var end$2 = (pattern.indexOf("\\E", start$2) | 0);
      if ((end$2 < 0)) {
        $thiz.b = pattern.length;
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, pattern.substring(start$2));
      } else {
        $thiz.b = ((2 + end$2) | 0);
        return $p_ju_regex_PatternCompiler__literal__T__T($thiz, pattern.substring(start$2, end$2));
      }
      break;
    }
    default: {
      return $p_ju_regex_PatternCompiler__literal__I__T($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz));
    }
  }
}
function $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) {
  var pattern = $thiz.bd;
  var x1 = $f_T__codePointAt__I__I(pattern, $thiz.b);
  switch (x1) {
    case 48: {
      return $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz);
      break;
    }
    case 120: {
      return $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz);
      break;
    }
    case 117: {
      return $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz);
      break;
    }
    case 78: {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\N is not supported");
      break;
    }
    case 97: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 7;
      break;
    }
    case 116: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 9;
      break;
    }
    case 110: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 10;
      break;
    }
    case 102: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 12;
      break;
    }
    case 114: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 13;
      break;
    }
    case 101: {
      $thiz.b = ((1 + $thiz.b) | 0);
      return 27;
      break;
    }
    case 99: {
      $thiz.b = ((1 + $thiz.b) | 0);
      if (($thiz.b === pattern.length)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal control escape sequence");
      }
      var cp = $f_T__codePointAt__I__I(pattern, $thiz.b);
      $thiz.b = (($thiz.b + ((cp >= 65536) ? 2 : 1)) | 0);
      return (64 ^ cp);
      break;
    }
    default: {
      if ((((((x1 - 65) | 0) >>> 0) <= 25) || ((((x1 - 97) | 0) >>> 0) <= 25))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal/unsupported escape sequence");
      }
      $thiz.b = (($thiz.b + ((x1 >= 65536) ? 2 : 1)) | 0);
      return x1;
    }
  }
}
function $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz) {
  var pattern = $thiz.bd;
  var len = pattern.length;
  var start = $thiz.b;
  var d1 = ((((1 + start) | 0) < len) ? ((pattern.charCodeAt(((1 + start) | 0)) - 48) | 0) : (-1));
  if (((d1 >>> 0) > 7)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal octal escape sequence");
  }
  var d2 = ((((2 + start) | 0) < len) ? ((pattern.charCodeAt(((2 + start) | 0)) - 48) | 0) : (-1));
  if (((d2 >>> 0) > 7)) {
    $thiz.b = ((2 + $thiz.b) | 0);
    return d1;
  } else if ((d1 > 3)) {
    $thiz.b = ((3 + $thiz.b) | 0);
    return (((d1 << 3) + d2) | 0);
  } else {
    var d3 = ((((3 + start) | 0) < len) ? ((pattern.charCodeAt(((3 + start) | 0)) - 48) | 0) : (-1));
    if (((d3 >>> 0) > 7)) {
      $thiz.b = ((3 + $thiz.b) | 0);
      return (((d1 << 3) + d2) | 0);
    } else {
      $thiz.b = ((4 + $thiz.b) | 0);
      return (((((d1 << 6) + (d2 << 3)) | 0) + d3) | 0);
    }
  }
}
function $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz) {
  var pattern = $thiz.bd;
  var len = pattern.length;
  var start = ((1 + $thiz.b) | 0);
  if (((start !== len) && (pattern.charCodeAt(start) === 123))) {
    var innerStart = ((1 + start) | 0);
    var innerEnd = (pattern.indexOf("}", innerStart) | 0);
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed hexadecimal escape sequence");
    }
    var cp = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, innerStart, innerEnd, "hexadecimal");
    $thiz.b = ((1 + innerEnd) | 0);
    return cp;
  } else {
    var cp$2 = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, ((2 + start) | 0), "hexadecimal");
    $thiz.b = ((2 + start) | 0);
    return cp$2;
  }
}
function $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz) {
  var pattern = $thiz.bd;
  var start = ((1 + $thiz.b) | 0);
  var end = ((4 + start) | 0);
  var codeUnit = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, "Unicode");
  $thiz.b = end;
  var lowStart = ((2 + end) | 0);
  var lowEnd = ((4 + lowStart) | 0);
  if (((((-1024) & codeUnit) === 55296) && (pattern.substring(end, lowStart) === "\\u"))) {
    var low = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, lowStart, lowEnd, "Unicode");
    if ((((-1024) & low) === 56320)) {
      $thiz.b = lowEnd;
      return ((((64 + (1023 & codeUnit)) | 0) << 10) | (1023 & low));
    } else {
      return codeUnit;
    }
  } else {
    return codeUnit;
  }
}
function $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, nameForError) {
  var pattern = $thiz.bd;
  var len = pattern.length;
  if (((end === start) || (end > len))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
  }
  var i = start;
  while ((i < end)) {
    var value = i;
    var c = pattern.charCodeAt(value);
    if ((!((((((c - 48) | 0) >>> 0) <= 9) || ((((c - 65) | 0) >>> 0) <= 5)) || ((((c - 97) | 0) >>> 0) <= 5)))) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
    }
    i = ((1 + i) | 0);
  }
  if ((((end - start) | 0) > 6)) {
    var cp = 1114112;
  } else {
    var s = pattern.substring(start, end);
    var cp = (parseInt(s, 16) | 0);
  }
  if ((cp > 1114111)) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Hexadecimal codepoint is too big");
  }
  return cp;
}
function $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar) {
  $thiz.b = ((1 + $thiz.b) | 0);
  switch (dispatchChar) {
    case 100:
    case 68: {
      var positive = $m_ju_regex_PatternCompiler$().lT;
      break;
    }
    case 104:
    case 72: {
      var positive = $m_ju_regex_PatternCompiler$().lW;
      break;
    }
    case 115:
    case 83: {
      var positive = $m_ju_regex_PatternCompiler$().lU;
      break;
    }
    case 118:
    case 86: {
      var positive = $m_ju_regex_PatternCompiler$().lX;
      break;
    }
    case 119:
    case 87: {
      var positive = $m_ju_regex_PatternCompiler$().lV;
      break;
    }
    case 112:
    case 80: {
      var positive = $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz);
      break;
    }
    default: {
      var positive;
      throw new $c_jl_AssertionError($bC(dispatchChar));
    }
  }
  return ((dispatchChar >= 97) ? positive : positive.rj());
}
function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  var pattern = $thiz.bd;
  var len = pattern.length;
  var start = $thiz.b;
  if ((start === len)) {
    var property = "?";
  } else if ((pattern.charCodeAt(start) === 123)) {
    var innerStart = ((1 + start) | 0);
    var innerEnd = (pattern.indexOf("}", innerStart) | 0);
    if ((innerEnd < 0)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character family");
    }
    $thiz.b = innerEnd;
    var property = pattern.substring(innerStart, innerEnd);
  } else {
    var property = pattern.substring(start, ((1 + start) | 0));
  }
  var dict = $m_ju_regex_PatternCompiler$().jr;
  if ((!(!(!$m_jl_Utils$Cache$().g2.call(dict, property))))) {
    $thiz.gv("Unicode character family", "2018");
  }
  var property2 = ((((66 & $thiz.a5) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
  var dict$1 = $m_ju_regex_PatternCompiler$().jr;
  var result = dict$1[property2];
  $thiz.b = ((1 + $thiz.b) | 0);
  return result;
}
function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
  var pattern = $thiz.bd;
  var len = pattern.length;
  $thiz.b = ((1 + $thiz.b) | 0);
  var isNegated = (($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 94));
  if (isNegated) {
    $thiz.b = ((1 + $thiz.b) | 0);
  }
  var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.a5) === 2), isNegated);
  while (($thiz.b !== len)) {
    var x1 = $f_T__codePointAt__I__I(pattern, $thiz.b);
    matchResult: {
      switch (x1) {
        case 93: {
          $thiz.b = ((1 + $thiz.b) | 0);
          return builder.qA();
          break;
        }
        case 38: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if ((($thiz.b !== len) && (pattern.charCodeAt($thiz.b) === 38))) {
            $thiz.b = ((1 + $thiz.b) | 0);
            builder.s0();
            break matchResult;
          } else {
            $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, 38, len, pattern, builder);
            break matchResult;
          }
          break;
        }
        case 91: {
          $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(builder, $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz));
          break matchResult;
          break;
        }
        case 92: {
          $thiz.b = ((1 + $thiz.b) | 0);
          if (($thiz.b === len)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal escape sequence");
          }
          var index$2 = $thiz.b;
          var c2 = pattern.charCodeAt(index$2);
          switch (c2) {
            case 100:
            case 68:
            case 104:
            case 72:
            case 115:
            case 83:
            case 118:
            case 86:
            case 119:
            case 87:
            case 112:
            case 80: {
              builder.pu($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
              break matchResult;
              break;
            }
            case 81: {
              $thiz.b = ((1 + $thiz.b) | 0);
              var fromIndex = $thiz.b;
              var end = (pattern.indexOf("\\E", fromIndex) | 0);
              if ((end < 0)) {
                $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
              }
              builder.pw(pattern, $thiz.b, end);
              $thiz.b = ((2 + end) | 0);
              break matchResult;
              break;
            }
            default: {
              $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz), len, pattern, builder);
              break matchResult;
            }
          }
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & $thiz.a5) !== 0)) {
            $thiz.b = ((1 + $thiz.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & $thiz.a5) !== 0)) {
            $thiz.kR();
            break matchResult;
          }
          break;
        }
      }
      $thiz.b = (($thiz.b + ((x1 >= 65536) ? 2 : 1)) | 0);
      $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, x1, len, pattern, builder);
    }
  }
  $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
}
function $p_ju_regex_PatternCompiler__compileGroup__T($thiz) {
  var pattern = $thiz.bd;
  var len = pattern.length;
  var start = $thiz.b;
  if (((((1 + start) | 0) === len) || (pattern.charCodeAt(((1 + start) | 0)) !== 63))) {
    $thiz.b = ((1 + start) | 0);
    $thiz.cu = ((1 + $thiz.cu) | 0);
    $thiz.cv.push($thiz.cu);
    return (("(" + $thiz.hI(true)) + ")");
  } else {
    if ((((2 + start) | 0) === len)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
    }
    var index$1 = ((2 + start) | 0);
    var c1 = pattern.charCodeAt(index$1);
    if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
      $thiz.b = ((3 + start) | 0);
      return ((("" + pattern.substring(start, ((3 + start) | 0))) + $thiz.hI(true)) + ")");
    } else if ((c1 === 60)) {
      if ((((3 + start) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
      }
      var index$2 = ((3 + start) | 0);
      var c2 = pattern.charCodeAt(index$2);
      if ((((((c2 - 65) | 0) >>> 0) <= 25) || ((((c2 - 97) | 0) >>> 0) <= 25))) {
        $thiz.b = ((3 + start) | 0);
        var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
        var dict = $thiz.gK;
        if ((!(!$m_jl_Utils$Cache$().g2.call(dict, name)))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
        }
        $thiz.cu = ((1 + $thiz.cu) | 0);
        $thiz.cv.push($thiz.cu);
        var dict$1 = $thiz.gK;
        var value = ((($thiz.cv.length | 0) - 1) | 0);
        dict$1[name] = value;
        $thiz.b = ((1 + $thiz.b) | 0);
        return (("(" + $thiz.hI(true)) + ")");
      } else {
        if (((c2 !== 33) && (c2 !== 61))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
        }
        $thiz.gv("Look-behind group", "2018");
      }
    } else if ((c1 === 62)) {
      $thiz.b = ((3 + start) | 0);
      $thiz.cu = ((1 + $thiz.cu) | 0);
      var groupNumber = $thiz.cu;
      return (((("(?:(?=(" + $thiz.hI(true)) + "))\\") + groupNumber) + ")");
    } else {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
    }
  }
}
function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
  var pattern = $thiz.bd;
  var len = pattern.length;
  var start = $thiz.b;
  while (true) {
    if (($thiz.b !== len)) {
      var index = $thiz.b;
      var c = pattern.charCodeAt(index);
      var $x_1 = ((((((c - 65) | 0) >>> 0) <= 25) || ((((c - 97) | 0) >>> 0) <= 25)) || ((((c - 48) | 0) >>> 0) <= 9));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      $thiz.b = ((1 + $thiz.b) | 0);
    } else {
      break;
    }
  }
  if ((($thiz.b === len) || (pattern.charCodeAt($thiz.b) !== 62))) {
    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "named capturing group is missing trailing '>'");
  }
  return pattern.substring(start, $thiz.b);
}
function $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, startCodePoint, len$2, pattern$3, builder$1) {
  if (((4 & $thiz.a5) !== 0)) {
    $p_ju_regex_PatternCompiler__skipComments__V($thiz);
  }
  if ((($thiz.b !== len$2) && (pattern$3.charCodeAt($thiz.b) === 45))) {
    $thiz.b = ((1 + $thiz.b) | 0);
    if (((4 & $thiz.a5) !== 0)) {
      $p_ju_regex_PatternCompiler__skipComments__V($thiz);
    }
    if (($thiz.b === len$2)) {
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
    }
    var cpEnd = $f_T__codePointAt__I__I(pattern$3, $thiz.b);
    if (((cpEnd === 91) || (cpEnd === 93))) {
      builder$1.iN(startCodePoint);
      builder$1.iN(45);
    } else {
      $thiz.b = (($thiz.b + ((cpEnd >= 65536) ? 2 : 1)) | 0);
      var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
      if ((endCodePoint < startCodePoint)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
      }
      builder$1.pv(startCodePoint, endCodePoint);
    }
  } else {
    builder$1.iN(startCodePoint);
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler(pattern, flags) {
  this.bd = null;
  this.a5 = 0;
  this.i4 = false;
  this.b = 0;
  this.cu = 0;
  this.cv = null;
  this.gK = null;
  this.bd = pattern;
  this.a5 = flags;
  this.i4 = false;
  this.b = 0;
  this.cu = 0;
  this.cv = [0];
  this.gK = ({});
}
$p = $c_ju_regex_PatternCompiler.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler;
/** @constructor */
function $h_ju_regex_PatternCompiler() {
}
$h_ju_regex_PatternCompiler.prototype = $p;
$p.q2 = (function() {
  if (((256 & this.a5) !== 0)) {
    this.a5 = (64 | this.a5);
  }
  var isLiteral = ((16 & this.a5) !== 0);
  if ((!isLiteral)) {
    $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this);
  }
  if (((128 & this.a5) !== 0)) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported");
  }
  if (((8 & this.a5) !== 0)) {
    this.gv("MULTILINE", "2018");
  }
  if (((256 & this.a5) !== 0)) {
    this.gv("UNICODE_CHARACTER_CLASS", "2018");
  }
  if (isLiteral) {
    var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.bd);
  } else {
    if ((this.bd.substring(this.b, ((2 + this.b) | 0)) === "\\G")) {
      this.i4 = true;
      this.b = ((2 + this.b) | 0);
    }
    var jsPattern = this.hI(false);
  }
  var baseJSFlags = ($m_ju_regex_PatternCompiler$().jq ? "us" : "u");
  var jsFlags = (((66 & this.a5) === 66) ? (baseJSFlags + "i") : baseJSFlags);
  return new $c_ju_regex_Pattern(this.bd, this.a5, jsPattern, jsFlags, this.i4, (((this.cv.length | 0) - 1) | 0), this.cv, this.gK);
});
$p.gv = (function(purpose, es) {
  $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
});
$p.hI = (function(insideGroup) {
  var pattern = this.bd;
  var len = pattern.length;
  var result = "";
  while ((this.b !== len)) {
    var dispatchCP = $f_T__codePointAt__I__I(pattern, this.b);
    matchResult: {
      switch (dispatchCP) {
        case 41: {
          if ((!insideGroup)) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unmatched closing ')'");
          }
          this.b = ((1 + this.b) | 0);
          return result;
          break;
        }
        case 124: {
          if ((this.i4 && (!insideGroup))) {
            $p_ju_regex_PatternCompiler__parseError__T__E(this, "\\G is not supported when there is an alternative at the top level");
          }
          this.b = ((1 + this.b) | 0);
          result = (result + "|");
          break matchResult;
          break;
        }
        case 32:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13: {
          if (((4 & this.a5) !== 0)) {
            this.b = ((1 + this.b) | 0);
            break matchResult;
          }
          break;
        }
        case 35: {
          if (((4 & this.a5) !== 0)) {
            this.kR();
            break matchResult;
          }
          break;
        }
        case 63:
        case 42:
        case 43:
        case 123: {
          $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().fF(dispatchCP)) + "'"));
          break;
        }
      }
      var compiledGroupCountBeforeThisToken = this.cu;
      switch (dispatchCP) {
        case 92: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileEscape__T(this);
          break;
        }
        case 91: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileCharacterClass__T(this);
          break;
        }
        case 40: {
          var compiledToken = $p_ju_regex_PatternCompiler__compileGroup__T(this);
          break;
        }
        case 94: {
          this.b = ((1 + this.b) | 0);
          var compiledToken = "^";
          break;
        }
        case 36: {
          this.b = ((1 + this.b) | 0);
          var compiledToken = "$";
          break;
        }
        case 46: {
          this.b = ((1 + this.b) | 0);
          var rejected = (((32 & this.a5) !== 0) ? "" : (((1 & this.a5) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
          var compiledToken = $m_ju_regex_PatternCompiler$().iW(rejected);
          break;
        }
        default: {
          this.b = ((this.b + ((dispatchCP >= 65536) ? 2 : 1)) | 0);
          var compiledToken = $p_ju_regex_PatternCompiler__literal__I__T(this, dispatchCP);
        }
      }
      result = (("" + result) + $p_ju_regex_PatternCompiler__compileRepeater__I__T__T(this, compiledGroupCountBeforeThisToken, compiledToken));
    }
  }
  if (insideGroup) {
    $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unclosed group");
  }
  return result;
});
$p.kR = (function() {
  var pattern = this.bd;
  var len = pattern.length;
  while (true) {
    if ((this.b !== len)) {
      var index = this.b;
      var c = pattern.charCodeAt(index);
      var $x_1 = (!(((((c === 10) || (c === 13)) || (c === 133)) || (c === 8232)) || (c === 8233)));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      this.b = ((1 + this.b) | 0);
    } else {
      break;
    }
  }
});
var $d_ju_regex_PatternCompiler = new $TypeData().i($c_ju_regex_PatternCompiler, "java.util.regex.PatternCompiler", ({
  ed: 1
}));
function $p_ju_regex_PatternCompiler$__featureTest__T__Z($thiz, flags) {
  try {
    new RegExp("", flags);
    return true;
  } catch (e) {
    return false;
  }
}
/** @constructor */
function $c_ju_regex_PatternCompiler$() {
  this.lY = null;
  this.lZ = null;
  this.oY = false;
  this.oX = false;
  this.jq = false;
  this.lT = null;
  this.oU = null;
  this.lW = null;
  this.lU = null;
  this.oV = null;
  this.lX = null;
  this.lV = null;
  this.oW = null;
  this.jr = null;
  this.oZ = null;
  $n_ju_regex_PatternCompiler$ = this;
  this.lY = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
  this.lZ = new RegExp("(\\\\+)(\\d+)", "g");
  this.oY = true;
  this.oX = true;
  this.jq = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
  $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
  this.lT = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  this.oU = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
  this.lW = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
  this.lU = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  this.oV = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
  this.lX = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
  this.lV = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
  this.oW = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
  var r = ({});
  var value = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-z");
  r.Lower = value;
  var value$1 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Z");
  r.Upper = value$1;
  var value$2 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u007f");
  r.ASCII = value$2;
  var value$3 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Za-z");
  r.Alpha = value$3;
  var value$4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
  r.Digit = value$4;
  var value$5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Za-z");
  r.Alnum = value$5;
  var value$6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-/:-@[-`{-~");
  r.Punct = value$6;
  var value$7 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-~");
  r.Graph = value$7;
  var value$8 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, " -~");
  r.Print = value$8;
  var value$9 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t ");
  r.Blank = value$9;
  var value$10 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u001f\u007f");
  r.Cntrl = value$10;
  var value$11 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Fa-f");
  r.XDigit = value$11;
  var value$12 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
  r.Space = value$12;
  this.jr = r;
  this.oZ = new RegExp("(?:^|_)[a-z]", "g");
}
$p = $c_ju_regex_PatternCompiler$.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$;
/** @constructor */
function $h_ju_regex_PatternCompiler$() {
}
$h_ju_regex_PatternCompiler$.prototype = $p;
$p.nC = (function(regex, flags) {
  return new $c_ju_regex_PatternCompiler(regex, flags).q2();
});
$p.oc = (function(c) {
  switch (c) {
    case 105: {
      return 2;
      break;
    }
    case 100: {
      return 1;
      break;
    }
    case 109: {
      return 8;
      break;
    }
    case 115: {
      return 32;
      break;
    }
    case 117: {
      return 64;
      break;
    }
    case 120: {
      return 4;
      break;
    }
    case 85: {
      return 256;
      break;
    }
    default: {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag");
    }
  }
});
$p.iW = (function(characters) {
  return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().jq ? "." : "[\\d\\D]"));
});
$p.fF = (function(codePoint) {
  return String.fromCodePoint(codePoint);
});
var $d_ju_regex_PatternCompiler$ = new $TypeData().i($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
  ee: 1
}));
var $n_ju_regex_PatternCompiler$;
function $m_ju_regex_PatternCompiler$() {
  if ((!$n_ju_regex_PatternCompiler$)) {
    $n_ju_regex_PatternCompiler$ = new $c_ju_regex_PatternCompiler$();
  }
  return $n_ju_regex_PatternCompiler$;
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V($thiz, alt) {
  if (($thiz.cM === "")) {
    $thiz.cM = alt;
  } else {
    $thiz.cM = (($thiz.cM + "|") + alt);
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T($thiz) {
  if ($thiz.jt) {
    var negThisSegment = $m_ju_regex_PatternCompiler$().iW($thiz.aq);
    return (($thiz.cM === "") ? negThisSegment : (((("(?:(?!" + $thiz.cM) + ")") + negThisSegment) + ")"));
  } else {
    return (($thiz.aq === "") ? (($thiz.cM === "") ? "[^\\d\\D]" : (("(?:" + $thiz.cM) + ")")) : (($thiz.cM === "") ? (("[" + $thiz.aq) + "]") : (((("(?:" + $thiz.cM) + "|[") + $thiz.aq) + "])")));
  }
}
function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
  var s = $m_ju_regex_PatternCompiler$().fF(codePoint);
  return (((((((codePoint - 92) | 0) >>> 0) <= 1) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
  this.js = false;
  this.jt = false;
  this.gL = null;
  this.cM = null;
  this.aq = null;
  this.js = asciiCaseInsensitive;
  this.jt = isNegated;
  this.gL = "";
  this.cM = "";
  this.aq = "";
}
$p = $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
/** @constructor */
function $h_ju_regex_PatternCompiler$CharacterClassBuilder() {
}
$h_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = $p;
$p.qA = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  return ((this.gL === "") ? conjunct : ((("(?:" + this.gL) + conjunct) + ")"));
});
$p.s0 = (function() {
  var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
  this.gL = (this.gL + (this.jt ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
  this.cM = "";
  this.aq = "";
});
$p.pu = (function(cls) {
  var x1 = cls.i5;
  switch (x1) {
    case 0: {
      this.aq = ((this.aq + ("\\p{" + cls.dz)) + "}");
      break;
    }
    case 1: {
      this.aq = ((this.aq + ("\\P{" + cls.dz)) + "}");
      break;
    }
    case 2: {
      this.aq = (("" + this.aq) + cls.dz);
      break;
    }
    case 3: {
      $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().iW(cls.dz));
      break;
    }
    default: {
      throw new $c_jl_AssertionError(x1);
    }
  }
});
$p.pw = (function(str, start, end) {
  var i = start;
  while ((i !== end)) {
    var codePoint = $f_T__codePointAt__I__I(str, i);
    this.iN(codePoint);
    i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
  }
});
$p.iN = (function(codePoint) {
  var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
  if ((((-1024) & codePoint) === 56320)) {
    this.aq = (("" + s) + this.aq);
  } else {
    this.aq = (("" + this.aq) + s);
  }
  if (this.js) {
    if (((((codePoint - 65) | 0) >>> 0) <= 25)) {
      this.aq = (("" + this.aq) + $m_ju_regex_PatternCompiler$().fF(((32 + codePoint) | 0)));
    } else if (((((codePoint - 97) | 0) >>> 0) <= 25)) {
      this.aq = (("" + this.aq) + $m_ju_regex_PatternCompiler$().fF(((codePoint - 32) | 0)));
    }
  }
});
$p.pv = (function(startCodePoint, endCodePoint) {
  var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
  if ((((-1024) & startCodePoint) === 56320)) {
    this.aq = (s + this.aq);
  } else {
    this.aq = (this.aq + s);
  }
  if (this.js) {
    var start = ((startCodePoint > 65) ? startCodePoint : 65);
    var end = ((endCodePoint < 90) ? endCodePoint : 90);
    if ((start <= end)) {
      var $x_1 = this.aq;
      var start$1 = ((32 + start) | 0);
      var end$1 = ((32 + end) | 0);
      this.aq = ($x_1 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$1) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$1)));
    }
    var start$2 = ((startCodePoint > 97) ? startCodePoint : 97);
    var end$2 = ((endCodePoint < 122) ? endCodePoint : 122);
    if ((start$2 <= end$2)) {
      var $x_2 = this.aq;
      var start$3 = ((start$2 - 32) | 0);
      var end$3 = ((end$2 - 32) | 0);
      this.aq = ($x_2 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$3) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$3)));
    }
  }
});
var $d_ju_regex_PatternCompiler$CharacterClassBuilder = new $TypeData().i($c_ju_regex_PatternCompiler$CharacterClassBuilder, "java.util.regex.PatternCompiler$CharacterClassBuilder", ({
  ef: 1
}));
function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
  if ((!$thiz.ju)) {
    $thiz.jv = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.i5), $thiz.dz);
    $thiz.ju = true;
  }
  return $thiz.jv;
}
/** @constructor */
function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
  this.jv = null;
  this.i5 = 0;
  this.dz = null;
  this.ju = false;
  this.i5 = kind;
  this.dz = data;
}
$p = $c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
$p.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
/** @constructor */
function $h_ju_regex_PatternCompiler$CompiledCharClass() {
}
$h_ju_regex_PatternCompiler$CompiledCharClass.prototype = $p;
$p.rj = (function() {
  return ((!this.ju) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.jv);
});
var $d_ju_regex_PatternCompiler$CompiledCharClass = new $TypeData().i($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
  eg: 1
}));
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rA(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().rz(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().qi(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().qh(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().kG(value);
}
function $s_RTLong__fromUnsignedInt__I__J(value) {
  return $bL(value, 0);
}
function $s_RTLong__fromInt__I__J(value) {
  var hi = (value >> 31);
  return $bL(value, hi);
}
function $s_RTLong__clz__I__I__I(lo, hi) {
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(lo)) | 0));
}
function $s_RTLong__toFloat__I__I__F(lo, hi) {
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__I__I__D(lo, hi) {
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__I__I__I(lo, hi) {
  return lo;
}
function $s_RTLong__toString__I__I__T(lo, hi) {
  return $m_RTLong$().oH(lo, hi);
}
function $s_RTLong__bitsToDouble__I__I__O__D(lo, hi, fpBitsDataView) {
  fpBitsDataView.setInt32(0, lo, true);
  fpBitsDataView.setInt32(4, hi, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__I__I__I__I__J(alo, ahi, blo, bhi) {
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, bhi) + Math.imul(ahi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sub__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo - blo) | 0);
  var hi = ((((ahi - bhi) | 0) - (((lo >>> 0) > (alo >>> 0)) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__add__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo + blo) | 0);
  var hi = ((((ahi + bhi) | 0) + (((lo >>> 0) < (alo >>> 0)) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sar__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : (hi >> n));
  var hi$1 = (((32 & n) === 0) ? (hi >> n) : (hi >> 31));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shr__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : ((hi >>> n) | 0));
  var hi$1 = (((32 & n) === 0) ? ((hi >>> n) | 0) : 0);
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shl__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (lo << n) : 0);
  var hi$1 = (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> (~n)) | 0) | (hi << n)) : (lo << n));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__xor__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo ^ blo);
  var hi = (ahi ^ bhi);
  return $bL(lo, hi);
}
function $s_RTLong__and__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo & blo);
  var hi = (ahi & bhi);
  return $bL(lo, hi);
}
function $s_RTLong__or__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo | blo);
  var hi = (ahi | bhi);
  return $bL(lo, hi);
}
function $s_RTLong__geu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__gtu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ltu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) !== 0);
}
function $s_RTLong__equals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) === 0);
}
/** @constructor */
function $c_RTLong$() {
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.oH = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var qHat = (+Math.floor((1.0000000000000265E-9 * aHat)));
    var rHat = ((rlo - Math.imul(1000000000, (qHat | 0.0))) | 0);
    if ((rHat < 0)) {
      qHat = (qHat - 1.0);
      rHat = ((1000000000 + rHat) | 0);
    }
    var this$7 = rHat;
    var remStr = ("" + this$7);
    var $x_1 = qHat;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.kG = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    return $bL(0, (-2147483648));
  } else if ((value >= 9.223372036854776E18)) {
    return $bL((-1), 2147483647);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((2.3283064365386963E-10 * value) | 0.0);
    var hi = (((value < 0.0) && (rawLo !== 0)) ? ((rawHi - 1) | 0) : rawHi);
    return $bL(rawLo, hi);
  }
});
$p.qh = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((rlo$1 >>> 0) < (xlo$1 >>> 0)) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var quotHi = (((rhi >>> 0) / ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var k = ((rhi - Math.imul(rlo$1, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var absR_$_lo = quotLo;
    var absR_$_hi = quotHi;
  } else {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    if ((((((rhi - ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0)) | 0) - (((((rlo - lo$1) | 0) >>> 0) > (rlo >>> 0)) | 0)) | 0) < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + ((lo$3 !== (-1)) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else {
      var absR_$_lo = lo;
      var absR_$_hi = hi;
    }
  }
  if (((ahi ^ bhi) >= 0)) {
    return $bL(absR_$_lo, absR_$_hi);
  } else {
    var lo$4 = ((-absR_$_lo) | 0);
    var hi$4 = ((((-absR_$_hi) | 0) - ((lo$4 !== 0) | 0)) | 0);
    return $bL(lo$4, hi$4);
  }
});
$p.qi = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var quotHi = (((ahi >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    var k = ((ahi - Math.imul(blo, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (alo >>> 0.0)) / blo) | 0.0);
    return $bL(quotLo, quotHi);
  } else if ((bhi >= 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    if ((((((ahi - ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0)) | 0) - (((((alo - lo$1) | 0) >>> 0) > (alo >>> 0)) | 0)) | 0) < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + ((lo$3 !== (-1)) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else {
      return $bL(lo, hi);
    }
  } else if (((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)))) {
    return $bL(0, 0);
  } else {
    return $bL(1, 0);
  }
});
$p.rz = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((rlo$1 >>> 0) < (xlo$1 >>> 0)) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var k$2 = (((rhi >>> 0) % ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var remLo = ((rlo - Math.imul(rlo$1, quotLo$2)) | 0);
    var absR_$_lo = remLo;
    var absR_$_hi = 0;
  } else {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) - (((lo$2 >>> 0) > (rlo >>> 0)) | 0)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + rlo$1) | 0);
      var hi$3 = ((((hi$2 + rhi$1) | 0) + (((lo$3 >>> 0) < (lo$2 >>> 0)) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else {
      var absR_$_lo = lo$2;
      var absR_$_hi = hi$2;
    }
  }
  if ((ahi < 0)) {
    var lo$4 = ((-absR_$_lo) | 0);
    var hi$4 = ((((-absR_$_hi) | 0) - ((lo$4 !== 0) | 0)) | 0);
    return $bL(lo$4, hi$4);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
$p.rA = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var k$2 = (((ahi >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (alo >>> 0.0)) / blo) | 0.0);
    var remLo = ((alo - Math.imul(blo, quotLo$2)) | 0);
    return $bL(remLo, 0);
  } else if ((bhi >= 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = ((aHat / bHat) + 0.00390625);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) - (((lo$2 >>> 0) > (alo >>> 0)) | 0)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + blo) | 0);
      var hi$3 = ((((hi$2 + bhi) | 0) + (((lo$3 >>> 0) < (lo$2 >>> 0)) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else {
      return $bL(lo$2, hi$2);
    }
  } else if (((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)))) {
    return $bL(alo, ahi);
  } else {
    var lo$4 = ((alo - blo) | 0);
    var hi$4 = ((((ahi - bhi) | 0) - (((lo$4 >>> 0) > (alo >>> 0)) | 0)) | 0);
    return $bL(lo$4, hi$4);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  ek: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
  var i = srcPos;
  var j = destPos;
  var srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().d4(dest, j, $m_sr_ScalaRunTime$().aL(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0);
  }
}
function $p_s_Array$__newUnitArray__I__Ajl_Void($thiz, len) {
  var result = new ($d_jl_Void.r().C)(len);
  $m_ju_Arrays$().qw(result, (void 0));
  return result;
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.nY = (function(it, evidence$1) {
  var n = it.q();
  if ((n > (-1))) {
    var elements = evidence$1.bU(n);
    var iterator = it.c();
    var i = 0;
    while ((i < n)) {
      $m_sr_ScalaRunTime$().d4(elements, i, iterator.e());
      i = ((1 + i) | 0);
    }
    return elements;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.bk();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var iterator$2 = it.c();
    while (iterator$2.i()) {
      var elem = iterator$2.e();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().j5(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().j4(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
});
$p.bT = (function(src, srcPos, dest, destPos, length) {
  var srcClass = $objectGetClass(src);
  if ((srcClass.L.Z && $objectGetClass(dest).L.R(srcClass.L))) {
    src.s(srcPos, dest, destPos, length);
  } else {
    $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
  }
});
$p.qb = (function(original, newLength) {
  if ($isArrayOf_jl_Void(original, 1)) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  }
  if ((original instanceof $ac_O)) {
    return $m_ju_Arrays$().ad(original, newLength);
  }
  if ((original instanceof $ac_I)) {
    return $m_ju_Arrays$().nJ(original, newLength);
  }
  if ((original instanceof $ac_D)) {
    return $m_ju_Arrays$().qc(original, newLength);
  }
  if ((original instanceof $ac_J)) {
    return $m_ju_Arrays$().nK(original, newLength);
  }
  if ((original instanceof $ac_F)) {
    return $m_ju_Arrays$().qd(original, newLength);
  }
  if ((original instanceof $ac_C)) {
    return $m_ju_Arrays$().nI(original, newLength);
  }
  if ((original instanceof $ac_B)) {
    return $m_ju_Arrays$().nH(original, newLength);
  }
  if ((original instanceof $ac_S)) {
    return $m_ju_Arrays$().nL(original, newLength);
  }
  if ((original instanceof $ac_Z)) {
    return $m_ju_Arrays$().nM(original, newLength);
  }
  throw new $c_s_MatchError(original);
});
$p.qa = (function(original, newLength, ct) {
  var runtimeClass = ct.bk();
  if (((runtimeClass !== null) && (runtimeClass === $d_V.l()))) {
    return $p_s_Array$__newUnitArray__I__Ajl_Void(this, newLength);
  } else if (runtimeClass.L.R($objectGetClass(original).L.Q().L)) {
    return (runtimeClass.L.X ? this.qb(original, newLength) : $m_ju_Arrays$().kq(original, newLength, $m_sr_ScalaRunTime$().iO(runtimeClass.L.U(0))));
  } else {
    var dest = ct.bU(newLength);
    $m_s_Array$().bT(original, 0, dest, 0, $m_jl_reflect_Array$().b9(original));
    return dest;
  }
});
$p.nV = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().n(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  el: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_Array$EmptyArrays$() {
  this.gN = null;
  this.jx = null;
  $n_s_Array$EmptyArrays$ = this;
  this.gN = new $ac_I(0);
  this.jx = new $ac_O(0);
}
$p = $c_s_Array$EmptyArrays$.prototype = new $h_O();
$p.constructor = $c_s_Array$EmptyArrays$;
/** @constructor */
function $h_s_Array$EmptyArrays$() {
}
$h_s_Array$EmptyArrays$.prototype = $p;
var $d_s_Array$EmptyArrays$ = new $TypeData().i($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
  em: 1
}));
var $n_s_Array$EmptyArrays$;
function $m_s_Array$EmptyArrays$() {
  if ((!$n_s_Array$EmptyArrays$)) {
    $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
  }
  return $n_s_Array$EmptyArrays$;
}
var $d_s_Equals = new $TypeData().i(1, "scala.Equals", ({
  d: 1
}));
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aT)));
}
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aT)));
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$p = $c_s_LowPriorityImplicits2.prototype = new $h_O();
$p.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $p;
/** @constructor */
function $c_s_Option$() {
}
$p = $c_s_Option$.prototype = new $h_O();
$p.constructor = $c_s_Option$;
/** @constructor */
function $h_s_Option$() {
}
$h_s_Option$.prototype = $p;
$p.hy = (function(x) {
  return ((x === null) ? $m_s_None$() : new $c_s_Some(x));
});
var $d_s_Option$ = new $TypeData().i($c_s_Option$, "scala.Option$", ({
  et: 1
}));
var $n_s_Option$;
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$();
  }
  return $n_s_Option$;
}
/** @constructor */
function $c_s_PartialFunction$() {
  this.gO = null;
  this.p0 = null;
  this.m6 = null;
  $n_s_PartialFunction$ = this;
  this.gO = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => this.gO));
  this.p0 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$3$2) => false));
  this.m6 = new $c_s_PartialFunction$$anon$1();
}
$p = $c_s_PartialFunction$.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$;
/** @constructor */
function $h_s_PartialFunction$() {
}
$h_s_PartialFunction$.prototype = $p;
$p.oo = (function(x) {
  return (this.gO === x);
});
var $d_s_PartialFunction$ = new $TypeData().i($c_s_PartialFunction$, "scala.PartialFunction$", ({
  eu: 1
}));
var $n_s_PartialFunction$;
function $m_s_PartialFunction$() {
  if ((!$n_s_PartialFunction$)) {
    $n_s_PartialFunction$ = new $c_s_PartialFunction$();
  }
  return $n_s_PartialFunction$;
}
function $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len$1, \u03b4this$2, ord$1) {
  if ((len$1 < 300)) {
    var a = $m_sr_ScalaRunTime$().ny(\u03b4this$2);
    $m_s_util_Sorting$().l1(a, 0, $m_jl_reflect_Array$().b9(a), ord$1);
    return a;
  } else {
    if ($d_O.R($objectGetClass(\u03b4this$2).L.Q().L)) {
      var a$2 = $m_ju_Arrays$().kq(\u03b4this$2, len$1, $m_sr_ScalaRunTime$().iO(new $ac_O(0)));
    } else {
      var dest = new $ac_O(len$1);
      $m_s_Array$().bT(\u03b4this$2, 0, dest, 0, $m_jl_reflect_Array$().b9(\u03b4this$2));
      var a$2 = dest;
    }
    $m_ju_Arrays$().gz(a$2, ord$1);
    return $m_s_Array$().qa(a$2, len$1, $m_s_reflect_ClassTag$().kj($objectGetClass(\u03b4this$2).L.Q()));
  }
}
/** @constructor */
function $c_sc_ArrayOps$() {
  this.mb = null;
  $n_sc_ArrayOps$ = this;
  this.mb = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => $m_sc_ArrayOps$().mb));
}
$p = $c_sc_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sc_ArrayOps$;
/** @constructor */
function $h_sc_ArrayOps$() {
}
$h_sc_ArrayOps$.prototype = $p;
$p.rY = (function(this$, ord) {
  var len = $m_jl_reflect_Array$().b9(this$);
  if ((len <= 1)) {
    return $m_sr_ScalaRunTime$().ny(this$);
  } else if ((this$ instanceof $ac_O)) {
    var a = $m_ju_Arrays$().ad(this$, len);
    $m_ju_Arrays$().gz(a, ord);
    return a;
  } else if ((this$ instanceof $ac_I)) {
    if ((ord === $m_s_math_Ordering$Int$())) {
      var a$2 = $m_ju_Arrays$().nJ(this$, len);
      $m_ju_Arrays$().ow(a$2);
      return a$2;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_J)) {
    if ((ord === $m_s_math_Ordering$Long$())) {
      var a$3 = $m_ju_Arrays$().nK(this$, len);
      $m_ju_Arrays$().ox(a$3);
      return a$3;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_C)) {
    if ((ord === $m_s_math_Ordering$Char$())) {
      var a$4 = $m_ju_Arrays$().nI(this$, len);
      $m_ju_Arrays$().ov(a$4);
      return a$4;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_B)) {
    if ((ord === $m_s_math_Ordering$Byte$())) {
      var a$5 = $m_ju_Arrays$().nH(this$, len);
      $m_ju_Arrays$().ou(a$5);
      return a$5;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_S)) {
    if ((ord === $m_s_math_Ordering$Short$())) {
      var a$6 = $m_ju_Arrays$().nL(this$, len);
      $m_ju_Arrays$().oy(a$6);
      return a$6;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else if ((this$ instanceof $ac_Z)) {
    if ((ord === $m_s_math_Ordering$Boolean$())) {
      var a$7 = $m_ju_Arrays$().nM(this$, len);
      $m_s_util_Sorting$().l1(a$7, 0, a$7.a.length, $m_s_math_Ordering$Boolean$());
      return a$7;
    } else {
      return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
    }
  } else {
    return $ps_sc_ArrayOps$__boxed$1__I__O__s_math_Ordering__O(len, this$, ord);
  }
});
var $d_sc_ArrayOps$ = new $TypeData().i($c_sc_ArrayOps$, "scala.collection.ArrayOps$", ({
  eE: 1
}));
var $n_sc_ArrayOps$;
function $m_sc_ArrayOps$() {
  if ((!$n_sc_ArrayOps$)) {
    $n_sc_ArrayOps$ = new $c_sc_ArrayOps$();
  }
  return $n_sc_ArrayOps$;
}
/** @constructor */
function $c_sc_Hashing$() {
}
$p = $c_sc_Hashing$.prototype = new $h_O();
$p.constructor = $c_sc_Hashing$;
/** @constructor */
function $h_sc_Hashing$() {
}
$h_sc_Hashing$.prototype = $p;
$p.bE = (function(hcode) {
  var h = ((hcode + (~(hcode << 9))) | 0);
  h = (h ^ ((h >>> 14) | 0));
  h = ((h + (h << 4)) | 0);
  return (h ^ ((h >>> 10) | 0));
});
var $d_sc_Hashing$ = new $TypeData().i($c_sc_Hashing$, "scala.collection.Hashing$", ({
  eJ: 1
}));
var $n_sc_Hashing$;
function $m_sc_Hashing$() {
  if ((!$n_sc_Hashing$)) {
    $n_sc_Hashing$ = new $c_sc_Hashing$();
  }
  return $n_sc_Hashing$;
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.c();
  while (it.i()) {
    f.d(it.e());
  }
}
function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
  var res = true;
  var it = $thiz.c();
  while ((res && it.i())) {
    res = (!(!p.d(it.e())));
  }
  return res;
}
function $f_sc_IterableOnceOps__exists__F1__Z($thiz, p) {
  var res = false;
  var it = $thiz.c();
  while (((!res) && it.i())) {
    res = (!(!p.d(it.e())));
  }
  return res;
}
function $f_sc_IterableOnceOps__find__F1__s_Option($thiz, p) {
  var it = $thiz.c();
  while (it.i()) {
    var a = it.e();
    if ((!(!p.d(a)))) {
      return new $c_s_Some(a);
    }
  }
  return $m_s_None$();
}
function $f_sc_IterableOnceOps__foldLeft__O__F2__O($thiz, z, op) {
  if ($is_sc_IndexedSeq($thiz)) {
    return $p_sc_IterableOnceOps__loop$1__F2__sc_IndexedSeq__I__I__O__O($thiz, op, $thiz, 0, $thiz.l(), z);
  } else {
    var result = z;
    var it = $thiz.c();
    while (it.i()) {
      result = op.ca(result, it.e());
    }
    return result;
  }
}
function $f_sc_IterableOnceOps__isEmpty__Z($thiz) {
  var x30 = $thiz.q();
  if ((x30 === (-1))) {
    return (!$thiz.c().i());
  }
  if ((x30 === 0)) {
    return true;
  }
  return false;
}
function $f_sc_IterableOnceOps__size__I($thiz) {
  if (($thiz.q() >= 0)) {
    return $thiz.q();
  } else {
    var it = $thiz.c();
    var len = 0;
    while (it.i()) {
      len = ((1 + len) | 0);
      it.e();
    }
    return len;
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.c();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.q();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().b9(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().b9(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.i())) {
    $m_sr_ScalaRunTime$().d4(dest, i, it.e());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__maxByOption__F1__s_math_Ordering__s_Option($thiz, f, ord) {
  return (($thiz.q() === 0) ? $m_s_None$() : $thiz.d5(new $c_sc_IterableOnceOps$Maximized("maxBy", f, new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((x$2, y$2) => ord.dS(x$2, y$2)))), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((m$2, a$2) => m$2.nw(m$2, a$2)))).s5());
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.q() === 0) ? (("" + start) + end) : $thiz.cl($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).bD.w);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.bD;
  if ((start.length !== 0)) {
    jsb.w = (("" + jsb.w) + start);
  }
  var it = $thiz.c();
  if (it.i()) {
    var obj = it.e();
    jsb.w = (("" + jsb.w) + obj);
    while (it.i()) {
      if ((sep.length !== 0)) {
        jsb.w = (("" + jsb.w) + sep);
      }
      var obj$1 = it.e();
      jsb.w = (("" + jsb.w) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.w = (("" + jsb.w) + end);
  }
  return b;
}
function $f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O($thiz, evidence$1) {
  if (($thiz.q() >= 0)) {
    var length = $thiz.q();
    var destination = evidence$1.bU(length);
    $thiz.bh(destination, 0, 2147483647);
    return destination;
  } else {
    var capacity = 0;
    var size = 0;
    var jsElems = null;
    var elementClass = evidence$1.bk();
    capacity = 0;
    size = 0;
    var isCharArrayBuilder = (elementClass === $d_C.l());
    jsElems = [];
    var it = $thiz.c();
    while (it.i()) {
      var elem = it.e();
      var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().j5(elementClass) : elem));
      jsElems.push(unboxedElem);
    }
    return $m_scm_ArrayBuilder$().j4(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems);
  }
}
function $f_sc_IterableOnceOps__reversed__sc_Iterable($thiz) {
  var xs = $m_sci_Nil$();
  var it = $thiz.c();
  while (it.i()) {
    xs = new $c_sci_$colon$colon(it.e(), xs);
  }
  return xs;
}
function $p_sc_IterableOnceOps__loop$1__F2__sc_IndexedSeq__I__I__O__O($thiz, op$1, seq$1, at, end, acc) {
  var acc$tailLocal1 = acc;
  var at$tailLocal1 = at;
  while (true) {
    if ((at$tailLocal1 === end)) {
      return acc$tailLocal1;
    } else {
      var at$tailLocal1$tmp1 = ((1 + at$tailLocal1) | 0);
      var acc$tailLocal1$tmp1 = op$1.ca(acc$tailLocal1, seq$1.r(at$tailLocal1));
      at$tailLocal1 = at$tailLocal1$tmp1;
      acc$tailLocal1 = acc$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.mk = null;
  this.gU = null;
  this.mk = head;
  this.gU = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.qY = (function() {
  return this.mk.Q().c();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  eW: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.mr = null;
  $n_sc_StringOps$ = this;
  this.mr = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.mr));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
$p.kZ = (function(this$, from, until) {
  var start = ((from > 0) ? from : 0);
  var that = this$.length;
  var end = ((until < that) ? until : that);
  return ((start >= end) ? "" : this$.substring(start, end));
});
$p.j1 = (function(this$) {
  return $ct_s_util_matching_Regex__T__sci_Seq__(new $c_s_util_matching_Regex(), this$, new $c_sjsr_WrappedVarArgs([]));
});
$p.qX = (function(this$) {
  if ((this$ === "")) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty String");
  } else {
    return this$.charCodeAt(0);
  }
});
$p.j7 = (function(this$) {
  if ((this$ === "")) {
    throw new $c_jl_UnsupportedOperationException("tail of empty String");
  } else {
    return this.kZ(this$, 1, this$.length);
  }
});
$p.oD = (function(this$, n) {
  var y = this$.length;
  return this.kZ(this$, 0, ((n < y) ? n : y));
});
$p.nN = (function(this$, n) {
  var y = this$.length;
  return this.kZ(this$, ((n < y) ? n : y), this$.length);
});
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  f9: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_scg_CommonErrors$() {
}
$p = $c_scg_CommonErrors$.prototype = new $h_O();
$p.constructor = $c_scg_CommonErrors$;
/** @constructor */
function $h_scg_CommonErrors$() {
}
$h_scg_CommonErrors$.prototype = $p;
$p.kL = (function(index, max) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
});
var $d_scg_CommonErrors$ = new $TypeData().i($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
  fg: 1
}));
var $n_scg_CommonErrors$;
function $m_scg_CommonErrors$() {
  if ((!$n_scg_CommonErrors$)) {
    $n_scg_CommonErrors$ = new $c_scg_CommonErrors$();
  }
  return $n_scg_CommonErrors$;
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.mw = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().kP($m_jl_System$SystemProperties$().kJ("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.mw = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  fr: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sci_LazyList$EmptyMarker$() {
}
$p = $c_sci_LazyList$EmptyMarker$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$EmptyMarker$;
/** @constructor */
function $h_sci_LazyList$EmptyMarker$() {
}
$h_sci_LazyList$EmptyMarker$.prototype = $p;
var $d_sci_LazyList$EmptyMarker$ = new $TypeData().i($c_sci_LazyList$EmptyMarker$, "scala.collection.immutable.LazyList$EmptyMarker$", ({
  fu: 1
}));
var $n_sci_LazyList$EmptyMarker$;
function $m_sci_LazyList$EmptyMarker$() {
  if ((!$n_sci_LazyList$EmptyMarker$)) {
    $n_sci_LazyList$EmptyMarker$ = new $c_sci_LazyList$EmptyMarker$();
  }
  return $n_sci_LazyList$EmptyMarker$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder$DeferredState() {
  this.jN = null;
}
$p = $c_sci_LazyList$LazyBuilder$DeferredState.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder$DeferredState;
/** @constructor */
function $h_sci_LazyList$LazyBuilder$DeferredState() {
}
$h_sci_LazyList$LazyBuilder$DeferredState.prototype = $p;
$p.kv = (function() {
  var state = this.jN;
  if ((state === null)) {
    throw new $c_jl_IllegalStateException("uninitialized");
  }
  return state.Q();
});
$p.kM = (function(state) {
  if ((this.jN !== null)) {
    throw new $c_jl_IllegalStateException("already initialized");
  }
  this.jN = state;
});
var $d_sci_LazyList$LazyBuilder$DeferredState = new $TypeData().i($c_sci_LazyList$LazyBuilder$DeferredState, "scala.collection.immutable.LazyList$LazyBuilder$DeferredState", ({
  fw: 1
}));
function $isArrayOf_sci_LazyListBase$InRace(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fA)));
}
/** @constructor */
function $c_sci_LazyListBase$TailUpdater() {
}
$p = $c_sci_LazyListBase$TailUpdater.prototype = new $h_O();
$p.constructor = $c_sci_LazyListBase$TailUpdater;
/** @constructor */
function $h_sci_LazyListBase$TailUpdater() {
}
$h_sci_LazyListBase$TailUpdater.prototype = $p;
var $d_sci_LazyListBase$TailUpdater = new $TypeData().i($c_sci_LazyListBase$TailUpdater, "scala.collection.immutable.LazyListBase$TailUpdater", ({
  fB: 1
}));
/** @constructor */
function $c_sci_MapNode$() {
  this.mB = null;
  $n_sci_MapNode$ = this;
  $m_s_reflect_ManifestFactory$IntManifest$();
  this.mB = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_MapNode$.prototype = new $h_O();
$p.constructor = $c_sci_MapNode$;
/** @constructor */
function $h_sci_MapNode$() {
}
$h_sci_MapNode$.prototype = $p;
var $d_sci_MapNode$ = new $TypeData().i($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
  fR: 1
}));
var $n_sci_MapNode$;
function $m_sci_MapNode$() {
  if ((!$n_sci_MapNode$)) {
    $n_sci_MapNode$ = new $c_sci_MapNode$();
  }
  return $n_sci_MapNode$;
}
function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
  return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (($m_jl_reflect_Array$().b9(as) - 1) | 0)));
}
/** @constructor */
function $c_sci_Node() {
}
$p = $c_sci_Node.prototype = new $h_O();
$p.constructor = $c_sci_Node;
/** @constructor */
function $h_sci_Node() {
}
$h_sci_Node.prototype = $p;
$p.j2 = (function(as, ix) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > ((as.a.length - 1) | 0))) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((as.a.length - 1) | 0));
  as.s(0, result, 0, ix);
  var srcPos = ((1 + ix) | 0);
  var length = ((((as.a.length - ix) | 0) - 1) | 0);
  as.s(srcPos, result, ix, length);
  return result;
});
$p.ob = (function(as, ix, elem) {
  if ((ix < 0)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  if ((ix > as.a.length)) {
    throw $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix);
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.s(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.s(ix, result, destPos, length);
  return result;
});
var $d_sci_Node = new $TypeData().i(0, "scala.collection.immutable.Node", ({
  aE: 1
}));
/** @constructor */
function $c_sci_Node$() {
  this.h5 = 0;
  $n_sci_Node$ = this;
  this.h5 = $doubleToInt((+Math.ceil(6.4)));
}
$p = $c_sci_Node$.prototype = new $h_O();
$p.constructor = $c_sci_Node$;
/** @constructor */
function $h_sci_Node$() {
}
$h_sci_Node$.prototype = $p;
$p.cI = (function(hash, shift) {
  return (31 & ((hash >>> shift) | 0));
});
$p.bZ = (function(mask) {
  return (1 << mask);
});
$p.fE = (function(bitmap, bitpos) {
  return $m_jl_Integer$().bR((bitmap & ((bitpos - 1) | 0)));
});
$p.bM = (function(bitmap, mask, bitpos) {
  return ((bitmap === (-1)) ? mask : this.fE(bitmap, bitpos));
});
var $d_sci_Node$ = new $TypeData().i($c_sci_Node$, "scala.collection.immutable.Node$", ({
  fV: 1
}));
var $n_sci_Node$;
function $m_sci_Node$() {
  if ((!$n_sci_Node$)) {
    $n_sci_Node$ = new $c_sci_Node$();
  }
  return $n_sci_Node$;
}
/** @constructor */
function $c_sci_SetNode$() {
  this.mG = null;
  $n_sci_SetNode$ = this;
  $m_s_reflect_ManifestFactory$IntManifest$();
  this.mG = new $c_sci_BitmapIndexedSetNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
}
$p = $c_sci_SetNode$.prototype = new $h_O();
$p.constructor = $c_sci_SetNode$;
/** @constructor */
function $h_sci_SetNode$() {
}
$h_sci_SetNode$.prototype = $p;
var $d_sci_SetNode$ = new $TypeData().i($c_sci_SetNode$, "scala.collection.immutable.SetNode$", ({
  g9: 1
}));
var $n_sci_SetNode$;
function $m_sci_SetNode$() {
  if ((!$n_sci_SetNode$)) {
    $n_sci_SetNode$ = new $c_sci_SetNode$();
  }
  return $n_sci_SetNode$;
}
/** @constructor */
function $c_sci_VectorStatics$() {
  this.jS = null;
  this.ap = null;
  this.bz = null;
  this.dj = null;
  this.h7 = null;
  this.jT = null;
  $n_sci_VectorStatics$ = this;
  this.jS = new $ac_O(0);
  this.ap = new ($d_O.r().r().C)(0);
  this.bz = new ($d_O.r().r().r().C)(0);
  this.dj = new ($d_O.r().r().r().r().C)(0);
  this.h7 = new ($d_O.r().r().r().r().r().C)(0);
  this.jT = new ($d_O.r().r().r().r().r().r().C)(0);
}
$p = $c_sci_VectorStatics$.prototype = new $h_O();
$p.constructor = $c_sci_VectorStatics$;
/** @constructor */
function $h_sci_VectorStatics$() {
}
$h_sci_VectorStatics$.prototype = $p;
$p.gp = (function(a, elem) {
  var alen = a.a.length;
  var ac = new $ac_O(((1 + alen) | 0));
  a.s(0, ac, 0, alen);
  ac.a[alen] = elem;
  return ac;
});
$p.F = (function(a, elem) {
  var ac = $m_ju_Arrays$().ad(a, ((1 + a.a.length) | 0));
  ac.a[((ac.a.length - 1) | 0)] = elem;
  return ac;
});
$p.gq = (function(elem, a) {
  var ac = new $ac_O(((1 + a.a.length) | 0));
  var length = a.a.length;
  a.s(0, ac, 1, length);
  ac.a[0] = elem;
  return ac;
});
$p.B = (function(elem, a) {
  var ac = $objectGetClass(a).L.Q().L.U(((1 + a.a.length) | 0));
  var length$1 = a.a.length;
  a.s(0, ac, 1, length$1);
  ac.a[0] = elem;
  return ac;
});
$p.kz = (function(level, a, f) {
  var i = 0;
  var len = a.a.length;
  if ((level === 0)) {
    while ((i < len)) {
      f.d(a.a[i]);
      i = ((1 + i) | 0);
    }
  } else {
    var l = ((level - 1) | 0);
    while ((i < len)) {
      this.kz(l, a.a[i], f);
      i = ((1 + i) | 0);
    }
  }
});
$p.d6 = (function(a, f) {
  var i = 0;
  while ((i < a.a.length)) {
    var v1 = a.a[i];
    var v2 = f.d(v1);
    if ((!Object.is(v1, v2))) {
      return this.rd(a, f, i, v2);
    }
    i = ((1 + i) | 0);
  }
  return a;
});
$p.rd = (function(a, f, at, v2) {
  var ac = new $ac_O(a.a.length);
  if ((at > 0)) {
    a.s(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = f.d(a.a[i]);
    i = ((1 + i) | 0);
  }
  return ac;
});
$p.aI = (function(n, a, f) {
  if ((n === 1)) {
    return this.d6(a, f);
  } else {
    var i = 0;
    while ((i < a.a.length)) {
      var v1 = a.a[i];
      var v2 = this.aI(((n - 1) | 0), v1, f);
      if ((v1 !== v2)) {
        return this.re(n, a, f, i, v2);
      }
      i = ((1 + i) | 0);
    }
    return a;
  }
});
$p.re = (function(n, a, f, at, v2) {
  var ac = $objectGetClass(a).L.Q().L.U(a.a.length);
  if ((at > 0)) {
    a.s(0, ac, 0, at);
  }
  ac.a[at] = v2;
  var i = ((1 + at) | 0);
  while ((i < a.a.length)) {
    ac.a[i] = this.aI(((n - 1) | 0), a.a[i], f);
    i = ((1 + i) | 0);
  }
  return ac;
});
var $d_sci_VectorStatics$ = new $TypeData().i($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
  gn: 1
}));
var $n_sci_VectorStatics$;
function $m_sci_VectorStatics$() {
  if ((!$n_sci_VectorStatics$)) {
    $n_sci_VectorStatics$ = new $c_sci_VectorStatics$();
  }
  return $n_sci_VectorStatics$;
}
/** @constructor */
function $c_scm_ArrayBuilder$() {
}
$p = $c_scm_ArrayBuilder$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder$;
/** @constructor */
function $h_scm_ArrayBuilder$() {
}
$h_scm_ArrayBuilder$.prototype = $p;
$p.j5 = (function(runtimeClass) {
  return ((runtimeClass === $d_B.l()) ? 0 : ((runtimeClass === $d_S.l()) ? 0 : ((runtimeClass === $d_C.l()) ? 0 : ((runtimeClass === $d_I.l()) ? 0 : ((runtimeClass === $d_J.l()) ? $bL(0, 0) : ((runtimeClass === $d_F.l()) ? 0.0 : ((runtimeClass === $d_D.l()) ? 0.0 : ((runtimeClass === $d_Z.l()) ? false : ((runtimeClass === $d_V.l()) ? (void 0) : null)))))))));
});
$p.j4 = (function(runtimeClass, a) {
  var len = (a.length | 0);
  if ((runtimeClass === $d_C.l())) {
    var result = new $ac_C(len);
    var i = 0;
    while ((i !== len)) {
      result.a[i] = (65535 & (a[i] | 0));
      i = ((1 + i) | 0);
    }
    return result;
  } else {
    var result$2 = runtimeClass.L.U(len);
    var i$2 = 0;
    while ((i$2 !== len)) {
      $m_sr_ScalaRunTime$().d4(result$2, i$2, a[i$2]);
      i$2 = ((1 + i$2) | 0);
    }
    return result$2;
  }
});
var $d_scm_ArrayBuilder$ = new $TypeData().i($c_scm_ArrayBuilder$, "scala.collection.mutable.ArrayBuilder$", ({
  gu: 1
}));
var $n_scm_ArrayBuilder$;
function $m_scm_ArrayBuilder$() {
  if ((!$n_scm_ArrayBuilder$)) {
    $n_scm_ArrayBuilder$ = new $c_scm_ArrayBuilder$();
  }
  return $n_scm_ArrayBuilder$;
}
/** @constructor */
function $c_scm_HashMap$Node(_key, _hash, _value, _next) {
  this.eQ = null;
  this.dJ = 0;
  this.cD = null;
  this.bg = null;
  this.eQ = _key;
  this.dJ = _hash;
  this.cD = _value;
  this.bg = _next;
}
$p = $c_scm_HashMap$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashMap$Node;
/** @constructor */
function $h_scm_HashMap$Node() {
}
$h_scm_HashMap$Node.prototype = $p;
$p.hD = (function(k, h) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if (((h === \u03b4this$tailLocal1.dJ) && $m_sr_BoxesRunTime$().n(k, \u03b4this$tailLocal1.eQ))) {
      return \u03b4this$tailLocal1;
    } else if (((\u03b4this$tailLocal1.bg === null) || (\u03b4this$tailLocal1.dJ > h))) {
      return null;
    } else {
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.bg;
    }
  }
});
$p.dn = (function(f) {
  var \u03b4this$tailLocal3 = this;
  while (true) {
    f.ca(\u03b4this$tailLocal3.eQ, \u03b4this$tailLocal3.cD);
    if ((\u03b4this$tailLocal3.bg !== null)) {
      \u03b4this$tailLocal3 = \u03b4this$tailLocal3.bg;
    } else {
      return (void 0);
    }
  }
});
$p.v = (function() {
  return ((((((("Node(" + this.eQ) + ", ") + this.cD) + ", ") + this.dJ) + ") -> ") + this.bg);
});
var $d_scm_HashMap$Node = new $TypeData().i($c_scm_HashMap$Node, "scala.collection.mutable.HashMap$Node", ({
  gI: 1
}));
/** @constructor */
function $c_scm_HashSet$Node(_key, _hash, _next) {
  this.gj = null;
  this.ef = 0;
  this.bC = null;
  this.gj = _key;
  this.ef = _hash;
  this.bC = _next;
}
$p = $c_scm_HashSet$Node.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$Node;
/** @constructor */
function $h_scm_HashSet$Node() {
}
$h_scm_HashSet$Node.prototype = $p;
$p.qz = (function(k, h) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if (((h === \u03b4this$tailLocal1.ef) && $m_sr_BoxesRunTime$().n(k, \u03b4this$tailLocal1.gj))) {
      return \u03b4this$tailLocal1;
    } else if (((\u03b4this$tailLocal1.bC === null) || (\u03b4this$tailLocal1.ef > h))) {
      return null;
    } else {
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.bC;
    }
  }
});
$p.v = (function() {
  return ((((("Node(" + this.gj) + ", ") + this.ef) + ") -> ") + this.bC);
});
var $d_scm_HashSet$Node = new $TypeData().i($c_scm_HashSet$Node, "scala.collection.mutable.HashSet$Node", ({
  gO: 1
}));
/** @constructor */
function $c_scm_MutationTracker$() {
}
$p = $c_scm_MutationTracker$.prototype = new $h_O();
$p.constructor = $c_scm_MutationTracker$;
/** @constructor */
function $h_scm_MutationTracker$() {
}
$h_scm_MutationTracker$.prototype = $p;
$p.kl = (function(expectedCount, actualCount, message) {
  if ((actualCount !== expectedCount)) {
    throw new $c_ju_ConcurrentModificationException(message);
  }
});
var $d_scm_MutationTracker$ = new $TypeData().i($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
  gW: 1
}));
var $n_scm_MutationTracker$;
function $m_scm_MutationTracker$() {
  if ((!$n_scm_MutationTracker$)) {
    $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
  }
  return $n_scm_MutationTracker$;
}
function $ct_s_concurrent_BatchingExecutor$AbstractBatch__jl_Runnable__Ajl_Runnable__I__($thiz, first, other, size) {
  $thiz.hf = first;
  $thiz.hg = other;
  $thiz.eT = size;
  return $thiz;
}
function $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable($thiz, curSize) {
  var curOther = $thiz.hg;
  var curLen = curOther.a.length;
  if ((curSize <= curLen)) {
    return curOther;
  } else {
    var newLen = ((curLen === 0) ? 4 : (curLen << 1));
    if ((newLen <= curLen)) {
      throw new $c_jl_StackOverflowError(("Space limit of asynchronous stack reached: " + curLen));
    }
    var newOther = new ($d_jl_Runnable.r().C)(newLen);
    curOther.s(0, newOther, 0, curLen);
    $thiz.hg = newOther;
    return newOther;
  }
}
/** @constructor */
function $c_s_concurrent_BatchingExecutor$AbstractBatch() {
  this.hf = null;
  this.hg = null;
  this.eT = 0;
}
$p = $c_s_concurrent_BatchingExecutor$AbstractBatch.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutor$AbstractBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$AbstractBatch() {
}
$h_s_concurrent_BatchingExecutor$AbstractBatch.prototype = $p;
$p.rv = (function(r) {
  var sz = this.eT;
  if ((sz === 0)) {
    this.hf = r;
  } else {
    $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable(this, sz).a[((sz - 1) | 0)] = r;
  }
  this.eT = ((1 + sz) | 0);
});
$p.rG = (function(n) {
  var n$tailLocal1 = n;
  while (true) {
    if ((n$tailLocal1 > 0)) {
      var x1 = this.eT;
      if ((x1 === 0)) {
        return (void 0);
      }
      if ((x1 === 1)) {
        var x$proxy1 = this.hf;
        if ((x$proxy1 === null)) {
          $m_sr_Scala3RunTime$().bp();
        }
        this.hf = null;
        this.eT = 0;
        x$proxy1.f1();
        n$tailLocal1 = ((n$tailLocal1 - 1) | 0);
        continue;
      }
      var o = this.hg;
      var x$proxy2 = o.a[((x1 - 2) | 0)];
      if ((x$proxy2 === null)) {
        $m_sr_Scala3RunTime$().bp();
      }
      o.a[((x1 - 2) | 0)] = null;
      this.eT = ((x1 - 1) | 0);
      x$proxy2.f1();
      n$tailLocal1 = ((n$tailLocal1 - 1) | 0);
    } else {
      return (void 0);
    }
  }
});
/** @constructor */
function $c_s_concurrent_BatchingExecutorStatics$() {
  this.mV = null;
  $n_s_concurrent_BatchingExecutorStatics$ = this;
  this.mV = new ($d_jl_Runnable.r().C)(0);
}
$p = $c_s_concurrent_BatchingExecutorStatics$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_BatchingExecutorStatics$;
/** @constructor */
function $h_s_concurrent_BatchingExecutorStatics$() {
}
$h_s_concurrent_BatchingExecutorStatics$.prototype = $p;
var $d_s_concurrent_BatchingExecutorStatics$ = new $TypeData().i($c_s_concurrent_BatchingExecutorStatics$, "scala.concurrent.BatchingExecutorStatics$", ({
  h3: 1
}));
var $n_s_concurrent_BatchingExecutorStatics$;
function $m_s_concurrent_BatchingExecutorStatics$() {
  if ((!$n_s_concurrent_BatchingExecutorStatics$)) {
    $n_s_concurrent_BatchingExecutorStatics$ = new $c_s_concurrent_BatchingExecutorStatics$();
  }
  return $n_s_concurrent_BatchingExecutorStatics$;
}
/** @constructor */
function $c_s_concurrent_ExecutionContext$() {
  this.mW = null;
  this.mX = false;
  this.gk = null;
  $n_s_concurrent_ExecutionContext$ = this;
  this.gk = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$3) => {
    _$1$3.hO($m_jl_System$Streams$().g1);
  }));
}
$p = $c_s_concurrent_ExecutionContext$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_ExecutionContext$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$() {
}
$h_s_concurrent_ExecutionContext$.prototype = $p;
$p.em = (function() {
  if ((!this.mX)) {
    this.mW = $m_sjs_concurrent_JSExecutionContext$().ne;
    this.mX = true;
  }
  return this.mW;
});
var $d_s_concurrent_ExecutionContext$ = new $TypeData().i($c_s_concurrent_ExecutionContext$, "scala.concurrent.ExecutionContext$", ({
  h4: 1
}));
var $n_s_concurrent_ExecutionContext$;
function $m_s_concurrent_ExecutionContext$() {
  if ((!$n_s_concurrent_ExecutionContext$)) {
    $n_s_concurrent_ExecutionContext$ = new $c_s_concurrent_ExecutionContext$();
  }
  return $n_s_concurrent_ExecutionContext$;
}
/** @constructor */
function $c_s_concurrent_Future$() {
  this.mZ = null;
  this.n1 = null;
  this.n0 = null;
  this.k4 = null;
  this.n2 = null;
  this.n3 = null;
  $n_s_concurrent_Future$ = this;
  $m_sci_Map$().hE(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), $d_Z.l(), $d_jl_Boolean.l()), $ct_T2__O__O__(new $c_T2(), $d_B.l(), $d_jl_Byte.l()), $ct_T2__O__O__(new $c_T2(), $d_C.l(), $d_jl_Character.l()), $ct_T2__O__O__(new $c_T2(), $d_S.l(), $d_jl_Short.l()), $ct_T2__O__O__(new $c_T2(), $d_I.l(), $d_jl_Integer.l()), $ct_T2__O__O__(new $c_T2(), $d_J.l(), $d_jl_Long.l()), $ct_T2__O__O__(new $c_T2(), $d_F.l(), $d_jl_Float.l()), $ct_T2__O__O__(new $c_T2(), $d_D.l(), $d_jl_Double.l()), $ct_T2__O__O__(new $c_T2(), $d_V.l(), $d_jl_Void.l())]));
  this.mZ = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2) => {
    throw new $c_s_concurrent_Future$$anon$1(t$2);
  }));
  this.n1 = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$2());
  this.n0 = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$3());
  $m_s_concurrent_Future$().o5(this.n0);
  this.k4 = $m_s_concurrent_Future$().qu(new $c_s_concurrent_Future$$anon$4());
  this.n2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((t$2$1) => this.k4));
  this.n3 = this.o5(new $c_s_util_Success((void 0)));
}
$p = $c_s_concurrent_Future$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_Future$;
/** @constructor */
function $h_s_concurrent_Future$() {
}
$h_s_concurrent_Future$.prototype = $p;
$p.qu = (function(exception) {
  return $m_s_concurrent_Promise$().qv(exception);
});
$p.o5 = (function(result) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), result);
});
$p.pQ = (function(body, executor) {
  return this.n3.hJ(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$4$2) => body.Q())), executor);
});
$p.qB = (function(futures, executor) {
  var i = futures.c();
  if ((!i.i())) {
    return $m_s_concurrent_Future$never$();
  } else {
    var p = $ct_s_concurrent_impl_Promise$DefaultPromise__(new $c_s_concurrent_impl_Promise$DefaultPromise());
    var firstCompleteHandler = new $c_s_concurrent_Future$$anon$5(p);
    var completed = false;
    while ((i.i() && (!completed))) {
      var deregs = firstCompleteHandler.J;
      if ((deregs === null)) {
        completed = true;
      } else {
        matchResult3: {
          var x6 = i.e();
          if ((x6 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
            var d = x6.ro(firstCompleteHandler, executor);
            if ((!firstCompleteHandler.eZ(deregs, new $c_sci_$colon$colon(d, deregs)))) {
              d.Q();
              break matchResult3;
            } else {
              break matchResult3;
            }
          }
          x6.j0(firstCompleteHandler, executor);
        }
      }
    }
    return p;
  }
});
var $d_s_concurrent_Future$ = new $TypeData().i($c_s_concurrent_Future$, "scala.concurrent.Future$", ({
  h6: 1
}));
var $n_s_concurrent_Future$;
function $m_s_concurrent_Future$() {
  if ((!$n_s_concurrent_Future$)) {
    $n_s_concurrent_Future$ = new $c_s_concurrent_Future$();
  }
  return $n_s_concurrent_Future$;
}
function $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result) {
  if ($thiz.oJ(result)) {
    return $thiz;
  } else {
    throw new $c_jl_IllegalStateException("Promise already completed.");
  }
}
function $f_s_concurrent_Promise__success__O__s_concurrent_Promise($thiz, value) {
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, new $c_s_util_Success(value));
}
function $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise($thiz, cause) {
  return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, new $c_s_util_Failure(cause));
}
/** @constructor */
function $c_s_concurrent_Promise$() {
}
$p = $c_s_concurrent_Promise$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_Promise$;
/** @constructor */
function $h_s_concurrent_Promise$() {
}
$h_s_concurrent_Promise$.prototype = $p;
$p.qv = (function(exception) {
  return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), new $c_s_util_Failure(exception));
});
var $d_s_concurrent_Promise$ = new $TypeData().i($c_s_concurrent_Promise$, "scala.concurrent.Promise$", ({
  hd: 1
}));
var $n_s_concurrent_Promise$;
function $m_s_concurrent_Promise$() {
  if ((!$n_s_concurrent_Promise$)) {
    $n_s_concurrent_Promise$ = new $c_s_concurrent_Promise$();
  }
  return $n_s_concurrent_Promise$;
}
function $p_s_concurrent_duration_Duration$__words__T__sci_List($thiz, s) {
  var this$2 = $m_s_Predef$().s8($f_T__split__T__I__AT($f_T__trim__T(s), "\\s+", 0));
  $m_sci_List$();
  return $m_sci_Nil$().cd(this$2);
}
function $p_s_concurrent_duration_Duration$__expandLabels__T__sci_List($thiz, labels) {
  matchResult3: {
    var \u03b41$___1;
    var \u03b41$___2;
    var x5 = $p_s_concurrent_duration_Duration$__words__T__sci_List($thiz, labels);
    if ((x5 instanceof $c_sci_$colon$colon)) {
      var x8 = x5.M;
      var \u03b41$___1 = x5.g9;
      var \u03b41$___2 = x8;
      break matchResult3;
    }
    throw new $c_s_MatchError(x5);
  }
  var hd$2 = \u03b41$___1;
  var rest$2 = \u03b41$___2;
  var rest = rest$2;
  var h = null;
  var t = null;
  while ((rest !== $m_sci_Nil$())) {
    var x0 = rest.m();
    var it = new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(new $c_sci_$colon$colon(x0, new $c_sci_$colon$colon((x0 + "s"), $m_sci_Nil$())));
    while (it.i()) {
      var nx = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
      if ((t === null)) {
        h = nx;
      } else {
        t.M = nx;
      }
      t = nx;
    }
    rest = rest.o();
  }
  return new $c_sci_$colon$colon(hd$2, ((h === null) ? $m_sci_Nil$() : h));
}
/** @constructor */
function $c_s_concurrent_duration_Duration$() {
  this.n5 = null;
  this.p7 = null;
  $n_s_concurrent_duration_Duration$ = this;
  var timeUnitLabels = new $c_sci_$colon$colon($ct_T2__O__O__(new $c_T2(), $m_s_concurrent_duration_package$().iy, "d day"), new $c_sci_$colon$colon($ct_T2__O__O__(new $c_T2(), $m_s_concurrent_duration_package$().k5, "h hr hour"), new $c_sci_$colon$colon($ct_T2__O__O__(new $c_T2(), $m_s_concurrent_duration_package$().k7, "m min minute"), new $c_sci_$colon$colon($ct_T2__O__O__(new $c_T2(), $m_s_concurrent_duration_package$().k9, "s sec second"), new $c_sci_$colon$colon($ct_T2__O__O__(new $c_T2(), $m_s_concurrent_duration_package$().iz, "ms milli millisecond"), new $c_sci_$colon$colon($ct_T2__O__O__(new $c_T2(), $m_s_concurrent_duration_package$().k6, "\u00b5s micro microsecond"), new $c_sci_$colon$colon($ct_T2__O__O__(new $c_T2(), $m_s_concurrent_duration_package$().k8, "ns nano nanosecond"), $m_sci_Nil$())))))));
  this.n5 = $m_sci_Map$().hE(new $c_sc_MapView$MapValues(new $c_sc_MapView$Id($m_sci_Map$().hE(timeUnitLabels)), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((s$2) => $p_s_concurrent_duration_Duration$__words__T__sci_List(this, s$2).oe()))));
  var $x_2 = $m_sci_Map$();
  var rest = timeUnitLabels;
  var h = null;
  var t = null;
  while ((rest !== $m_sci_Nil$())) {
    var x0 = rest.m();
    var unit = x0.aa();
    var names = x0.ab();
    var this$14 = $p_s_concurrent_duration_Duration$__expandLabels__T__sci_List(this, names);
    var f$1 = ((unit) => ((_$4$2) => $ct_T2__O__O__(new $c_T2(), _$4$2, unit)))(unit);
    if ((this$14 === $m_sci_Nil$())) {
      var $x_1 = $m_sci_Nil$();
    } else {
      var x0$1 = this$14.m();
      var h$1 = new $c_sci_$colon$colon(f$1(x0$1), $m_sci_Nil$());
      var t$1 = h$1;
      var rest$1 = this$14.o();
      while ((rest$1 !== $m_sci_Nil$())) {
        var x0$2 = rest$1.m();
        var nx = new $c_sci_$colon$colon(f$1(x0$2), $m_sci_Nil$());
        t$1.M = nx;
        t$1 = nx;
        rest$1 = rest$1.o();
      }
      var $x_1 = h$1;
    }
    var it = $x_1.c();
    while (it.i()) {
      var nx$1 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
      if ((t === null)) {
        h = nx$1;
      } else {
        t.M = nx$1;
      }
      t = nx$1;
    }
    rest = rest.o();
  }
  $x_2.hE(((h === null) ? $m_sci_Nil$() : h));
  new $c_s_concurrent_duration_FiniteDuration(0, 0, $m_s_concurrent_duration_package$().iy);
  this.p7 = new $c_s_concurrent_duration_Duration$$anon$1();
}
$p = $c_s_concurrent_duration_Duration$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_duration_Duration$;
/** @constructor */
function $h_s_concurrent_duration_Duration$() {
}
$h_s_concurrent_duration_Duration$.prototype = $p;
var $d_s_concurrent_duration_Duration$ = new $TypeData().i($c_s_concurrent_duration_Duration$, "scala.concurrent.duration.Duration$", ({
  he: 1
}));
var $n_s_concurrent_duration_Duration$;
function $m_s_concurrent_duration_Duration$() {
  if ((!$n_s_concurrent_duration_Duration$)) {
    $n_s_concurrent_duration_Duration$ = new $c_s_concurrent_duration_Duration$();
  }
  return $n_s_concurrent_duration_Duration$;
}
/** @constructor */
function $c_s_concurrent_duration_package$() {
  this.iy = null;
  this.k5 = null;
  this.k6 = null;
  this.iz = null;
  this.k7 = null;
  this.k8 = null;
  this.k9 = null;
  $n_s_concurrent_duration_package$ = this;
  this.iy = $m_ju_concurrent_TimeUnit$().lG;
  this.k5 = $m_ju_concurrent_TimeUnit$().lH;
  this.k6 = $m_ju_concurrent_TimeUnit$().lI;
  this.iz = $m_ju_concurrent_TimeUnit$().lJ;
  this.k7 = $m_ju_concurrent_TimeUnit$().lK;
  this.k8 = $m_ju_concurrent_TimeUnit$().lL;
  this.k9 = $m_ju_concurrent_TimeUnit$().lM;
}
$p = $c_s_concurrent_duration_package$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_duration_package$;
/** @constructor */
function $h_s_concurrent_duration_package$() {
}
$h_s_concurrent_duration_package$.prototype = $p;
var $d_s_concurrent_duration_package$ = new $TypeData().i($c_s_concurrent_duration_package$, "scala.concurrent.duration.package$", ({
  hi: 1
}));
var $n_s_concurrent_duration_package$;
function $m_s_concurrent_duration_package$() {
  if ((!$n_s_concurrent_duration_package$)) {
    $n_s_concurrent_duration_package$ = new $c_s_concurrent_duration_package$();
  }
  return $n_s_concurrent_duration_package$;
}
/** @constructor */
function $c_s_concurrent_duration_package$DurationInt$() {
}
$p = $c_s_concurrent_duration_package$DurationInt$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_duration_package$DurationInt$;
/** @constructor */
function $h_s_concurrent_duration_package$DurationInt$() {
}
$h_s_concurrent_duration_package$DurationInt$.prototype = $p;
$p.qo = (function(this$, x$0) {
  return ((x$0 instanceof $c_s_concurrent_duration_package$DurationInt) && (this$ === ((x$0 === null) ? (null | 0) : x$0.hh)));
});
var $d_s_concurrent_duration_package$DurationInt$ = new $TypeData().i($c_s_concurrent_duration_package$DurationInt$, "scala.concurrent.duration.package$DurationInt$", ({
  hj: 1
}));
var $n_s_concurrent_duration_package$DurationInt$;
function $m_s_concurrent_duration_package$DurationInt$() {
  if ((!$n_s_concurrent_duration_package$DurationInt$)) {
    $n_s_concurrent_duration_package$DurationInt$ = new $c_s_concurrent_duration_package$DurationInt$();
  }
  return $n_s_concurrent_duration_package$DurationInt$;
}
/** @constructor */
function $c_s_concurrent_impl_Promise$() {
  this.fv = null;
  $n_s_concurrent_impl_Promise$ = this;
  this.fv = $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 0, null, $m_s_concurrent_ExecutionContext$parasitic$());
}
$p = $c_s_concurrent_impl_Promise$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_impl_Promise$;
/** @constructor */
function $h_s_concurrent_impl_Promise$() {
}
$h_s_concurrent_impl_Promise$.prototype = $p;
$p.hP = (function(value) {
  if ((value instanceof $c_s_util_Success)) {
    return value;
  } else {
    var t = value.eX;
    return (((false || false) || (t instanceof $c_jl_Error)) ? (false ? new $c_s_util_Success(t.oR()) : new $c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed Exception", t))) : value);
  }
});
var $d_s_concurrent_impl_Promise$ = new $TypeData().i($c_s_concurrent_impl_Promise$, "scala.concurrent.impl.Promise$", ({
  hk: 1
}));
var $n_s_concurrent_impl_Promise$;
function $m_s_concurrent_impl_Promise$() {
  if ((!$n_s_concurrent_impl_Promise$)) {
    $n_s_concurrent_impl_Promise$ = new $c_s_concurrent_impl_Promise$();
  }
  return $n_s_concurrent_impl_Promise$;
}
function $is_s_concurrent_impl_Promise$Callbacks(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aK)));
}
function $isArrayOf_s_concurrent_impl_Promise$Callbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aK)));
}
/** @constructor */
function $c_s_reflect_ClassTag$() {
  this.pb = null;
  this.pk = null;
  this.pc = null;
  this.pf = null;
  this.pg = null;
  this.pe = null;
  this.pd = null;
  this.pa = null;
  this.pl = null;
  this.p8 = null;
  this.pj = null;
  this.p9 = null;
  this.ph = null;
  this.pi = null;
  $n_s_reflect_ClassTag$ = this;
  this.pb = $m_s_reflect_ManifestFactory$ByteManifest$();
  this.pk = $m_s_reflect_ManifestFactory$ShortManifest$();
  this.pc = $m_s_reflect_ManifestFactory$CharManifest$();
  this.pf = $m_s_reflect_ManifestFactory$IntManifest$();
  this.pg = $m_s_reflect_ManifestFactory$LongManifest$();
  this.pe = $m_s_reflect_ManifestFactory$FloatManifest$();
  this.pd = $m_s_reflect_ManifestFactory$DoubleManifest$();
  this.pa = $m_s_reflect_ManifestFactory$BooleanManifest$();
  this.pl = $m_s_reflect_ManifestFactory$UnitManifest$();
  this.p8 = $m_s_reflect_ManifestFactory$AnyManifest$();
  this.pj = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.p9 = $m_s_reflect_ManifestFactory$ObjectManifest$();
  this.ph = $m_s_reflect_ManifestFactory$NothingManifest$();
  this.pi = $m_s_reflect_ManifestFactory$NullManifest$();
}
$p = $c_s_reflect_ClassTag$.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$;
/** @constructor */
function $h_s_reflect_ClassTag$() {
}
$h_s_reflect_ClassTag$.prototype = $p;
$p.kj = (function(runtimeClass1) {
  return ((runtimeClass1 === $d_B.l()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.l()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.l()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.l()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.l()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.l()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.l()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.l()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.l()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.l()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.l()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.l()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
});
var $d_s_reflect_ClassTag$ = new $TypeData().i($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
  hF: 1
}));
var $n_s_reflect_ClassTag$;
function $m_s_reflect_ClassTag$() {
  if ((!$n_s_reflect_ClassTag$)) {
    $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$();
  }
  return $n_s_reflect_ClassTag$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.n = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.qr(x, y) : ((x instanceof $Char) ? this.qp(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.qr = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.qq(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $Long)) {
      var $x_1 = $uJ(xn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = y.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.qq = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $Long)) {
      var $x_1 = $uJ(yn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      return (x2 === ((4.294967296E9 * x3_$_hi) + (x3_$_lo >>> 0.0)));
    } else {
      return (false && yn.p(x2));
    }
  } else if ((xn instanceof $Long)) {
    var $x_2 = $uJ(xn);
    var x3$2_$_lo = $x_2.l;
    var x3$2_$_hi = $x_2.h;
    if ((yn instanceof $Long)) {
      var $x_3 = $uJ(yn);
      var x2$3_$_lo = $x_3.l;
      var x2$3_$_hi = $x_3.h;
      return (((x3$2_$_lo ^ x2$3_$_lo) | (x3$2_$_hi ^ x2$3_$_hi)) === 0);
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * x3$2_$_hi) + (x3$2_$_lo >>> 0.0)) === x3$3);
    } else {
      return (false && yn.p($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.qp = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $Long)) {
      var $x_1 = $uJ(y);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = xc.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  i9: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
var $d_sr_Null$ = new $TypeData().i(0, "scala.runtime.Null$", ({
  ie: 1
}));
/** @constructor */
function $c_sr_Scala3RunTime$() {
}
$p = $c_sr_Scala3RunTime$.prototype = new $h_O();
$p.constructor = $c_sr_Scala3RunTime$;
/** @constructor */
function $h_sr_Scala3RunTime$() {
}
$h_sr_Scala3RunTime$.prototype = $p;
$p.bp = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  ih: 1
}));
var $n_sr_Scala3RunTime$;
function $m_sr_Scala3RunTime$() {
  if ((!$n_sr_Scala3RunTime$)) {
    $n_sr_Scala3RunTime$ = new $c_sr_Scala3RunTime$();
  }
  return $n_sr_Scala3RunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.iO = (function(x) {
  return ((x === null) ? $d_sr_Null$.l() : $objectGetClass(x));
});
$p.aL = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.a;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.a[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.a[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.d4 = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.a[idx] = value;
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    xs.a[idx] = (+value);
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.a;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    xs.a[idx] = Math.fround(value);
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    xs.a[idx] = $uC(value);
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    xs.a[idx] = (!(!value));
    return (void 0);
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.ny = (function(xs) {
  if ((xs instanceof $ac_O)) {
    return xs.h();
  }
  if ((xs instanceof $ac_I)) {
    return xs.h();
  }
  if ((xs instanceof $ac_D)) {
    return xs.h();
  }
  if ((xs instanceof $ac_J)) {
    return xs.h();
  }
  if ((xs instanceof $ac_F)) {
    return xs.h();
  }
  if ((xs instanceof $ac_C)) {
    return xs.h();
  }
  if ((xs instanceof $ac_B)) {
    return xs.h();
  }
  if ((xs instanceof $ac_S)) {
    return xs.h();
  }
  if ((xs instanceof $ac_Z)) {
    return xs.h();
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.dK = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.ce(), (x.bH() + "("), ",", ")");
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  ii: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.x = (function(hash, data) {
  var h = this.eo(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.eo = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.bc = (function(hash, length) {
  return this.pV((hash ^ length));
});
$p.pV = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.rb = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.qj = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().kG(dv);
    var lv_$_lo = $x_1.l;
    var lv_$_hi = $x_1.h;
    if ((((4.294967296E9 * lv_$_hi) + (lv_$_lo >>> 0.0)) === dv)) {
      return (lv_$_lo ^ lv_$_hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
      }
    }
  }
});
$p.y = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.qj((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.rb($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.r2 = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  ik: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_sr_Statics$PFMarker$() {
}
$p = $c_sr_Statics$PFMarker$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$PFMarker$;
/** @constructor */
function $h_sr_Statics$PFMarker$() {
}
$h_sr_Statics$PFMarker$.prototype = $p;
var $d_sr_Statics$PFMarker$ = new $TypeData().i($c_sr_Statics$PFMarker$, "scala.runtime.Statics$PFMarker$", ({
  il: 1
}));
var $n_sr_Statics$PFMarker$;
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$();
  }
  return $n_sr_Statics$PFMarker$;
}
/** @constructor */
function $c_sjs_concurrent_JSExecutionContext$() {
  this.ne = null;
  $n_sjs_concurrent_JSExecutionContext$ = this;
  this.ne = $m_sjs_concurrent_QueueExecutionContext$().pS();
}
$p = $c_sjs_concurrent_JSExecutionContext$.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_JSExecutionContext$;
/** @constructor */
function $h_sjs_concurrent_JSExecutionContext$() {
}
$h_sjs_concurrent_JSExecutionContext$.prototype = $p;
var $d_sjs_concurrent_JSExecutionContext$ = new $TypeData().i($c_sjs_concurrent_JSExecutionContext$, "scala.scalajs.concurrent.JSExecutionContext$", ({
  im: 1
}));
var $n_sjs_concurrent_JSExecutionContext$;
function $m_sjs_concurrent_JSExecutionContext$() {
  if ((!$n_sjs_concurrent_JSExecutionContext$)) {
    $n_sjs_concurrent_JSExecutionContext$ = new $c_sjs_concurrent_JSExecutionContext$();
  }
  return $n_sjs_concurrent_JSExecutionContext$;
}
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$() {
}
$p = $c_sjs_concurrent_QueueExecutionContext$.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$() {
}
$h_sjs_concurrent_QueueExecutionContext$.prototype = $p;
$p.pS = (function() {
  return (((typeof Promise) === "undefined") ? new $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() : new $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext());
});
var $d_sjs_concurrent_QueueExecutionContext$ = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$, "scala.scalajs.concurrent.QueueExecutionContext$", ({
  io: 1
}));
var $n_sjs_concurrent_QueueExecutionContext$;
function $m_sjs_concurrent_QueueExecutionContext$() {
  if ((!$n_sjs_concurrent_QueueExecutionContext$)) {
    $n_sjs_concurrent_QueueExecutionContext$ = new $c_sjs_concurrent_QueueExecutionContext$();
  }
  return $n_sjs_concurrent_QueueExecutionContext$;
}
/** @constructor */
function $c_sjs_js_ArrayOps$() {
}
$p = $c_sjs_js_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_ArrayOps$;
/** @constructor */
function $h_sjs_js_ArrayOps$() {
}
$h_sjs_js_ArrayOps$.prototype = $p;
$p.rF = (function(this$) {
  var len = (this$.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    res[((((len - i) | 0) - 1) | 0)] = this$[i];
    i = ((1 + i) | 0);
  }
  return res;
});
$p.rZ = (function(this$, ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O($ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), this$), ord).ei;
});
$p.rW = (function(this$, f, ord) {
  return $m_sjs_js_ArrayOps$().rZ(this$, new $c_s_math_Ordering$$anon$1(f, ord));
});
$p.pK = (function(this$, x) {
  var dest = this$.slice();
  dest.push(x);
  return dest;
});
$p.qD = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.d(this$[i]);
    i = ((1 + i) | 0);
  }
});
$p.qg = (function(this$, f) {
  var result = [];
  $m_sjs_js_ArrayOps$().pt(result, new $c_sc_Iterator$$anon$8(f, new $c_sjs_js_ArrayOps$ArrayIterator(this$)));
  return result;
});
$p.pt = (function(this$, ys) {
  var this$1 = ys.c();
  while (this$1.i()) {
    var x0 = this$1.e();
    this$.push(x0);
  }
  return this$;
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  is: 1
}));
var $n_sjs_js_ArrayOps$;
function $m_sjs_js_ArrayOps$() {
  if ((!$n_sjs_js_ArrayOps$)) {
    $n_sjs_js_ArrayOps$ = new $c_sjs_js_ArrayOps$();
  }
  return $n_sjs_js_ArrayOps$;
}
/** @constructor */
function $c_sjs_js_Thenable$Implicits$() {
}
$p = $c_sjs_js_Thenable$Implicits$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Thenable$Implicits$;
/** @constructor */
function $h_sjs_js_Thenable$Implicits$() {
}
$h_sjs_js_Thenable$Implicits$.prototype = $p;
$p.oE = (function(p) {
  return $m_sjs_js_Thenable$ThenableOps$().oF(p);
});
var $d_sjs_js_Thenable$Implicits$ = new $TypeData().i($c_sjs_js_Thenable$Implicits$, "scala.scalajs.js.Thenable$Implicits$", ({
  iw: 1
}));
var $n_sjs_js_Thenable$Implicits$;
function $m_sjs_js_Thenable$Implicits$() {
  if ((!$n_sjs_js_Thenable$Implicits$)) {
    $n_sjs_js_Thenable$Implicits$ = new $c_sjs_js_Thenable$Implicits$();
  }
  return $n_sjs_js_Thenable$Implicits$;
}
/** @constructor */
function $c_sjs_js_Thenable$ThenableOps$() {
}
$p = $c_sjs_js_Thenable$ThenableOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Thenable$ThenableOps$;
/** @constructor */
function $h_sjs_js_Thenable$ThenableOps$() {
}
$h_sjs_js_Thenable$ThenableOps$.prototype = $p;
$p.oF = (function(this$) {
  var p2 = $ct_s_concurrent_impl_Promise$DefaultPromise__(new $c_s_concurrent_impl_Promise$DefaultPromise());
  this$.then(((arg1$2) => {
    $f_s_concurrent_Promise__success__O__s_concurrent_Promise(p2, arg1$2);
  }), $m_sjs_js_defined$().pO(((arg1$2$1) => {
    $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(p2, ((arg1$2$1 instanceof $c_jl_Throwable) ? arg1$2$1 : new $c_sjs_js_JavaScriptException(arg1$2$1)));
  })));
  return p2;
});
var $d_sjs_js_Thenable$ThenableOps$ = new $TypeData().i($c_sjs_js_Thenable$ThenableOps$, "scala.scalajs.js.Thenable$ThenableOps$", ({
  ix: 1
}));
var $n_sjs_js_Thenable$ThenableOps$;
function $m_sjs_js_Thenable$ThenableOps$() {
  if ((!$n_sjs_js_Thenable$ThenableOps$)) {
    $n_sjs_js_Thenable$ThenableOps$ = new $c_sjs_js_Thenable$ThenableOps$();
  }
  return $n_sjs_js_Thenable$ThenableOps$;
}
/** @constructor */
function $c_sjs_js_WrappedDictionary$Cache$() {
  this.fw = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.fw = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  iB: 1
}));
var $n_sjs_js_WrappedDictionary$Cache$;
function $m_sjs_js_WrappedDictionary$Cache$() {
  if ((!$n_sjs_js_WrappedDictionary$Cache$)) {
    $n_sjs_js_WrappedDictionary$Cache$ = new $c_sjs_js_WrappedDictionary$Cache$();
  }
  return $n_sjs_js_WrappedDictionary$Cache$;
}
/** @constructor */
function $c_sjs_js_defined$() {
}
$p = $c_sjs_js_defined$.prototype = new $h_O();
$p.constructor = $c_sjs_js_defined$;
/** @constructor */
function $h_sjs_js_defined$() {
}
$h_sjs_js_defined$.prototype = $p;
$p.pO = (function(a) {
  return a;
});
var $d_sjs_js_defined$ = new $TypeData().i($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
  iE: 1
}));
var $n_sjs_js_defined$;
function $m_sjs_js_defined$() {
  if ((!$n_sjs_js_defined$)) {
    $n_sjs_js_defined$ = new $c_sjs_js_defined$();
  }
  return $n_sjs_js_defined$;
}
/** @constructor */
function $c_sjs_js_timers_package$() {
}
$p = $c_sjs_js_timers_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_timers_package$;
/** @constructor */
function $h_sjs_js_timers_package$() {
}
$h_sjs_js_timers_package$.prototype = $p;
$p.rO = (function(interval, body) {
  var $x_4 = setTimeout;
  var $x_3 = interval.eU;
  var $x_2 = interval;
  var $x_1 = $x_3.fI($x_2.dk, $x_2.dl);
  var x_$_lo = $x_1.l;
  var x_$_hi = $x_1.h;
  return $x_4((() => {
    body.Q();
  }), ((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0)));
});
$p.q0 = (function(handle) {
  clearTimeout(handle);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  iF: 1
}));
var $n_sjs_js_timers_package$;
function $m_sjs_js_timers_package$() {
  if ((!$n_sjs_js_timers_package$)) {
    $n_sjs_js_timers_package$ = new $c_sjs_js_timers_package$();
  }
  return $n_sjs_js_timers_package$;
}
/** @constructor */
function $c_sjsr_package$() {
}
$p = $c_sjsr_package$.prototype = new $h_O();
$p.constructor = $c_sjsr_package$;
/** @constructor */
function $h_sjsr_package$() {
}
$h_sjsr_package$.prototype = $p;
$p.I = (function(array) {
  var len = $m_jl_reflect_Array$().b9(array);
  var result = [];
  var i = 0;
  while ((i !== len)) {
    result.push($m_sr_ScalaRunTime$().aL(array, i));
    i = ((1 + i) | 0);
  }
  return result;
});
$p.z = (function(array) {
  var len = array.a.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.a[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  iI: 1
}));
var $n_sjsr_package$;
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$();
  }
  return $n_sjsr_package$;
}
/** @constructor */
function $c_s_util_ChainingOps$() {
}
$p = $c_s_util_ChainingOps$.prototype = new $h_O();
$p.constructor = $c_s_util_ChainingOps$;
/** @constructor */
function $h_s_util_ChainingOps$() {
}
$h_s_util_ChainingOps$.prototype = $p;
$p.f3 = (function(this$, f) {
  f.d(this$);
  return this$;
});
var $d_s_util_ChainingOps$ = new $TypeData().i($c_s_util_ChainingOps$, "scala.util.ChainingOps$", ({
  iJ: 1
}));
var $n_s_util_ChainingOps$;
function $m_s_util_ChainingOps$() {
  if ((!$n_s_util_ChainingOps$)) {
    $n_s_util_ChainingOps$ = new $c_s_util_ChainingOps$();
  }
  return $n_s_util_ChainingOps$;
}
/** @constructor */
function $c_s_util_CommandLineParser$() {
}
$p = $c_s_util_CommandLineParser$.prototype = new $h_O();
$p.constructor = $c_s_util_CommandLineParser$;
/** @constructor */
function $h_s_util_CommandLineParser$() {
}
$h_s_util_CommandLineParser$.prototype = $p;
$p.rP = (function(err) {
  var where = ((err.oa() === 0) ? "" : ((err.oa() === 1) ? " after first argument" : ((" after " + err.oa()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.sf());
  $m_s_Console$().rq().kQ((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  iK: 1
}));
var $n_s_util_CommandLineParser$;
function $m_s_util_CommandLineParser$() {
  if ((!$n_s_util_CommandLineParser$)) {
    $n_s_util_CommandLineParser$ = new $c_s_util_CommandLineParser$();
  }
  return $n_s_util_CommandLineParser$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.ke = null;
  this.ke = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.v = (function() {
  return (("DynamicVariable(" + this.ke) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  iM: 1
}));
/** @constructor */
function $c_s_util_Sorting$() {
}
$p = $c_s_util_Sorting$.prototype = new $h_O();
$p.constructor = $c_s_util_Sorting$;
/** @constructor */
function $h_s_util_Sorting$() {
}
$h_s_util_Sorting$.prototype = $p;
$p.aX = (function(a, i0, iN, ord) {
  var n = ((iN - i0) | 0);
  if ((n < 2)) {
    return (void 0);
  }
  if ((ord.av($m_sr_ScalaRunTime$().aL(a, i0), $m_sr_ScalaRunTime$().aL(a, ((1 + i0) | 0))) > 0)) {
    var temp = $m_sr_ScalaRunTime$().aL(a, i0);
    $m_sr_ScalaRunTime$().d4(a, i0, $m_sr_ScalaRunTime$().aL(a, ((1 + i0) | 0)));
    $m_sr_ScalaRunTime$().d4(a, ((1 + i0) | 0), temp);
  }
  var m = 2;
  while ((m < n)) {
    var next = $m_sr_ScalaRunTime$().aL(a, ((i0 + m) | 0));
    if ((ord.av(next, $m_sr_ScalaRunTime$().aL(a, ((((i0 + m) | 0) - 1) | 0))) < 0)) {
      var iA = i0;
      var iB = ((((i0 + m) | 0) - 1) | 0);
      while ((((iB - iA) | 0) > 1)) {
        var ix = ((((iA + iB) | 0) >>> 1) | 0);
        if ((ord.av(next, $m_sr_ScalaRunTime$().aL(a, ix)) < 0)) {
          iB = ix;
        } else {
          iA = ix;
        }
      }
      var ix$2 = ((iA + ((ord.av(next, $m_sr_ScalaRunTime$().aL(a, iA)) >= 0) | 0)) | 0);
      var i = ((i0 + m) | 0);
      while ((i > ix$2)) {
        $m_sr_ScalaRunTime$().d4(a, i, $m_sr_ScalaRunTime$().aL(a, ((i - 1) | 0)));
        i = ((i - 1) | 0);
      }
      $m_sr_ScalaRunTime$().d4(a, ix$2, next);
    }
    m = ((1 + m) | 0);
  }
});
$p.W = (function(a, i0, iN, ord, scratch, evidence$2) {
  if ((((iN - i0) | 0) < 32)) {
    this.aX(a, i0, iN, ord);
  } else {
    var iK = ((((i0 + iN) | 0) >>> 1) | 0);
    var sc = ((scratch === null) ? evidence$2.bU(((iK - i0) | 0)) : scratch);
    this.W(a, i0, iK, ord, sc, evidence$2);
    this.W(a, iK, iN, ord, sc, evidence$2);
    this.aY(a, i0, iK, iN, ord, sc);
  }
});
$p.aY = (function(a, i0, iK, iN, ord, scratch) {
  if ((ord.av($m_sr_ScalaRunTime$().aL(a, ((iK - 1) | 0)), $m_sr_ScalaRunTime$().aL(a, iK)) > 0)) {
    var i = i0;
    var jN = ((iK - i0) | 0);
    var j = 0;
    while ((i < iK)) {
      $m_sr_ScalaRunTime$().d4(scratch, j, $m_sr_ScalaRunTime$().aL(a, i));
      i = ((1 + i) | 0);
      j = ((1 + j) | 0);
    }
    var k = i0;
    j = 0;
    while (((i < iN) && (j < jN))) {
      if ((ord.av($m_sr_ScalaRunTime$().aL(a, i), $m_sr_ScalaRunTime$().aL(scratch, j)) < 0)) {
        $m_sr_ScalaRunTime$().d4(a, k, $m_sr_ScalaRunTime$().aL(a, i));
        i = ((1 + i) | 0);
      } else {
        $m_sr_ScalaRunTime$().d4(a, k, $m_sr_ScalaRunTime$().aL(scratch, j));
        j = ((1 + j) | 0);
      }
      k = ((1 + k) | 0);
    }
    while ((j < jN)) {
      $m_sr_ScalaRunTime$().d4(a, k, $m_sr_ScalaRunTime$().aL(scratch, j));
      j = ((1 + j) | 0);
      k = ((1 + k) | 0);
    }
  }
});
$p.rL = (function(a, from, until) {
  var i = from;
  var n = 0;
  while ((i < until)) {
    if ((!a.a[i])) {
      n = ((1 + n) | 0);
    }
    i = ((1 + i) | 0);
  }
  i = 0;
  while ((i < n)) {
    a.a[((from + i) | 0)] = false;
    i = ((1 + i) | 0);
  }
  while ((((from + i) | 0) < until)) {
    a.a[((from + i) | 0)] = true;
    i = ((1 + i) | 0);
  }
});
$p.l1 = (function(a, from, until, evidence$4) {
  $m_s_math_Ordering$();
  if ((a instanceof $ac_O)) {
    if ((($m_jl_reflect_Array$().b9(a) > 1) && (evidence$4 === null))) {
      throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "Ordering");
    }
    $m_ju_Arrays$().rV(a, from, until, evidence$4);
  } else if ((a instanceof $ac_I)) {
    if ((evidence$4 === $m_s_math_Ordering$Int$())) {
      $m_ju_Arrays$().rS(a, from, until);
    } else {
      var evidence$2 = $m_s_reflect_ManifestFactory$IntManifest$();
      if ((((until - from) | 0) < 32)) {
        this.aX(a, from, until, evidence$4);
      } else {
        var iK = ((((from + until) | 0) >>> 1) | 0);
        var sc = new $ac_I(((iK - from) | 0));
        if ((((iK - from) | 0) < 32)) {
          this.aX(a, from, iK, evidence$4);
        } else {
          var iK$1 = ((((from + iK) | 0) >>> 1) | 0);
          this.W(a, from, iK$1, evidence$4, sc, evidence$2);
          this.W(a, iK$1, iK, evidence$4, sc, evidence$2);
          this.aY(a, from, iK$1, iK, evidence$4, sc);
        }
        if ((((until - iK) | 0) < 32)) {
          this.aX(a, iK, until, evidence$4);
        } else {
          var iK$2 = ((((iK + until) | 0) >>> 1) | 0);
          this.W(a, iK, iK$2, evidence$4, sc, evidence$2);
          this.W(a, iK$2, until, evidence$4, sc, evidence$2);
          this.aY(a, iK, iK$2, until, evidence$4, sc);
        }
        this.aY(a, from, iK, until, evidence$4, sc);
      }
    }
  } else if ((a instanceof $ac_D)) {
    var evidence$2$1 = $m_s_reflect_ManifestFactory$DoubleManifest$();
    if ((((until - from) | 0) < 32)) {
      this.aX(a, from, until, evidence$4);
    } else {
      var iK$3 = ((((from + until) | 0) >>> 1) | 0);
      var sc$1 = new $ac_D(((iK$3 - from) | 0));
      if ((((iK$3 - from) | 0) < 32)) {
        this.aX(a, from, iK$3, evidence$4);
      } else {
        var iK$4 = ((((from + iK$3) | 0) >>> 1) | 0);
        this.W(a, from, iK$4, evidence$4, sc$1, evidence$2$1);
        this.W(a, iK$4, iK$3, evidence$4, sc$1, evidence$2$1);
        this.aY(a, from, iK$4, iK$3, evidence$4, sc$1);
      }
      if ((((until - iK$3) | 0) < 32)) {
        this.aX(a, iK$3, until, evidence$4);
      } else {
        var iK$5 = ((((iK$3 + until) | 0) >>> 1) | 0);
        this.W(a, iK$3, iK$5, evidence$4, sc$1, evidence$2$1);
        this.W(a, iK$5, until, evidence$4, sc$1, evidence$2$1);
        this.aY(a, iK$3, iK$5, until, evidence$4, sc$1);
      }
      this.aY(a, from, iK$3, until, evidence$4, sc$1);
    }
  } else if ((a instanceof $ac_J)) {
    if ((evidence$4 === $m_s_math_Ordering$Long$())) {
      $m_ju_Arrays$().rT(a, from, until);
    } else {
      var evidence$2$2 = $m_s_reflect_ManifestFactory$LongManifest$();
      if ((((until - from) | 0) < 32)) {
        this.aX(a, from, until, evidence$4);
      } else {
        var iK$6 = ((((from + until) | 0) >>> 1) | 0);
        var sc$2 = new $ac_J(((iK$6 - from) | 0));
        if ((((iK$6 - from) | 0) < 32)) {
          this.aX(a, from, iK$6, evidence$4);
        } else {
          var iK$7 = ((((from + iK$6) | 0) >>> 1) | 0);
          this.W(a, from, iK$7, evidence$4, sc$2, evidence$2$2);
          this.W(a, iK$7, iK$6, evidence$4, sc$2, evidence$2$2);
          this.aY(a, from, iK$7, iK$6, evidence$4, sc$2);
        }
        if ((((until - iK$6) | 0) < 32)) {
          this.aX(a, iK$6, until, evidence$4);
        } else {
          var iK$8 = ((((iK$6 + until) | 0) >>> 1) | 0);
          this.W(a, iK$6, iK$8, evidence$4, sc$2, evidence$2$2);
          this.W(a, iK$8, until, evidence$4, sc$2, evidence$2$2);
          this.aY(a, iK$6, iK$8, until, evidence$4, sc$2);
        }
        this.aY(a, from, iK$6, until, evidence$4, sc$2);
      }
    }
  } else if ((a instanceof $ac_F)) {
    var evidence$2$3 = $m_s_reflect_ManifestFactory$FloatManifest$();
    if ((((until - from) | 0) < 32)) {
      this.aX(a, from, until, evidence$4);
    } else {
      var iK$9 = ((((from + until) | 0) >>> 1) | 0);
      var sc$3 = new $ac_F(((iK$9 - from) | 0));
      if ((((iK$9 - from) | 0) < 32)) {
        this.aX(a, from, iK$9, evidence$4);
      } else {
        var iK$10 = ((((from + iK$9) | 0) >>> 1) | 0);
        this.W(a, from, iK$10, evidence$4, sc$3, evidence$2$3);
        this.W(a, iK$10, iK$9, evidence$4, sc$3, evidence$2$3);
        this.aY(a, from, iK$10, iK$9, evidence$4, sc$3);
      }
      if ((((until - iK$9) | 0) < 32)) {
        this.aX(a, iK$9, until, evidence$4);
      } else {
        var iK$11 = ((((iK$9 + until) | 0) >>> 1) | 0);
        this.W(a, iK$9, iK$11, evidence$4, sc$3, evidence$2$3);
        this.W(a, iK$11, until, evidence$4, sc$3, evidence$2$3);
        this.aY(a, iK$9, iK$11, until, evidence$4, sc$3);
      }
      this.aY(a, from, iK$9, until, evidence$4, sc$3);
    }
  } else if ((a instanceof $ac_C)) {
    if ((evidence$4 === $m_s_math_Ordering$Char$())) {
      $m_ju_Arrays$().rR(a, from, until);
    } else {
      var evidence$2$4 = $m_s_reflect_ManifestFactory$CharManifest$();
      if ((((until - from) | 0) < 32)) {
        this.aX(a, from, until, evidence$4);
      } else {
        var iK$12 = ((((from + until) | 0) >>> 1) | 0);
        var sc$4 = new $ac_C(((iK$12 - from) | 0));
        if ((((iK$12 - from) | 0) < 32)) {
          this.aX(a, from, iK$12, evidence$4);
        } else {
          var iK$13 = ((((from + iK$12) | 0) >>> 1) | 0);
          this.W(a, from, iK$13, evidence$4, sc$4, evidence$2$4);
          this.W(a, iK$13, iK$12, evidence$4, sc$4, evidence$2$4);
          this.aY(a, from, iK$13, iK$12, evidence$4, sc$4);
        }
        if ((((until - iK$12) | 0) < 32)) {
          this.aX(a, iK$12, until, evidence$4);
        } else {
          var iK$14 = ((((iK$12 + until) | 0) >>> 1) | 0);
          this.W(a, iK$12, iK$14, evidence$4, sc$4, evidence$2$4);
          this.W(a, iK$14, until, evidence$4, sc$4, evidence$2$4);
          this.aY(a, iK$12, iK$14, until, evidence$4, sc$4);
        }
        this.aY(a, from, iK$12, until, evidence$4, sc$4);
      }
    }
  } else if ((a instanceof $ac_B)) {
    if ((evidence$4 === $m_s_math_Ordering$Byte$())) {
      $m_ju_Arrays$().rQ(a, from, until);
    } else {
      var evidence$2$5 = $m_s_reflect_ManifestFactory$ByteManifest$();
      if ((((until - from) | 0) < 32)) {
        this.aX(a, from, until, evidence$4);
      } else {
        var iK$15 = ((((from + until) | 0) >>> 1) | 0);
        var sc$5 = new $ac_B(((iK$15 - from) | 0));
        if ((((iK$15 - from) | 0) < 32)) {
          this.aX(a, from, iK$15, evidence$4);
        } else {
          var iK$16 = ((((from + iK$15) | 0) >>> 1) | 0);
          this.W(a, from, iK$16, evidence$4, sc$5, evidence$2$5);
          this.W(a, iK$16, iK$15, evidence$4, sc$5, evidence$2$5);
          this.aY(a, from, iK$16, iK$15, evidence$4, sc$5);
        }
        if ((((until - iK$15) | 0) < 32)) {
          this.aX(a, iK$15, until, evidence$4);
        } else {
          var iK$17 = ((((iK$15 + until) | 0) >>> 1) | 0);
          this.W(a, iK$15, iK$17, evidence$4, sc$5, evidence$2$5);
          this.W(a, iK$17, until, evidence$4, sc$5, evidence$2$5);
          this.aY(a, iK$15, iK$17, until, evidence$4, sc$5);
        }
        this.aY(a, from, iK$15, until, evidence$4, sc$5);
      }
    }
  } else if ((a instanceof $ac_S)) {
    if ((evidence$4 === $m_s_math_Ordering$Short$())) {
      $m_ju_Arrays$().rU(a, from, until);
    } else {
      var evidence$2$6 = $m_s_reflect_ManifestFactory$ShortManifest$();
      if ((((until - from) | 0) < 32)) {
        this.aX(a, from, until, evidence$4);
      } else {
        var iK$18 = ((((from + until) | 0) >>> 1) | 0);
        var sc$6 = new $ac_S(((iK$18 - from) | 0));
        if ((((iK$18 - from) | 0) < 32)) {
          this.aX(a, from, iK$18, evidence$4);
        } else {
          var iK$19 = ((((from + iK$18) | 0) >>> 1) | 0);
          this.W(a, from, iK$19, evidence$4, sc$6, evidence$2$6);
          this.W(a, iK$19, iK$18, evidence$4, sc$6, evidence$2$6);
          this.aY(a, from, iK$19, iK$18, evidence$4, sc$6);
        }
        if ((((until - iK$18) | 0) < 32)) {
          this.aX(a, iK$18, until, evidence$4);
        } else {
          var iK$20 = ((((iK$18 + until) | 0) >>> 1) | 0);
          this.W(a, iK$18, iK$20, evidence$4, sc$6, evidence$2$6);
          this.W(a, iK$20, until, evidence$4, sc$6, evidence$2$6);
          this.aY(a, iK$18, iK$20, until, evidence$4, sc$6);
        }
        this.aY(a, from, iK$18, until, evidence$4, sc$6);
      }
    }
  } else if ((a instanceof $ac_Z)) {
    if ((evidence$4 === $m_s_math_Ordering$Boolean$())) {
      this.rL(a, from, until);
    } else {
      var evidence$2$7 = $m_s_reflect_ManifestFactory$BooleanManifest$();
      if ((((until - from) | 0) < 32)) {
        this.aX(a, from, until, evidence$4);
      } else {
        var iK$21 = ((((from + until) | 0) >>> 1) | 0);
        var sc$7 = new $ac_Z(((iK$21 - from) | 0));
        if ((((iK$21 - from) | 0) < 32)) {
          this.aX(a, from, iK$21, evidence$4);
        } else {
          var iK$22 = ((((from + iK$21) | 0) >>> 1) | 0);
          this.W(a, from, iK$22, evidence$4, sc$7, evidence$2$7);
          this.W(a, iK$22, iK$21, evidence$4, sc$7, evidence$2$7);
          this.aY(a, from, iK$22, iK$21, evidence$4, sc$7);
        }
        if ((((until - iK$21) | 0) < 32)) {
          this.aX(a, iK$21, until, evidence$4);
        } else {
          var iK$23 = ((((iK$21 + until) | 0) >>> 1) | 0);
          this.W(a, iK$21, iK$23, evidence$4, sc$7, evidence$2$7);
          this.W(a, iK$23, until, evidence$4, sc$7, evidence$2$7);
          this.aY(a, iK$21, iK$23, until, evidence$4, sc$7);
        }
        this.aY(a, from, iK$21, until, evidence$4, sc$7);
      }
    }
  } else if ((a === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  } else {
    throw new $c_s_MatchError(a);
  }
});
var $d_s_util_Sorting$ = new $TypeData().i($c_s_util_Sorting$, "scala.util.Sorting$", ({
  iN: 1
}));
var $n_s_util_Sorting$;
function $m_s_util_Sorting$() {
  if ((!$n_s_util_Sorting$)) {
    $n_s_util_Sorting$ = new $c_s_util_Sorting$();
  }
  return $n_s_util_Sorting$;
}
function $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable($thiz) {
  return ($m_s_util_control_NoStackTrace$().nh ? $c_jl_Throwable.prototype.gr.call($thiz) : $thiz);
}
/** @constructor */
function $c_s_util_control_NoStackTrace$() {
  this.nh = false;
  this.nh = false;
}
$p = $c_s_util_control_NoStackTrace$.prototype = new $h_O();
$p.constructor = $c_s_util_control_NoStackTrace$;
/** @constructor */
function $h_s_util_control_NoStackTrace$() {
}
$h_s_util_control_NoStackTrace$.prototype = $p;
var $d_s_util_control_NoStackTrace$ = new $TypeData().i($c_s_util_control_NoStackTrace$, "scala.util.control.NoStackTrace$", ({
  iP: 1
}));
var $n_s_util_control_NoStackTrace$;
function $m_s_util_control_NoStackTrace$() {
  if ((!$n_s_util_control_NoStackTrace$)) {
    $n_s_util_control_NoStackTrace$ = new $c_s_util_control_NoStackTrace$();
  }
  return $n_s_util_control_NoStackTrace$;
}
/** @constructor */
function $c_s_util_control_NonFatal$() {
}
$p = $c_s_util_control_NonFatal$.prototype = new $h_O();
$p.constructor = $c_s_util_control_NonFatal$;
/** @constructor */
function $h_s_util_control_NonFatal$() {
}
$h_s_util_control_NonFatal$.prototype = $p;
$p.iQ = (function(t) {
  matchAlts1: {
    matchAlts2: {
      if ((t instanceof $c_jl_VirtualMachineError)) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      if (false) {
        break matchAlts2;
      }
      break matchAlts1;
    }
    return false;
  }
  return true;
});
$p.s6 = (function(t) {
  return (this.iQ(t) ? new $c_s_Some(t) : $m_s_None$());
});
var $d_s_util_control_NonFatal$ = new $TypeData().i($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
  iQ: 1
}));
var $n_s_util_control_NonFatal$;
function $m_s_util_control_NonFatal$() {
  if ((!$n_s_util_control_NonFatal$)) {
    $n_s_util_control_NonFatal$ = new $c_s_util_control_NonFatal$();
  }
  return $n_s_util_control_NonFatal$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.x = (function(hash, data) {
  var h = this.eo(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.eo = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.bc = (function(hash, length) {
  return this.hQ((hash ^ length));
});
$p.hQ = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.oK = (function(x, y, seed) {
  var h = seed;
  h = this.x(h, $f_T__hashCode__I("Tuple2"));
  h = this.x(h, x);
  h = this.x(h, y);
  return this.bc(h, 2);
});
$p.ds = (function(x, seed, ignorePrefix) {
  var arr = x.bF();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.bH()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.x(h, $f_T__hashCode__I(x.bH()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.x(h, $m_sr_Statics$().y(x.bG(i)));
      i = ((1 + i) | 0);
    }
    return this.bc(h, arr);
  }
});
$p.gA = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.c();
  while (iterator.i()) {
    var x = iterator.e();
    var h = $m_sr_Statics$().y(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.x(h$2, a);
  h$2 = this.x(h$2, b);
  h$2 = this.eo(h$2, c);
  return this.bc(h$2, n);
});
$p.rp = (function(xs, seed) {
  var it = xs.c();
  var h = seed;
  if ((!it.i())) {
    return this.bc(h, 0);
  }
  var x0 = it.e();
  if ((!it.i())) {
    return this.bc(this.x(h, $m_sr_Statics$().y(x0)), 1);
  }
  var x1 = it.e();
  var initial = $m_sr_Statics$().y(x0);
  h = this.x(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().y(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.i()) {
    h = this.x(h, prev);
    var hash = $m_sr_Statics$().y(it.e());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.x(h, hash);
      i = ((1 + i) | 0);
      while (it.i()) {
        h = this.x(h, $m_sr_Statics$().y(it.e()));
        i = ((1 + i) | 0);
      }
      return this.bc(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.hQ(this.x(this.x(h0, rangeDiff), prev));
});
$p.bo = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().b9(a);
  switch (l) {
    case 0: {
      return this.bc(h, 0);
      break;
    }
    case 1: {
      return this.bc(this.x(h, $m_sr_Statics$().y($m_sr_ScalaRunTime$().aL(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().y($m_sr_ScalaRunTime$().aL(a, 0));
      h = this.x(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().y($m_sr_ScalaRunTime$().aL(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.x(h, prev);
        var hash = $m_sr_Statics$().y($m_sr_ScalaRunTime$().aL(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.x(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.x(h, $m_sr_Statics$().y($m_sr_ScalaRunTime$().aL(a, i)));
            i = ((1 + i) | 0);
          }
          return this.bc(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hQ(this.x(this.x(h0, rangeDiff), prev));
    }
  }
});
$p.ry = (function(start, step, last, seed) {
  return this.hQ(this.x(this.x(this.x(seed, start), step), last));
});
$p.qZ = (function(a, seed) {
  var h = seed;
  var l = a.l();
  switch (l) {
    case 0: {
      return this.bc(h, 0);
      break;
    }
    case 1: {
      return this.bc(this.x(h, $m_sr_Statics$().y(a.r(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().y(a.r(0));
      h = this.x(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().y(a.r(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.x(h, prev);
        var hash = $m_sr_Statics$().y(a.r(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.x(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.x(h, $m_sr_Statics$().y(a.r(i)));
            i = ((1 + i) | 0);
          }
          return this.bc(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.hQ(this.x(this.x(h0, rangeDiff), prev));
    }
  }
});
$p.ra = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.g())) {
    var head = elems.m();
    var tail = elems.o();
    var hash = $m_sr_Statics$().y(head);
    h = this.x(h, hash);
    switch (rangeState) {
      case 0: {
        initial = hash;
        rangeState = 1;
        break;
      }
      case 1: {
        rangeDiff = ((hash - prev) | 0);
        rangeState = 2;
        break;
      }
      case 2: {
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          rangeState = 3;
        }
        break;
      }
    }
    prev = hash;
    n = ((1 + n) | 0);
    elems = tail;
  }
  return ((rangeState === 2) ? this.ry(initial, rangeDiff, prev, seed) : this.bc(h, n));
});
/** @constructor */
function $c_Ldotty_tools_scaladoc_RecentQueryStorage$() {
  this.hX = null;
  this.fV = null;
  this.hW = false;
  this.le = 0;
  $ct_Ldotty_tools_scaladoc_SafeLocalStorage__T__sjs_js_Any__(this, "__RECENT__QUERIES__", []);
  this.le = 3;
}
$p = $c_Ldotty_tools_scaladoc_RecentQueryStorage$.prototype = new $h_Ldotty_tools_scaladoc_SafeLocalStorage();
$p.constructor = $c_Ldotty_tools_scaladoc_RecentQueryStorage$;
/** @constructor */
function $h_Ldotty_tools_scaladoc_RecentQueryStorage$() {
}
$h_Ldotty_tools_scaladoc_RecentQueryStorage$.prototype = $p;
$p.px = (function(rq) {
  var array = this.iV();
  _return: {
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      var x0 = array[i];
      var this$4 = x0.query;
      var s = rq.query;
      if (((this$4.indexOf(s) | 0) !== (-1))) {
        var $x_1 = i;
        break _return;
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = (-1);
  }
  if ((!($x_1 >= 0))) {
    var array$1 = this.iV();
    var res = [];
    var len$1 = (array$1.length | 0);
    var i$1 = 0;
    while ((i$1 < len$1)) {
      var x0$1 = array$1[i$1];
      var this$9 = rq.query;
      var s$1 = x0$1.query;
      if ((!((this$9.indexOf(s$1) | 0) !== (-1)))) {
        (res.push(x0$1) | 0);
      }
      i$1 = ((1 + i$1) | 0);
    }
    var newData = $m_sjs_js_ArrayOps$().pK(res, rq);
    var array$4 = $m_sjs_js_ArrayOps$().qg($m_sjs_js_ArrayOps$().rF($m_sjs_js_ArrayOps$().rW(newData, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => (+_$2$2.timestamp))), $m_s_math_Ordering$DeprecatedDoubleOrdering$())), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$3$2) => _$3$2.query)));
    var n = this.le;
    this.rN(array$4.slice(0, ((n > 0) ? n : 0)));
  }
});
var $d_Ldotty_tools_scaladoc_RecentQueryStorage$ = new $TypeData().i($c_Ldotty_tools_scaladoc_RecentQueryStorage$, "dotty.tools.scaladoc.RecentQueryStorage$", ({
  dc: 1,
  dd: 1
}));
var $n_Ldotty_tools_scaladoc_RecentQueryStorage$;
function $m_Ldotty_tools_scaladoc_RecentQueryStorage$() {
  if ((!$n_Ldotty_tools_scaladoc_RecentQueryStorage$)) {
    $n_Ldotty_tools_scaladoc_RecentQueryStorage$ = new $c_Ldotty_tools_scaladoc_RecentQueryStorage$();
  }
  return $n_Ldotty_tools_scaladoc_RecentQueryStorage$;
}
/** @constructor */
function $c_jl_Character$() {
  this.jh = null;
  $n_jl_Character$ = this;
  this.jh = $constArrUDiffs_I(67, "1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]");
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.oI = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.qf = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().pW(this.jh, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.jh.a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
$p.j9 = (function(codePoint) {
  switch (codePoint) {
    case 8115:
    case 8131:
    case 8179: {
      return ((9 + codePoint) | 0);
      break;
    }
    default: {
      if (((((codePoint - 8064) | 0) >>> 0) <= 47)) {
        return (8 | codePoint);
      } else {
        var this$1 = this.oI(codePoint);
        var upperChars = this$1.toUpperCase();
        switch (upperChars.length) {
          case 1: {
            return upperChars.charCodeAt(0);
            break;
          }
          case 2: {
            var high = upperChars.charCodeAt(0);
            var low = upperChars.charCodeAt(1);
            return ((((-67044352) & ((high << 16) | low)) === (-671032320)) ? ((((64 + (1023 & high)) | 0) << 10) | (1023 & low)) : codePoint);
            break;
          }
          default: {
            return codePoint;
          }
        }
      }
    }
  }
});
$p.j8 = (function(ch) {
  return (65535 & this.hS(ch));
});
$p.hS = (function(codePoint) {
  if ((codePoint === 304)) {
    return 105;
  } else {
    var this$1 = this.oI(codePoint);
    var lowerChars = this$1.toLowerCase();
    switch (lowerChars.length) {
      case 1: {
        return lowerChars.charCodeAt(0);
        break;
      }
      case 2: {
        var high = lowerChars.charCodeAt(0);
        var low = lowerChars.charCodeAt(1);
        return ((((-67044352) & ((high << 16) | low)) === (-671032320)) ? ((((64 + (1023 & high)) | 0) << 10) | (1023 & low)) : codePoint);
        break;
      }
      default: {
        return codePoint;
      }
    }
  }
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  dr: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
/** @constructor */
function $c_jl_Double$() {
}
$p = $c_jl_Double$.prototype = new $h_O();
$p.constructor = $c_jl_Double$;
/** @constructor */
function $h_jl_Double$() {
}
$h_jl_Double$.prototype = $p;
$p.km = (function(a, b) {
  if ((a !== a)) {
    return ((b === b) | 0);
  } else if ((b !== b)) {
    return (-1);
  } else if ((a === b)) {
    if ((a === 0.0)) {
      var ainf = (1.0 / a);
      return ((ainf === (1.0 / b)) ? 0 : ((ainf < 0.0) ? (-1) : 1));
    } else {
      return 0;
    }
  } else {
    return ((a < b) ? (-1) : 1);
  }
});
var $d_jl_Double$ = new $TypeData().i($c_jl_Double$, "java.lang.Double$", ({
  du: 1,
  a: 1
}));
var $n_jl_Double$;
function $m_jl_Double$() {
  if ((!$n_jl_Double$)) {
    $n_jl_Double$ = new $c_jl_Double$();
  }
  return $n_jl_Double$;
}
/** @constructor */
function $c_jl_Integer$() {
}
$p = $c_jl_Integer$.prototype = new $h_O();
$p.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $p;
$p.hM = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.kP = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().hM(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().hM(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) | 0);
  if ((i >= len)) {
    $m_jl_Integer$().hM(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.qf(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().hM(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().hM(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
$p.bR = (function(i) {
  var t1 = ((i - (1431655765 & (i >> 1))) | 0);
  var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
  return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  dw: 1,
  a: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $Long));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
/** @constructor */
function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
  this.fY = null;
  this.gI = null;
  this.fZ = null;
  this.g0 = 0;
  this.fX = 0;
  this.fY = declaringClass;
  this.gI = methodName;
  this.fZ = fileName;
  this.g0 = lineNumber;
  this.fX = columnNumber;
}
$p = $c_jl_StackTraceElement.prototype = new $h_O();
$p.constructor = $c_jl_StackTraceElement;
/** @constructor */
function $h_jl_StackTraceElement() {
}
$h_jl_StackTraceElement.prototype = $p;
$p.p = (function(that) {
  return ((that instanceof $c_jl_StackTraceElement) && (((((this.fZ === that.fZ) && (this.g0 === that.g0)) && (this.fX === that.fX)) && (this.fY === that.fY)) && (this.gI === that.gI)));
});
$p.v = (function() {
  var result = "";
  if ((this.fY !== "<jscode>")) {
    result = ((("" + result) + this.fY) + ".");
  }
  result = (("" + result) + this.gI);
  if ((this.fZ === null)) {
    result = (result + "(Unknown Source)");
  } else {
    result = ((result + "(") + this.fZ);
    if ((this.g0 >= 0)) {
      result = ((result + ":") + this.g0);
      if ((this.fX >= 0)) {
        result = ((result + ":") + this.fX);
      }
    }
    result = (result + ")");
  }
  return result;
});
$p.u = (function() {
  return (((($f_T__hashCode__I(this.fY) ^ $f_T__hashCode__I(this.gI)) ^ $f_T__hashCode__I(this.fZ)) ^ this.g0) ^ this.fX);
});
function $isArrayOf_jl_StackTraceElement(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.by)));
}
var $d_jl_StackTraceElement = new $TypeData().i($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
  by: 1,
  a: 1
}));
/** @constructor */
function $c_jl_String$() {
}
$p = $c_jl_String$.prototype = new $h_O();
$p.constructor = $c_jl_String$;
/** @constructor */
function $h_jl_String$() {
}
$h_jl_String$.prototype = $p;
$p.rk = (function(value, offset, count) {
  var endOffset = ((offset + count) | 0);
  var result = "";
  var i = offset;
  while ((i !== endOffset)) {
    result = (result + ("" + $cToS(value.a[i])));
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_jl_String$ = new $TypeData().i($c_jl_String$, "java.lang.String$", ({
  dH: 1,
  a: 1
}));
var $n_jl_String$;
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$();
  }
  return $n_jl_String$;
}
/** @constructor */
function $c_jl_Thread(dummy) {
}
$p = $c_jl_Thread.prototype = new $h_O();
$p.constructor = $c_jl_Thread;
/** @constructor */
function $h_jl_Thread() {
}
$h_jl_Thread.prototype = $p;
$p.f1 = (function() {
});
function $isArrayOf_jl_Thread(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bA)));
}
var $d_jl_Thread = new $TypeData().i($c_jl_Thread, "java.lang.Thread", ({
  bA: 1,
  aF: 1
}));
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.lD = s;
  $thiz.i1 = e;
  $thiz.lE = writableStackTrace;
  if (writableStackTrace) {
    $thiz.gr();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.lD = null;
    this.i1 = null;
    this.lE = false;
    this.lC = null;
    this.f9 = null;
  }
  hF() {
    return this.lD;
  }
  gr() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.d3 : this);
    this.lC = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
    return this;
  }
  kK() {
    if ((this.f9 === null)) {
      if (this.lE) {
        this.f9 = $m_jl_StackTrace$().qt(this.lC);
      } else {
        this.f9 = new ($d_jl_StackTraceElement.r().C)(0);
      }
    }
    return this.f9;
  }
  hO(s) {
    this.kK();
    var t = this.v();
    s.fH(t);
    if ((this.f9.a.length !== 0)) {
      var i = 0;
      while ((i < this.f9.a.length)) {
        var t$1 = ("  at " + this.f9.a[i]);
        s.fH(t$1);
        i = ((1 + i) | 0);
      }
    } else {
      s.fH("  <no stack trace available>");
    }
    var wCause = this;
    while (((wCause !== wCause.i1) && (wCause.i1 !== null))) {
      var parentTrace = wCause.kK();
      wCause = wCause.i1;
      var thisTrace = wCause.kK();
      var thisLength = thisTrace.a.length;
      var parentLength = parentTrace.a.length;
      var t$2 = ("Caused by: " + wCause);
      s.fH(t$2);
      if ((thisLength !== 0)) {
        var sameFrameCount = 0;
        while (true) {
          if (((sameFrameCount < thisLength) && (sameFrameCount < parentLength))) {
            var x = thisTrace.a[((((thisLength - sameFrameCount) | 0) - 1) | 0)];
            var x$2 = parentTrace.a[((((parentLength - sameFrameCount) | 0) - 1) | 0)];
            var $x_1 = ((x === null) ? (x$2 === null) : x.p(x$2));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            sameFrameCount = ((1 + sameFrameCount) | 0);
          } else {
            break;
          }
        }
        if ((sameFrameCount > 0)) {
          sameFrameCount = ((sameFrameCount - 1) | 0);
        }
        var lengthToPrint = ((thisLength - sameFrameCount) | 0);
        var i$2 = 0;
        while ((i$2 < lengthToPrint)) {
          var t$3 = ("  at " + thisTrace.a[i$2]);
          s.fH(t$3);
          i$2 = ((1 + i$2) | 0);
        }
        if ((sameFrameCount > 0)) {
          var t$4 = (("  ... " + sameFrameCount) + " more");
          s.fH(t$4);
        }
      } else {
        s.fH("  <no stack trace available>");
      }
    }
  }
  v() {
    var className = $objectClassName(this);
    var message = this.hF();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  u() {
    return $c_O.prototype.u.call(this);
  }
  p(that) {
    return $c_O.prototype.p.call(this, that);
  }
  get "message"() {
    var m = this.hF();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.v();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.v)));
}
/** @constructor */
function $c_ju_Arrays$NaturalComparator$() {
}
$p = $c_ju_Arrays$NaturalComparator$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$NaturalComparator$;
/** @constructor */
function $h_ju_Arrays$NaturalComparator$() {
}
$h_ju_Arrays$NaturalComparator$.prototype = $p;
$p.av = (function(o1, o2) {
  return $dp_compareTo__O__I(o1, o2);
});
var $d_ju_Arrays$NaturalComparator$ = new $TypeData().i($c_ju_Arrays$NaturalComparator$, "java.util.Arrays$NaturalComparator$", ({
  dT: 1,
  P: 1
}));
var $n_ju_Arrays$NaturalComparator$;
function $m_ju_Arrays$NaturalComparator$() {
  if ((!$n_ju_Arrays$NaturalComparator$)) {
    $n_ju_Arrays$NaturalComparator$ = new $c_ju_Arrays$NaturalComparator$();
  }
  return $n_ju_Arrays$NaturalComparator$;
}
/** @constructor */
function $c_ju_concurrent_TimeUnit$() {
  this.lL = null;
  this.lI = null;
  this.lJ = null;
  this.lM = null;
  this.lK = null;
  this.lH = null;
  this.lG = null;
  $n_ju_concurrent_TimeUnit$ = this;
  this.lL = new $c_ju_concurrent_TimeUnit$$anon$1();
  this.lI = new $c_ju_concurrent_TimeUnit$$anon$2();
  this.lJ = new $c_ju_concurrent_TimeUnit$$anon$3();
  this.lM = new $c_ju_concurrent_TimeUnit$$anon$4();
  this.lK = new $c_ju_concurrent_TimeUnit$$anon$5();
  this.lH = new $c_ju_concurrent_TimeUnit$$anon$6();
  this.lG = new $c_ju_concurrent_TimeUnit$$anon$7();
}
$p = $c_ju_concurrent_TimeUnit$.prototype = new $h_O();
$p.constructor = $c_ju_concurrent_TimeUnit$;
/** @constructor */
function $h_ju_concurrent_TimeUnit$() {
}
$h_ju_concurrent_TimeUnit$.prototype = $p;
$p.dW = (function(a_$_lo, a_$_hi, b_$_lo, b_$_hi, max_$_lo, max_$_hi) {
  if (((a_$_hi === max_$_hi) ? ((a_$_lo >>> 0) > (max_$_lo >>> 0)) : (a_$_hi > max_$_hi))) {
    return $bL((-1), 2147483647);
  } else {
    var lo = ((-max_$_lo) | 0);
    var hi = ((((-max_$_hi) | 0) - ((lo !== 0) | 0)) | 0);
    if (((a_$_hi === hi) ? ((a_$_lo >>> 0) < (lo >>> 0)) : (a_$_hi < hi))) {
      return $bL(1, (-2147483648));
    } else {
      var a0 = (65535 & a_$_lo);
      var a1 = ((a_$_lo >>> 16) | 0);
      var b0 = (65535 & b_$_lo);
      var b1 = ((b_$_lo >>> 16) | 0);
      var a0b0 = Math.imul(a0, b0);
      var a1b0 = Math.imul(a1, b0);
      var a0b1 = Math.imul(a0, b1);
      var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
      var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
      var hi$1 = ((((((((Math.imul(a_$_lo, b_$_hi) + Math.imul(a_$_hi, b_$_lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
      return $bL(lo$1, hi$1);
    }
  }
});
var $d_ju_concurrent_TimeUnit$ = new $TypeData().i($c_ju_concurrent_TimeUnit$, "java.util.concurrent.TimeUnit$", ({
  dW: 1,
  a: 1
}));
var $n_ju_concurrent_TimeUnit$;
function $m_ju_concurrent_TimeUnit$() {
  if ((!$n_ju_concurrent_TimeUnit$)) {
    $n_ju_concurrent_TimeUnit$ = new $c_ju_concurrent_TimeUnit$();
  }
  return $n_ju_concurrent_TimeUnit$;
}
function $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, value) {
  $thiz.J = value;
  return $thiz;
}
/** @constructor */
function $c_ju_concurrent_atomic_AtomicReference() {
  this.J = null;
}
$p = $c_ju_concurrent_atomic_AtomicReference.prototype = new $h_O();
$p.constructor = $c_ju_concurrent_atomic_AtomicReference;
/** @constructor */
function $h_ju_concurrent_atomic_AtomicReference() {
}
$h_ju_concurrent_atomic_AtomicReference.prototype = $p;
$p.eZ = (function(expect, update) {
  if (Object.is(expect, this.J)) {
    this.J = update;
    return true;
  } else {
    return false;
  }
});
$p.qP = (function(newValue) {
  var old = this.J;
  this.J = newValue;
  return old;
});
$p.v = (function() {
  return ("" + this.J);
});
/** @constructor */
function $c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$() {
}
$h_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$.prototype = $p;
$p.du = (function(a, i, v) {
  a.a[i] = v;
});
$p.c0 = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$, "java.util.internal.GenericArrayOps$ReusableAnyRefArrayOps$", ({
  e8: 1,
  ap: 1
}));
var $n_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$;
function $m_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$)) {
    $n_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$ = new $c_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$ReusableAnyRefArrayOps$;
}
function $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher($thiz) {
  $thiz.i3 = 0;
  $thiz.fa = null;
  return $thiz;
}
function $p_ju_regex_Matcher__ensureLastMatch__O($thiz) {
  if (($thiz.fa === null)) {
    throw new $c_jl_IllegalStateException("No match available");
  }
  return $thiz.fa;
}
/** @constructor */
function $c_ju_regex_Matcher(pattern0, input0) {
  this.gJ = null;
  this.lN = null;
  this.lO = 0;
  this.i2 = null;
  this.i3 = 0;
  this.fa = null;
  this.gJ = pattern0;
  this.lN = input0;
  this.lO = 0;
  this.i2 = this.lN;
  this.i3 = 0;
  this.fa = null;
}
$p = $c_ju_regex_Matcher.prototype = new $h_O();
$p.constructor = $c_ju_regex_Matcher;
/** @constructor */
function $h_ju_regex_Matcher() {
}
$h_ju_regex_Matcher.prototype = $p;
$p.rg = (function() {
  $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher(this);
  this.fa = this.gJ.qs(this.i2);
  return (this.fa !== null);
});
$p.qy = (function() {
  var this$1 = this.gJ;
  var input = this.i2;
  var start = this.i3;
  var mtch = this$1.r7(input, start);
  var end = (this$1.jp.lastIndex | 0);
  this.i3 = ((mtch !== null) ? ((end === (mtch.index | 0)) ? ((1 + end) | 0) : end) : ((1 + this.i2.length) | 0));
  this.fa = mtch;
  return (mtch !== null);
});
$p.oA = (function() {
  return ((($p_ju_regex_Matcher__ensureLastMatch__O(this).index | 0) + this.lO) | 0);
});
$p.nO = (function() {
  return ((this.oA() + this.qT().length) | 0);
});
$p.qT = (function() {
  return $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
});
$p.qS = (function(group) {
  var x = $p_ju_regex_Matcher__ensureLastMatch__O(this)[this.gJ.rn(group)];
  return ((x !== (void 0)) ? x : null);
});
var $d_ju_regex_Matcher = new $TypeData().i($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
  eb: 1,
  ea: 1
}));
/** @constructor */
function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
  this.jn = null;
  this.lQ = null;
  this.lR = false;
  this.jo = 0;
  this.lP = null;
  this.jp = null;
  this.lS = null;
  this.jn = _pattern;
  this.lQ = jsFlags;
  this.lR = sticky;
  this.jo = groupCount;
  this.lP = groupNumberMap;
  this.jp = new RegExp(jsPattern, (this.lQ + (this.lR ? "gy" : "g")));
  this.lS = new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
}
$p = $c_ju_regex_Pattern.prototype = new $h_O();
$p.constructor = $c_ju_regex_Pattern;
/** @constructor */
function $h_ju_regex_Pattern() {
}
$h_ju_regex_Pattern.prototype = $p;
$p.qs = (function(input) {
  return this.lS.exec(input);
});
$p.r7 = (function(input, start) {
  var regexp = this.jp;
  regexp.lastIndex = start;
  return regexp.exec(input);
});
$p.rn = (function(group) {
  var length = this.jo;
  if (((group >>> 0) > (length >>> 0))) {
    $m_jl_BoundsChecks$().r5(group, length);
  }
  return (this.lP[group] | 0);
});
$p.v = (function() {
  return this.jn;
});
$p.r8 = (function(inputStr, limit) {
  if ((inputStr === "")) {
    return new ($d_T.r().C)([""]);
  } else {
    var lim = ((limit > 0) ? limit : 2147483647);
    var matcher = new $c_ju_regex_Matcher(this, inputStr);
    var result = [];
    var prevEnd = 0;
    while ((((result.length | 0) < ((lim - 1) | 0)) && matcher.qy())) {
      if ((matcher.nO() !== 0)) {
        var beginIndex = prevEnd;
        var endIndex = matcher.oA();
        var $x_1 = result.push(inputStr.substring(beginIndex, endIndex));
      }
      prevEnd = matcher.nO();
    }
    var beginIndex$1 = prevEnd;
    result.push(inputStr.substring(beginIndex$1));
    var actualLength = (result.length | 0);
    if ((limit === 0)) {
      while (true) {
        if ((actualLength !== 0)) {
          var x = result[((actualLength - 1) | 0)];
          var $x_2 = ((x !== null) && $dp_equals__O__Z(x, ""));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          actualLength = ((actualLength - 1) | 0);
        } else {
          break;
        }
      }
    }
    var r = new ($d_T.r().C)(actualLength);
    var end = actualLength;
    var i = 0;
    while ((i < end)) {
      var value = i;
      r.a[value] = result[value];
      i = ((1 + i) | 0);
    }
    return r;
  }
});
var $d_ju_regex_Pattern = new $TypeData().i($c_ju_regex_Pattern, "java.util.regex.Pattern", ({
  ec: 1,
  a: 1
}));
/** @constructor */
function $c_s_Console$() {
  this.m3 = null;
  $n_s_Console$ = this;
  this.m3 = new $c_s_util_DynamicVariable($m_jl_System$Streams$().ly);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.rq = (function() {
  return this.m3.ke;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  en: 1,
  hl: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$p = $c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$p.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $p;
$p.s8 = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.mM;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
$p.l5 = (function(s) {
  return ((s === null) ? null : new $c_sci_WrappedString(s));
});
function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
  return ($thiz.co(x) ? $thiz.d(x) : default$1.d(x));
}
/** @constructor */
function $c_sci_LazyList$Uninitialized$() {
}
$p = $c_sci_LazyList$Uninitialized$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$Uninitialized$;
/** @constructor */
function $h_sci_LazyList$Uninitialized$() {
}
$h_sci_LazyList$Uninitialized$.prototype = $p;
var $d_sci_LazyList$Uninitialized$ = new $TypeData().i($c_sci_LazyList$Uninitialized$, "scala.collection.immutable.LazyList$Uninitialized$", ({
  fy: 1,
  a: 1
}));
var $n_sci_LazyList$Uninitialized$;
function $m_sci_LazyList$Uninitialized$() {
  if ((!$n_sci_LazyList$Uninitialized$)) {
    $n_sci_LazyList$Uninitialized$ = new $c_sci_LazyList$Uninitialized$();
  }
  return $n_sci_LazyList$Uninitialized$;
}
/** @constructor */
function $c_sci_List$$anon$1() {
}
$p = $c_sci_List$$anon$1.prototype = new $h_O();
$p.constructor = $c_sci_List$$anon$1;
/** @constructor */
function $h_sci_List$$anon$1() {
}
$h_sci_List$$anon$1.prototype = $p;
$p.v = (function() {
  return "<function1>";
});
$p.d = (function(x) {
  return this;
});
var $d_sci_List$$anon$1 = new $TypeData().i($c_sci_List$$anon$1, "scala.collection.immutable.List$$anon$1", ({
  fD: 1,
  h: 1
}));
/** @constructor */
function $c_sci_MapNode() {
}
$p = $c_sci_MapNode.prototype = new $h_sci_Node();
$p.constructor = $c_sci_MapNode;
/** @constructor */
function $h_sci_MapNode() {
}
$h_sci_MapNode.prototype = $p;
/** @constructor */
function $c_sci_SetNode() {
}
$p = $c_sci_SetNode.prototype = new $h_sci_Node();
$p.constructor = $c_sci_SetNode;
/** @constructor */
function $h_sci_SetNode() {
}
$h_sci_SetNode.prototype = $p;
function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
  if ((elems === $thiz)) {
    $thiz.aU($m_scm_Buffer$().fB(elems));
  } else {
    var it = elems.c();
    while (it.i()) {
      $thiz.ac(it.e());
    }
  }
  return $thiz;
}
function $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V($thiz, runnable) {
  var tl = $thiz.mY;
  var b = tl.R();
  if ((b instanceof $c_s_concurrent_BatchingExecutor$SyncBatch)) {
    b.rv(runnable);
  } else {
    var i = ((b !== null) ? b : 0);
    if ((i < 16)) {
      tl.hR(((1 + i) | 0));
      try {
        runnable.f1();
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        if (false) {
          $m_s_concurrent_ExecutionContext$().gk.d(e$2);
        } else {
          matchResult3: {
            if ($m_s_util_control_NonFatal$().iQ(e$2)) {
              $m_s_concurrent_ExecutionContext$().gk.d(e$2);
              break matchResult3;
            }
            throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.d3 : e$2);
          }
        }
      } finally {
        tl.hR(b);
      }
    } else {
      var batch = new $c_s_concurrent_BatchingExecutor$SyncBatch($thiz, runnable);
      tl.hR(batch);
      batch.f1();
      tl.hR(b);
    }
  }
}
/** @constructor */
function $c_s_concurrent_duration_package$DurationInt(n) {
  this.hh = 0;
  this.hh = n;
}
$p = $c_s_concurrent_duration_package$DurationInt.prototype = new $h_O();
$p.constructor = $c_s_concurrent_duration_package$DurationInt;
/** @constructor */
function $h_s_concurrent_duration_package$DurationInt() {
}
$h_s_concurrent_duration_package$DurationInt.prototype = $p;
$p.u = (function() {
  return this.hh;
});
$p.p = (function(x$0) {
  return $m_s_concurrent_duration_package$DurationInt$().qo(this.hh, x$0);
});
function $isArrayOf_s_concurrent_duration_package$DurationInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cP)));
}
var $d_s_concurrent_duration_package$DurationInt = new $TypeData().i($c_s_concurrent_duration_package$DurationInt, "scala.concurrent.duration.package$DurationInt", ({
  cP: 1,
  hh: 1
}));
/** @constructor */
function $c_s_concurrent_impl_Promise$ManyCallbacks(first, rest) {
  this.gl = null;
  this.gm = null;
  this.gl = first;
  this.gm = rest;
}
$p = $c_s_concurrent_impl_Promise$ManyCallbacks.prototype = new $h_O();
$p.constructor = $c_s_concurrent_impl_Promise$ManyCallbacks;
/** @constructor */
function $h_s_concurrent_impl_Promise$ManyCallbacks() {
}
$h_s_concurrent_impl_Promise$ManyCallbacks.prototype = $p;
$p.v = (function() {
  return "ManyCallbacks";
});
function $isArrayOf_s_concurrent_impl_Promise$ManyCallbacks(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cR)));
}
var $d_s_concurrent_impl_Promise$ManyCallbacks = new $TypeData().i($c_s_concurrent_impl_Promise$ManyCallbacks, "scala.concurrent.impl.Promise$ManyCallbacks", ({
  cR: 1,
  aK: 1
}));
/** @constructor */
function $c_s_math_Ordering$() {
}
$p = $c_s_math_Ordering$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$;
/** @constructor */
function $h_s_math_Ordering$() {
}
$h_s_math_Ordering$.prototype = $p;
var $d_s_math_Ordering$ = new $TypeData().i($c_s_math_Ordering$, "scala.math.Ordering$", ({
  hn: 1,
  hm: 1
}));
var $n_s_math_Ordering$;
function $m_s_math_Ordering$() {
  if ((!$n_s_math_Ordering$)) {
    $n_s_math_Ordering$ = new $c_s_math_Ordering$();
  }
  return $n_s_math_Ordering$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.v = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.v = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$p = $c_sr_AbstractFunction2.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $p;
$p.v = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction3() {
}
$p = $c_sr_AbstractFunction3.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
}
$h_sr_AbstractFunction3.prototype = $p;
$p.v = (function() {
  return "<function3>";
});
/** @constructor */
function $c_sr_IntRef(elem) {
  this.iB = 0;
  this.iB = elem;
}
$p = $c_sr_IntRef.prototype = new $h_O();
$p.constructor = $c_sr_IntRef;
/** @constructor */
function $h_sr_IntRef() {
}
$h_sr_IntRef.prototype = $p;
$p.v = (function() {
  return ("" + this.iB);
});
var $d_sr_IntRef = new $TypeData().i($c_sr_IntRef, "scala.runtime.IntRef", ({
  ia: 1,
  a: 1
}));
/** @constructor */
function $c_sr_LazyRef() {
  this.iC = false;
  this.iD = null;
}
$p = $c_sr_LazyRef.prototype = new $h_O();
$p.constructor = $c_sr_LazyRef;
/** @constructor */
function $h_sr_LazyRef() {
}
$h_sr_LazyRef.prototype = $p;
$p.r1 = (function(value) {
  this.iD = value;
  this.iC = true;
  return value;
});
$p.v = (function() {
  return ("LazyRef " + (this.iC ? ("of: " + this.iD) : "thunk"));
});
var $d_sr_LazyRef = new $TypeData().i($c_sr_LazyRef, "scala.runtime.LazyRef", ({
  ib: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.iE = null;
  this.iE = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.v = (function() {
  return ("" + this.iE);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  ig: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.b0 = 0;
  this.ej = 0;
  this.iG = 0;
  this.iF = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.b0 = $f_T__hashCode__I("Seq");
  this.ej = $f_T__hashCode__I("Map");
  this.iG = $f_T__hashCode__I("Set");
  this.iF = this.gA($m_sci_Nil$(), this.ej);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.d8 = (function(x, y) {
  return this.oK($m_sr_Statics$().y(x), $m_sr_Statics$().y(y), (-889275714));
});
$p.kY = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.qZ(xs, this.b0) : ((xs instanceof $c_sci_List) ? this.ra(xs, this.b0) : this.rp(xs, this.b0)));
});
$p.rf = (function(xs) {
  if (xs.g()) {
    return this.iF;
  } else {
    var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
    var h = this.ej;
    xs.dn(accum);
    h = this.x(h, accum.iH);
    h = this.x(h, accum.iI);
    h = this.eo(h, accum.iJ);
    return this.bc(h, accum.iK);
  }
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  iS: 1,
  iR: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3$accum$1() {
  this.iH = 0;
  this.iI = 0;
  this.iK = 0;
  this.iJ = 0;
  this.iH = 0;
  this.iI = 0;
  this.iK = 0;
  this.iJ = 1;
}
$p = $c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$accum$1() {
}
$h_s_util_hashing_MurmurHash3$accum$1.prototype = $p;
$p.v = (function() {
  return "<function2>";
});
$p.pN = (function(k, v) {
  var h = $m_s_util_hashing_MurmurHash3$().d8(k, v);
  this.iH = ((this.iH + h) | 0);
  this.iI = (this.iI ^ h);
  this.iJ = Math.imul(this.iJ, (1 | h));
  this.iK = ((1 + this.iK) | 0);
});
$p.ca = (function(v1, v2) {
  this.pN(v1, v2);
});
var $d_s_util_hashing_MurmurHash3$accum$1 = new $TypeData().i($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
  iT: 1,
  aU: 1
}));
function $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, pattern, groupNames) {
  $thiz.kf = pattern;
  return $thiz;
}
function $ct_s_util_matching_Regex__T__sci_Seq__($thiz, regex, groupNames) {
  $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, $m_ju_regex_PatternCompiler$().nC(regex, 0), groupNames);
  return $thiz;
}
/** @constructor */
function $c_s_util_matching_Regex() {
  this.kf = null;
}
$p = $c_s_util_matching_Regex.prototype = new $h_O();
$p.constructor = $c_s_util_matching_Regex;
/** @constructor */
function $h_s_util_matching_Regex() {
}
$h_s_util_matching_Regex.prototype = $p;
$p.ja = (function(s) {
  var m = new $c_ju_regex_Matcher(this.kf, $dp_toString__T(s));
  if (m.rg()) {
    $m_sci_List$();
    var n = m.gJ.jo;
    var b = new $c_scm_ListBuffer();
    var i = 0;
    while ((i < n)) {
      b.gn(m.qS(((1 + i) | 0)));
      i = ((1 + i) | 0);
    }
    return new $c_s_Some(b.c1());
  } else {
    return $m_s_None$();
  }
});
$p.v = (function() {
  return this.kf.jn;
});
var $d_s_util_matching_Regex = new $TypeData().i($c_s_util_matching_Regex, "scala.util.matching.Regex", ({
  iU: 1,
  a: 1
}));
/** @constructor */
function $c_Ldotty_tools_scaladoc_PageEntry$() {
}
$p = $c_Ldotty_tools_scaladoc_PageEntry$.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_PageEntry$;
/** @constructor */
function $h_Ldotty_tools_scaladoc_PageEntry$() {
}
$h_Ldotty_tools_scaladoc_PageEntry$.prototype = $p;
$p.pM = (function(jsObj) {
  var $x_6 = jsObj.t;
  var $x_5 = jsObj.d;
  var $x_4 = jsObj.x;
  var $x_3 = jsObj.i;
  var $x_2 = jsObj.l;
  var $x_1 = jsObj.e;
  var this$1 = jsObj.n;
  return new $c_Ldotty_tools_scaladoc_PageEntry($x_6, $x_5, $x_4, $x_3, $x_2, (!(!$x_1)), this$1.toLowerCase(), jsObj.k, $m_Ldotty_tools_scaladoc_StringUtils$().kr(jsObj.n));
});
var $d_Ldotty_tools_scaladoc_PageEntry$ = new $TypeData().i($c_Ldotty_tools_scaladoc_PageEntry$, "dotty.tools.scaladoc.PageEntry$", ({
  d9: 1,
  cT: 1,
  cU: 1
}));
var $n_Ldotty_tools_scaladoc_PageEntry$;
function $m_Ldotty_tools_scaladoc_PageEntry$() {
  if ((!$n_Ldotty_tools_scaladoc_PageEntry$)) {
    $n_Ldotty_tools_scaladoc_PageEntry$ = new $c_Ldotty_tools_scaladoc_PageEntry$();
  }
  return $n_Ldotty_tools_scaladoc_PageEntry$;
}
var $b_Ldotty_tools_scaladoc_RecentQuery;
function $a_Ldotty_tools_scaladoc_RecentQuery() {
  if ((!$b_Ldotty_tools_scaladoc_RecentQuery)) {
    $b_Ldotty_tools_scaladoc_RecentQuery = class $b_Ldotty_tools_scaladoc_RecentQuery extends Object {
      constructor(arg, arg$2) {
        var query = null;
        var timestamp = 0.0;
        query = arg;
        timestamp = (+arg$2);
        super();
        Object.defineProperty(this, "query", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "timestamp", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0.0
        }));
        this.query = query;
        this.timestamp = timestamp;
      }
    };
  }
  return $b_Ldotty_tools_scaladoc_RecentQuery;
}
/** @constructor */
function $c_Ldotty_tools_scaladoc_utils_HTML$Tag$() {
}
$p = $c_Ldotty_tools_scaladoc_utils_HTML$Tag$.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_utils_HTML$Tag$;
/** @constructor */
function $h_Ldotty_tools_scaladoc_utils_HTML$Tag$() {
}
$h_Ldotty_tools_scaladoc_utils_HTML$Tag$.prototype = $p;
$p.E = (function(s) {
  return new $c_Ldotty_tools_scaladoc_utils_HTML$Tag(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => document.createElement(s))));
});
var $d_Ldotty_tools_scaladoc_utils_HTML$Tag$ = new $TypeData().i($c_Ldotty_tools_scaladoc_utils_HTML$Tag$, "dotty.tools.scaladoc.utils.HTML$Tag$", ({
  dj: 1,
  cT: 1,
  cU: 1
}));
var $n_Ldotty_tools_scaladoc_utils_HTML$Tag$;
function $m_Ldotty_tools_scaladoc_utils_HTML$Tag$() {
  if ((!$n_Ldotty_tools_scaladoc_utils_HTML$Tag$)) {
    $n_Ldotty_tools_scaladoc_utils_HTML$Tag$ = new $c_Ldotty_tools_scaladoc_utils_HTML$Tag$();
  }
  return $n_Ldotty_tools_scaladoc_utils_HTML$Tag$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.L = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.v = (function() {
  return ((this.L.Y ? "interface " : (this.L.X ? "" : "class ")) + this.L.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  ds: 1,
  a: 1,
  a3: 1
}));
function $ct_jl_Enum__T__I__($thiz, _name, _ordinal) {
  $thiz.dy = _name;
  $thiz.d9 = _ordinal;
  return $thiz;
}
/** @constructor */
function $c_jl_Enum() {
  this.dy = null;
  this.d9 = 0;
}
$p = $c_jl_Enum.prototype = new $h_O();
$p.constructor = $c_jl_Enum;
/** @constructor */
function $h_jl_Enum() {
}
$h_jl_Enum.prototype = $p;
$p.v = (function() {
  return this.dy;
});
$p.p = (function(that) {
  return (this === that);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
$p.q1 = (function(o) {
  var x = this.d9;
  var y = o.d9;
  return ((x === y) ? 0 : ((x < y) ? (-1) : 1));
});
$p.nB = (function(o) {
  return this.q1(o);
});
class $c_jl_Error extends $c_jl_Throwable {
}
function $isArrayOf_jl_Error(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aQ)));
}
class $c_jl_Exception extends $c_jl_Throwable {
}
/** @constructor */
function $c_s_Predef$() {
  this.p1 = null;
  this.p2 = null;
  $n_s_Predef$ = this;
  $m_sci_List$();
  this.p1 = $m_sci_Map$();
  this.p2 = $m_sci_Set$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
$p.ok = (function(requirement) {
  if ((!requirement)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
  }
});
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  ez: 1,
  ep: 1,
  eq: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.aa();
      break;
    }
    case 1: {
      return $thiz.ab();
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.g3;
      break;
    }
    case 1: {
      return $thiz.g4;
      break;
    }
    case 2: {
      return $thiz.g5;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
  $thiz.gR = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
  this.gR = null;
}
$p = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
$p.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
/** @constructor */
function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
}
$h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $p;
$p.a4 = (function(it) {
  return this.gR.kC(it, $m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.V = (function() {
  return this.gR.iZ($m_s_reflect_ManifestFactory$AnyManifest$());
});
$p.ek = (function(elems) {
  return this.gR.kC(elems, $m_s_reflect_ManifestFactory$AnyManifest$());
});
function $ct_sc_IterableFactory$Delegate__sc_IterableFactory__($thiz, delegate) {
  $thiz.gS = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_IterableFactory$Delegate() {
  this.gS = null;
}
$p = $c_sc_IterableFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_IterableFactory$Delegate;
/** @constructor */
function $h_sc_IterableFactory$Delegate() {
}
$h_sc_IterableFactory$Delegate.prototype = $p;
$p.a4 = (function(it) {
  return this.gS.a4(it);
});
$p.V = (function() {
  return this.gS.V();
});
/** @constructor */
function $c_sc_IterableOnceOps$Maximized(descriptor, f, cmp) {
  this.jE = null;
  this.mc = null;
  this.ib = null;
  this.ic = null;
  this.id = false;
  this.jE = f;
  this.mc = cmp;
  this.ib = null;
  this.ic = null;
  this.id = false;
}
$p = $c_sc_IterableOnceOps$Maximized.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sc_IterableOnceOps$Maximized;
/** @constructor */
function $h_sc_IterableOnceOps$Maximized() {
}
$h_sc_IterableOnceOps$Maximized.prototype = $p;
$p.s5 = (function() {
  return (this.id ? new $c_s_Some(this.ib) : $m_s_None$());
});
$p.nw = (function(m, a) {
  if (m.id) {
    var fa = this.jE.d(a);
    if ((!(!this.mc.ca(fa, this.ic)))) {
      this.ic = fa;
      this.ib = a;
    }
    return m;
  } else {
    m.id = true;
    m.ib = a;
    m.ic = this.jE.d(a);
    return m;
  }
});
$p.ca = (function(v1, v2) {
  return this.nw(v1, v2);
});
var $d_sc_IterableOnceOps$Maximized = new $TypeData().i($c_sc_IterableOnceOps$Maximized, "scala.collection.IterableOnceOps$Maximized", ({
  eN: 1,
  cY: 1,
  aU: 1
}));
function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1;
  } else {
    var known = $thiz.q();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
    } else {
      var i = 0;
      var it = $thiz.c();
      while (it.i()) {
        if ((i === otherSize)) {
          return 1;
        }
        it.e();
        i = ((1 + i) | 0);
      }
      return ((i - otherSize) | 0);
    }
  }
}
function $f_sc_IterableOps__groupBy__F1__sci_Map($thiz, f) {
  var m = $m_scm_Map$().hB();
  var it = $thiz.c();
  while (it.i()) {
    var elem = it.e();
    var key = f.d(elem);
    m.o6(key, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $thiz.cq()))).ac(elem);
  }
  var result = $m_sci_HashMap$().gb;
  var mapIt = m.c();
  while (mapIt.i()) {
    var x1 = mapIt.e();
    x1.aa();
    x1.ab();
    var \u03b42$ = x1;
    var k$2 = \u03b42$.aa();
    var v$2 = \u03b42$.ab();
    result = result.fK(k$2, v$2.aN());
  }
  return result;
}
function $f_sc_IterableOps__map__F1__O($thiz, f) {
  return $thiz.aG().a4($ct_sc_View$Map__sc_IterableOps__F1__(new $c_sc_View$Map(), $thiz, f));
}
function $f_sc_IterableOps__collect__s_PartialFunction__O($thiz, pf) {
  return $thiz.aG().a4(new $c_sc_View$Collect($thiz, pf));
}
function $f_sc_IterableOps__zipWithIndex__O($thiz) {
  return $thiz.aG().a4(new $c_sc_View$ZipWithIndex($thiz));
}
function $f_sc_Iterator__indexWhere__F1__I__I($thiz, p, from) {
  var i = ((from > 0) ? from : 0);
  var dropped = $thiz.cG(from);
  while (dropped.i()) {
    if ((!(!p.d(dropped.e())))) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).fz(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().G : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.c();
  while ($thiz.i()) {
    if ((!those.i())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().n($thiz.e(), those.e()))) {
      return false;
    }
  }
  return (!those.i());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.G = null;
  $n_sc_Iterator$ = this;
  this.G = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
$p.V = (function() {
  return new $c_sc_Iterator$$anon$21();
});
$p.a4 = (function(source) {
  return source.c();
});
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  eO: 1,
  a: 1,
  C: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $ct_sc_MapFactory$Delegate__sc_MapFactory__($thiz, delegate) {
  $thiz.g7 = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_MapFactory$Delegate() {
  this.g7 = null;
}
$p = $c_sc_MapFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_MapFactory$Delegate;
/** @constructor */
function $h_sc_MapFactory$Delegate() {
}
$h_sc_MapFactory$Delegate.prototype = $p;
$p.a4 = (function(it) {
  return this.g7.a4(it);
});
$p.hB = (function() {
  return this.g7.hB();
});
$p.V = (function() {
  return this.g7.V();
});
/** @constructor */
function $c_sc_View$() {
}
$p = $c_sc_View$.prototype = new $h_O();
$p.constructor = $c_sc_View$;
/** @constructor */
function $h_sc_View$() {
}
$h_sc_View$.prototype = $p;
$p.iS = (function(it) {
  return ($is_sc_View(it) ? it : ($is_sc_Iterable(it) ? new $c_sc_View$$anon$1(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((it$2) => (() => it$2.c()))(it))) : $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), $m_sci_LazyList$().kE(it))));
});
$p.V = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((it$2) => this.iS(it$2))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.a4 = (function(source) {
  return this.iS(source);
});
var $d_sc_View$ = new $TypeData().i($c_sc_View$, "scala.collection.View$", ({
  fa: 1,
  a: 1,
  C: 1
}));
var $n_sc_View$;
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$();
  }
  return $n_sc_View$;
}
/** @constructor */
function $c_sci_BitmapIndexedMapNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
  this.ae = 0;
  this.ay = 0;
  this.b2 = null;
  this.ch = null;
  this.bt = 0;
  this.c3 = 0;
  this.ae = dataMap;
  this.ay = nodeMap;
  this.b2 = content;
  this.ch = originalHashes;
  this.bt = size;
  this.c3 = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_BitmapIndexedMapNode;
/** @constructor */
function $h_sci_BitmapIndexedMapNode() {
}
$h_sci_BitmapIndexedMapNode.prototype = $p;
$p.K = (function() {
  return this.bt;
});
$p.bS = (function() {
  return this.c3;
});
$p.dO = (function(index) {
  return this.b2.a[(index << 1)];
});
$p.dq = (function(index) {
  return this.b2.a[((1 + (index << 1)) | 0)];
});
$p.o7 = (function(index) {
  return $ct_T2__O__O__(new $c_T2(), this.b2.a[(index << 1)], this.b2.a[((1 + (index << 1)) | 0)]);
});
$p.cn = (function(index) {
  return this.ch.a[index];
});
$p.dp = (function(index) {
  return this.b2.a[((((this.b2.a.length - 1) | 0) - index) | 0)];
});
$p.kk = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cI(keyHash, shift);
  var bitpos = $m_sci_Node$().bZ(mask);
  if (((this.ae & bitpos) !== 0)) {
    var index = $m_sci_Node$().bM(this.ae, mask, bitpos);
    if ($m_sr_BoxesRunTime$().n(key, this.dO(index))) {
      return this.dq(index);
    } else {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
    }
  } else if (((this.ay & bitpos) !== 0)) {
    return this.dp($m_sci_Node$().bM(this.ay, mask, bitpos)).kk(key, originalHash, keyHash, ((5 + shift) | 0));
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.iU = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cI(keyHash, shift);
  var bitpos = $m_sci_Node$().bZ(mask);
  if (((this.ae & bitpos) !== 0)) {
    var index = $m_sci_Node$().bM(this.ae, mask, bitpos);
    return ($m_sr_BoxesRunTime$().n(key, this.dO(index)) ? new $c_s_Some(this.dq(index)) : $m_s_None$());
  } else {
    return (((this.ay & bitpos) !== 0) ? this.dp($m_sci_Node$().bM(this.ay, mask, bitpos)).iU(key, originalHash, keyHash, ((5 + shift) | 0)) : $m_s_None$());
  }
});
$p.kI = (function(key, originalHash, keyHash, shift, f) {
  var mask = $m_sci_Node$().cI(keyHash, shift);
  var bitpos = $m_sci_Node$().bZ(mask);
  if (((this.ae & bitpos) !== 0)) {
    var index = $m_sci_Node$().bM(this.ae, mask, bitpos);
    return ($m_sr_BoxesRunTime$().n(key, this.dO(index)) ? this.dq(index) : f.Q());
  } else {
    return (((this.ay & bitpos) !== 0) ? this.dp($m_sci_Node$().bM(this.ay, mask, bitpos)).kI(key, originalHash, keyHash, ((5 + shift) | 0), f) : f.Q());
  }
});
$p.kp = (function(key, originalHash, keyHash, shift) {
  var mask = $m_sci_Node$().cI(keyHash, shift);
  var bitpos = $m_sci_Node$().bZ(mask);
  if (((this.ae & bitpos) !== 0)) {
    var index = $m_sci_Node$().bM(this.ae, mask, bitpos);
    return ((this.ch.a[index] === originalHash) && $m_sr_BoxesRunTime$().n(key, this.dO(index)));
  } else {
    return (((this.ay & bitpos) !== 0) && this.dp($m_sci_Node$().bM(this.ay, mask, bitpos)).kp(key, originalHash, keyHash, ((5 + shift) | 0)));
  }
});
$p.oP = (function(key, value, originalHash, keyHash, shift, replaceValue) {
  var mask = $m_sci_Node$().cI(keyHash, shift);
  var bitpos = $m_sci_Node$().bZ(mask);
  if (((this.ae & bitpos) !== 0)) {
    var index = $m_sci_Node$().bM(this.ae, mask, bitpos);
    var key0 = this.dO(index);
    var key0UnimprovedHash = this.cn(index);
    if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().n(key0, key))) {
      if (replaceValue) {
        var value0 = this.dq(index);
        return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.q9(bitpos, key, value));
      } else {
        return this;
      }
    } else {
      var value0$2 = this.dq(index);
      var key0Hash = $m_sc_Hashing$().bE(key0UnimprovedHash);
      return this.q5(bitpos, key0Hash, this.kU(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0)));
    }
  } else if (((this.ay & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().bM(this.ay, mask, bitpos);
    var subNode = this.dp(index$2);
    var subNodeNew$2 = subNode.oQ(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
    return ((subNodeNew$2 === subNode) ? this : this.q7(bitpos, subNode, subNodeNew$2));
  } else {
    return this.q3(bitpos, key, originalHash, keyHash, value);
  }
});
$p.kU = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, $m_sci_Vector$().iT(new $c_sjsr_WrappedVarArgs([$ct_T2__O__O__(new $c_T2(), key0, value0), $ct_T2__O__O__(new $c_T2(), key1, value1)])));
  } else {
    var mask0 = $m_sci_Node$().cI(keyHash0, shift);
    var mask1 = $m_sci_Node$().cI(keyHash1, shift);
    var newCachedHash = ((keyHash0 + keyHash1) | 0);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().bZ(mask0) | $m_sci_Node$().bZ(mask1));
      if ((mask0 < mask1)) {
        var xs = new $c_sjsr_WrappedVarArgs([key0, value0, key1, value1]);
        var array$2 = new $ac_O(xs.l());
        var iterator = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs));
        var i = 0;
        while ((iterator.bs > 0)) {
          array$2.a[i] = iterator.e();
          i = ((1 + i) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$2, new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash);
      } else {
        var xs$1 = new $c_sjsr_WrappedVarArgs([key1, value1, key0, value0]);
        var array$4 = new $ac_O(xs$1.l());
        var iterator$1 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$1));
        var i$1 = 0;
        while ((iterator$1.bs > 0)) {
          array$4.a[i$1] = iterator$1.e();
          i$1 = ((1 + i$1) | 0);
        }
        return new $c_sci_BitmapIndexedMapNode(dataMap, 0, array$4, new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash);
      }
    } else {
      var nodeMap = $m_sci_Node$().bZ(mask0);
      var node = this.kU(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
      var xs$2 = new $c_sjsr_WrappedVarArgs([node]);
      var array$6 = new $ac_O(xs$2.l());
      var iterator$2 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$2));
      var i$2 = 0;
      while ((iterator$2.bs > 0)) {
        array$6.a[i$2] = iterator$2.e();
        i$2 = ((1 + i$2) | 0);
      }
      return new $c_sci_BitmapIndexedMapNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().gN, node.K(), node.bS());
    }
  }
});
$p.hH = (function() {
  return (this.ay !== 0);
});
$p.hL = (function() {
  return $m_jl_Integer$().bR(this.ay);
});
$p.gs = (function() {
  return (this.ae !== 0);
});
$p.hN = (function() {
  return $m_jl_Integer$().bR(this.ae);
});
$p.dm = (function(bitpos) {
  return $m_jl_Integer$().bR((this.ae & ((bitpos - 1) | 0)));
});
$p.fG = (function(bitpos) {
  return $m_jl_Integer$().bR((this.ay & ((bitpos - 1) | 0)));
});
$p.q9 = (function(bitpos, newKey, newValue) {
  var dataIx = this.dm(bitpos);
  var idx = (dataIx << 1);
  var src = this.b2;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.s(0, dst, 0, length);
  dst.a[((1 + idx) | 0)] = newValue;
  return new $c_sci_BitmapIndexedMapNode(this.ae, this.ay, dst, this.ch, this.bt, this.c3);
});
$p.q7 = (function(bitpos, oldNode, newNode) {
  var idx = ((((this.b2.a.length - 1) | 0) - this.fG(bitpos)) | 0);
  var src = this.b2;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.s(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedMapNode(this.ae, this.ay, dst, this.ch, ((((this.bt - oldNode.K()) | 0) + newNode.K()) | 0), ((((this.c3 - oldNode.bS()) | 0) + newNode.bS()) | 0));
});
$p.q3 = (function(bitpos, key, originalHash, keyHash, value) {
  var dataIx = this.dm(bitpos);
  var idx = (dataIx << 1);
  var src = this.b2;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.s(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.s(idx, dst, destPos, length);
  var dstHashes = this.ob(this.ch, dataIx, originalHash);
  return new $c_sci_BitmapIndexedMapNode((this.ae | bitpos), this.ay, dst, dstHashes, ((1 + this.bt) | 0), ((this.c3 + keyHash) | 0));
});
$p.rh = (function(bitpos, keyHash, node) {
  var dataIx = this.dm(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.b2.a.length - 2) | 0) - this.fG(bitpos)) | 0);
  var src = this.b2;
  var dst = new $ac_O(((src.a.length - 1) | 0));
  src.s(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.s(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.a.length - idxNew) | 0) - 2) | 0);
  src.s(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.j2(this.ch, dataIx);
  this.ae = (this.ae ^ bitpos);
  this.ay = (this.ay | bitpos);
  this.b2 = dst;
  this.ch = dstHashes;
  this.bt = ((((this.bt - 1) | 0) + node.K()) | 0);
  this.c3 = ((((this.c3 - keyHash) | 0) + node.bS()) | 0);
  return this;
});
$p.q5 = (function(bitpos, keyHash, node) {
  var dataIx = this.dm(bitpos);
  var idxOld = (dataIx << 1);
  var idxNew = ((((this.b2.a.length - 2) | 0) - this.fG(bitpos)) | 0);
  var src = this.b2;
  var dst = new $ac_O(((src.a.length - 1) | 0));
  src.s(0, dst, 0, idxOld);
  var srcPos = ((2 + idxOld) | 0);
  var length = ((idxNew - idxOld) | 0);
  src.s(srcPos, dst, idxOld, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((2 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.a.length - idxNew) | 0) - 2) | 0);
  src.s(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.j2(this.ch, dataIx);
  return new $c_sci_BitmapIndexedMapNode((this.ae ^ bitpos), (this.ay | bitpos), dst, dstHashes, ((((this.bt - 1) | 0) + node.K()) | 0), ((((this.c3 - keyHash) | 0) + node.bS()) | 0));
});
$p.dn = (function(f) {
  var iN = $m_jl_Integer$().bR(this.ae);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.ca(this.dO(i$1), this.dq(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().bR(this.ay);
  var j = 0;
  while ((j < jN)) {
    this.dp(j).dn(f);
    j = ((1 + j) | 0);
  }
});
$p.kB = (function(f) {
  var i = 0;
  var iN = $m_jl_Integer$().bR(this.ae);
  while ((i < iN)) {
    f.nv(this.dO(i), this.dq(i), this.cn(i));
    i = ((1 + i) | 0);
  }
  var jN = $m_jl_Integer$().bR(this.ay);
  var j = 0;
  while ((j < jN)) {
    this.dp(j).kB(f);
    j = ((1 + j) | 0);
  }
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.c3 === that.c3) && (this.ay === that.ay)) && (this.ae === that.ae)) && (this.bt === that.bt)) && $m_ju_Arrays$().iR(this.ch, that.ch))) {
      var a1 = this.b2;
      var a2 = that.b2;
      var length = this.b2.a.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().n(a1.a[i], a2.a[i]);
          i = ((1 + i) | 0);
        }
        return isEqual;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.u = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.v = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.nD = (function() {
  var this$1 = this.b2;
  var contentClone = this$1.h();
  var contentLength = contentClone.a.length;
  var i$1 = ($m_jl_Integer$().bR(this.ae) << 1);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].nF();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedMapNode(this.ae, this.ay, contentClone, this.ch.h(), this.bt, this.c3);
});
$p.hG = (function(index) {
  return this.dp(index);
});
$p.oQ = (function(key, value, originalHash, hash, shift, replaceValue) {
  return this.oP(key, value, originalHash, hash, shift, replaceValue);
});
$p.nF = (function() {
  return this.nD();
});
function $isArrayOf_sci_BitmapIndexedMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cb)));
}
var $d_sci_BitmapIndexedMapNode = new $TypeData().i($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
  cb: 1,
  cm: 1,
  aE: 1
}));
/** @constructor */
function $c_sci_BitmapIndexedSetNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
  this.a6 = 0;
  this.aP = 0;
  this.bm = null;
  this.cx = null;
  this.bu = 0;
  this.ci = 0;
  this.a6 = dataMap;
  this.aP = nodeMap;
  this.bm = content;
  this.cx = originalHashes;
  this.bu = size;
  this.ci = cachedJavaKeySetHashCode;
}
$p = $c_sci_BitmapIndexedSetNode.prototype = new $h_sci_SetNode();
$p.constructor = $c_sci_BitmapIndexedSetNode;
/** @constructor */
function $h_sci_BitmapIndexedSetNode() {
}
$h_sci_BitmapIndexedSetNode.prototype = $p;
$p.K = (function() {
  return this.bu;
});
$p.bS = (function() {
  return this.ci;
});
$p.dR = (function(index) {
  return this.bm.a[index];
});
$p.cn = (function(index) {
  return this.cx.a[index];
});
$p.dP = (function(index) {
  return this.bm.a[((((this.bm.a.length - 1) | 0) - index) | 0)];
});
$p.hA = (function(element, originalHash, elementHash, shift) {
  var mask = $m_sci_Node$().cI(elementHash, shift);
  var bitpos = $m_sci_Node$().bZ(mask);
  if (((this.a6 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bM(this.a6, mask, bitpos);
    return ((this.cx.a[index] === originalHash) && $m_sr_BoxesRunTime$().n(element, this.dR(index)));
  }
  if (((this.aP & bitpos) !== 0)) {
    return this.dP($m_sci_Node$().bM(this.aP, mask, bitpos)).hA(element, originalHash, elementHash, ((5 + shift) | 0));
  }
  return false;
});
$p.oN = (function(element, originalHash, elementHash, shift) {
  var mask = $m_sci_Node$().cI(elementHash, shift);
  var bitpos = $m_sci_Node$().bZ(mask);
  if (((this.a6 & bitpos) !== 0)) {
    var index = $m_sci_Node$().bM(this.a6, mask, bitpos);
    var element0 = this.dR(index);
    if (Object.is(element0, element)) {
      return this;
    } else {
      var element0UnimprovedHash = this.cn(index);
      var element0Hash = $m_sc_Hashing$().bE(element0UnimprovedHash);
      if (((originalHash === element0UnimprovedHash) && $m_sr_BoxesRunTime$().n(element0, element))) {
        return this;
      } else {
        return this.q6(bitpos, element0Hash, this.kT(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0)));
      }
    }
  }
  if (((this.aP & bitpos) !== 0)) {
    var index$2 = $m_sci_Node$().bM(this.aP, mask, bitpos);
    var subNode = this.dP(index$2);
    var subNodeNew$2 = subNode.oO(element, originalHash, elementHash, ((5 + shift) | 0));
    if ((subNode === subNodeNew$2)) {
      return this;
    } else {
      return this.q8(bitpos, subNode, subNodeNew$2);
    }
  }
  return this.q4(bitpos, element, originalHash, elementHash);
});
$p.kT = (function(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, shift) {
  if ((shift >= 32)) {
    return new $c_sci_HashCollisionSetNode(originalKeyHash0, keyHash0, $m_sci_Vector$().iT(new $c_sjsr_WrappedVarArgs([key0, key1])));
  } else {
    var mask0 = $m_sci_Node$().cI(keyHash0, shift);
    var mask1 = $m_sci_Node$().cI(keyHash1, shift);
    if ((mask0 !== mask1)) {
      var dataMap = ($m_sci_Node$().bZ(mask0) | $m_sci_Node$().bZ(mask1));
      var newCachedHashCode = ((keyHash0 + keyHash1) | 0);
      if ((mask0 < mask1)) {
        var xs = new $c_sjsr_WrappedVarArgs([key0, key1]);
        var array$2 = new $ac_O(xs.l());
        var iterator = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs));
        var i = 0;
        while ((iterator.bs > 0)) {
          array$2.a[i] = iterator.e();
          i = ((1 + i) | 0);
        }
        return new $c_sci_BitmapIndexedSetNode(dataMap, 0, array$2, new $ac_I(new Int32Array([originalKeyHash0, originalKeyHash1])), 2, newCachedHashCode);
      } else {
        var xs$1 = new $c_sjsr_WrappedVarArgs([key1, key0]);
        var array$4 = new $ac_O(xs$1.l());
        var iterator$1 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$1));
        var i$1 = 0;
        while ((iterator$1.bs > 0)) {
          array$4.a[i$1] = iterator$1.e();
          i$1 = ((1 + i$1) | 0);
        }
        return new $c_sci_BitmapIndexedSetNode(dataMap, 0, array$4, new $ac_I(new Int32Array([originalKeyHash1, originalKeyHash0])), 2, newCachedHashCode);
      }
    } else {
      var nodeMap = $m_sci_Node$().bZ(mask0);
      var node = this.kT(key0, originalKeyHash0, keyHash0, key1, originalKeyHash1, keyHash1, ((5 + shift) | 0));
      var xs$2 = new $c_sjsr_WrappedVarArgs([node]);
      var array$6 = new $ac_O(xs$2.l());
      var iterator$2 = $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(xs$2));
      var i$2 = 0;
      while ((iterator$2.bs > 0)) {
        array$6.a[i$2] = iterator$2.e();
        i$2 = ((1 + i$2) | 0);
      }
      return new $c_sci_BitmapIndexedSetNode(0, nodeMap, array$6, $m_s_Array$EmptyArrays$().gN, node.K(), node.bS());
    }
  }
});
$p.gs = (function() {
  return (this.a6 !== 0);
});
$p.hN = (function() {
  return $m_jl_Integer$().bR(this.a6);
});
$p.hH = (function() {
  return (this.aP !== 0);
});
$p.hL = (function() {
  return $m_jl_Integer$().bR(this.aP);
});
$p.dm = (function(bitpos) {
  return $m_jl_Integer$().bR((this.a6 & ((bitpos - 1) | 0)));
});
$p.fG = (function(bitpos) {
  return $m_jl_Integer$().bR((this.aP & ((bitpos - 1) | 0)));
});
$p.q8 = (function(bitpos, oldNode, newNode) {
  var idx = ((((this.bm.a.length - 1) | 0) - this.fG(bitpos)) | 0);
  var src = this.bm;
  var dst = new $ac_O(src.a.length);
  var length = src.a.length;
  src.s(0, dst, 0, length);
  dst.a[idx] = newNode;
  return new $c_sci_BitmapIndexedSetNode(this.a6, this.aP, dst, this.cx, ((((this.bu - oldNode.K()) | 0) + newNode.K()) | 0), ((((this.ci - oldNode.bS()) | 0) + newNode.bS()) | 0));
});
$p.q4 = (function(bitpos, key, originalHash, elementHash) {
  var dataIx = this.dm(bitpos);
  var src = this.bm;
  var dst = new $ac_O(((1 + src.a.length) | 0));
  src.s(0, dst, 0, dataIx);
  dst.a[dataIx] = key;
  var destPos = ((1 + dataIx) | 0);
  var length = ((src.a.length - dataIx) | 0);
  src.s(dataIx, dst, destPos, length);
  var dstHashes = this.ob(this.cx, dataIx, originalHash);
  return new $c_sci_BitmapIndexedSetNode((this.a6 | bitpos), this.aP, dst, dstHashes, ((1 + this.bu) | 0), ((this.ci + elementHash) | 0));
});
$p.q6 = (function(bitpos, elementHash, node) {
  var dataIx = this.dm(bitpos);
  var idxNew = ((((this.bm.a.length - 1) | 0) - this.fG(bitpos)) | 0);
  var src = this.bm;
  var dst = new $ac_O(src.a.length);
  src.s(0, dst, 0, dataIx);
  var srcPos = ((1 + dataIx) | 0);
  var length = ((idxNew - dataIx) | 0);
  src.s(srcPos, dst, dataIx, length);
  dst.a[idxNew] = node;
  var srcPos$1 = ((1 + idxNew) | 0);
  var destPos = ((1 + idxNew) | 0);
  var length$1 = ((((src.a.length - idxNew) | 0) - 1) | 0);
  src.s(srcPos$1, dst, destPos, length$1);
  var dstHashes = this.j2(this.cx, dataIx);
  return new $c_sci_BitmapIndexedSetNode((this.a6 ^ bitpos), (this.aP | bitpos), dst, dstHashes, ((((this.bu - 1) | 0) + node.K()) | 0), ((((this.ci - elementHash) | 0) + node.bS()) | 0));
});
$p.ri = (function(bitpos, keyHash, node) {
  var dataIx = this.dm(bitpos);
  var idxNew = ((((this.bm.a.length - 1) | 0) - this.fG(bitpos)) | 0);
  var src = this.bm;
  var srcPos = ((1 + dataIx) | 0);
  var dest = this.bm;
  var length = ((idxNew - dataIx) | 0);
  src.s(srcPos, dest, dataIx, length);
  this.bm.a[idxNew] = node;
  this.a6 = (this.a6 ^ bitpos);
  this.aP = (this.aP | bitpos);
  this.cx = this.j2(this.cx, dataIx);
  this.bu = ((((this.bu - 1) | 0) + node.K()) | 0);
  this.ci = ((((this.ci - keyHash) | 0) + node.bS()) | 0);
  return this;
});
$p.l3 = (function(that, shift) {
  if ((this === that)) {
    return true;
  } else {
    if ((that instanceof $c_sci_HashCollisionSetNode)) {
      return false;
    }
    if ((that instanceof $c_sci_BitmapIndexedSetNode)) {
      var thisBitmap = (this.a6 | this.aP);
      var nodeBitmap = (that.a6 | that.aP);
      if (((thisBitmap | nodeBitmap) !== nodeBitmap)) {
        return false;
      }
      var bitmap = (thisBitmap & nodeBitmap);
      var i = bitmap;
      var bitsToSkip = ((32 - Math.clz32(((~i) & ((i - 1) | 0)))) | 0);
      var isValidSubset = true;
      while ((isValidSubset && (bitsToSkip < 32))) {
        var bitpos = $m_sci_Node$().bZ(bitsToSkip);
        if (((this.a6 & bitpos) !== 0)) {
          if (((that.a6 & bitpos) !== 0)) {
            isValidSubset = $m_sr_BoxesRunTime$().n(this.dR($m_sci_Node$().fE(this.a6, bitpos)), that.dR($m_sci_Node$().fE(that.a6, bitpos)));
          } else {
            var thisDataIndex = $m_sci_Node$().fE(this.a6, bitpos);
            var payload = this.dR(thisDataIndex);
            var subNode = that.dP($m_sci_Node$().fE(that.aP, bitpos));
            var elementUnimprovedHash = this.cn(thisDataIndex);
            var elementHash = $m_sc_Hashing$().bE(elementUnimprovedHash);
            isValidSubset = subNode.hA(payload, elementUnimprovedHash, elementHash, ((5 + shift) | 0));
          }
        } else if (((that.a6 & bitpos) === 0)) {
          var subNode0 = this.dP($m_sci_Node$().fE(this.aP, bitpos));
          var subNode1 = that.dP($m_sci_Node$().fE(that.aP, bitpos));
          isValidSubset = subNode0.l3(subNode1, ((5 + shift) | 0));
        } else {
          isValidSubset = false;
        }
        var newBitmap = (bitmap ^ bitpos);
        bitmap = newBitmap;
        bitsToSkip = ((32 - Math.clz32(((~newBitmap) & ((newBitmap - 1) | 0)))) | 0);
      }
      return isValidSubset;
    }
    throw new $c_s_MatchError(that);
  }
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_BitmapIndexedSetNode)) {
    if ((this === that)) {
      return true;
    } else if ((((((this.ci === that.ci) && (this.aP === that.aP)) && (this.a6 === that.a6)) && (this.bu === that.bu)) && $m_ju_Arrays$().iR(this.cx, that.cx))) {
      var a1 = this.bm;
      var a2 = that.bm;
      var length = this.bm.a.length;
      if ((a1 === a2)) {
        return true;
      } else {
        var isEqual = true;
        var i = 0;
        while ((isEqual && (i < length))) {
          isEqual = $m_sr_BoxesRunTime$().n(a1.a[i], a2.a[i]);
          i = ((1 + i) | 0);
        }
        return isEqual;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.u = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.v = (function() {
  var $x_2 = this.bu;
  var self = this.a6;
  var $x_1 = (self >>> 0.0).toString(16);
  var self$1 = this.aP;
  return (((((("BitmapIndexedSetNode(size=" + $x_2) + ", dataMap=") + $x_1) + ", nodeMap=") + (self$1 >>> 0.0).toString(16)) + ")");
});
$p.nE = (function() {
  var this$1 = this.bm;
  var contentClone = this$1.h();
  var contentLength = contentClone.a.length;
  var i$1 = $m_jl_Integer$().bR(this.a6);
  while ((i$1 < contentLength)) {
    contentClone.a[i$1] = contentClone.a[i$1].nG();
    i$1 = ((1 + i$1) | 0);
  }
  return new $c_sci_BitmapIndexedSetNode(this.a6, this.aP, contentClone, this.cx.h(), this.bu, this.ci);
});
$p.kA = (function(f) {
  var iN = $m_jl_Integer$().bR(this.a6);
  var i$1 = 0;
  while ((i$1 < iN)) {
    f.ca(this.dR(i$1), this.cn(i$1));
    i$1 = ((1 + i$1) | 0);
  }
  var jN = $m_jl_Integer$().bR(this.aP);
  var j = 0;
  while ((j < jN)) {
    this.dP(j).kA(f);
    j = ((1 + j) | 0);
  }
});
$p.hG = (function(index) {
  return this.dP(index);
});
$p.oO = (function(element, originalHash, hash, shift) {
  return this.oN(element, originalHash, hash, shift);
});
$p.nG = (function() {
  return this.nE();
});
function $isArrayOf_sci_BitmapIndexedSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cc)));
}
var $d_sci_BitmapIndexedSetNode = new $TypeData().i($c_sci_BitmapIndexedSetNode, "scala.collection.immutable.BitmapIndexedSetNode", ({
  cc: 1,
  cr: 1,
  aE: 1
}));
/** @constructor */
function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
  this.iq = 0;
  this.ey = 0;
  this.aQ = null;
  this.iq = originalHash;
  this.ey = hash;
  this.aQ = content;
  $m_s_Predef$().ok((this.aQ.l() >= 2));
}
$p = $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
$p.constructor = $c_sci_HashCollisionMapNode;
/** @constructor */
function $h_sci_HashCollisionMapNode() {
}
$h_sci_HashCollisionMapNode.prototype = $p;
$p.gu = (function(key) {
  var iter = this.aQ.c();
  var i = 0;
  while (iter.i()) {
    if ($m_sr_BoxesRunTime$().n(iter.e().aa(), key)) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.K = (function() {
  return this.aQ.l();
});
$p.kk = (function(key, originalHash, hash, shift) {
  var this$1 = this.iU(key, originalHash, hash, shift);
  return (this$1.g() ? $m_sc_Iterator$().G.e() : this$1.R());
});
$p.iU = (function(key, originalHash, hash, shift) {
  if ((this.ey === hash)) {
    var index = this.gu(key);
    return ((index >= 0) ? new $c_s_Some(this.aQ.r(index).ab()) : $m_s_None$());
  } else {
    return $m_s_None$();
  }
});
$p.kI = (function(key, originalHash, hash, shift, f) {
  if ((this.ey === hash)) {
    var x36 = this.gu(key);
    if ((x36 === (-1))) {
      return f.Q();
    }
    return this.aQ.r(x36).ab();
  } else {
    return f.Q();
  }
});
$p.kp = (function(key, originalHash, hash, shift) {
  return ((this.ey === hash) && (this.gu(key) >= 0));
});
$p.oQ = (function(key, value, originalHash, hash, shift, replaceValue) {
  var index = this.gu(key);
  return ((index >= 0) ? (replaceValue ? (Object.is(this.aQ.r(index).ab(), value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, this.aQ.ep(index, $ct_T2__O__O__(new $c_T2(), key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, this.aQ.dL($ct_T2__O__O__(new $c_T2(), key, value))));
});
$p.hH = (function() {
  return false;
});
$p.hL = (function() {
  return 0;
});
$p.dp = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.gs = (function() {
  return true;
});
$p.hN = (function() {
  return this.aQ.l();
});
$p.dO = (function(index) {
  return this.aQ.r(index).aa();
});
$p.dq = (function(index) {
  return this.aQ.r(index).ab();
});
$p.o7 = (function(index) {
  return this.aQ.r(index);
});
$p.cn = (function(index) {
  return this.iq;
});
$p.dn = (function(f) {
  this.aQ.dN(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.aa();
    var v = x$1$2.ab();
    return f.ca(k, v);
  })));
});
$p.kB = (function(f) {
  var iter = this.aQ.c();
  while (iter.i()) {
    var next = iter.e();
    f.nv(next.aa(), next.ab(), this.iq);
  }
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_HashCollisionMapNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.ey === that.ey) && (this.aQ.l() === that.aQ.l()))) {
      var iter = this.aQ.c();
      while (iter.i()) {
        var x47 = iter.e();
        x47.aa();
        x47.ab();
        var \u03b412$ = x47;
        var key$2 = \u03b412$.aa();
        var value$2 = \u03b412$.ab();
        var index = that.gu(key$2);
        if (((index < 0) || (!$m_sr_BoxesRunTime$().n(value$2, that.aQ.r(index).ab())))) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.u = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.v = (function() {
  var i = $systemIdentityHashCode(this);
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.bS = (function() {
  return Math.imul(this.aQ.l(), this.ey);
});
$p.hG = (function(index) {
  return this.dp(index);
});
$p.nF = (function() {
  return new $c_sci_HashCollisionMapNode(this.iq, this.ey, this.aQ);
});
function $isArrayOf_sci_HashCollisionMapNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cd)));
}
var $d_sci_HashCollisionMapNode = new $TypeData().i($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
  cd: 1,
  cm: 1,
  aE: 1
}));
/** @constructor */
function $c_sci_HashCollisionSetNode(originalHash, hash, content) {
  this.ir = 0;
  this.ga = 0;
  this.b3 = null;
  this.ir = originalHash;
  this.ga = hash;
  this.b3 = content;
  $m_s_Predef$().ok((this.b3.l() >= 2));
}
$p = $c_sci_HashCollisionSetNode.prototype = new $h_sci_SetNode();
$p.constructor = $c_sci_HashCollisionSetNode;
/** @constructor */
function $h_sci_HashCollisionSetNode() {
}
$h_sci_HashCollisionSetNode.prototype = $p;
$p.hA = (function(element, originalHash, hash, shift) {
  return ((this.ga === hash) && $f_sc_SeqOps__contains__O__Z(this.b3, element));
});
$p.oO = (function(element, originalHash, hash, shift) {
  return (this.hA(element, originalHash, hash, shift) ? this : new $c_sci_HashCollisionSetNode(originalHash, hash, this.b3.dL(element)));
});
$p.hH = (function() {
  return false;
});
$p.hL = (function() {
  return 0;
});
$p.dP = (function(index) {
  throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
});
$p.gs = (function() {
  return true;
});
$p.hN = (function() {
  return this.b3.l();
});
$p.dR = (function(index) {
  return this.b3.r(index);
});
$p.cn = (function(index) {
  return this.ir;
});
$p.K = (function() {
  return this.b3.l();
});
$p.bS = (function() {
  return Math.imul(this.b3.l(), this.ga);
});
$p.l3 = (function(that, shift) {
  if ((this === that)) {
    return true;
  } else if ((that instanceof $c_sci_HashCollisionSetNode)) {
    if ((this.b3.l() <= that.b3.l())) {
      var this$1 = this.b3;
      var \u03b41$ = that.b3;
      var res = true;
      var it = this$1.c();
      while ((res && it.i())) {
        res = $f_sc_SeqOps__contains__O__Z(\u03b41$, it.e());
      }
      return res;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_HashCollisionSetNode)) {
    if ((this === that)) {
      return true;
    } else if (((this.ga === that.ga) && (this.b3.l() === that.b3.l()))) {
      var this$3 = this.b3;
      var \u03b42$ = that.b3;
      var res = true;
      var it = this$3.c();
      while ((res && it.i())) {
        res = $f_sc_SeqOps__contains__O__Z(\u03b42$, it.e());
      }
      return res;
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.u = (function() {
  throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
});
$p.kA = (function(f) {
  var iter = this.b3.c();
  while (iter.i()) {
    var next = iter.e();
    f.ca(next, this.ir);
  }
});
$p.hG = (function(index) {
  return this.dP(index);
});
$p.nG = (function() {
  return new $c_sci_HashCollisionSetNode(this.ir, this.ga, this.b3);
});
function $isArrayOf_sci_HashCollisionSetNode(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ce)));
}
var $d_sci_HashCollisionSetNode = new $TypeData().i($c_sci_HashCollisionSetNode, "scala.collection.immutable.HashCollisionSetNode", ({
  ce: 1,
  cr: 1,
  aE: 1
}));
/** @constructor */
function $c_sci_HashMap$() {
  this.gb = null;
  $n_sci_HashMap$ = this;
  this.gb = new $c_sci_HashMap($m_sci_MapNode$().mB);
}
$p = $c_sci_HashMap$.prototype = new $h_O();
$p.constructor = $c_sci_HashMap$;
/** @constructor */
function $h_sci_HashMap$() {
}
$h_sci_HashMap$.prototype = $p;
$p.qF = (function(source) {
  return ((source instanceof $c_sci_HashMap) ? source : ((source.q() === 0) ? this.gb : new $c_sci_HashMapBuilder().kh(source).kW()));
});
$p.hB = (function() {
  return this.gb;
});
$p.a4 = (function(it) {
  return this.qF(it);
});
$p.V = (function() {
  return new $c_sci_HashMapBuilder();
});
var $d_sci_HashMap$ = new $TypeData().i($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
  fj: 1,
  a: 1,
  aB: 1
}));
var $n_sci_HashMap$;
function $m_sci_HashMap$() {
  if ((!$n_sci_HashMap$)) {
    $n_sci_HashMap$ = new $c_sci_HashMap$();
  }
  return $n_sci_HashMap$;
}
/** @constructor */
function $c_sci_HashSet$() {
  this.is = null;
  $n_sci_HashSet$ = this;
  this.is = new $c_sci_HashSet($m_sci_SetNode$().mG);
}
$p = $c_sci_HashSet$.prototype = new $h_O();
$p.constructor = $c_sci_HashSet$;
/** @constructor */
function $h_sci_HashSet$() {
}
$h_sci_HashSet$.prototype = $p;
$p.qG = (function(source) {
  return ((source instanceof $c_sci_HashSet) ? source : ((source.q() === 0) ? this.is : new $c_sci_HashSetBuilder().ki(source).kX()));
});
$p.a4 = (function(source) {
  return this.qG(source);
});
$p.V = (function() {
  return new $c_sci_HashSetBuilder();
});
var $d_sci_HashSet$ = new $TypeData().i($c_sci_HashSet$, "scala.collection.immutable.HashSet$", ({
  fn: 1,
  a: 1,
  C: 1
}));
var $n_sci_HashSet$;
function $m_sci_HashSet$() {
  if ((!$n_sci_HashSet$)) {
    $n_sci_HashSet$ = new $c_sci_HashSet$();
  }
  return $n_sci_HashSet$;
}
/** @constructor */
function $c_sci_Map$() {
}
$p = $c_sci_Map$.prototype = new $h_O();
$p.constructor = $c_sci_Map$;
/** @constructor */
function $h_sci_Map$() {
}
$h_sci_Map$.prototype = $p;
$p.hE = (function(it) {
  if ($is_sci_Iterable(it)) {
    if (it.g()) {
      return $m_sci_Map$EmptyMap$();
    }
  }
  if ((it instanceof $c_sci_HashMap)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map1)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map2)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map3)) {
    return it;
  }
  if ((it instanceof $c_sci_Map$Map4)) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  if (false) {
    return it;
  }
  return new $c_sci_MapBuilderImpl().nk(it).ol();
});
$p.V = (function() {
  return new $c_sci_MapBuilderImpl();
});
$p.hB = (function() {
  return $m_sci_Map$EmptyMap$();
});
$p.a4 = (function(it) {
  return this.hE(it);
});
var $d_sci_Map$ = new $TypeData().i($c_sci_Map$, "scala.collection.immutable.Map$", ({
  fG: 1,
  a: 1,
  aB: 1
}));
var $n_sci_Map$;
function $m_sci_Map$() {
  if ((!$n_sci_Map$)) {
    $n_sci_Map$ = new $c_sci_Map$();
  }
  return $n_sci_Map$;
}
/** @constructor */
function $c_sci_Set$() {
}
$p = $c_sci_Set$.prototype = new $h_O();
$p.constructor = $c_sci_Set$;
/** @constructor */
function $h_sci_Set$() {
}
$h_sci_Set$.prototype = $p;
$p.qI = (function(it) {
  return ((it.q() === 0) ? $m_sci_Set$EmptySet$() : ((it instanceof $c_sci_HashSet) ? it : (false ? it : ((it instanceof $c_sci_Set$Set1) ? it : ((it instanceof $c_sci_Set$Set2) ? it : ((it instanceof $c_sci_Set$Set3) ? it : ((it instanceof $c_sci_Set$Set4) ? it : (false ? it : (false ? it : new $c_sci_SetBuilderImpl().nl(it).om())))))))));
});
$p.V = (function() {
  return new $c_sci_SetBuilderImpl();
});
$p.a4 = (function(source) {
  return this.qI(source);
});
var $d_sci_Set$ = new $TypeData().i($c_sci_Set$, "scala.collection.immutable.Set$", ({
  g1: 1,
  a: 1,
  C: 1
}));
var $n_sci_Set$;
function $m_sci_Set$() {
  if ((!$n_sci_Set$)) {
    $n_sci_Set$ = new $c_sci_Set$();
  }
  return $n_sci_Set$;
}
/** @constructor */
function $c_sci_WrappedString$() {
}
$p = $c_sci_WrappedString$.prototype = new $h_O();
$p.constructor = $c_sci_WrappedString$;
/** @constructor */
function $h_sci_WrappedString$() {
}
$h_sci_WrappedString$.prototype = $p;
$p.o3 = (function(it) {
  var b = this.V();
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(b, it, 0);
  b.aU(it);
  return b.aN();
});
$p.V = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => new $c_sci_WrappedString(x$2))), $ct_scm_StringBuilder__(new $c_scm_StringBuilder()));
});
var $d_sci_WrappedString$ = new $TypeData().i($c_sci_WrappedString$, "scala.collection.immutable.WrappedString$", ({
  go: 1,
  eI: 1,
  f6: 1
}));
var $n_sci_WrappedString$;
function $m_sci_WrappedString$() {
  if ((!$n_sci_WrappedString$)) {
    $n_sci_WrappedString$ = new $c_sci_WrappedString$();
  }
  return $n_sci_WrappedString$;
}
function $f_scm_Builder__sizeHint__sc_IterableOnce__I__V($thiz, coll, delta) {
  var x1 = coll.q();
  if ((x1 === (-1))) {
    return (void 0);
  }
  var that = ((x1 + delta) | 0);
  $thiz.aO(((that < 0) ? 0 : that));
}
/** @constructor */
function $c_scm_HashMap$() {
}
$p = $c_scm_HashMap$.prototype = new $h_O();
$p.constructor = $c_scm_HashMap$;
/** @constructor */
function $h_scm_HashMap$() {
}
$h_scm_HashMap$.prototype = $p;
$p.qJ = (function(it) {
  var k = it.q();
  return $ct_scm_HashMap__I__D__(new $c_scm_HashMap(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).no(it);
});
$p.V = (function() {
  return new $c_scm_HashMap$$anon$6(16, 0.75);
});
$p.hB = (function() {
  return $ct_scm_HashMap__(new $c_scm_HashMap());
});
$p.a4 = (function(it) {
  return this.qJ(it);
});
var $d_scm_HashMap$ = new $TypeData().i($c_scm_HashMap$, "scala.collection.mutable.HashMap$", ({
  gD: 1,
  a: 1,
  aB: 1
}));
var $n_scm_HashMap$;
function $m_scm_HashMap$() {
  if ((!$n_scm_HashMap$)) {
    $n_scm_HashMap$ = new $c_scm_HashMap$();
  }
  return $n_scm_HashMap$;
}
/** @constructor */
function $c_scm_HashSet$() {
}
$p = $c_scm_HashSet$.prototype = new $h_O();
$p.constructor = $c_scm_HashSet$;
/** @constructor */
function $h_scm_HashSet$() {
}
$h_scm_HashSet$.prototype = $p;
$p.qK = (function(it) {
  var k = it.q();
  return $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), ((k > 0) ? $doubleToInt((((1 + k) | 0) / 0.75)) : 16), 0.75).np(it);
});
$p.V = (function() {
  return new $c_scm_HashSet$$anon$4(16, 0.75);
});
$p.a4 = (function(source) {
  return this.qK(source);
});
var $d_scm_HashSet$ = new $TypeData().i($c_scm_HashSet$, "scala.collection.mutable.HashSet$", ({
  gJ: 1,
  a: 1,
  C: 1
}));
var $n_scm_HashSet$;
function $m_scm_HashSet$() {
  if ((!$n_scm_HashSet$)) {
    $n_scm_HashSet$ = new $c_scm_HashSet$();
  }
  return $n_scm_HashSet$;
}
/** @constructor */
function $c_s_concurrent_BatchingExecutor$SyncBatch(outer, runnable) {
  this.hf = null;
  this.hg = null;
  this.eT = 0;
  this.p6 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.p6 = outer;
  $ct_s_concurrent_BatchingExecutor$AbstractBatch__jl_Runnable__Ajl_Runnable__I__(this, runnable, $m_s_concurrent_BatchingExecutorStatics$().mV, 1);
}
$p = $c_s_concurrent_BatchingExecutor$SyncBatch.prototype = new $h_s_concurrent_BatchingExecutor$AbstractBatch();
$p.constructor = $c_s_concurrent_BatchingExecutor$SyncBatch;
/** @constructor */
function $h_s_concurrent_BatchingExecutor$SyncBatch() {
}
$h_s_concurrent_BatchingExecutor$SyncBatch.prototype = $p;
$p.f1 = (function() {
  while (true) {
    try {
      this.rG(1024);
    } catch (e) {
      var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
      if (false) {
        $m_s_concurrent_ExecutionContext$().gk.d(e$2);
      } else {
        matchResult2: {
          if ($m_s_util_control_NonFatal$().iQ(e$2)) {
            $m_s_concurrent_ExecutionContext$().gk.d(e$2);
            break matchResult2;
          }
          throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.d3 : e$2);
        }
      }
    }
    if ((this.eT > 0)) {
    } else {
      return (void 0);
    }
  }
});
function $isArrayOf_s_concurrent_BatchingExecutor$SyncBatch(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cL)));
}
var $d_s_concurrent_BatchingExecutor$SyncBatch = new $TypeData().i($c_s_concurrent_BatchingExecutor$SyncBatch, "scala.concurrent.BatchingExecutor$SyncBatch", ({
  cL: 1,
  h2: 1,
  aF: 1
}));
/** @constructor */
function $c_s_concurrent_Future$never$() {
}
$p = $c_s_concurrent_Future$never$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_Future$never$;
/** @constructor */
function $h_s_concurrent_Future$never$() {
}
$h_s_concurrent_Future$never$.prototype = $p;
$p.j0 = (function(f, executor) {
});
$p.oS = (function() {
  return $m_s_None$();
});
$p.nX = (function(f, executor) {
});
$p.hJ = (function(f, executor) {
  return this;
});
$p.nW = (function(f, executor) {
  return this;
});
$p.oi = (function(pf, executor) {
  return this;
});
$p.v = (function() {
  return "Future(<never>)";
});
var $d_s_concurrent_Future$never$ = new $TypeData().i($c_s_concurrent_Future$never$, "scala.concurrent.Future$never$", ({
  hc: 1,
  b6: 1,
  b9: 1
}));
var $n_s_concurrent_Future$never$;
function $m_s_concurrent_Future$never$() {
  if ((!$n_s_concurrent_Future$never$)) {
    $n_s_concurrent_Future$never$ = new $c_s_concurrent_Future$never$();
  }
  return $n_s_concurrent_Future$never$;
}
/** @constructor */
function $c_s_concurrent_impl_Promise$Link(to) {
  this.J = null;
  $ct_ju_concurrent_atomic_AtomicReference__O__(this, to);
}
$p = $c_s_concurrent_impl_Promise$Link.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_impl_Promise$Link;
/** @constructor */
function $h_s_concurrent_impl_Promise$Link() {
}
$h_s_concurrent_impl_Promise$Link.prototype = $p;
$p.gx = (function(owner) {
  var c = this.J;
  var target$tailLocal1 = c;
  var current$tailLocal1 = c;
  while (true) {
    var value = target$tailLocal1.J;
    if ($is_s_concurrent_impl_Promise$Callbacks(value)) {
      if (this.eZ(current$tailLocal1, target$tailLocal1)) {
        return target$tailLocal1;
      } else {
        current$tailLocal1 = this.J;
      }
    } else if ((value instanceof $c_s_concurrent_impl_Promise$Link)) {
      target$tailLocal1 = value.J;
    } else {
      owner.s7(value);
      return owner;
    }
  }
});
function $isArrayOf_s_concurrent_impl_Promise$Link(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cQ)));
}
var $d_s_concurrent_impl_Promise$Link = new $TypeData().i($c_s_concurrent_impl_Promise$Link, "scala.concurrent.impl.Promise$Link", ({
  cQ: 1,
  aH: 1,
  a: 1
}));
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.hE)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.n8 = null;
  this.n8 = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.Q = (function() {
  return (0, this.n8)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  i4: 1,
  i3: 1,
  aT: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.n9 = null;
  this.n9 = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.d = (function(x0) {
  return (0, this.n9)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  i5: 1,
  cX: 1,
  h: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.na = null;
  this.na = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.ca = (function(x0, x1) {
  return (0, this.na)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  i6: 1,
  cY: 1,
  aU: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.nb = null;
  this.nb = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.nv = (function(x0, x1, x2) {
  return (0, this.nb)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  i8: 1,
  i7: 1,
  eo: 1
}));
/** @constructor */
function $c_sr_AbstractPartialFunction() {
}
$p = $c_sr_AbstractPartialFunction.prototype = new $h_O();
$p.constructor = $c_sr_AbstractPartialFunction;
/** @constructor */
function $h_sr_AbstractPartialFunction() {
}
$h_sr_AbstractPartialFunction.prototype = $p;
$p.v = (function() {
  return "<function1>";
});
$p.d = (function(x) {
  return this.bK(x, $m_s_PartialFunction$().m6);
});
$p.eY = (function(x) {
  return (this.d(x) | 0);
});
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  id: 1,
  v: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$p = $c_sjs_js_Any$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $p;
$p.qL = (function(f) {
  return (() => f.Q());
});
$p.kH = (function(f) {
  return ((arg1$2) => f.d(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  ir: 1,
  iu: 1,
  iv: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
function $isArrayOf_s_util_control_ControlThrowable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iO)));
}
/** @constructor */
function $c_Ldotty_tools_scaladoc_InkuireMatch(prettifiedSignature, functionName, packageLocation, pageLocation, entryType, mq) {
  this.fP = null;
  this.fN = null;
  this.fO = null;
  this.eq = null;
  this.gD = null;
  this.f4 = 0;
  this.fP = prettifiedSignature;
  this.fN = functionName;
  this.fO = packageLocation;
  this.eq = pageLocation;
  this.gD = entryType;
  this.f4 = mq;
}
$p = $c_Ldotty_tools_scaladoc_InkuireMatch.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_InkuireMatch;
/** @constructor */
function $h_Ldotty_tools_scaladoc_InkuireMatch() {
}
$h_Ldotty_tools_scaladoc_InkuireMatch.prototype = $p;
$p.ce = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().x(acc, (-460577480));
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.fP));
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.fN));
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.fO));
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.eq));
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.gD));
  acc = $m_sr_Statics$().x(acc, this.f4);
  return $m_sr_Statics$().bc(acc, 6);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ldotty_tools_scaladoc_InkuireMatch) && ((((((this.f4 === x$0.f4) && (this.fP === x$0.fP)) && (this.fN === x$0.fN)) && (this.fO === x$0.fO)) && (this.eq === x$0.eq)) && (this.gD === x$0.gD))));
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().dK(this);
});
$p.bF = (function() {
  return 6;
});
$p.bH = (function() {
  return "InkuireMatch";
});
$p.bG = (function(n) {
  switch (n) {
    case 0: {
      return this.fP;
      break;
    }
    case 1: {
      return this.fN;
      break;
    }
    case 2: {
      return this.fO;
      break;
    }
    case 3: {
      return this.eq;
      break;
    }
    case 4: {
      return this.gD;
      break;
    }
    case 5: {
      return this.f4;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Ldotty_tools_scaladoc_InkuireMatch(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bd)));
}
var $d_Ldotty_tools_scaladoc_InkuireMatch = new $TypeData().i($c_Ldotty_tools_scaladoc_InkuireMatch, "dotty.tools.scaladoc.InkuireMatch", ({
  bd: 1,
  d: 1,
  J: 1,
  a: 1
}));
/** @constructor */
function $c_Ldotty_tools_scaladoc_MatchResult(score, pageEntry, indices) {
  this.cK = 0;
  this.bV = null;
  this.dw = null;
  this.cK = score;
  this.bV = pageEntry;
  this.dw = indices;
}
$p = $c_Ldotty_tools_scaladoc_MatchResult.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_MatchResult;
/** @constructor */
function $h_Ldotty_tools_scaladoc_MatchResult() {
}
$h_Ldotty_tools_scaladoc_MatchResult.prototype = $p;
$p.ce = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().x(acc, (-1024520670));
  acc = $m_sr_Statics$().x(acc, this.cK);
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.bV));
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.dw));
  return $m_sr_Statics$().bc(acc, 3);
});
$p.p = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ldotty_tools_scaladoc_MatchResult)) {
    if ((this.cK === x$0.cK)) {
      var x = this.bV;
      var x$2 = x$0.bV;
      var $x_1 = ((x === null) ? (x$2 === null) : x.p(x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.dw;
      var x$4 = x$0.dw;
      return ((x$3 === null) ? (x$4 === null) : x$3.p(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().dK(this);
});
$p.bF = (function() {
  return 3;
});
$p.bH = (function() {
  return "MatchResult";
});
$p.bG = (function(n) {
  switch (n) {
    case 0: {
      return this.cK;
      break;
    }
    case 1: {
      return this.bV;
      break;
    }
    case 2: {
      return this.dw;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Ldotty_tools_scaladoc_MatchResult(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.be)));
}
var $d_Ldotty_tools_scaladoc_MatchResult = new $TypeData().i($c_Ldotty_tools_scaladoc_MatchResult, "dotty.tools.scaladoc.MatchResult", ({
  be: 1,
  d: 1,
  J: 1,
  a: 1
}));
/** @constructor */
function $c_Ldotty_tools_scaladoc_PageEntry(fullName, description, extraDescription, extensionTarget, location, isLocationExternal, shortName, kind, tokens) {
  this.fR = null;
  this.fQ = null;
  this.f6 = null;
  this.f5 = null;
  this.f7 = null;
  this.fS = false;
  this.er = null;
  this.dx = null;
  this.fT = null;
  this.fR = fullName;
  this.fQ = description;
  this.f6 = extraDescription;
  this.f5 = extensionTarget;
  this.f7 = location;
  this.fS = isLocationExternal;
  this.er = shortName;
  this.dx = kind;
  this.fT = tokens;
}
$p = $c_Ldotty_tools_scaladoc_PageEntry.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_PageEntry;
/** @constructor */
function $h_Ldotty_tools_scaladoc_PageEntry() {
}
$h_Ldotty_tools_scaladoc_PageEntry.prototype = $p;
$p.ce = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().x(acc, (-1431300349));
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.fR));
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.fQ));
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.f6));
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.f5));
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.f7));
  acc = $m_sr_Statics$().x(acc, (this.fS ? 1231 : 1237));
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.er));
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.dx));
  acc = $m_sr_Statics$().x(acc, $m_sr_Statics$().y(this.fT));
  return $m_sr_Statics$().bc(acc, 9);
});
$p.p = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ldotty_tools_scaladoc_PageEntry)) {
    if (((((((((this.fS === x$0.fS) && (this.fR === x$0.fR)) && (this.fQ === x$0.fQ)) && (this.f6 === x$0.f6)) && (this.f5 === x$0.f5)) && (this.f7 === x$0.f7)) && (this.er === x$0.er)) && (this.dx === x$0.dx))) {
      var x = this.fT;
      var x$2 = x$0.fT;
      return ((x === null) ? (x$2 === null) : x.p(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().dK(this);
});
$p.bF = (function() {
  return 9;
});
$p.bH = (function() {
  return "PageEntry";
});
$p.bG = (function(n) {
  switch (n) {
    case 0: {
      return this.fR;
      break;
    }
    case 1: {
      return this.fQ;
      break;
    }
    case 2: {
      return this.f6;
      break;
    }
    case 3: {
      return this.f5;
      break;
    }
    case 4: {
      return this.f7;
      break;
    }
    case 5: {
      return this.fS;
      break;
    }
    case 6: {
      return this.er;
      break;
    }
    case 7: {
      return this.dx;
      break;
    }
    case 8: {
      return this.fT;
      break;
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
    }
  }
});
function $isArrayOf_Ldotty_tools_scaladoc_PageEntry(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bg)));
}
var $d_Ldotty_tools_scaladoc_PageEntry = new $TypeData().i($c_Ldotty_tools_scaladoc_PageEntry, "dotty.tools.scaladoc.PageEntry", ({
  bg: 1,
  d: 1,
  J: 1,
  a: 1
}));
/** @constructor */
function $c_Ldotty_tools_scaladoc_utils_HTML$Attr(name) {
  this.t = null;
  this.t = name;
}
$p = $c_Ldotty_tools_scaladoc_utils_HTML$Attr.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_utils_HTML$Attr;
/** @constructor */
function $h_Ldotty_tools_scaladoc_utils_HTML$Attr() {
}
$h_Ldotty_tools_scaladoc_utils_HTML$Attr.prototype = $p;
$p.ce = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().ds(this, (-195397372), true);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ldotty_tools_scaladoc_utils_HTML$Attr) && (this.t === x$0.t)));
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().dK(this);
});
$p.bF = (function() {
  return 1;
});
$p.bH = (function() {
  return "Attr";
});
$p.bG = (function(n) {
  if ((n === 0)) {
    return this.t;
  }
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
function $isArrayOf_Ldotty_tools_scaladoc_utils_HTML$Attr(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bi)));
}
var $d_Ldotty_tools_scaladoc_utils_HTML$Attr = new $TypeData().i($c_Ldotty_tools_scaladoc_utils_HTML$Attr, "dotty.tools.scaladoc.utils.HTML$Attr", ({
  bi: 1,
  d: 1,
  J: 1,
  a: 1
}));
function $p_Ldotty_tools_scaladoc_utils_HTML$Tag__textNode__T__Lorg_scalajs_dom_Text($thiz, s) {
  return document.createTextNode(s);
}
function $p_Ldotty_tools_scaladoc_utils_HTML$Tag__unpackTags$1__Lorg_scalajs_dom_HTMLElement__sci_Seq__V($thiz, elem$1, tags) {
  tags.dN(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    if ((!(!(x$1$2 instanceof HTMLElement)))) {
      return elem$1.appendChild(x$1$2);
    }
    if (((typeof x$1$2) === "string")) {
      return elem$1.appendChild($p_Ldotty_tools_scaladoc_utils_HTML$Tag__textNode__T__Lorg_scalajs_dom_Text($thiz, x$1$2));
    }
    if ($is_sci_Seq(x$1$2)) {
      $p_Ldotty_tools_scaladoc_utils_HTML$Tag__unpackTags$1__Lorg_scalajs_dom_HTMLElement__sci_Seq__V($thiz, elem$1, x$1$2);
      return (void 0);
    }
    throw new $c_s_MatchError(x$1$2);
  })));
}
function $p_Ldotty_tools_scaladoc_utils_HTML$Tag__unpackAttributes$1__Lorg_scalajs_dom_HTMLElement__sci_Seq__V($thiz, elem$3, attrs) {
  attrs.dN(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$3) => {
    matchResult5: {
      if ((x$1$3 instanceof $c_T2)) {
        var x18 = x$1$3.aa();
        var x19 = x$1$3.ab();
        if ((x18 === "id")) {
          elem$3.id = x19;
          break matchResult5;
        }
        if ((x18 === "class")) {
          var xs = $f_T__split__T__I__AT(x19, "\\s+", 0);
          var f = ((cls$3) => {
            elem$3.classList.add(cls$3);
          });
          var len = xs.a.length;
          var i = 0;
          if ((xs !== null)) {
            while ((i < len)) {
              var x0 = xs.a[i];
              f(x0);
              i = ((1 + i) | 0);
            }
            break matchResult5;
          } else if ((xs instanceof $ac_I)) {
            while ((i < len)) {
              var x0$1 = xs.a[i];
              f(x0$1);
              i = ((1 + i) | 0);
            }
            break matchResult5;
          } else if ((xs instanceof $ac_D)) {
            while ((i < len)) {
              var x0$2 = xs.a[i];
              f(x0$2);
              i = ((1 + i) | 0);
            }
            break matchResult5;
          } else if ((xs instanceof $ac_J)) {
            while ((i < len)) {
              var $x_1 = xs.a;
              var $x_2 = (i << 1);
              var x0$3_$_lo = $x_1[$x_2];
              var x0$3_$_hi = $x_1[(($x_2 + 1) | 0)];
              f($bL(x0$3_$_lo, x0$3_$_hi));
              i = ((1 + i) | 0);
            }
            break matchResult5;
          } else if ((xs instanceof $ac_F)) {
            while ((i < len)) {
              var x0$4 = xs.a[i];
              f(x0$4);
              i = ((1 + i) | 0);
            }
            break matchResult5;
          } else if ((xs instanceof $ac_C)) {
            while ((i < len)) {
              var x0$5 = xs.a[i];
              f($bC(x0$5));
              i = ((1 + i) | 0);
            }
            break matchResult5;
          } else if ((xs instanceof $ac_B)) {
            while ((i < len)) {
              var x0$6 = xs.a[i];
              f(x0$6);
              i = ((1 + i) | 0);
            }
            break matchResult5;
          } else if ((xs instanceof $ac_S)) {
            while ((i < len)) {
              var x0$7 = xs.a[i];
              f(x0$7);
              i = ((1 + i) | 0);
            }
            break matchResult5;
          } else if ((xs instanceof $ac_Z)) {
            while ((i < len)) {
              var x0$8 = xs.a[i];
              f(x0$8);
              i = ((1 + i) | 0);
            }
            break matchResult5;
          } else {
            throw new $c_s_MatchError(xs);
          }
        }
        elem$3.setAttribute(x18, x19);
        break matchResult5;
      }
      if ($is_sci_Seq(x$1$3)) {
        $p_Ldotty_tools_scaladoc_utils_HTML$Tag__unpackAttributes$1__Lorg_scalajs_dom_HTMLElement__sci_Seq__V($thiz, elem$3, x$1$3);
        break matchResult5;
      }
      throw new $c_s_MatchError(x$1$3);
    }
  })));
}
/** @constructor */
function $c_Ldotty_tools_scaladoc_utils_HTML$Tag(elemFactory) {
  this.gG = null;
  this.gG = elemFactory;
}
$p = $c_Ldotty_tools_scaladoc_utils_HTML$Tag.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_utils_HTML$Tag;
/** @constructor */
function $h_Ldotty_tools_scaladoc_utils_HTML$Tag() {
}
$h_Ldotty_tools_scaladoc_utils_HTML$Tag.prototype = $p;
$p.ce = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().ds(this, 1955036683, true);
});
$p.p = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ldotty_tools_scaladoc_utils_HTML$Tag)) {
    var x = this.gG;
    var x$2 = x$0.gG;
    return ((x === null) ? (x$2 === null) : (x === x$2));
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().dK(this);
});
$p.bF = (function() {
  return 1;
});
$p.bH = (function() {
  return "Tag";
});
$p.bG = (function(n) {
  if ((n === 0)) {
    return this.gG;
  }
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.a1 = (function(tags) {
  return this.D(new $c_sjsr_WrappedVarArgs([]), tags);
});
$p.cm = (function(first, rest) {
  return this.D(rest.bq(first), new $c_sjsr_WrappedVarArgs([]));
});
$p.D = (function(attrs, tags) {
  var elem = this.gG.Q();
  $p_Ldotty_tools_scaladoc_utils_HTML$Tag__unpackTags$1__Lorg_scalajs_dom_HTMLElement__sci_Seq__V(this, elem, tags);
  $p_Ldotty_tools_scaladoc_utils_HTML$Tag__unpackAttributes$1__Lorg_scalajs_dom_HTMLElement__sci_Seq__V(this, elem, attrs);
  return elem;
});
function $isArrayOf_Ldotty_tools_scaladoc_utils_HTML$Tag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bj)));
}
var $d_Ldotty_tools_scaladoc_utils_HTML$Tag = new $TypeData().i($c_Ldotty_tools_scaladoc_utils_HTML$Tag, "dotty.tools.scaladoc.utils.HTML$Tag", ({
  bj: 1,
  d: 1,
  J: 1,
  a: 1
}));
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$p = $c_Ljava_io_OutputStream.prototype = new $h_O();
$p.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $p;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  dp: 1,
  aQ: 1,
  v: 1,
  a: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Boolean__compareTo__O__I($thiz, o) {
  return (($thiz === o) ? 0 : ($thiz ? 1 : (-1)));
}
function $isArrayOf_jl_Boolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bp)));
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  bp: 1,
  a: 1,
  H: 1,
  a3: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return ((that instanceof $Char) && ($thiz === that.c));
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $f_jl_Character__compareTo__O__I($thiz, o) {
  return (($thiz - o.c) | 0);
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.br)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  br: 1,
  a: 1,
  H: 1,
  a3: 1
}), ((x) => (x instanceof $Char)));
function $isArrayOf_jl_InterruptedException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dx)));
}
function $isArrayOf_jl_LinkageError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dA)));
}
function $ct_jl_RuntimeException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
class $c_jl_RuntimeException extends $c_jl_Exception {
}
var $d_jl_RuntimeException = new $TypeData().i($c_jl_RuntimeException, "java.lang.RuntimeException", ({
  K: 1,
  I: 1,
  v: 1,
  a: 1
}));
function $ct_jl_StringBuilder__($thiz) {
  $thiz.w = "";
  return $thiz;
}
function $ct_jl_StringBuilder__T__($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  $thiz.w = str;
  return $thiz;
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.w = null;
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.ns = (function(str) {
  var str$1 = $m_jl_String$().rk(str, 0, str.a.length);
  this.w = (("" + this.w) + str$1);
  return this;
});
$p.v = (function() {
  return this.w;
});
$p.l = (function() {
  return this.w.length;
});
$p.nz = (function(index) {
  return this.w.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  dI: 1,
  aP: 1,
  bn: 1,
  a: 1
}));
function $isArrayOf_jl_ThreadDeath(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dM)));
}
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
function $isArrayOf_jl_VirtualMachineError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bB)));
}
class $c_ju_concurrent_ExecutionException extends $c_jl_Exception {
  constructor(message, cause) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
  }
}
var $d_ju_concurrent_ExecutionException = new $TypeData().i($c_ju_concurrent_ExecutionException, "java.util.concurrent.ExecutionException", ({
  dV: 1,
  I: 1,
  v: 1,
  a: 1
}));
/** @constructor */
function $c_ju_concurrent_TimeUnit() {
  this.dy = null;
  this.d9 = 0;
}
$p = $c_ju_concurrent_TimeUnit.prototype = new $h_jl_Enum();
$p.constructor = $c_ju_concurrent_TimeUnit;
/** @constructor */
function $h_ju_concurrent_TimeUnit() {
}
$h_ju_concurrent_TimeUnit.prototype = $p;
/** @constructor */
function $c_ju_internal_GenericArrayOps$ByteArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$ByteArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$ByteArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$ByteArrayOps$() {
}
$h_ju_internal_GenericArrayOps$ByteArrayOps$.prototype = $p;
$p.av = (function(o1, o2) {
  return (((o1 | 0) - (o2 | 0)) | 0);
});
$p.du = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.c0 = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ByteArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ByteArrayOps$, "java.util.internal.GenericArrayOps$ByteArrayOps$", ({
  e4: 1,
  ap: 1,
  az: 1,
  P: 1
}));
var $n_ju_internal_GenericArrayOps$ByteArrayOps$;
function $m_ju_internal_GenericArrayOps$ByteArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$ByteArrayOps$)) {
    $n_ju_internal_GenericArrayOps$ByteArrayOps$ = new $c_ju_internal_GenericArrayOps$ByteArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$ByteArrayOps$;
}
/** @constructor */
function $c_ju_internal_GenericArrayOps$CharArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$CharArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$CharArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$CharArrayOps$() {
}
$h_ju_internal_GenericArrayOps$CharArrayOps$.prototype = $p;
$p.av = (function(o1, o2) {
  return (($uC(o1) - $uC(o2)) | 0);
});
$p.du = (function(a, i, v) {
  var v$1 = $uC(v);
  a.a[i] = v$1;
});
$p.c0 = (function(a, i) {
  return $bC(a.a[i]);
});
var $d_ju_internal_GenericArrayOps$CharArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$CharArrayOps$, "java.util.internal.GenericArrayOps$CharArrayOps$", ({
  e5: 1,
  ap: 1,
  az: 1,
  P: 1
}));
var $n_ju_internal_GenericArrayOps$CharArrayOps$;
function $m_ju_internal_GenericArrayOps$CharArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$CharArrayOps$)) {
    $n_ju_internal_GenericArrayOps$CharArrayOps$ = new $c_ju_internal_GenericArrayOps$CharArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$CharArrayOps$;
}
/** @constructor */
function $c_ju_internal_GenericArrayOps$IntArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$IntArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$IntArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$IntArrayOps$() {
}
$h_ju_internal_GenericArrayOps$IntArrayOps$.prototype = $p;
$p.av = (function(o1, o2) {
  var x = (o1 | 0);
  var y = (o2 | 0);
  return ((x === y) ? 0 : ((x < y) ? (-1) : 1));
});
$p.du = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.c0 = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$IntArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$IntArrayOps$, "java.util.internal.GenericArrayOps$IntArrayOps$", ({
  e6: 1,
  ap: 1,
  az: 1,
  P: 1
}));
var $n_ju_internal_GenericArrayOps$IntArrayOps$;
function $m_ju_internal_GenericArrayOps$IntArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$IntArrayOps$)) {
    $n_ju_internal_GenericArrayOps$IntArrayOps$ = new $c_ju_internal_GenericArrayOps$IntArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$IntArrayOps$;
}
/** @constructor */
function $c_ju_internal_GenericArrayOps$LongArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$LongArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$LongArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$LongArrayOps$() {
}
$h_ju_internal_GenericArrayOps$LongArrayOps$.prototype = $p;
$p.av = (function(o1, o2) {
  var $x_1 = $uJ(o1);
  var x_$_lo = $x_1.l;
  var x_$_hi = $x_1.h;
  var $x_2 = $uJ(o2);
  var y_$_lo = $x_2.l;
  var y_$_hi = $x_2.h;
  return ((x_$_hi === y_$_hi) ? ((x_$_lo === y_$_lo) ? 0 : (((x_$_lo >>> 0) < (y_$_lo >>> 0)) ? (-1) : 1)) : ((x_$_hi < y_$_hi) ? (-1) : 1));
});
$p.du = (function(a, i, v) {
  var $x_1 = $uJ(v);
  var v$1_$_lo = $x_1.l;
  var v$1_$_hi = $x_1.h;
  var $x_2 = a.a;
  var $x_3 = (i << 1);
  $x_2[$x_3] = v$1_$_lo;
  $x_2[(($x_3 + 1) | 0)] = v$1_$_hi;
});
$p.c0 = (function(a, i) {
  var $x_1 = a.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
var $d_ju_internal_GenericArrayOps$LongArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$LongArrayOps$, "java.util.internal.GenericArrayOps$LongArrayOps$", ({
  e7: 1,
  ap: 1,
  az: 1,
  P: 1
}));
var $n_ju_internal_GenericArrayOps$LongArrayOps$;
function $m_ju_internal_GenericArrayOps$LongArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$LongArrayOps$)) {
    $n_ju_internal_GenericArrayOps$LongArrayOps$ = new $c_ju_internal_GenericArrayOps$LongArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$LongArrayOps$;
}
/** @constructor */
function $c_ju_internal_GenericArrayOps$ShortArrayOps$() {
}
$p = $c_ju_internal_GenericArrayOps$ShortArrayOps$.prototype = new $h_O();
$p.constructor = $c_ju_internal_GenericArrayOps$ShortArrayOps$;
/** @constructor */
function $h_ju_internal_GenericArrayOps$ShortArrayOps$() {
}
$h_ju_internal_GenericArrayOps$ShortArrayOps$.prototype = $p;
$p.av = (function(o1, o2) {
  return (((o1 | 0) - (o2 | 0)) | 0);
});
$p.du = (function(a, i, v) {
  var v$1 = (v | 0);
  a.a[i] = v$1;
});
$p.c0 = (function(a, i) {
  return a.a[i];
});
var $d_ju_internal_GenericArrayOps$ShortArrayOps$ = new $TypeData().i($c_ju_internal_GenericArrayOps$ShortArrayOps$, "java.util.internal.GenericArrayOps$ShortArrayOps$", ({
  e9: 1,
  ap: 1,
  az: 1,
  P: 1
}));
var $n_ju_internal_GenericArrayOps$ShortArrayOps$;
function $m_ju_internal_GenericArrayOps$ShortArrayOps$() {
  if ((!$n_ju_internal_GenericArrayOps$ShortArrayOps$)) {
    $n_ju_internal_GenericArrayOps$ShortArrayOps$ = new $c_ju_internal_GenericArrayOps$ShortArrayOps$();
  }
  return $n_ju_internal_GenericArrayOps$ShortArrayOps$;
}
/** @constructor */
function $c_Lorg_scalajs_dom_DOMList$DOMListIterator(domList) {
  this.jw = null;
  this.gM = 0;
  this.jw = domList;
  this.gM = 0;
}
$p = $c_Lorg_scalajs_dom_DOMList$DOMListIterator.prototype = new $h_O();
$p.constructor = $c_Lorg_scalajs_dom_DOMList$DOMListIterator;
/** @constructor */
function $h_Lorg_scalajs_dom_DOMList$DOMListIterator() {
}
$h_Lorg_scalajs_dom_DOMList$DOMListIterator.prototype = $p;
$p.q = (function() {
  return (-1);
});
$p.d5 = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.bh = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.cl = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.c1 = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().cd(this);
});
$p.c = (function() {
  return this;
});
$p.fz = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.cG = (function(n) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, n, (-1));
});
$p.v = (function() {
  return "<iterator>";
});
$p.i = (function() {
  return (this.gM < (this.jw.length | 0));
});
$p.e = (function() {
  var res = this.jw[this.gM];
  this.gM = ((1 + this.gM) | 0);
  return res;
});
var $d_Lorg_scalajs_dom_DOMList$DOMListIterator = new $TypeData().i($c_Lorg_scalajs_dom_DOMList$DOMListIterator, "org.scalajs.dom.DOMList$DOMListIterator", ({
  ei: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_s_PartialFunction$$anon$1() {
}
$p = $c_s_PartialFunction$$anon$1.prototype = new $h_O();
$p.constructor = $c_s_PartialFunction$$anon$1;
/** @constructor */
function $h_s_PartialFunction$$anon$1() {
}
$h_s_PartialFunction$$anon$1.prototype = $p;
$p.v = (function() {
  return "<function1>";
});
$p.eY = (function(x$0) {
  this.iP(x$0);
});
$p.bK = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.co = (function(x) {
  return false;
});
$p.iP = (function(x) {
  throw new $c_s_MatchError(x);
});
$p.d = (function(v1) {
  this.iP(v1);
});
var $d_s_PartialFunction$$anon$1 = new $TypeData().i($c_s_PartialFunction$$anon$1, "scala.PartialFunction$$anon$1", ({
  ev: 1,
  h: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_s_PartialFunction$Lifted(pf) {
  this.m8 = null;
  this.m8 = pf;
}
$p = $c_s_PartialFunction$Lifted.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_s_PartialFunction$Lifted;
/** @constructor */
function $h_s_PartialFunction$Lifted() {
}
$h_s_PartialFunction$Lifted.prototype = $p;
$p.hy = (function(x) {
  var z = this.m8.bK(x, $m_s_PartialFunction$().gO);
  return ((!$m_s_PartialFunction$().oo(z)) ? new $c_s_Some(z) : $m_s_None$());
});
$p.d = (function(v1) {
  return this.hy(v1);
});
var $d_s_PartialFunction$Lifted = new $TypeData().i($c_s_PartialFunction$Lifted, "scala.PartialFunction$Lifted", ({
  ex: 1,
  cX: 1,
  h: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.q = (function() {
  return (-1);
});
$p.d5 = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.bh = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.cl = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.c1 = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().cd(this);
});
$p.c = (function() {
  return this;
});
$p.fz = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.cG = (function(n) {
  return this.gy(n, (-1));
});
$p.gy = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.v = (function() {
  return "<iterator>";
});
/** @constructor */
function $c_sc_Map$() {
  this.g7 = null;
  this.ml = null;
  this.mm = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
  $n_sc_Map$ = this;
  this.ml = $ct_O__(new $c_O());
  this.mm = new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.ml));
}
$p = $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_sc_Map$;
/** @constructor */
function $h_sc_Map$() {
}
$h_sc_Map$.prototype = $p;
var $d_sc_Map$ = new $TypeData().i($c_sc_Map$, "scala.collection.Map$", ({
  eY: 1,
  bR: 1,
  a: 1,
  aB: 1
}));
var $n_sc_Map$;
function $m_sc_Map$() {
  if ((!$n_sc_Map$)) {
    $n_sc_Map$ = new $c_sc_Map$();
  }
  return $n_sc_Map$;
}
function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
  $thiz.e3 = delegate;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqFactory$Delegate() {
  this.e3 = null;
}
$p = $c_sc_SeqFactory$Delegate.prototype = new $h_O();
$p.constructor = $c_sc_SeqFactory$Delegate;
/** @constructor */
function $h_sc_SeqFactory$Delegate() {
}
$h_sc_SeqFactory$Delegate.prototype = $p;
$p.nx = (function(elems) {
  return this.e3.ek(elems);
});
$p.fB = (function(it) {
  return this.e3.a4(it);
});
$p.V = (function() {
  return this.e3.V();
});
$p.ek = (function(elems) {
  return this.nx(elems);
});
$p.a4 = (function(source) {
  return this.fB(source);
});
function $f_sc_SeqOps__distinct__O($thiz) {
  return $thiz.cb(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => x$2)));
}
function $f_sc_SeqOps__distinctBy__F1__O($thiz, f) {
  return $thiz.el(new $c_sc_View$DistinctBy($thiz, f));
}
function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
  return ((idx >= 0) && ($thiz.aH(idx) > 0));
}
function $f_sc_SeqOps__indexOf__O__I__I($thiz, elem, from) {
  return $thiz.dU(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$2$2) => $m_sr_BoxesRunTime$().n(elem, _$2$2))), from);
}
function $f_sc_SeqOps__contains__O__Z($thiz, elem) {
  return $thiz.fA(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$4$2) => $m_sr_BoxesRunTime$().n(_$4$2, elem))));
}
function $f_sc_SeqOps__sorted__s_math_Ordering__O($thiz, ord) {
  var len = $thiz.l();
  var b = $thiz.cq();
  if ((len === 1)) {
    b.ac($thiz.m());
  } else if ((len > 1)) {
    b.aO(len);
    var arr = new $ac_O(len);
    $thiz.bh(arr, 0, 2147483647);
    $m_ju_Arrays$().gz(arr, ord);
    var i = 0;
    while ((i < len)) {
      b.ac(arr.a[i]);
      i = ((1 + i) | 0);
    }
  }
  return b.aN();
}
function $f_sc_SeqOps__sortBy__F1__s_math_Ordering__O($thiz, f, ord) {
  return $thiz.bI(new $c_s_math_Ordering$$anon$1(f, ord));
}
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.aH(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.q();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.q();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.c(), that);
}
function $f_sc_StrictOptimizedIterableOps__map__F1__O($thiz, f) {
  var b = $thiz.aG().V();
  var it = $thiz.c();
  while (it.i()) {
    b.ac(f.d(it.e()));
  }
  return b.aN();
}
/** @constructor */
function $c_sci_Iterable$() {
  this.gS = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_sci_List$());
}
$p = $c_sci_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_sci_Iterable$;
/** @constructor */
function $h_sci_Iterable$() {
}
$h_sci_Iterable$.prototype = $p;
$p.qH = (function(it) {
  return ($is_sci_Iterable(it) ? it : $c_sc_IterableFactory$Delegate.prototype.a4.call(this, it));
});
$p.a4 = (function(it) {
  return this.qH(it);
});
var $d_sci_Iterable$ = new $TypeData().i($c_sci_Iterable$, "scala.collection.immutable.Iterable$", ({
  fs: 1,
  bP: 1,
  a: 1,
  C: 1
}));
var $n_sci_Iterable$;
function $m_sci_Iterable$() {
  if ((!$n_sci_Iterable$)) {
    $n_sci_Iterable$ = new $c_sci_Iterable$();
  }
  return $n_sci_Iterable$;
}
/** @constructor */
function $c_sci_LazyList$() {
  this.aR = null;
  this.mx = null;
  this.my = false;
  this.p3 = null;
  $n_sci_LazyList$ = this;
  this.aR = $ct_sci_LazyList__O__(new $c_sci_LazyList(), $m_sci_LazyList$EmptyMarker$());
  this.p3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$9$2) => $m_sr_Statics$PFMarker$()));
}
$p = $c_sci_LazyList$.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$;
/** @constructor */
function $h_sci_LazyList$() {
}
$h_sci_LazyList$.prototype = $p;
$p.ek = (function(elems) {
  return this.kE(elems);
});
$p.oq = (function() {
  if ((!this.my)) {
    this.mx = new $c_sci_LazyListBase$TailUpdater();
    this.my = true;
  }
  return this.mx;
});
$p.rH = (function(ll, n) {
  return $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((restRef, iRef) => (() => {
    var rest = restRef.iE;
    var i = iRef.iB;
    while (((i > 0) && (!($p_sci_LazyList__evaluated__sci_LazyList(rest) === $m_sci_LazyList$().aR)))) {
      rest = rest.bN();
      restRef.iE = rest;
      i = ((i - 1) | 0);
      iRef.iB = i;
    }
    return rest;
  }))(new $c_sr_ObjectRef(ll), new $c_sr_IntRef(n))));
});
$p.kE = (function(coll) {
  return ((coll instanceof $c_sci_LazyList) ? coll : ((coll.q() === 0) ? this.aR : $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.or(coll.c()))))));
});
$p.os = (function(it, suffix) {
  return (it.i() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.e(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.os(it, suffix))))) : suffix.Q());
});
$p.or = (function(it) {
  return (it.i() ? $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), it.e(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.or(it))))) : this.aR);
});
$p.V = (function() {
  return new $c_sci_LazyList$LazyBuilder();
});
$p.a4 = (function(source) {
  return this.kE(source);
});
var $d_sci_LazyList$ = new $TypeData().i($c_sci_LazyList$, "scala.collection.immutable.LazyList$", ({
  ft: 1,
  a: 1,
  C: 1,
  V: 1
}));
var $n_sci_LazyList$;
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$();
  }
  return $n_sci_LazyList$;
}
/** @constructor */
function $c_scm_Builder$$anon$1(f$2, outer) {
  this.mN = null;
  this.h8 = null;
  this.mN = f$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.h8 = outer;
}
$p = $c_scm_Builder$$anon$1.prototype = new $h_O();
$p.constructor = $c_scm_Builder$$anon$1;
/** @constructor */
function $h_scm_Builder$$anon$1() {
}
$h_scm_Builder$$anon$1.prototype = $p;
$p.pF = (function(x) {
  this.h8.ac(x);
  return this;
});
$p.pq = (function(xs) {
  this.h8.aU(xs);
  return this;
});
$p.aO = (function(size) {
  this.h8.aO(size);
});
$p.aN = (function() {
  return this.mN.d(this.h8.aN());
});
$p.ac = (function(elem) {
  return this.pF(elem);
});
$p.aU = (function(elems) {
  return this.pq(elems);
});
var $d_scm_Builder$$anon$1 = new $TypeData().i($c_scm_Builder$$anon$1, "scala.collection.mutable.Builder$$anon$1", ({
  gy: 1,
  z: 1,
  A: 1,
  F: 1
}));
function $ct_scm_GrowableBuilder__scm_Growable__($thiz, elems) {
  $thiz.dI = elems;
  return $thiz;
}
/** @constructor */
function $c_scm_GrowableBuilder() {
  this.dI = null;
}
$p = $c_scm_GrowableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_GrowableBuilder;
/** @constructor */
function $h_scm_GrowableBuilder() {
}
$h_scm_GrowableBuilder.prototype = $p;
$p.aO = (function(size) {
});
$p.pG = (function(elem) {
  this.dI.ac(elem);
  return this;
});
$p.pr = (function(xs) {
  this.dI.aU(xs);
  return this;
});
$p.aN = (function() {
  return this.dI;
});
$p.ac = (function(elem) {
  return this.pG(elem);
});
$p.aU = (function(elems) {
  return this.pr(elems);
});
var $d_scm_GrowableBuilder = new $TypeData().i($c_scm_GrowableBuilder, "scala.collection.mutable.GrowableBuilder", ({
  aI: 1,
  z: 1,
  A: 1,
  F: 1
}));
/** @constructor */
function $c_scm_Iterable$() {
  this.gS = null;
  $ct_sc_IterableFactory$Delegate__sc_IterableFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_Iterable$.prototype = new $h_sc_IterableFactory$Delegate();
$p.constructor = $c_scm_Iterable$;
/** @constructor */
function $h_scm_Iterable$() {
}
$h_scm_Iterable$.prototype = $p;
var $d_scm_Iterable$ = new $TypeData().i($c_scm_Iterable$, "scala.collection.mutable.Iterable$", ({
  gR: 1,
  bP: 1,
  a: 1,
  C: 1
}));
var $n_scm_Iterable$;
function $m_scm_Iterable$() {
  if ((!$n_scm_Iterable$)) {
    $n_scm_Iterable$ = new $c_scm_Iterable$();
  }
  return $n_scm_Iterable$;
}
/** @constructor */
function $c_scm_Map$() {
  this.g7 = null;
  $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_scm_HashMap$());
}
$p = $c_scm_Map$.prototype = new $h_sc_MapFactory$Delegate();
$p.constructor = $c_scm_Map$;
/** @constructor */
function $h_scm_Map$() {
}
$h_scm_Map$.prototype = $p;
var $d_scm_Map$ = new $TypeData().i($c_scm_Map$, "scala.collection.mutable.Map$", ({
  gV: 1,
  bR: 1,
  a: 1,
  aB: 1
}));
var $n_scm_Map$;
function $m_scm_Map$() {
  if ((!$n_scm_Map$)) {
    $n_scm_Map$ = new $c_scm_Map$();
  }
  return $n_scm_Map$;
}
class $c_s_concurrent_Future$$anon$4 extends $c_jl_Throwable {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gr() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$4 = new $TypeData().i($c_s_concurrent_Future$$anon$4, "scala.concurrent.Future$$anon$4", ({
  ha: 1,
  v: 1,
  a: 1,
  aO: 1
}));
/** @constructor */
function $c_s_concurrent_Future$$anon$5(p$5) {
  this.J = null;
  this.n4 = null;
  this.n4 = p$5;
  $ct_ju_concurrent_atomic_AtomicReference__O__(this, ($m_sci_List$(), $m_sci_Nil$()));
}
$p = $c_s_concurrent_Future$$anon$5.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_Future$$anon$5;
/** @constructor */
function $h_s_concurrent_Future$$anon$5() {
}
$h_s_concurrent_Future$$anon$5.prototype = $p;
$p.v = (function() {
  return "<function1>";
});
$p.pR = (function(res) {
  var deregs = this.qP(null);
  if ((deregs !== null)) {
    this.n4.oJ(res);
    var these = deregs;
    while ((!these.g())) {
      these.m().Q();
      these = these.o();
    }
  }
});
$p.d = (function(v1) {
  this.pR(v1);
});
var $d_s_concurrent_Future$$anon$5 = new $TypeData().i($c_s_concurrent_Future$$anon$5, "scala.concurrent.Future$$anon$5", ({
  hb: 1,
  aH: 1,
  a: 1,
  h: 1
}));
/** @constructor */
function $c_s_concurrent_duration_Duration() {
}
$p = $c_s_concurrent_duration_Duration.prototype = new $h_O();
$p.constructor = $c_s_concurrent_duration_Duration;
/** @constructor */
function $h_s_concurrent_duration_Duration() {
}
$h_s_concurrent_duration_Duration.prototype = $p;
$p.nB = (function(that) {
  return this.kn(that);
});
function $isArrayOf_sr_NonLocalReturnControl(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ic)));
}
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
  this.nf = null;
  this.nf = Promise.resolve((void 0));
}
$p = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
}
$h_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = $p;
$p.kw = (function(runnable) {
  this.nf.then(((arg1$2) => {
    try {
      runnable.f1();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).hO($m_jl_System$Streams$().g1);
    }
  }));
});
$p.kV = (function(t) {
  t.hO($m_jl_System$Streams$().g1);
});
var $d_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext", ({
  ip: 1,
  b8: 1,
  b7: 1,
  aS: 1
}));
/** @constructor */
function $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() {
}
$p = $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype = new $h_O();
$p.constructor = $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext;
/** @constructor */
function $h_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() {
}
$h_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype = $p;
$p.kw = (function(runnable) {
  setTimeout($m_sjs_js_Any$().qL(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    try {
      runnable.f1();
    } catch (e) {
      ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)).hO($m_jl_System$Streams$().g1);
    }
  }))), 0);
});
$p.kV = (function(t) {
  t.hO($m_jl_System$Streams$().g1);
});
var $d_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext = new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext", ({
  iq: 1,
  b8: 1,
  b7: 1,
  aS: 1
}));
/** @constructor */
function $c_sjs_js_WrappedDictionary$DictionaryIterator(dict) {
  this.ng = null;
  this.kb = null;
  this.ho = 0;
  this.ng = dict;
  this.kb = Object.keys(dict);
  this.ho = 0;
}
$p = $c_sjs_js_WrappedDictionary$DictionaryIterator.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$DictionaryIterator;
/** @constructor */
function $h_sjs_js_WrappedDictionary$DictionaryIterator() {
}
$h_sjs_js_WrappedDictionary$DictionaryIterator.prototype = $p;
$p.c = (function() {
  return this;
});
$p.fz = (function(xs) {
  return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
});
$p.cG = (function(n) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, n, (-1));
});
$p.v = (function() {
  return "<iterator>";
});
$p.d5 = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.bh = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.cl = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.c1 = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().cd(this);
});
$p.q = (function() {
  return (-1);
});
$p.i = (function() {
  return (this.ho < (this.kb.length | 0));
});
$p.gw = (function() {
  var key = this.kb[this.ho];
  this.ho = ((1 + this.ho) | 0);
  var dict = this.ng;
  if ((!(!$m_sjs_js_WrappedDictionary$Cache$().fw.call(dict, key)))) {
    var $x_1 = dict[key];
  } else {
    var $x_1;
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
  return $ct_T2__O__O__(new $c_T2(), key, $x_1);
});
$p.e = (function() {
  return this.gw();
});
var $d_sjs_js_WrappedDictionary$DictionaryIterator = new $TypeData().i($c_sjs_js_WrappedDictionary$DictionaryIterator, "scala.scalajs.js.WrappedDictionary$DictionaryIterator", ({
  iC: 1,
  m: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sjs_js_WrappedDictionary$WrappedDictionaryBuilder() {
  this.kc = null;
  this.kc = ({});
}
$p = $c_sjs_js_WrappedDictionary$WrappedDictionaryBuilder.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$WrappedDictionaryBuilder;
/** @constructor */
function $h_sjs_js_WrappedDictionary$WrappedDictionaryBuilder() {
}
$h_sjs_js_WrappedDictionary$WrappedDictionaryBuilder.prototype = $p;
$p.aO = (function(size) {
});
$p.aU = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.pJ = (function(elem) {
  var dict = this.kc;
  var key = elem.aa();
  var value = elem.ab();
  dict[key] = value;
  return this;
});
$p.rE = (function() {
  return new $c_sjs_js_WrappedDictionary(this.kc);
});
$p.aN = (function() {
  return this.rE();
});
$p.ac = (function(elem) {
  return this.pJ(elem);
});
var $d_sjs_js_WrappedDictionary$WrappedDictionaryBuilder = new $TypeData().i($c_sjs_js_WrappedDictionary$WrappedDictionaryBuilder, "scala.scalajs.js.WrappedDictionary$WrappedDictionaryBuilder", ({
  iD: 1,
  F: 1,
  z: 1,
  A: 1
}));
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.iL)));
}
/** @constructor */
function $c_s_util_Try() {
}
$p = $c_s_util_Try.prototype = new $h_O();
$p.constructor = $c_s_util_Try;
/** @constructor */
function $h_s_util_Try() {
}
$h_s_util_Try.prototype = $p;
$p.ce = (function() {
  return new $c_s_Product$$anon$1(this);
});
function $isArrayOf_s_util_Try(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bb)));
}
/** @constructor */
function $c_Ldotty_tools_scaladoc_CodeSnippets$$anon$1() {
}
$p = $c_Ldotty_tools_scaladoc_CodeSnippets$$anon$1.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Ldotty_tools_scaladoc_CodeSnippets$$anon$1;
/** @constructor */
function $h_Ldotty_tools_scaladoc_CodeSnippets$$anon$1() {
}
$h_Ldotty_tools_scaladoc_CodeSnippets$$anon$1.prototype = $p;
$p.r4 = (function(x) {
  return ((!(!(x instanceof HTMLElement))) || false);
});
$p.pU = (function(x, default$1) {
  return ((!(!(x instanceof HTMLElement))) ? x : default$1.d(x));
});
$p.co = (function(x) {
  return this.r4(x);
});
$p.bK = (function(x, default$1) {
  return this.pU(x, default$1);
});
var $d_Ldotty_tools_scaladoc_CodeSnippets$$anon$1 = new $TypeData().i($c_Ldotty_tools_scaladoc_CodeSnippets$$anon$1, "dotty.tools.scaladoc.CodeSnippets$$anon$1", ({
  d3: 1,
  aN: 1,
  h: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Ldotty_tools_scaladoc_DropdownHandler$$anon$2() {
}
$p = $c_Ldotty_tools_scaladoc_DropdownHandler$$anon$2.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_Ldotty_tools_scaladoc_DropdownHandler$$anon$2;
/** @constructor */
function $h_Ldotty_tools_scaladoc_DropdownHandler$$anon$2() {
}
$h_Ldotty_tools_scaladoc_DropdownHandler$$anon$2.prototype = $p;
$p.r3 = (function(x) {
  return true;
});
$p.pT = (function(x, default$1) {
  return false;
});
$p.co = (function(x) {
  return this.r3(x);
});
$p.bK = (function(x, default$1) {
  return this.pT(x, default$1);
});
var $d_Ldotty_tools_scaladoc_DropdownHandler$$anon$2 = new $TypeData().i($c_Ldotty_tools_scaladoc_DropdownHandler$$anon$2, "dotty.tools.scaladoc.DropdownHandler$$anon$2", ({
  d5: 1,
  aN: 1,
  h: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_Ldotty_tools_scaladoc_NameAndKindQuery(name, kind) {
  this.gF = null;
  this.gE = null;
  this.gF = name;
  this.gE = kind;
}
$p = $c_Ldotty_tools_scaladoc_NameAndKindQuery.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_NameAndKindQuery;
/** @constructor */
function $h_Ldotty_tools_scaladoc_NameAndKindQuery() {
}
$h_Ldotty_tools_scaladoc_NameAndKindQuery.prototype = $p;
$p.ce = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().ds(this, 1848543406, true);
});
$p.p = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Ldotty_tools_scaladoc_NameAndKindQuery)) {
    var x = this.gF;
    var x$2 = x$0.gF;
    if (((x === null) ? (x$2 === null) : x.p(x$2))) {
      var x$3 = this.gE;
      var x$4 = x$0.gE;
      return ((x$3 === null) ? (x$4 === null) : x$3.p(x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().dK(this);
});
$p.bF = (function() {
  return 2;
});
$p.bH = (function() {
  return "NameAndKindQuery";
});
$p.bG = (function(n) {
  if ((n === 0)) {
    return this.gF;
  }
  if ((n === 1)) {
    return this.gE;
  }
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
function $isArrayOf_Ldotty_tools_scaladoc_NameAndKindQuery(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bf)));
}
var $d_Ldotty_tools_scaladoc_NameAndKindQuery = new $TypeData().i($c_Ldotty_tools_scaladoc_NameAndKindQuery, "dotty.tools.scaladoc.NameAndKindQuery", ({
  bf: 1,
  bc: 1,
  d: 1,
  J: 1,
  a: 1
}));
/** @constructor */
function $c_Ldotty_tools_scaladoc_SignatureQuery(signature) {
  this.hY = null;
  this.hY = signature;
}
$p = $c_Ldotty_tools_scaladoc_SignatureQuery.prototype = new $h_O();
$p.constructor = $c_Ldotty_tools_scaladoc_SignatureQuery;
/** @constructor */
function $h_Ldotty_tools_scaladoc_SignatureQuery() {
}
$h_Ldotty_tools_scaladoc_SignatureQuery.prototype = $p;
$p.ce = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().ds(this, 2012484474, true);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ldotty_tools_scaladoc_SignatureQuery) && (this.hY === x$0.hY)));
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().dK(this);
});
$p.bF = (function() {
  return 1;
});
$p.bH = (function() {
  return "SignatureQuery";
});
$p.bG = (function(n) {
  if ((n === 0)) {
    return this.hY;
  }
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
function $isArrayOf_Ldotty_tools_scaladoc_SignatureQuery(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bh)));
}
var $d_Ldotty_tools_scaladoc_SignatureQuery = new $TypeData().i($c_Ldotty_tools_scaladoc_SignatureQuery, "dotty.tools.scaladoc.SignatureQuery", ({
  bh: 1,
  bc: 1,
  d: 1,
  J: 1,
  a: 1
}));
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$p = $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $p;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  dm: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Byte__compareTo__O__I($thiz, o) {
  return (($thiz - o) | 0);
}
function $isArrayOf_jl_Byte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bq)));
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  bq: 1,
  ai: 1,
  a: 1,
  H: 1,
  a3: 1
}), ((x) => $isByte(x)));
function $isArrayOf_jl_ClassCastException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dt)));
}
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  aR: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1
}));
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalStateException = new $TypeData().i($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
  dv: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1
}));
function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IndexOutOfBoundsException__I__($thiz, index) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, ("Index out of range: " + index), null, true, true);
  return $thiz;
}
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  bu: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$p = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $p;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  dz: 1,
  bm: 1,
  bk: 1,
  bo: 1,
  bl: 1
}));
function $ct_jl_NullPointerException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_NullPointerException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  dB: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.dD)));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Short__compareTo__O__I($thiz, o) {
  return (($thiz - o) | 0);
}
function $isArrayOf_jl_Short(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bx)));
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  bx: 1,
  ai: 1,
  a: 1,
  H: 1,
  a3: 1
}), ((x) => $isShort(x)));
class $c_jl_StackOverflowError extends $c_jl_VirtualMachineError {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_StackOverflowError = new $TypeData().i($c_jl_StackOverflowError, "java.lang.StackOverflowError", ({
  dE: 1,
  bB: 1,
  aQ: 1,
  v: 1,
  a: 1
}));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  dP: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1
}));
class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_ConcurrentModificationException = new $TypeData().i($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
  dU: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1
}));
function $ct_ju_NoSuchElementException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_ju_NoSuchElementException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  aG: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1
}));
/** @constructor */
function $c_ju_concurrent_TimeUnit$$anon$1() {
  this.dy = null;
  this.d9 = 0;
  $ct_jl_Enum__T__I__(this, "NANOSECONDS", 0);
}
$p = $c_ju_concurrent_TimeUnit$$anon$1.prototype = new $h_ju_concurrent_TimeUnit();
$p.constructor = $c_ju_concurrent_TimeUnit$$anon$1;
/** @constructor */
function $h_ju_concurrent_TimeUnit$$anon$1() {
}
$h_ju_concurrent_TimeUnit$$anon$1.prototype = $p;
$p.dv = (function(a_$_lo, a_$_hi) {
  return $bL(a_$_lo, a_$_hi);
});
$p.fI = (function(a_$_lo, a_$_hi) {
  var sign = (a_$_hi >> 31);
  var xlo = (a_$_lo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((a_$_hi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
  var x = (1.0000000000000016E-6 * aHat);
  var lo = (x | 0.0);
  var hi = ((2.3283064365386963E-10 * x) | 0.0);
  var rHat = ((rlo - Math.imul(1000000, lo)) | 0);
  if ((rHat < 0)) {
    var lo$1 = ((lo - 1) | 0);
    var hi$1 = ((((hi - 1) | 0) + ((lo$1 !== (-1)) | 0)) | 0);
    var absR_$_lo = lo$1;
    var absR_$_hi = hi$1;
  } else {
    var absR_$_lo = lo;
    var absR_$_hi = hi;
  }
  if ((a_$_hi < 0)) {
    var lo$2 = ((-absR_$_lo) | 0);
    var hi$2 = ((((-absR_$_hi) | 0) - ((lo$2 !== 0) | 0)) | 0);
    return $bL(lo$2, hi$2);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
var $d_ju_concurrent_TimeUnit$$anon$1 = new $TypeData().i($c_ju_concurrent_TimeUnit$$anon$1, "java.util.concurrent.TimeUnit$$anon$1", ({
  dX: 1,
  aj: 1,
  ah: 1,
  H: 1,
  a: 1
}));
/** @constructor */
function $c_ju_concurrent_TimeUnit$$anon$2() {
  this.dy = null;
  this.d9 = 0;
  $ct_jl_Enum__T__I__(this, "MICROSECONDS", 1);
}
$p = $c_ju_concurrent_TimeUnit$$anon$2.prototype = new $h_ju_concurrent_TimeUnit();
$p.constructor = $c_ju_concurrent_TimeUnit$$anon$2;
/** @constructor */
function $h_ju_concurrent_TimeUnit$$anon$2() {
}
$h_ju_concurrent_TimeUnit$$anon$2.prototype = $p;
$p.dv = (function(a_$_lo, a_$_hi) {
  return $m_ju_concurrent_TimeUnit$().dW(a_$_lo, a_$_hi, 1000, 0, (-1511828489), 2147483);
});
$p.fI = (function(a_$_lo, a_$_hi) {
  var sign = (a_$_hi >> 31);
  var xlo = (a_$_lo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((a_$_hi ^ sign) + (((rlo >>> 0) < (xlo >>> 0)) | 0)) | 0);
  var quotHi = (((rhi >>> 0) / 1000) | 0);
  var k = ((rhi - Math.imul(1000, quotHi)) | 0);
  var quotLo = ((0.0010000000000000005 * ((4.294967296E9 * k) + (rlo >>> 0.0))) | 0.0);
  if ((a_$_hi < 0)) {
    var lo = ((-quotLo) | 0);
    var hi = ((((-quotHi) | 0) - ((lo !== 0) | 0)) | 0);
    return $bL(lo, hi);
  } else {
    return $bL(quotLo, quotHi);
  }
});
var $d_ju_concurrent_TimeUnit$$anon$2 = new $TypeData().i($c_ju_concurrent_TimeUnit$$anon$2, "java.util.concurrent.TimeUnit$$anon$2", ({
  dY: 1,
  aj: 1,
  ah: 1,
  H: 1,
  a: 1
}));
/** @constructor */
function $c_ju_concurrent_TimeUnit$$anon$3() {
  this.dy = null;
  this.d9 = 0;
  $ct_jl_Enum__T__I__(this, "MILLISECONDS", 2);
}
$p = $c_ju_concurrent_TimeUnit$$anon$3.prototype = new $h_ju_concurrent_TimeUnit();
$p.constructor = $c_ju_concurrent_TimeUnit$$anon$3;
/** @constructor */
function $h_ju_concurrent_TimeUnit$$anon$3() {
}
$h_ju_concurrent_TimeUnit$$anon$3.prototype = $p;
$p.dv = (function(a_$_lo, a_$_hi) {
  return $m_ju_concurrent_TimeUnit$().dW(a_$_lo, a_$_hi, 1000000, 0, 2077252342, 2147);
});
$p.fI = (function(a_$_lo, a_$_hi) {
  return $bL(a_$_lo, a_$_hi);
});
var $d_ju_concurrent_TimeUnit$$anon$3 = new $TypeData().i($c_ju_concurrent_TimeUnit$$anon$3, "java.util.concurrent.TimeUnit$$anon$3", ({
  dZ: 1,
  aj: 1,
  ah: 1,
  H: 1,
  a: 1
}));
/** @constructor */
function $c_ju_concurrent_TimeUnit$$anon$4() {
  this.dy = null;
  this.d9 = 0;
  $ct_jl_Enum__T__I__(this, "SECONDS", 3);
}
$p = $c_ju_concurrent_TimeUnit$$anon$4.prototype = new $h_ju_concurrent_TimeUnit();
$p.constructor = $c_ju_concurrent_TimeUnit$$anon$4;
/** @constructor */
function $h_ju_concurrent_TimeUnit$$anon$4() {
}
$h_ju_concurrent_TimeUnit$$anon$4.prototype = $p;
$p.dv = (function(a_$_lo, a_$_hi) {
  return $m_ju_concurrent_TimeUnit$().dW(a_$_lo, a_$_hi, 1000000000, 0, 633437444, 2);
});
$p.fI = (function(a_$_lo, a_$_hi) {
  return $m_ju_concurrent_TimeUnit$().dW(a_$_lo, a_$_hi, 1000, 0, (-1511828489), 2147483);
});
var $d_ju_concurrent_TimeUnit$$anon$4 = new $TypeData().i($c_ju_concurrent_TimeUnit$$anon$4, "java.util.concurrent.TimeUnit$$anon$4", ({
  e0: 1,
  aj: 1,
  ah: 1,
  H: 1,
  a: 1
}));
/** @constructor */
function $c_ju_concurrent_TimeUnit$$anon$5() {
  this.dy = null;
  this.d9 = 0;
  $ct_jl_Enum__T__I__(this, "MINUTES", 4);
}
$p = $c_ju_concurrent_TimeUnit$$anon$5.prototype = new $h_ju_concurrent_TimeUnit();
$p.constructor = $c_ju_concurrent_TimeUnit$$anon$5;
/** @constructor */
function $h_ju_concurrent_TimeUnit$$anon$5() {
}
$h_ju_concurrent_TimeUnit$$anon$5.prototype = $p;
$p.dv = (function(a_$_lo, a_$_hi) {
  return $m_ju_concurrent_TimeUnit$().dW(a_$_lo, a_$_hi, (-129542144), 13, 153722867, 0);
});
$p.fI = (function(a_$_lo, a_$_hi) {
  return $m_ju_concurrent_TimeUnit$().dW(a_$_lo, a_$_hi, 60000, 0, 1692789776, 35791);
});
var $d_ju_concurrent_TimeUnit$$anon$5 = new $TypeData().i($c_ju_concurrent_TimeUnit$$anon$5, "java.util.concurrent.TimeUnit$$anon$5", ({
  e1: 1,
  aj: 1,
  ah: 1,
  H: 1,
  a: 1
}));
/** @constructor */
function $c_ju_concurrent_TimeUnit$$anon$6() {
  this.dy = null;
  this.d9 = 0;
  $ct_jl_Enum__T__I__(this, "HOURS", 5);
}
$p = $c_ju_concurrent_TimeUnit$$anon$6.prototype = new $h_ju_concurrent_TimeUnit();
$p.constructor = $c_ju_concurrent_TimeUnit$$anon$6;
/** @constructor */
function $h_ju_concurrent_TimeUnit$$anon$6() {
}
$h_ju_concurrent_TimeUnit$$anon$6.prototype = $p;
$p.dv = (function(a_$_lo, a_$_hi) {
  return $m_ju_concurrent_TimeUnit$().dW(a_$_lo, a_$_hi, 817405952, 838, 2562047, 0);
});
$p.fI = (function(a_$_lo, a_$_hi) {
  return $m_ju_concurrent_TimeUnit$().dW(a_$_lo, a_$_hi, 3600000, 0, (-2047687697), 596);
});
var $d_ju_concurrent_TimeUnit$$anon$6 = new $TypeData().i($c_ju_concurrent_TimeUnit$$anon$6, "java.util.concurrent.TimeUnit$$anon$6", ({
  e2: 1,
  aj: 1,
  ah: 1,
  H: 1,
  a: 1
}));
/** @constructor */
function $c_ju_concurrent_TimeUnit$$anon$7() {
  this.dy = null;
  this.d9 = 0;
  $ct_jl_Enum__T__I__(this, "DAYS", 6);
}
$p = $c_ju_concurrent_TimeUnit$$anon$7.prototype = new $h_ju_concurrent_TimeUnit();
$p.constructor = $c_ju_concurrent_TimeUnit$$anon$7;
/** @constructor */
function $h_ju_concurrent_TimeUnit$$anon$7() {
}
$h_ju_concurrent_TimeUnit$$anon$7.prototype = $p;
$p.dv = (function(a_$_lo, a_$_hi) {
  return $m_ju_concurrent_TimeUnit$().dW(a_$_lo, a_$_hi, (-1857093632), 20116, 106751, 0);
});
$p.fI = (function(a_$_lo, a_$_hi) {
  return $m_ju_concurrent_TimeUnit$().dW(a_$_lo, a_$_hi, 86400000, 0, (-622191233), 24);
});
var $d_ju_concurrent_TimeUnit$$anon$7 = new $TypeData().i($c_ju_concurrent_TimeUnit$$anon$7, "java.util.concurrent.TimeUnit$$anon$7", ({
  e3: 1,
  aj: 1,
  ah: 1,
  H: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.m5)) {
    if (($thiz.i7 === null)) {
      var $x_1 = "null";
    } else {
      var cls = $m_sr_ScalaRunTime$().iO($thiz.i7);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.L.N));
      try {
        var $x_1 = ((($thiz.i7 + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.m4 = $x_1;
    $thiz.m5 = true;
  }
  return $thiz.m4;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.i7 = null;
    this.m4 = null;
    this.m5 = false;
    this.i7 = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hF() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  er: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1
}));
/** @constructor */
function $c_s_Option() {
}
$p = $c_s_Option.prototype = new $h_O();
$p.constructor = $c_s_Option;
/** @constructor */
function $h_s_Option() {
}
$h_s_Option.prototype = $p;
$p.ce = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.g = (function() {
  return (this === $m_s_None$());
});
$p.q = (function() {
  return ((!this.g()) | 0);
});
$p.c = (function() {
  return (this.g() ? $m_sc_Iterator$().G : new $c_sc_Iterator$$anon$20(this.R()));
});
/** @constructor */
function $c_s_PartialFunction$$anon$2(f$2) {
  this.m7 = null;
  this.m7 = f$2;
}
$p = $c_s_PartialFunction$$anon$2.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_s_PartialFunction$$anon$2;
/** @constructor */
function $h_s_PartialFunction$$anon$2() {
}
$h_s_PartialFunction$$anon$2.prototype = $p;
$p.co = (function(x) {
  return true;
});
$p.bK = (function(x, default$1) {
  return this.m7.d(x);
});
var $d_s_PartialFunction$$anon$2 = new $TypeData().i($c_s_PartialFunction$$anon$2, "scala.PartialFunction$$anon$2", ({
  ew: 1,
  aN: 1,
  h: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_s_PartialFunction$OrElse(f1, f2) {
  this.i8 = null;
  this.i9 = null;
  this.i8 = f1;
  this.i9 = f2;
}
$p = $c_s_PartialFunction$OrElse.prototype = new $h_sr_AbstractPartialFunction();
$p.constructor = $c_s_PartialFunction$OrElse;
/** @constructor */
function $h_s_PartialFunction$OrElse() {
}
$h_s_PartialFunction$OrElse.prototype = $p;
$p.co = (function(x) {
  return (this.i8.co(x) || this.i9.co(x));
});
$p.d = (function(x) {
  return this.i8.bK(x, this.i9);
});
$p.bK = (function(x, default$1) {
  var z = this.i8.bK(x, $m_s_PartialFunction$().gO);
  return ((!$m_s_PartialFunction$().oo(z)) ? z : this.i9.bK(x, default$1));
});
var $d_s_PartialFunction$OrElse = new $TypeData().i($c_s_PartialFunction$OrElse, "scala.PartialFunction$OrElse", ({
  ey: 1,
  aN: 1,
  h: 1,
  j: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.gP = 0;
  this.ma = 0;
  this.m9 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.m9 = outer;
  this.gP = 0;
  this.ma = outer.bF();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.i = (function() {
  return (this.gP < this.ma);
});
$p.e = (function() {
  var result = this.m9.bG(this.gP);
  this.gP = ((1 + this.gP) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  eA: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
function $ct_T2__O__O__($thiz, _1, _2) {
  $thiz.jy = _1;
  $thiz.jz = _2;
  return $thiz;
}
/** @constructor */
function $c_T2() {
  this.jy = null;
  this.jz = null;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.bF = (function() {
  return 2;
});
$p.bG = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.aa = (function() {
  return this.jy;
});
$p.ab = (function() {
  return this.jz;
});
$p.v = (function() {
  return (((("(" + this.aa()) + ",") + this.ab()) + ")");
});
$p.bH = (function() {
  return "Tuple2";
});
$p.ce = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().ds(this, (-116390334), true);
});
$p.p = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().n(this.aa(), x$1.aa()) && $m_sr_BoxesRunTime$().n(this.ab(), x$1.ab()))));
});
$p.nj = (function() {
  return (this.aa() | 0);
});
$p.kg = (function() {
  return (this.ab() | 0);
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aV)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  aV: 1,
  bE: 1,
  J: 1,
  d: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.g3 = null;
  this.g4 = null;
  this.g5 = null;
  this.g3 = _1;
  this.g4 = _2;
  this.g5 = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.ce = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.bF = (function() {
  return 3;
});
$p.bG = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().ds(this, (-192629203), true);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().n(this.g3, x$0.g3) && $m_sr_BoxesRunTime$().n(this.g4, x$0.g4)) && $m_sr_BoxesRunTime$().n(this.g5, x$0.g5))));
});
$p.bH = (function() {
  return "Tuple3";
});
$p.v = (function() {
  return (((((("(" + this.g3) + ",") + this.g4) + ",") + this.g5) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bG)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  bG: 1,
  d: 1,
  J: 1,
  eC: 1,
  a: 1
}));
/** @constructor */
function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
  this.gR = null;
  $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
}
$p = $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
$p.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
/** @constructor */
function $h_sc_ClassTagSeqFactory$AnySeqDelegate() {
}
$h_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = $p;
var $d_sc_ClassTagSeqFactory$AnySeqDelegate = new $TypeData().i($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
  eH: 1,
  eG: 1,
  a: 1,
  C: 1,
  V: 1
}));
function $f_sc_IndexedSeqOps__prepended__O__O($thiz, elem) {
  return $thiz.aG().a4(new $c_sc_IndexedSeqView$Prepended(elem, $thiz));
}
function $f_sc_IndexedSeqOps__map__F1__O($thiz, f) {
  return $thiz.aG().a4($ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), $thiz, f));
}
function $f_sc_IndexedSeqOps__head__O($thiz) {
  if ((!$thiz.g())) {
    return $thiz.r(0);
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("head of empty " + ($is_sc_IndexedSeq($thiz) ? $thiz.bL() : $thiz.v())));
  }
}
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.bL() + "("), ", ", ")");
}
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.e)));
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.e)));
}
/** @constructor */
function $c_sc_Iterator$$anon$16(outer) {
  this.ig = 0;
  this.ie = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ie = outer;
  this.ig = 0;
}
$p = $c_sc_Iterator$$anon$16.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$16;
/** @constructor */
function $h_sc_Iterator$$anon$16() {
}
$h_sc_Iterator$$anon$16.prototype = $p;
$p.q = (function() {
  return this.ie.q();
});
$p.i = (function() {
  return this.ie.i();
});
$p.gw = (function() {
  var ret = $ct_T2__O__O__(new $c_T2(), this.ie.e(), this.ig);
  this.ig = ((1 + this.ig) | 0);
  return ret;
});
$p.e = (function() {
  return this.gw();
});
var $d_sc_Iterator$$anon$16 = new $TypeData().i($c_sc_Iterator$$anon$16, "scala.collection.Iterator$$anon$16", ({
  eP: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.i = (function() {
  return false;
});
$p.rl = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator");
});
$p.q = (function() {
  return 0;
});
$p.e = (function() {
  this.rl();
});
$p.gy = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  eQ: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$20(a$2) {
  this.md = null;
  this.gT = false;
  this.md = a$2;
  this.gT = false;
}
$p = $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$20;
/** @constructor */
function $h_sc_Iterator$$anon$20() {
}
$h_sc_Iterator$$anon$20.prototype = $p;
$p.i = (function() {
  return (!this.gT);
});
$p.e = (function() {
  if (this.gT) {
    return $m_sc_Iterator$().G.e();
  } else {
    this.gT = true;
    return this.md;
  }
});
$p.gy = (function(from, until) {
  return (((this.gT || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().G : this);
});
var $d_sc_Iterator$$anon$20 = new $TypeData().i($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
  eR: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$8(f$8, outer) {
  this.mg = null;
  this.mi = null;
  this.ih = false;
  this.mh = null;
  this.jG = null;
  this.mg = f$8;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jG = outer;
  this.mi = $ct_scm_HashSet__(new $c_scm_HashSet());
  this.ih = false;
}
$p = $c_sc_Iterator$$anon$8.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$8;
/** @constructor */
function $h_sc_Iterator$$anon$8() {
}
$h_sc_Iterator$$anon$8.prototype = $p;
$p.i = (function() {
  while (true) {
    if (this.ih) {
      return true;
    } else if (this.jG.i()) {
      var a = this.jG.e();
      if ((!this.mi.iL(this.mg.d(a)))) {
        continue;
      }
      this.mh = a;
      this.ih = true;
      return true;
    } else {
      return false;
    }
  }
});
$p.e = (function() {
  if (this.i()) {
    this.ih = false;
    return this.mh;
  } else {
    return $m_sc_Iterator$().G.e();
  }
});
var $d_sc_Iterator$$anon$8 = new $TypeData().i($c_sc_Iterator$$anon$8, "scala.collection.Iterator$$anon$8", ({
  eU: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$9(f$9, outer) {
  this.mj = null;
  this.ii = null;
  this.mj = f$9;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ii = outer;
}
$p = $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$9;
/** @constructor */
function $h_sc_Iterator$$anon$9() {
}
$h_sc_Iterator$$anon$9.prototype = $p;
$p.q = (function() {
  return this.ii.q();
});
$p.i = (function() {
  return this.ii.i();
});
$p.e = (function() {
  return this.mj.d(this.ii.e());
});
var $d_sc_Iterator$$anon$9 = new $TypeData().i($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
  eV: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.cg instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.cg;
      $thiz.cg = c.cg;
      $thiz.et = c.et;
      if ((c.cO !== null)) {
        if (($thiz.cN === null)) {
          $thiz.cN = c.cN;
        }
        var x$proxy10 = c.cN;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().bp();
        }
        x$proxy10.gU = $thiz.cO;
        $thiz.cO = c.cO;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.cO === null)) {
      $thiz.cg = null;
      $thiz.cN = null;
      return false;
    } else {
      $thiz.cg = $thiz.cO.qY();
      if (($thiz.cN === $thiz.cO)) {
        var x$proxy12 = $thiz.cN;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().bp();
        }
        $thiz.cN = x$proxy12.gU;
      }
      $thiz.cO = $thiz.cO.gU;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.et) {
        return true;
      } else {
        if ((!(($thiz.cg !== null) && $thiz.cg.i()))) {
          continue;
        }
        $thiz.et = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.cg = null;
  this.cO = null;
  this.cN = null;
  this.et = false;
  this.cg = from;
  this.cO = null;
  this.cN = null;
  this.et = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.i = (function() {
  if (this.et) {
    return true;
  } else if ((this.cg !== null)) {
    if (this.cg.i()) {
      this.et = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.e = (function() {
  if (this.i()) {
    this.et = false;
    var x$proxy13 = this.cg;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().bp();
    }
    return x$proxy13.e();
  } else {
    return $m_sc_Iterator$().G.e();
  }
});
$p.fz = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.cO === null)) {
    this.cO = c;
    this.cN = c;
  } else {
    var x$proxy14 = this.cN;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().bp();
    }
    x$proxy14.gU = c;
    this.cN = c;
  }
  if ((this.cg === null)) {
    this.cg = $m_sc_Iterator$().G;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bQ)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  bQ: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.e2 > 0)) {
    if ($thiz.eu.i()) {
      $thiz.eu.e();
      $thiz.e2 = (($thiz.e2 - 1) | 0);
    } else {
      $thiz.e2 = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.cw < 0)) {
    return (-1);
  } else {
    var that = (($thiz.cw - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.eu = null;
  this.cw = 0;
  this.e2 = 0;
  this.eu = underlying;
  this.cw = limit;
  this.e2 = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.q = (function() {
  var size = this.eu.q();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.e2) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.cw < 0)) {
      return dropSize;
    } else {
      var self = this.cw;
      return ((self < dropSize) ? self : dropSize);
    }
  }
});
$p.i = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.cw !== 0) && this.eu.i());
});
$p.e = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.cw > 0)) {
    this.cw = ((this.cw - 1) | 0);
    return this.eu.e();
  } else {
    return ((this.cw < 0) ? this.eu.e() : $m_sc_Iterator$().G.e());
  }
});
$p.gy = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.cw < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var self = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((self < that) ? self : that);
  }
  var sum = ((this.e2 + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().G;
  } else if ((sum < 0)) {
    this.e2 = 2147483647;
    this.cw = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.eu, ((sum - 2147483647) | 0), rest))));
  } else {
    this.e2 = sum;
    this.cw = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  eX: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
function $f_sc_LinearSeqOps__length__I($thiz) {
  var these = $thiz;
  var len = 0;
  while ((!these.g())) {
    len = ((1 + len) | 0);
    these = these.o();
  }
  return len;
}
function $f_sc_LinearSeqOps__lengthCompare__I__I($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__I__sc_LinearSeq__I($thiz, len, 0, $thiz));
}
function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
  return ((x >= 0) && ($thiz.aH(x) > 0));
}
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  var skipped = $thiz.kt(n);
  if (skipped.g()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
  }
  return skipped.m();
}
function $f_sc_LinearSeqOps__exists__F1__Z($thiz, p) {
  var these = $thiz;
  while ((!these.g())) {
    if ((!(!p.d(these.m())))) {
      return true;
    }
    these = these.o();
  }
  return false;
}
function $f_sc_LinearSeqOps__foldLeft__O__F2__O($thiz, z, op) {
  var acc = z;
  var these = $thiz;
  while ((!these.g())) {
    acc = op.ca(acc, these.m());
    these = these.o();
  }
  return acc;
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $f_sc_LinearSeqOps__indexWhere__F1__I__I($thiz, p, from) {
  var i = ((from > 0) ? from : 0);
  var these = $thiz.kt(from);
  while ((!these.g())) {
    if ((!(!p.d(these.m())))) {
      return i;
    }
    i = ((1 + i) | 0);
    these = these.o();
  }
  return (-1);
}
function $p_sc_LinearSeqOps__loop$1__I__I__sc_LinearSeq__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.g()) | 0);
    } else {
      if ((!xs$tailLocal1.g())) {
        var i$tailLocal1$tmp1 = ((1 + i$tailLocal1) | 0);
        var xs$tailLocal1$tmp1 = xs$tailLocal1.o();
        i$tailLocal1 = i$tailLocal1$tmp1;
        xs$tailLocal1 = xs$tailLocal1$tmp1;
        continue;
      }
      return (-1);
    }
  }
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      if ((((!a$tailLocal1.g()) && (!b$tailLocal1.g())) && $m_sr_BoxesRunTime$().n(a$tailLocal1.m(), b$tailLocal1.m()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.o();
        var b$tailLocal1$tmp1 = b$tailLocal1.o();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.g() && b$tailLocal1.g());
    }
  }
}
/** @constructor */
function $c_sc_MapOps$$anon$2(outer) {
  this.ij = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ij = outer.c();
}
$p = $c_sc_MapOps$$anon$2.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_MapOps$$anon$2;
/** @constructor */
function $h_sc_MapOps$$anon$2() {
}
$h_sc_MapOps$$anon$2.prototype = $p;
$p.i = (function() {
  return this.ij.i();
});
$p.e = (function() {
  return this.ij.e().aa();
});
var $d_sc_MapOps$$anon$2 = new $TypeData().i($c_sc_MapOps$$anon$2, "scala.collection.MapOps$$anon$2", ({
  eZ: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_sc_Seq$() {
  this.e3 = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Seq$());
}
$p = $c_sc_Seq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sc_Seq$;
/** @constructor */
function $h_sc_Seq$() {
}
$h_sc_Seq$.prototype = $p;
var $d_sc_Seq$ = new $TypeData().i($c_sc_Seq$, "scala.collection.Seq$", ({
  f2: 1,
  aC: 1,
  a: 1,
  C: 1,
  V: 1
}));
var $n_sc_Seq$;
function $m_sc_Seq$() {
  if ((!$n_sc_Seq$)) {
    $n_sc_Seq$ = new $c_sc_Seq$();
  }
  return $n_sc_Seq$;
}
/** @constructor */
function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
  this.gZ = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.gZ = outer;
}
$p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
/** @constructor */
function $h_sc_StrictOptimizedLinearSeqOps$$anon$1() {
}
$h_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = $p;
$p.i = (function() {
  return (!this.gZ.g());
});
$p.e = (function() {
  var r = this.gZ.m();
  this.gZ = this.gZ.o();
  return r;
});
var $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
  f7: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
function $ct_sci_ChampBaseIterator__($thiz) {
  $thiz.aJ = 0;
  $thiz.ev = 0;
  $thiz.bO = (-1);
  return $thiz;
}
function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
  if (($thiz.cR === null)) {
    $thiz.cR = new $ac_I(($m_sci_Node$().h5 << 1));
    $thiz.ew = new ($d_sci_Node.r().C)($m_sci_Node$().h5);
  }
}
function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseIterator__($thiz);
  if (rootNode.hH()) {
    $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
  }
  if (rootNode.gs()) {
    $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
  }
  return $thiz;
}
function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.cj = node;
  $thiz.aJ = 0;
  $thiz.ev = node.hN();
}
function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
  $p_sci_ChampBaseIterator__initNodes__V($thiz);
  $thiz.bO = ((1 + $thiz.bO) | 0);
  var cursorIndex = ($thiz.bO << 1);
  var lengthIndex = ((1 + ($thiz.bO << 1)) | 0);
  $thiz.ew.a[$thiz.bO] = node;
  $thiz.cR.a[cursorIndex] = 0;
  $thiz.cR.a[lengthIndex] = node.hL();
}
function $p_sci_ChampBaseIterator__popNode__V($thiz) {
  $thiz.bO = (($thiz.bO - 1) | 0);
}
function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.bO >= 0)) {
    var cursorIndex = ($thiz.bO << 1);
    var lengthIndex = ((1 + ($thiz.bO << 1)) | 0);
    var nodeCursor = $thiz.cR.a[cursorIndex];
    if ((nodeCursor < $thiz.cR.a[lengthIndex])) {
      var \u03b41$ = $thiz.cR;
      \u03b41$.a[cursorIndex] = ((1 + \u03b41$.a[cursorIndex]) | 0);
      var nextNode = $thiz.ew.a[$thiz.bO].hG(nodeCursor);
      if (nextNode.hH()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
      }
      if (nextNode.gs()) {
        $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, nextNode);
        return true;
      }
    } else {
      $p_sci_ChampBaseIterator__popNode__V($thiz);
    }
  }
  return false;
}
/** @constructor */
function $c_sci_ChampBaseIterator() {
  this.aJ = 0;
  this.ev = 0;
  this.cj = null;
  this.bO = 0;
  this.cR = null;
  this.ew = null;
}
$p = $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseIterator;
/** @constructor */
function $h_sci_ChampBaseIterator() {
}
$h_sci_ChampBaseIterator.prototype = $p;
$p.i = (function() {
  return ((this.aJ < this.ev) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
});
function $ct_sci_ChampBaseReverseIterator__($thiz) {
  $thiz.ex = (-1);
  $thiz.cy = (-1);
  $thiz.h1 = new $ac_I(((1 + $m_sci_Node$().h5) | 0));
  $thiz.h2 = new ($d_sci_Node.r().C)(((1 + $m_sci_Node$().h5) | 0));
  return $thiz;
}
function $ct_sci_ChampBaseReverseIterator__sci_Node__($thiz, rootNode) {
  $ct_sci_ChampBaseReverseIterator__($thiz);
  $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
  $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
  return $thiz;
}
function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
  $thiz.ip = node;
  $thiz.ex = ((node.hN() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
  $thiz.cy = ((1 + $thiz.cy) | 0);
  $thiz.h2.a[$thiz.cy] = node;
  $thiz.h1.a[$thiz.cy] = ((node.hL() - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
  $thiz.cy = (($thiz.cy - 1) | 0);
}
function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
  while (($thiz.cy >= 0)) {
    var nodeCursor = $thiz.h1.a[$thiz.cy];
    $thiz.h1.a[$thiz.cy] = ((nodeCursor - 1) | 0);
    if ((nodeCursor >= 0)) {
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, $thiz.h2.a[$thiz.cy].hG(nodeCursor));
    } else {
      var currNode = $thiz.h2.a[$thiz.cy];
      $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
      if (currNode.gs()) {
        $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
        return true;
      }
    }
  }
  return false;
}
/** @constructor */
function $c_sci_ChampBaseReverseIterator() {
  this.ex = 0;
  this.ip = null;
  this.cy = 0;
  this.h1 = null;
  this.h2 = null;
}
$p = $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_ChampBaseReverseIterator;
/** @constructor */
function $h_sci_ChampBaseReverseIterator() {
}
$h_sci_ChampBaseReverseIterator.prototype = $p;
$p.i = (function() {
  return ((this.ex >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
});
function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
  return ($thiz.gc !== null);
}
function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.s(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.s(ix, result, destPos, length);
  return result;
}
function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
  var dataIx = bm.dm(bitpos);
  var idx = (dataIx << 1);
  var src = bm.b2;
  var dst = new $ac_O(((2 + src.a.length) | 0));
  src.s(0, dst, 0, idx);
  dst.a[idx] = key;
  dst.a[((1 + idx) | 0)] = value;
  var destPos = ((2 + idx) | 0);
  var length = ((src.a.length - idx) | 0);
  src.s(idx, dst, destPos, length);
  var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, bm.ch, dataIx, originalHash);
  bm.ae = (bm.ae | bitpos);
  bm.b2 = dst;
  bm.ch = dstHashes;
  bm.bt = ((1 + bm.bt) | 0);
  bm.c3 = ((bm.c3 + keyHash) | 0);
}
function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
    $p_sci_HashMapBuilder__copyElems__V($thiz);
  }
  $thiz.gc = null;
}
function $p_sci_HashMapBuilder__copyElems__V($thiz) {
  $thiz.dB = $thiz.dB.nD();
}
/** @constructor */
function $c_sci_HashMapBuilder() {
  this.gc = null;
  this.dB = null;
  this.dB = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().jx, $m_s_Array$EmptyArrays$().gN, 0, 0);
}
$p = $c_sci_HashMapBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashMapBuilder;
/** @constructor */
function $h_sci_HashMapBuilder() {
}
$h_sci_HashMapBuilder.prototype = $p;
$p.aO = (function(size) {
});
$p.gB = (function(mapNode, key, value, originalHash, keyHash, shift) {
  if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
    var mask = $m_sci_Node$().cI(keyHash, shift);
    var bitpos = $m_sci_Node$().bZ(mask);
    if (((mapNode.ae & bitpos) !== 0)) {
      var index = $m_sci_Node$().bM(mapNode.ae, mask, bitpos);
      var key0 = mapNode.dO(index);
      var key0UnimprovedHash = mapNode.cn(index);
      if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().n(key0, key))) {
        mapNode.b2.a[((1 + (index << 1)) | 0)] = value;
        return (void 0);
      } else {
        var value0 = mapNode.dq(index);
        var key0Hash = $m_sc_Hashing$().bE(key0UnimprovedHash);
        var subNodeNew = mapNode.kU(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
        mapNode.rh(bitpos, key0Hash, subNodeNew);
        return (void 0);
      }
    } else if (((mapNode.ay & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().bM(mapNode.ay, mask, bitpos);
      var subNode = mapNode.dp(index$2);
      var beforeSize = subNode.K();
      var beforeHash = subNode.bS();
      this.gB(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
      mapNode.bt = ((mapNode.bt + ((subNode.K() - beforeSize) | 0)) | 0);
      mapNode.c3 = ((mapNode.c3 + ((subNode.bS() - beforeHash) | 0)) | 0);
      return (void 0);
    } else {
      $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, mapNode, bitpos, key, originalHash, keyHash, value);
      return (void 0);
    }
  }
  if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
    var index$3 = mapNode.gu(key);
    if ((index$3 < 0)) {
      mapNode.aQ = mapNode.aQ.dL($ct_T2__O__O__(new $c_T2(), key, value));
      return (void 0);
    } else {
      mapNode.aQ = mapNode.aQ.ep(index$3, $ct_T2__O__O__(new $c_T2(), key, value));
      return (void 0);
    }
  }
  throw new $c_s_MatchError(mapNode);
});
$p.kW = (function() {
  if ((this.dB.bt === 0)) {
    return $m_sci_HashMap$().gb;
  } else if ((this.gc !== null)) {
    return this.gc;
  } else {
    this.gc = new $c_sci_HashMap(this.dB);
    return this.gc;
  }
});
$p.nr = (function(elem) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().y(elem.aa());
  var im = $m_sc_Hashing$().bE(h);
  this.gB(this.dB, elem.aa(), elem.ab(), h, im, 0);
  return this;
});
$p.fy = (function(key, value) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  var originalHash = $m_sr_Statics$().y(key);
  this.gB(this.dB, key, value, originalHash, $m_sc_Hashing$().bE(originalHash), 0);
  return this;
});
$p.kh = (function(xs) {
  $p_sci_HashMapBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashMap)) {
    new $c_sci_HashMapBuilder$$anon$1(xs, this);
  } else if ((xs instanceof $c_scm_HashMap)) {
    var iter = xs.og();
    while (iter.i()) {
      var next = iter.e();
      var improvedHash = next.dJ;
      var originalHash = (improvedHash ^ ((improvedHash >>> 16) | 0));
      var hash = $m_sc_Hashing$().bE(originalHash);
      this.gB(this.dB, next.eQ, next.cD, originalHash, hash, 0);
    }
  } else if (false) {
    var iter$2 = xs.nP();
    while (iter$2.i()) {
      var next$2 = iter$2.e();
      var originalHash$2 = xs.sk(next$2.o9());
      var hash$2 = $m_sc_Hashing$().bE(originalHash$2);
      this.gB(this.dB, next$2.od(), next$2.oR(), originalHash$2, hash$2, 0);
    }
  } else if ($is_sci_Map(xs)) {
    xs.dn(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((key$2, value$2) => this.fy(key$2, value$2))));
  } else {
    var it = xs.c();
    while (it.i()) {
      this.nr(it.e());
    }
  }
  return this;
});
$p.aN = (function() {
  return this.kW();
});
$p.ac = (function(elem) {
  return this.nr(elem);
});
$p.aU = (function(elems) {
  return this.kh(elems);
});
var $d_sci_HashMapBuilder = new $TypeData().i($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
  fl: 1,
  z: 1,
  A: 1,
  F: 1,
  a7: 1
}));
function $p_sci_HashSetBuilder__isAliased__Z($thiz) {
  return ($thiz.fh !== null);
}
function $p_sci_HashSetBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
  if ((ix < 0)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  if ((ix > as.a.length)) {
    throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
  }
  var result = new $ac_I(((1 + as.a.length) | 0));
  as.s(0, result, 0, ix);
  result.a[ix] = elem;
  var destPos = ((1 + ix) | 0);
  var length = ((as.a.length - ix) | 0);
  as.s(ix, result, destPos, length);
  return result;
}
function $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V($thiz, bm, bitpos, key, originalHash, keyHash) {
  var dataIx = bm.dm(bitpos);
  var src = bm.bm;
  var dst = new $ac_O(((1 + src.a.length) | 0));
  src.s(0, dst, 0, dataIx);
  dst.a[dataIx] = key;
  var destPos = ((1 + dataIx) | 0);
  var length = ((src.a.length - dataIx) | 0);
  src.s(dataIx, dst, destPos, length);
  var dstHashes = $p_sci_HashSetBuilder__insertElement__AI__I__I__AI($thiz, bm.cx, dataIx, originalHash);
  bm.a6 = (bm.a6 | bitpos);
  bm.bm = dst;
  bm.cx = dstHashes;
  bm.bu = ((1 + bm.bu) | 0);
  bm.ci = ((bm.ci + keyHash) | 0);
}
function $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V($thiz, bm, bitpos, elem) {
  var dataIx = bm.dm(bitpos);
  bm.bm.a[dataIx] = elem;
}
function $p_sci_HashSetBuilder__ensureUnaliased__V($thiz) {
  if ($p_sci_HashSetBuilder__isAliased__Z($thiz)) {
    $p_sci_HashSetBuilder__copyElems__V($thiz);
  }
  $thiz.fh = null;
}
function $p_sci_HashSetBuilder__copyElems__V($thiz) {
  $thiz.fi = $thiz.fi.nE();
}
/** @constructor */
function $c_sci_HashSetBuilder() {
  this.fh = null;
  this.fi = null;
  this.fh = null;
  this.fi = new $c_sci_BitmapIndexedSetNode(0, 0, $m_s_Array$EmptyArrays$().jx, $m_s_Array$EmptyArrays$().gN, 0, 0);
}
$p = $c_sci_HashSetBuilder.prototype = new $h_O();
$p.constructor = $c_sci_HashSetBuilder;
/** @constructor */
function $h_sci_HashSetBuilder() {
}
$h_sci_HashSetBuilder.prototype = $p;
$p.aO = (function(size) {
});
$p.l4 = (function(setNode, element, originalHash, elementHash, shift) {
  if ((setNode instanceof $c_sci_BitmapIndexedSetNode)) {
    var mask = $m_sci_Node$().cI(elementHash, shift);
    var bitpos = $m_sci_Node$().bZ(mask);
    if (((setNode.a6 & bitpos) !== 0)) {
      var index = $m_sci_Node$().bM(setNode.a6, mask, bitpos);
      var element0 = setNode.dR(index);
      var element0UnimprovedHash = setNode.cn(index);
      if (((element0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().n(element0, element))) {
        $p_sci_HashSetBuilder__setValue__sci_BitmapIndexedSetNode__I__O__V(this, setNode, bitpos, element0);
        return (void 0);
      } else {
        var element0Hash = $m_sc_Hashing$().bE(element0UnimprovedHash);
        var subNodeNew = setNode.kT(element0, element0UnimprovedHash, element0Hash, element, originalHash, elementHash, ((5 + shift) | 0));
        setNode.ri(bitpos, element0Hash, subNodeNew);
        return (void 0);
      }
    } else if (((setNode.aP & bitpos) !== 0)) {
      var index$2 = $m_sci_Node$().bM(setNode.aP, mask, bitpos);
      var subNode = setNode.dP(index$2);
      var beforeSize = subNode.K();
      var beforeHashCode = subNode.bS();
      this.l4(subNode, element, originalHash, elementHash, ((5 + shift) | 0));
      setNode.bu = ((setNode.bu + ((subNode.K() - beforeSize) | 0)) | 0);
      setNode.ci = ((setNode.ci + ((subNode.bS() - beforeHashCode) | 0)) | 0);
      return (void 0);
    } else {
      $p_sci_HashSetBuilder__insertValue__sci_BitmapIndexedSetNode__I__O__I__I__V(this, setNode, bitpos, element, originalHash, elementHash);
      return (void 0);
    }
  }
  if ((setNode instanceof $c_sci_HashCollisionSetNode)) {
    var index$3 = $f_sc_SeqOps__indexOf__O__I__I(setNode.b3, element, 0);
    if ((index$3 < 0)) {
      setNode.b3 = setNode.b3.dL(element);
      return (void 0);
    } else {
      setNode.b3 = setNode.b3.ep(index$3, element);
      return (void 0);
    }
  }
  throw new $c_s_MatchError(setNode);
});
$p.kX = (function() {
  if ((this.fi.bu === 0)) {
    return $m_sci_HashSet$().is;
  } else if ((this.fh !== null)) {
    return this.fh;
  } else {
    this.fh = new $c_sci_HashSet(this.fi);
    return this.fh;
  }
});
$p.iM = (function(elem) {
  $p_sci_HashSetBuilder__ensureUnaliased__V(this);
  var h = $m_sr_Statics$().y(elem);
  var im = $m_sc_Hashing$().bE(h);
  this.l4(this.fi, elem, h, im, 0);
  return this;
});
$p.ki = (function(xs) {
  $p_sci_HashSetBuilder__ensureUnaliased__V(this);
  if ((xs instanceof $c_sci_HashSet)) {
    new $c_sci_HashSetBuilder$$anon$1(xs, this);
  } else {
    var it = xs.c();
    while (it.i()) {
      this.iM(it.e());
    }
  }
  return this;
});
$p.aN = (function() {
  return this.kX();
});
$p.ac = (function(elem) {
  return this.iM(elem);
});
$p.aU = (function(elems) {
  return this.ki(elems);
});
var $d_sci_HashSetBuilder = new $TypeData().i($c_sci_HashSetBuilder, "scala.collection.immutable.HashSetBuilder", ({
  fo: 1,
  z: 1,
  A: 1,
  F: 1,
  a7: 1
}));
/** @constructor */
function $c_sci_IndexedSeq$() {
  this.e3 = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$());
}
$p = $c_sci_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_IndexedSeq$;
/** @constructor */
function $h_sci_IndexedSeq$() {
}
$h_sci_IndexedSeq$.prototype = $p;
$p.nZ = (function(it) {
  return ($is_sci_IndexedSeq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.fB.call(this, it));
});
$p.fB = (function(it) {
  return this.nZ(it);
});
$p.a4 = (function(source) {
  return this.nZ(source);
});
var $d_sci_IndexedSeq$ = new $TypeData().i($c_sci_IndexedSeq$, "scala.collection.immutable.IndexedSeq$", ({
  fq: 1,
  aC: 1,
  a: 1,
  C: 1,
  V: 1
}));
var $n_sci_IndexedSeq$;
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$();
  }
  return $n_sci_IndexedSeq$;
}
/** @constructor */
function $c_sci_LazyList$LazyBuilder() {
  this.gd = null;
  this.mz = null;
  this.pZ();
}
$p = $c_sci_LazyList$LazyBuilder.prototype = new $h_O();
$p.constructor = $c_sci_LazyList$LazyBuilder;
/** @constructor */
function $h_sci_LazyList$LazyBuilder() {
}
$h_sci_LazyList$LazyBuilder.prototype = $p;
$p.aO = (function(size) {
});
$p.pZ = (function() {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.mz = ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.kv()))));
  this.gd = deferred;
});
$p.rD = (function() {
  this.gd.kM(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().aR)));
  return this.mz;
});
$p.pB = (function(elem) {
  var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
  this.gd.kM(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $m_sci_LazyList$();
    return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), elem, ($m_sci_LazyList$(), $ct_sci_LazyList__O__(new $c_sci_LazyList(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.kv())))));
  })));
  this.gd = deferred;
  return this;
});
$p.po = (function(xs) {
  if ((xs.q() !== 0)) {
    var deferred = new $c_sci_LazyList$LazyBuilder$DeferredState();
    this.gd.kM(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sci_LazyList$().os(xs.c(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => deferred.kv()))))));
    this.gd = deferred;
  }
  return this;
});
$p.aN = (function() {
  return this.rD();
});
$p.ac = (function(elem) {
  return this.pB(elem);
});
$p.aU = (function(elems) {
  return this.po(elems);
});
var $d_sci_LazyList$LazyBuilder = new $TypeData().i($c_sci_LazyList$LazyBuilder, "scala.collection.immutable.LazyList$LazyBuilder", ({
  fv: 1,
  z: 1,
  A: 1,
  F: 1,
  a7: 1
}));
/** @constructor */
function $c_sci_LazyList$LazyIterator(lazyList) {
  this.ge = null;
  this.ge = lazyList;
}
$p = $c_sci_LazyList$LazyIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_LazyList$LazyIterator;
/** @constructor */
function $h_sci_LazyList$LazyIterator() {
}
$h_sci_LazyList$LazyIterator.prototype = $p;
$p.i = (function() {
  return (!($p_sci_LazyList__evaluated__sci_LazyList(this.ge) === $m_sci_LazyList$().aR));
});
$p.e = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this.ge) === $m_sci_LazyList$().aR)) {
    return $m_sc_Iterator$().G.e();
  } else {
    var res = this.ge.m();
    this.ge = this.ge.bN();
    return res;
  }
});
var $d_sci_LazyList$LazyIterator = new $TypeData().i($c_sci_LazyList$LazyIterator, "scala.collection.immutable.LazyList$LazyIterator", ({
  fx: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_sci_List$() {
  this.p4 = null;
  $n_sci_List$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
  this.p4 = new $c_sci_List$$anon$1();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
$p.ek = (function(elems) {
  return $m_sci_Nil$().cd(elems);
});
$p.V = (function() {
  return new $c_scm_ListBuffer();
});
$p.a4 = (function(source) {
  return $m_sci_Nil$().cd(source);
});
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  fC: 1,
  a: 1,
  C: 1,
  V: 1,
  ar: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
function $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.gf = outer;
  $thiz.eA = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map2$Map2Iterator() {
  this.eA = 0;
  this.gf = null;
}
$p = $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map2$Map2Iterator;
/** @constructor */
function $h_sci_Map$Map2$Map2Iterator() {
}
$h_sci_Map$Map2$Map2Iterator.prototype = $p;
$p.i = (function() {
  return (this.eA < 2);
});
$p.e = (function() {
  matchResult5$1: {
    var result;
    var x23 = this.eA;
    if ((x23 === 0)) {
      var result = $ct_T2__O__O__(new $c_T2(), this.gf.cS, this.gf.e6);
      break matchResult5$1;
    }
    if ((x23 === 1)) {
      var result = $ct_T2__O__O__(new $c_T2(), this.gf.cT, this.gf.e7);
      break matchResult5$1;
    }
    var result = $m_sc_Iterator$().G.e();
  }
  this.eA = ((1 + this.eA) | 0);
  return result;
});
$p.cG = (function(n) {
  this.eA = ((this.eA + n) | 0);
  return this;
});
function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.eB = outer;
  $thiz.eC = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map3$Map3Iterator() {
  this.eC = 0;
  this.eB = null;
}
$p = $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map3$Map3Iterator;
/** @constructor */
function $h_sci_Map$Map3$Map3Iterator() {
}
$h_sci_Map$Map3$Map3Iterator.prototype = $p;
$p.i = (function() {
  return (this.eC < 3);
});
$p.e = (function() {
  var result;
  switch (this.eC) {
    case 0: {
      var result = $ct_T2__O__O__(new $c_T2(), this.eB.cz, this.eB.dC);
      break;
    }
    case 1: {
      var result = $ct_T2__O__O__(new $c_T2(), this.eB.cA, this.eB.dD);
      break;
    }
    case 2: {
      var result = $ct_T2__O__O__(new $c_T2(), this.eB.cB, this.eB.dE);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().G.e();
    }
  }
  this.eC = ((1 + this.eC) | 0);
  return result;
});
$p.cG = (function(n) {
  this.eC = ((this.eC + n) | 0);
  return this;
});
function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.dF = outer;
  $thiz.eD = 0;
  return $thiz;
}
/** @constructor */
function $c_sci_Map$Map4$Map4Iterator() {
  this.eD = 0;
  this.dF = null;
}
$p = $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Map$Map4$Map4Iterator;
/** @constructor */
function $h_sci_Map$Map4$Map4Iterator() {
}
$h_sci_Map$Map4$Map4Iterator.prototype = $p;
$p.i = (function() {
  return (this.eD < 4);
});
$p.e = (function() {
  var result;
  switch (this.eD) {
    case 0: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dF.c5, this.dF.cU);
      break;
    }
    case 1: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dF.c6, this.dF.cV);
      break;
    }
    case 2: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dF.c7, this.dF.cW);
      break;
    }
    case 3: {
      var result = $ct_T2__O__O__(new $c_T2(), this.dF.c8, this.dF.cX);
      break;
    }
    default: {
      var result = $m_sc_Iterator$().G.e();
    }
  }
  this.eD = ((1 + this.eD) | 0);
  return result;
});
$p.cG = (function(n) {
  this.eD = ((this.eD + n) | 0);
  return this;
});
/** @constructor */
function $c_sci_MapBuilderImpl() {
  this.e8 = null;
  this.h3 = false;
  this.fj = null;
  this.e8 = $m_sci_Map$EmptyMap$();
  this.h3 = false;
}
$p = $c_sci_MapBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_MapBuilderImpl;
/** @constructor */
function $h_sci_MapBuilderImpl() {
}
$h_sci_MapBuilderImpl.prototype = $p;
$p.aO = (function(size) {
});
$p.ol = (function() {
  return (this.h3 ? this.fj.kW() : this.e8);
});
$p.pz = (function(key, value) {
  if (this.h3) {
    this.fj.fy(key, value);
  } else if ((this.e8.K() < 4)) {
    this.e8 = this.e8.fM(key, value);
  } else if (this.e8.b8(key)) {
    this.e8 = this.e8.fM(key, value);
  } else {
    this.h3 = true;
    if ((this.fj === null)) {
      this.fj = new $c_sci_HashMapBuilder();
    }
    this.e8.pX(this.fj);
    this.fj.fy(key, value);
  }
  return this;
});
$p.nk = (function(xs) {
  return (this.h3 ? (this.fj.kh(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.aN = (function() {
  return this.ol();
});
$p.ac = (function(elem) {
  return this.pz(elem.aa(), elem.ab());
});
$p.aU = (function(elems) {
  return this.nk(elems);
});
var $d_sci_MapBuilderImpl = new $TypeData().i($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
  fO: 1,
  z: 1,
  A: 1,
  F: 1,
  a7: 1
}));
/** @constructor */
function $c_sci_Seq$() {
  this.e3 = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_List$());
}
$p = $c_sci_Seq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_sci_Seq$;
/** @constructor */
function $h_sci_Seq$() {
}
$h_sci_Seq$.prototype = $p;
$p.o0 = (function(it) {
  return ($is_sci_Seq(it) ? it : $c_sc_SeqFactory$Delegate.prototype.fB.call(this, it));
});
$p.fB = (function(it) {
  return this.o0(it);
});
$p.a4 = (function(source) {
  return this.o0(source);
});
var $d_sci_Seq$ = new $TypeData().i($c_sci_Seq$, "scala.collection.immutable.Seq$", ({
  fW: 1,
  aC: 1,
  a: 1,
  C: 1,
  V: 1
}));
var $n_sci_Seq$;
function $m_sci_Seq$() {
  if ((!$n_sci_Seq$)) {
    $n_sci_Seq$ = new $c_sci_Seq$();
  }
  return $n_sci_Seq$;
}
/** @constructor */
function $c_sci_SetBuilderImpl() {
  this.fs = null;
  this.h6 = false;
  this.ft = null;
  this.fs = $m_sci_Set$EmptySet$();
  this.h6 = false;
}
$p = $c_sci_SetBuilderImpl.prototype = new $h_O();
$p.constructor = $c_sci_SetBuilderImpl;
/** @constructor */
function $h_sci_SetBuilderImpl() {
}
$h_sci_SetBuilderImpl.prototype = $p;
$p.aO = (function(size) {
});
$p.om = (function() {
  return (this.h6 ? this.ft.kX() : this.fs);
});
$p.pC = (function(elem) {
  if (this.h6) {
    this.ft.iM(elem);
  } else if ((this.fs.K() < 4)) {
    this.fs = this.fs.dT(elem);
  } else if ((!this.fs.b8(elem))) {
    this.h6 = true;
    if ((this.ft === null)) {
      this.ft = new $c_sci_HashSetBuilder();
    }
    this.fs.pY(this.ft);
    this.ft.iM(elem);
  }
  return this;
});
$p.nl = (function(xs) {
  return (this.h6 ? (this.ft.ki(xs), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.aN = (function() {
  return this.om();
});
$p.ac = (function(elem) {
  return this.pC(elem);
});
$p.aU = (function(elems) {
  return this.nl(elems);
});
var $d_sci_SetBuilderImpl = new $TypeData().i($c_sci_SetBuilderImpl, "scala.collection.immutable.SetBuilderImpl", ({
  g6: 1,
  z: 1,
  A: 1,
  F: 1,
  a7: 1
}));
/** @constructor */
function $c_sci_Vector$() {
  this.mH = 0;
  this.mI = null;
  $n_sci_Vector$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().kP($m_jl_System$SystemProperties$().kJ("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 250;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.mH = $x_1;
  this.mI = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
}
$p = $c_sci_Vector$.prototype = new $h_O();
$p.constructor = $c_sci_Vector$;
/** @constructor */
function $h_sci_Vector$() {
}
$h_sci_Vector$.prototype = $p;
$p.ek = (function(elems) {
  return this.iT(elems);
});
$p.iT = (function(it) {
  if ((it instanceof $c_sci_Vector)) {
    return it;
  } else {
    var knownSize = it.q();
    if ((knownSize === 0)) {
      return $m_sci_Vector0$();
    } else if (((((knownSize - 1) | 0) >>> 0) <= 31)) {
      matchResult3: {
        var $x_1;
        if ((it instanceof $c_sci_ArraySeq$ofRef)) {
          var x = it.aV().bk();
          if (((x !== null) && (x === $d_O.l()))) {
            var $x_1 = it.cQ;
            break matchResult3;
          }
        }
        if ($is_sci_Iterable(it)) {
          var a1 = new $ac_O(knownSize);
          it.bh(a1, 0, 2147483647);
          var $x_1 = a1;
          break matchResult3;
        }
        var a1$2 = new $ac_O(knownSize);
        it.c().bh(a1$2, 0, 2147483647);
        var $x_1 = a1$2;
      }
      return new $c_sci_Vector1($x_1);
    } else {
      return new $c_sci_VectorBuilder().nm(it).on();
    }
  }
});
$p.a4 = (function(source) {
  return this.iT(source);
});
$p.V = (function() {
  return new $c_sci_VectorBuilder();
});
var $d_sci_Vector$ = new $TypeData().i($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
  gd: 1,
  a: 1,
  C: 1,
  V: 1,
  ar: 1
}));
var $n_sci_Vector$;
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$();
  }
  return $n_sci_Vector$;
}
function $p_sci_VectorBuilder__leftAlignPrefix__V($thiz) {
  var a = null;
  var aParent = null;
  if (($thiz.S >= 6)) {
    a = $thiz.bf;
    var i = (($thiz.N >>> 25) | 0);
    if ((i > 0)) {
      var src = a;
      var dest = a;
      var length = ((64 - i) | 0);
      src.s(i, dest, 0, length);
    }
    var num = $thiz.N;
    var t = (((num >> 24) >>> 7) | 0);
    var newOffset = (((33554431 & ((num + t) | 0)) - t) | 0);
    $thiz.C = (($thiz.C - (($thiz.N - newOffset) | 0)) | 0);
    $thiz.N = newOffset;
    if (((($thiz.C >>> 25) | 0) === 0)) {
      $thiz.S = 5;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.S >= 5)) {
    if ((a === null)) {
      a = $thiz.at;
    }
    var i$2 = (31 & (($thiz.N >>> 20) | 0));
    if (($thiz.S === 5)) {
      if ((i$2 > 0)) {
        var src$1 = a;
        var dest$1 = a;
        var length$1 = ((32 - i$2) | 0);
        src$1.s(i$2, dest$1, 0, length$1);
      }
      $thiz.at = a;
      var num$1 = $thiz.N;
      var t$1 = (((num$1 >> 19) >>> 12) | 0);
      var newOffset$1 = (((1048575 & ((num$1 + t$1) | 0)) - t$1) | 0);
      $thiz.C = (($thiz.C - (($thiz.N - newOffset$1) | 0)) | 0);
      $thiz.N = newOffset$1;
      if (((($thiz.C >>> 20) | 0) === 0)) {
        $thiz.S = 4;
      }
    } else {
      if ((i$2 > 0)) {
        a = $m_ju_Arrays$().aM(a, i$2, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.S >= 4)) {
    if ((a === null)) {
      a = $thiz.a3;
    }
    var i$3 = (31 & (($thiz.N >>> 15) | 0));
    if (($thiz.S === 4)) {
      if ((i$3 > 0)) {
        var src$2 = a;
        var dest$2 = a;
        var length$2 = ((32 - i$3) | 0);
        src$2.s(i$3, dest$2, 0, length$2);
      }
      $thiz.a3 = a;
      var num$2 = $thiz.N;
      var t$2 = (((num$2 >> 14) >>> 17) | 0);
      var newOffset$2 = (((32767 & ((num$2 + t$2) | 0)) - t$2) | 0);
      $thiz.C = (($thiz.C - (($thiz.N - newOffset$2) | 0)) | 0);
      $thiz.N = newOffset$2;
      if (((($thiz.C >>> 15) | 0) === 0)) {
        $thiz.S = 3;
      }
    } else {
      if ((i$3 > 0)) {
        a = $m_ju_Arrays$().aM(a, i$3, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.S >= 3)) {
    if ((a === null)) {
      a = $thiz.O;
    }
    var i$4 = (31 & (($thiz.N >>> 10) | 0));
    if (($thiz.S === 3)) {
      if ((i$4 > 0)) {
        var src$3 = a;
        var dest$3 = a;
        var length$3 = ((32 - i$4) | 0);
        src$3.s(i$4, dest$3, 0, length$3);
      }
      $thiz.O = a;
      var num$3 = $thiz.N;
      var t$3 = (((num$3 >> 9) >>> 22) | 0);
      var newOffset$3 = (((1023 & ((num$3 + t$3) | 0)) - t$3) | 0);
      $thiz.C = (($thiz.C - (($thiz.N - newOffset$3) | 0)) | 0);
      $thiz.N = newOffset$3;
      if (((($thiz.C >>> 10) | 0) === 0)) {
        $thiz.S = 2;
      }
    } else {
      if ((i$4 > 0)) {
        a = $m_ju_Arrays$().aM(a, i$4, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.S >= 2)) {
    if ((a === null)) {
      a = $thiz.H;
    }
    var i$5 = (31 & (($thiz.N >>> 5) | 0));
    if (($thiz.S === 2)) {
      if ((i$5 > 0)) {
        var src$4 = a;
        var dest$4 = a;
        var length$4 = ((32 - i$5) | 0);
        src$4.s(i$5, dest$4, 0, length$4);
      }
      $thiz.H = a;
      var num$4 = $thiz.N;
      var t$4 = (((num$4 >> 4) >>> 27) | 0);
      var newOffset$4 = (((31 & ((num$4 + t$4) | 0)) - t$4) | 0);
      $thiz.C = (($thiz.C - (($thiz.N - newOffset$4) | 0)) | 0);
      $thiz.N = newOffset$4;
      if (((($thiz.C >>> 5) | 0) === 0)) {
        $thiz.S = 1;
      }
    } else {
      if ((i$5 > 0)) {
        a = $m_ju_Arrays$().aM(a, i$5, 32);
      }
      aParent.a[0] = a;
    }
    aParent = a;
    a = a.a[0];
  }
  if (($thiz.S >= 1)) {
    if ((a === null)) {
      a = $thiz.ah;
    }
    var i$6 = (31 & $thiz.N);
    if (($thiz.S === 1)) {
      if ((i$6 > 0)) {
        var src$5 = a;
        var dest$5 = a;
        var length$5 = ((32 - i$6) | 0);
        src$5.s(i$6, dest$5, 0, length$5);
      }
      $thiz.ah = a;
      $thiz.P = (($thiz.P - $thiz.N) | 0);
      $thiz.N = 0;
    } else {
      if ((i$6 > 0)) {
        a = $m_ju_Arrays$().aM(a, i$6, 32);
      }
      aParent.a[0] = a;
    }
  }
  $thiz.it = false;
}
function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
  var dl = data.a.length;
  if ((dl > 0)) {
    if (($thiz.P === 32)) {
      $p_sci_VectorBuilder__advance__V($thiz);
    }
    var a = ((32 - $thiz.P) | 0);
    var copy1 = ((a < dl) ? a : dl);
    var copy2 = ((dl - copy1) | 0);
    var dest = $thiz.ah;
    var destPos = $thiz.P;
    data.s(0, dest, destPos, copy1);
    $thiz.P = (($thiz.P + copy1) | 0);
    if ((copy2 > 0)) {
      $p_sci_VectorBuilder__advance__V($thiz);
      var dest$1 = $thiz.ah;
      data.s(copy1, dest$1, 0, copy2);
      $thiz.P = (($thiz.P + copy2) | 0);
    }
  }
}
function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
  if ((slice.a.length === 0)) {
    return (void 0);
  }
  if (($thiz.P === 32)) {
    $p_sci_VectorBuilder__advance__V($thiz);
  }
  var sl = slice.a.length;
  switch (dim) {
    case 2: {
      var a = (31 & ((((1024 - $thiz.C) | 0) >>> 5) | 0));
      var copy1 = ((a < sl) ? a : sl);
      var copy2 = ((sl - copy1) | 0);
      var destPos = (31 & (($thiz.C >>> 5) | 0));
      var dest = $thiz.H;
      slice.s(0, dest, destPos, copy1);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
      if ((copy2 > 0)) {
        var dest$1 = $thiz.H;
        slice.s(copy1, dest$1, 0, copy2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
      }
      break;
    }
    case 3: {
      var num = $thiz.C;
      var t = (((num >> 9) >>> 22) | 0);
      if (((((1023 & ((num + t) | 0)) - t) | 0) !== 0)) {
        var f = ((e$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3, 2);
        });
        var len = slice.a.length;
        var i = 0;
        if ((slice !== null)) {
          while ((i < len)) {
            var x0 = slice.a[i];
            f(x0);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i < len)) {
            var x0$1 = slice.a[i];
            f(x0$1);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i < len)) {
            var x0$2 = slice.a[i];
            f(x0$2);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i < len)) {
            var $x_1 = slice.a;
            var $x_2 = (i << 1);
            var x0$3_$_lo = $x_1[$x_2];
            var x0$3_$_hi = $x_1[(($x_2 + 1) | 0)];
            f($bL(x0$3_$_lo, x0$3_$_hi));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i < len)) {
            var x0$4 = slice.a[i];
            f(x0$4);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i < len)) {
            var x0$5 = slice.a[i];
            f($bC(x0$5));
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i < len)) {
            var x0$6 = slice.a[i];
            f(x0$6);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i < len)) {
            var x0$7 = slice.a[i];
            f(x0$7);
            i = ((1 + i) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i < len)) {
            var x0$8 = slice.a[i];
            f(x0$8);
            i = ((1 + i) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$1 = (31 & ((((32768 - $thiz.C) | 0) >>> 10) | 0));
      var copy1$2 = ((a$1 < sl) ? a$1 : sl);
      var copy2$2 = ((sl - copy1$2) | 0);
      var destPos$2 = (31 & (($thiz.C >>> 10) | 0));
      var dest$2 = $thiz.O;
      slice.s(0, dest$2, destPos$2, copy1$2);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
      if ((copy2$2 > 0)) {
        var dest$3 = $thiz.O;
        slice.s(copy1$2, dest$3, 0, copy2$2);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
      }
      break;
    }
    case 4: {
      var num$1 = $thiz.C;
      var t$1 = (((num$1 >> 14) >>> 17) | 0);
      if (((((32767 & ((num$1 + t$1) | 0)) - t$1) | 0) !== 0)) {
        var f$1 = ((e$3$1) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3$1, 3);
        });
        var len$1 = slice.a.length;
        var i$1 = 0;
        if ((slice !== null)) {
          while ((i$1 < len$1)) {
            var x0$9 = slice.a[i$1];
            f$1(x0$9);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$1 < len$1)) {
            var x0$10 = slice.a[i$1];
            f$1(x0$10);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$1 < len$1)) {
            var x0$11 = slice.a[i$1];
            f$1(x0$11);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$1 < len$1)) {
            var $x_3 = slice.a;
            var $x_4 = (i$1 << 1);
            var x0$12_$_lo = $x_3[$x_4];
            var x0$12_$_hi = $x_3[(($x_4 + 1) | 0)];
            f$1($bL(x0$12_$_lo, x0$12_$_hi));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$1 < len$1)) {
            var x0$13 = slice.a[i$1];
            f$1(x0$13);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$1 < len$1)) {
            var x0$14 = slice.a[i$1];
            f$1($bC(x0$14));
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$1 < len$1)) {
            var x0$15 = slice.a[i$1];
            f$1(x0$15);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$1 < len$1)) {
            var x0$16 = slice.a[i$1];
            f$1(x0$16);
            i$1 = ((1 + i$1) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$1 < len$1)) {
            var x0$17 = slice.a[i$1];
            f$1(x0$17);
            i$1 = ((1 + i$1) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$2 = (31 & ((((1048576 - $thiz.C) | 0) >>> 15) | 0));
      var copy1$3 = ((a$2 < sl) ? a$2 : sl);
      var copy2$3 = ((sl - copy1$3) | 0);
      var destPos$3 = (31 & (($thiz.C >>> 15) | 0));
      var dest$4 = $thiz.a3;
      slice.s(0, dest$4, destPos$3, copy1$3);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
      if ((copy2$3 > 0)) {
        var dest$5 = $thiz.a3;
        slice.s(copy1$3, dest$5, 0, copy2$3);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
      }
      break;
    }
    case 5: {
      var num$2 = $thiz.C;
      var t$2 = (((num$2 >> 19) >>> 12) | 0);
      if (((((1048575 & ((num$2 + t$2) | 0)) - t$2) | 0) !== 0)) {
        var f$2 = ((e$3$2) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3$2, 4);
        });
        var len$2 = slice.a.length;
        var i$2 = 0;
        if ((slice !== null)) {
          while ((i$2 < len$2)) {
            var x0$18 = slice.a[i$2];
            f$2(x0$18);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$2 < len$2)) {
            var x0$19 = slice.a[i$2];
            f$2(x0$19);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$2 < len$2)) {
            var x0$20 = slice.a[i$2];
            f$2(x0$20);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$2 < len$2)) {
            var $x_5 = slice.a;
            var $x_6 = (i$2 << 1);
            var x0$21_$_lo = $x_5[$x_6];
            var x0$21_$_hi = $x_5[(($x_6 + 1) | 0)];
            f$2($bL(x0$21_$_lo, x0$21_$_hi));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$2 < len$2)) {
            var x0$22 = slice.a[i$2];
            f$2(x0$22);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$2 < len$2)) {
            var x0$23 = slice.a[i$2];
            f$2($bC(x0$23));
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$2 < len$2)) {
            var x0$24 = slice.a[i$2];
            f$2(x0$24);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$2 < len$2)) {
            var x0$25 = slice.a[i$2];
            f$2(x0$25);
            i$2 = ((1 + i$2) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$2 < len$2)) {
            var x0$26 = slice.a[i$2];
            f$2(x0$26);
            i$2 = ((1 + i$2) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var a$3 = (31 & ((((33554432 - $thiz.C) | 0) >>> 20) | 0));
      var copy1$4 = ((a$3 < sl) ? a$3 : sl);
      var copy2$4 = ((sl - copy1$4) | 0);
      var destPos$4 = (31 & (($thiz.C >>> 20) | 0));
      var dest$6 = $thiz.at;
      slice.s(0, dest$6, destPos$4, copy1$4);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
      if ((copy2$4 > 0)) {
        var dest$7 = $thiz.at;
        slice.s(copy1$4, dest$7, 0, copy2$4);
        $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
      }
      break;
    }
    case 6: {
      var num$3 = $thiz.C;
      var t$3 = (((num$3 >> 24) >>> 7) | 0);
      if (((((33554431 & ((num$3 + t$3) | 0)) - t$3) | 0) !== 0)) {
        var f$3 = ((e$3$3) => {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, e$3$3, 5);
        });
        var len$3 = slice.a.length;
        var i$3 = 0;
        if ((slice !== null)) {
          while ((i$3 < len$3)) {
            var x0$27 = slice.a[i$3];
            f$3(x0$27);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_I)) {
          while ((i$3 < len$3)) {
            var x0$28 = slice.a[i$3];
            f$3(x0$28);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_D)) {
          while ((i$3 < len$3)) {
            var x0$29 = slice.a[i$3];
            f$3(x0$29);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_J)) {
          while ((i$3 < len$3)) {
            var $x_7 = slice.a;
            var $x_8 = (i$3 << 1);
            var x0$30_$_lo = $x_7[$x_8];
            var x0$30_$_hi = $x_7[(($x_8 + 1) | 0)];
            f$3($bL(x0$30_$_lo, x0$30_$_hi));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_F)) {
          while ((i$3 < len$3)) {
            var x0$31 = slice.a[i$3];
            f$3(x0$31);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_C)) {
          while ((i$3 < len$3)) {
            var x0$32 = slice.a[i$3];
            f$3($bC(x0$32));
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_B)) {
          while ((i$3 < len$3)) {
            var x0$33 = slice.a[i$3];
            f$3(x0$33);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_S)) {
          while ((i$3 < len$3)) {
            var x0$34 = slice.a[i$3];
            f$3(x0$34);
            i$3 = ((1 + i$3) | 0);
          }
        } else if ((slice instanceof $ac_Z)) {
          while ((i$3 < len$3)) {
            var x0$35 = slice.a[i$3];
            f$3(x0$35);
            i$3 = ((1 + i$3) | 0);
          }
        } else {
          throw new $c_s_MatchError(slice);
        }
        return (void 0);
      }
      var destPos$5 = (($thiz.C >>> 25) | 0);
      if ((((destPos$5 + sl) | 0) > 64)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
      }
      var dest$8 = $thiz.bf;
      slice.s(0, dest$8, destPos$5, sl);
      $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
      break;
    }
    default: {
      throw new $c_s_MatchError(dim);
    }
  }
}
function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
  var sliceCount = xs.dY();
  var sliceIdx = 0;
  while ((sliceIdx < sliceCount)) {
    var slice = xs.dX(sliceIdx);
    matchResult26: {
      var idx = sliceIdx;
      var c = (((sliceCount + ((sliceCount >>> 31) | 0)) | 0) >> 1);
      var a = ((idx - c) | 0);
      var sign = (a >> 31);
      var x37 = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
      if ((x37 === 1)) {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
        break matchResult26;
      }
      if ((($thiz.P === 32) || ($thiz.P === 0))) {
        $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x37);
        break matchResult26;
      }
      $m_sci_VectorStatics$().kz(((x37 - 2) | 0), slice, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((data$3) => {
        $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$3);
      })));
    }
    sliceIdx = ((1 + sliceIdx) | 0);
  }
  return $thiz;
}
function $p_sci_VectorBuilder__advance__V($thiz) {
  var idx = ((32 + $thiz.C) | 0);
  var xor = (idx ^ $thiz.C);
  $thiz.C = idx;
  $thiz.P = 0;
  $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
}
function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
  if ((n > 0)) {
    var idx = (($thiz.C + n) | 0);
    var xor = (idx ^ $thiz.C);
    $thiz.C = idx;
    $thiz.P = 0;
    $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
  }
}
function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
  if ((xor <= 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.ah) + ", a2=") + $thiz.H) + ", a3=") + $thiz.O) + ", a4=") + $thiz.a3) + ", a5=") + $thiz.at) + ", a6=") + $thiz.bf) + ", depth=") + $thiz.S));
  } else if ((xor < 1024)) {
    if (($thiz.S <= 1)) {
      $thiz.H = new ($d_O.r().r().C)(32);
      $thiz.H.a[0] = $thiz.ah;
      $thiz.S = 2;
    }
    $thiz.ah = new $ac_O(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.ah;
  } else if ((xor < 32768)) {
    if (($thiz.S <= 2)) {
      $thiz.O = new ($d_O.r().r().r().C)(32);
      $thiz.O.a[0] = $thiz.H;
      $thiz.S = 3;
    }
    $thiz.ah = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.ah;
    $thiz.O.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
  } else if ((xor < 1048576)) {
    if (($thiz.S <= 3)) {
      $thiz.a3 = new ($d_O.r().r().r().r().C)(32);
      $thiz.a3.a[0] = $thiz.O;
      $thiz.S = 4;
    }
    $thiz.ah = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.O = new ($d_O.r().r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.ah;
    $thiz.O.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
    $thiz.a3.a[(31 & ((idx >>> 15) | 0))] = $thiz.O;
  } else if ((xor < 33554432)) {
    if (($thiz.S <= 4)) {
      $thiz.at = new ($d_O.r().r().r().r().r().C)(32);
      $thiz.at.a[0] = $thiz.a3;
      $thiz.S = 5;
    }
    $thiz.ah = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.O = new ($d_O.r().r().r().C)(32);
    $thiz.a3 = new ($d_O.r().r().r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.ah;
    $thiz.O.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
    $thiz.a3.a[(31 & ((idx >>> 15) | 0))] = $thiz.O;
    $thiz.at.a[(31 & ((idx >>> 20) | 0))] = $thiz.a3;
  } else {
    if (($thiz.S <= 5)) {
      $thiz.bf = new ($d_O.r().r().r().r().r().r().C)(64);
      $thiz.bf.a[0] = $thiz.at;
      $thiz.S = 6;
    }
    $thiz.ah = new $ac_O(32);
    $thiz.H = new ($d_O.r().r().C)(32);
    $thiz.O = new ($d_O.r().r().r().C)(32);
    $thiz.a3 = new ($d_O.r().r().r().r().C)(32);
    $thiz.at = new ($d_O.r().r().r().r().r().C)(32);
    $thiz.H.a[(31 & ((idx >>> 5) | 0))] = $thiz.ah;
    $thiz.O.a[(31 & ((idx >>> 10) | 0))] = $thiz.H;
    $thiz.a3.a[(31 & ((idx >>> 15) | 0))] = $thiz.O;
    $thiz.at.a[(31 & ((idx >>> 20) | 0))] = $thiz.a3;
    $thiz.bf.a[((idx >>> 25) | 0)] = $thiz.at;
  }
}
/** @constructor */
function $c_sci_VectorBuilder() {
  this.bf = null;
  this.at = null;
  this.a3 = null;
  this.O = null;
  this.H = null;
  this.ah = null;
  this.P = 0;
  this.C = 0;
  this.N = 0;
  this.it = false;
  this.S = 0;
  this.ah = new $ac_O(32);
  this.P = 0;
  this.C = 0;
  this.N = 0;
  this.it = false;
  this.S = 1;
}
$p = $c_sci_VectorBuilder.prototype = new $h_O();
$p.constructor = $c_sci_VectorBuilder;
/** @constructor */
function $h_sci_VectorBuilder() {
}
$h_sci_VectorBuilder.prototype = $p;
$p.aO = (function(size) {
});
$p.r0 = (function(v) {
  var x28 = v.dY();
  switch (x28) {
    case 0: {
      break;
    }
    case 1: {
      this.S = 1;
      var i = v.f.a.length;
      this.P = (31 & i);
      this.C = ((i - this.P) | 0);
      var a = v.f;
      this.ah = ((a.a.length === 32) ? a : $m_ju_Arrays$().aM(a, 0, 32));
      break;
    }
    case 3: {
      var d2 = v.bn;
      var a$1 = v.j;
      this.ah = ((a$1.a.length === 32) ? a$1 : $m_ju_Arrays$().aM(a$1, 0, 32));
      this.S = 2;
      this.N = ((32 - v.bQ) | 0);
      var i$1 = ((v.k + this.N) | 0);
      this.P = (31 & i$1);
      this.C = ((i$1 - this.P) | 0);
      this.H = new ($d_O.r().r().C)(32);
      this.H.a[0] = v.f;
      var dest = this.H;
      var length = d2.a.length;
      d2.s(0, dest, 1, length);
      this.H.a[((1 + d2.a.length) | 0)] = this.ah;
      break;
    }
    case 5: {
      var d3 = v.aZ;
      var s2 = v.b4;
      var a$2 = v.j;
      this.ah = ((a$2.a.length === 32) ? a$2 : $m_ju_Arrays$().aM(a$2, 0, 32));
      this.S = 3;
      this.N = ((1024 - v.be) | 0);
      var i$2 = ((v.k + this.N) | 0);
      this.P = (31 & i$2);
      this.C = ((i$2 - this.P) | 0);
      this.O = new ($d_O.r().r().r().C)(32);
      this.O.a[0] = $m_sci_VectorStatics$().B(v.f, v.by);
      var dest$1 = this.O;
      var length$1 = d3.a.length;
      d3.s(0, dest$1, 1, length$1);
      this.H = $m_ju_Arrays$().ad(s2, 32);
      this.O.a[((1 + d3.a.length) | 0)] = this.H;
      this.H.a[s2.a.length] = this.ah;
      break;
    }
    case 7: {
      var d4 = v.ar;
      var s3 = v.aA;
      var s2$2 = v.az;
      var a$3 = v.j;
      this.ah = ((a$3.a.length === 32) ? a$3 : $m_ju_Arrays$().aM(a$3, 0, 32));
      this.S = 4;
      this.N = ((32768 - v.aS) | 0);
      var i$3 = ((v.k + this.N) | 0);
      this.P = (31 & i$3);
      this.C = ((i$3 - this.P) | 0);
      this.a3 = new ($d_O.r().r().r().r().C)(32);
      this.a3.a[0] = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(v.f, v.b6), v.b7);
      var dest$2 = this.a3;
      var length$2 = d4.a.length;
      d4.s(0, dest$2, 1, length$2);
      this.O = $m_ju_Arrays$().ad(s3, 32);
      this.H = $m_ju_Arrays$().ad(s2$2, 32);
      this.a3.a[((1 + d4.a.length) | 0)] = this.O;
      this.O.a[s3.a.length] = this.H;
      this.H.a[s2$2.a.length] = this.ah;
      break;
    }
    case 9: {
      var d5 = v.a2;
      var s4 = v.a9;
      var s3$2 = v.a8;
      var s2$3 = v.a7;
      var a$4 = v.j;
      this.ah = ((a$4.a.length === 32) ? a$4 : $m_ju_Arrays$().aM(a$4, 0, 32));
      this.S = 5;
      this.N = ((1048576 - v.aj) | 0);
      var i$4 = ((v.k + this.N) | 0);
      this.P = (31 & i$4);
      this.C = ((i$4 - this.P) | 0);
      this.at = new ($d_O.r().r().r().r().r().C)(32);
      this.at.a[0] = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(v.f, v.aC), v.aD), v.aE);
      var dest$3 = this.at;
      var length$3 = d5.a.length;
      d5.s(0, dest$3, 1, length$3);
      this.a3 = $m_ju_Arrays$().ad(s4, 32);
      this.O = $m_ju_Arrays$().ad(s3$2, 32);
      this.H = $m_ju_Arrays$().ad(s2$3, 32);
      this.at.a[((1 + d5.a.length) | 0)] = this.a3;
      this.a3.a[s4.a.length] = this.O;
      this.O.a[s3$2.a.length] = this.H;
      this.H.a[s2$3.a.length] = this.ah;
      break;
    }
    case 11: {
      var d6 = v.U;
      var s5 = v.a0;
      var s4$2 = v.Z;
      var s3$3 = v.Y;
      var s2$4 = v.X;
      var a$5 = v.j;
      this.ah = ((a$5.a.length === 32) ? a$5 : $m_ju_Arrays$().aM(a$5, 0, 32));
      this.S = 6;
      this.N = ((33554432 - v.ag) | 0);
      var i$5 = ((v.k + this.N) | 0);
      this.P = (31 & i$5);
      this.C = ((i$5 - this.P) | 0);
      this.bf = new ($d_O.r().r().r().r().r().r().C)(64);
      this.bf.a[0] = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(v.f, v.al), v.am), v.an), v.ao);
      var dest$4 = this.bf;
      var length$4 = d6.a.length;
      d6.s(0, dest$4, 1, length$4);
      this.at = $m_ju_Arrays$().ad(s5, 32);
      this.a3 = $m_ju_Arrays$().ad(s4$2, 32);
      this.O = $m_ju_Arrays$().ad(s3$3, 32);
      this.H = $m_ju_Arrays$().ad(s2$4, 32);
      this.bf.a[((1 + d6.a.length) | 0)] = this.at;
      this.at.a[s5.a.length] = this.a3;
      this.a3.a[s4$2.a.length] = this.O;
      this.O.a[s3$3.a.length] = this.H;
      this.H.a[s2$4.a.length] = this.ah;
      break;
    }
    default: {
      throw new $c_s_MatchError(x28);
    }
  }
  if (((this.P === 0) && (this.C > 0))) {
    this.P = 32;
    this.C = ((this.C - 32) | 0);
  }
  return this;
});
$p.pD = (function(elem) {
  if ((this.P === 32)) {
    $p_sci_VectorBuilder__advance__V(this);
  }
  this.ah.a[this.P] = elem;
  this.P = ((1 + this.P) | 0);
  return this;
});
$p.nm = (function(xs) {
  return ((xs instanceof $c_sci_Vector) ? ((((this.P === 0) && (this.C === 0)) && (!this.it)) ? this.r0(xs) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, xs)) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
});
$p.on = (function() {
  if (this.it) {
    $p_sci_VectorBuilder__leftAlignPrefix__V(this);
  }
  var len = ((this.P + this.C) | 0);
  var realLen = ((len - this.N) | 0);
  if ((realLen === 0)) {
    $m_sci_Vector$();
    return $m_sci_Vector0$();
  } else if ((len < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
  } else if ((len <= 32)) {
    var a = this.ah;
    return new $c_sci_Vector1(((a.a.length === realLen) ? a : $m_ju_Arrays$().ad(a, realLen)));
  } else if ((len <= 1024)) {
    var i1 = (31 & ((len - 1) | 0));
    var i2 = ((((len - 1) | 0) >>> 5) | 0);
    var data = $m_ju_Arrays$().aM(this.H, 1, i2);
    var prefix1 = this.H.a[0];
    var a$1 = this.H.a[i2];
    var len$1 = ((1 + i1) | 0);
    var suffix1 = ((a$1.a.length === len$1) ? a$1 : $m_ju_Arrays$().ad(a$1, len$1));
    return new $c_sci_Vector2(prefix1, ((32 - this.N) | 0), data, suffix1, realLen);
  } else if ((len <= 32768)) {
    var i1$2 = (31 & ((len - 1) | 0));
    var i2$2 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3 = ((((len - 1) | 0) >>> 10) | 0);
    var data$2 = $m_ju_Arrays$().aM(this.O, 1, i3);
    var a$2 = this.O.a[0];
    var prefix2 = $m_ju_Arrays$().aM(a$2, 1, a$2.a.length);
    var prefix1$2 = this.O.a[0].a[0];
    var suffix2 = $m_ju_Arrays$().ad(this.O.a[i3], i2$2);
    var a$3 = this.O.a[i3].a[i2$2];
    var len$2 = ((1 + i1$2) | 0);
    var suffix1$2 = ((a$3.a.length === len$2) ? a$3 : $m_ju_Arrays$().ad(a$3, len$2));
    var len1 = prefix1$2.a.length;
    return new $c_sci_Vector3(prefix1$2, len1, prefix2, ((len1 + (prefix2.a.length << 5)) | 0), data$2, suffix2, suffix1$2, realLen);
  } else if ((len <= 1048576)) {
    var i1$3 = (31 & ((len - 1) | 0));
    var i2$3 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$2 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4 = ((((len - 1) | 0) >>> 15) | 0);
    var data$3 = $m_ju_Arrays$().aM(this.a3, 1, i4);
    var a$4 = this.a3.a[0];
    var prefix3 = $m_ju_Arrays$().aM(a$4, 1, a$4.a.length);
    var a$5 = this.a3.a[0].a[0];
    var prefix2$2 = $m_ju_Arrays$().aM(a$5, 1, a$5.a.length);
    var prefix1$3 = this.a3.a[0].a[0].a[0];
    var suffix3 = $m_ju_Arrays$().ad(this.a3.a[i4], i3$2);
    var suffix2$2 = $m_ju_Arrays$().ad(this.a3.a[i4].a[i3$2], i2$3);
    var a$6 = this.a3.a[i4].a[i3$2].a[i2$3];
    var len$3 = ((1 + i1$3) | 0);
    var suffix1$3 = ((a$6.a.length === len$3) ? a$6 : $m_ju_Arrays$().ad(a$6, len$3));
    var len1$2 = prefix1$3.a.length;
    var len12$2 = ((len1$2 + (prefix2$2.a.length << 5)) | 0);
    return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, ((len12$2 + (prefix3.a.length << 10)) | 0), data$3, suffix3, suffix2$2, suffix1$3, realLen);
  } else if ((len <= 33554432)) {
    var i1$4 = (31 & ((len - 1) | 0));
    var i2$4 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$3 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4$2 = (31 & ((((len - 1) | 0) >>> 15) | 0));
    var i5 = ((((len - 1) | 0) >>> 20) | 0);
    var data$4 = $m_ju_Arrays$().aM(this.at, 1, i5);
    var a$7 = this.at.a[0];
    var prefix4 = $m_ju_Arrays$().aM(a$7, 1, a$7.a.length);
    var a$8 = this.at.a[0].a[0];
    var prefix3$2 = $m_ju_Arrays$().aM(a$8, 1, a$8.a.length);
    var a$9 = this.at.a[0].a[0].a[0];
    var prefix2$3 = $m_ju_Arrays$().aM(a$9, 1, a$9.a.length);
    var prefix1$4 = this.at.a[0].a[0].a[0].a[0];
    var suffix4 = $m_ju_Arrays$().ad(this.at.a[i5], i4$2);
    var suffix3$2 = $m_ju_Arrays$().ad(this.at.a[i5].a[i4$2], i3$3);
    var suffix2$3 = $m_ju_Arrays$().ad(this.at.a[i5].a[i4$2].a[i3$3], i2$4);
    var a$10 = this.at.a[i5].a[i4$2].a[i3$3].a[i2$4];
    var len$4 = ((1 + i1$4) | 0);
    var suffix1$4 = ((a$10.a.length === len$4) ? a$10 : $m_ju_Arrays$().ad(a$10, len$4));
    var len1$3 = prefix1$4.a.length;
    var len12$3 = ((len1$3 + (prefix2$3.a.length << 5)) | 0);
    var len123$2 = ((len12$3 + (prefix3$2.a.length << 10)) | 0);
    return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, ((len123$2 + (prefix4.a.length << 15)) | 0), data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen);
  } else {
    var i1$5 = (31 & ((len - 1) | 0));
    var i2$5 = (31 & ((((len - 1) | 0) >>> 5) | 0));
    var i3$4 = (31 & ((((len - 1) | 0) >>> 10) | 0));
    var i4$3 = (31 & ((((len - 1) | 0) >>> 15) | 0));
    var i5$2 = (31 & ((((len - 1) | 0) >>> 20) | 0));
    var i6 = ((((len - 1) | 0) >>> 25) | 0);
    var data$5 = $m_ju_Arrays$().aM(this.bf, 1, i6);
    var a$11 = this.bf.a[0];
    var prefix5 = $m_ju_Arrays$().aM(a$11, 1, a$11.a.length);
    var a$12 = this.bf.a[0].a[0];
    var prefix4$2 = $m_ju_Arrays$().aM(a$12, 1, a$12.a.length);
    var a$13 = this.bf.a[0].a[0].a[0];
    var prefix3$3 = $m_ju_Arrays$().aM(a$13, 1, a$13.a.length);
    var a$14 = this.bf.a[0].a[0].a[0].a[0];
    var prefix2$4 = $m_ju_Arrays$().aM(a$14, 1, a$14.a.length);
    var prefix1$5 = this.bf.a[0].a[0].a[0].a[0].a[0];
    var suffix5 = $m_ju_Arrays$().ad(this.bf.a[i6], i5$2);
    var suffix4$2 = $m_ju_Arrays$().ad(this.bf.a[i6].a[i5$2], i4$3);
    var suffix3$3 = $m_ju_Arrays$().ad(this.bf.a[i6].a[i5$2].a[i4$3], i3$4);
    var suffix2$4 = $m_ju_Arrays$().ad(this.bf.a[i6].a[i5$2].a[i4$3].a[i3$4], i2$5);
    var a$15 = this.bf.a[i6].a[i5$2].a[i4$3].a[i3$4].a[i2$5];
    var len$5 = ((1 + i1$5) | 0);
    var suffix1$5 = ((a$15.a.length === len$5) ? a$15 : $m_ju_Arrays$().ad(a$15, len$5));
    var len1$4 = prefix1$5.a.length;
    var len12$4 = ((len1$4 + (prefix2$4.a.length << 5)) | 0);
    var len123$3 = ((len12$4 + (prefix3$3.a.length << 10)) | 0);
    var len1234$2 = ((len123$3 + (prefix4$2.a.length << 15)) | 0);
    return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, ((len1234$2 + (prefix5.a.length << 20)) | 0), data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
  }
});
$p.v = (function() {
  return (((((((("VectorBuilder(len1=" + this.P) + ", lenRest=") + this.C) + ", offset=") + this.N) + ", depth=") + this.S) + ")");
});
$p.ac = (function(elem) {
  return this.pD(elem);
});
$p.aU = (function(elems) {
  return this.nm(elems);
});
$p.aN = (function() {
  return this.on();
});
var $d_sci_VectorBuilder = new $TypeData().i($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
  gl: 1,
  z: 1,
  A: 1,
  F: 1,
  a7: 1
}));
/** @constructor */
function $c_scm_ArrayBuffer$() {
  this.mJ = null;
  $n_scm_ArrayBuffer$ = this;
  this.mJ = new $ac_O(0);
}
$p = $c_scm_ArrayBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuffer$;
/** @constructor */
function $h_scm_ArrayBuffer$() {
}
$h_scm_ArrayBuffer$.prototype = $p;
$p.ek = (function(elems) {
  return this.o1(elems);
});
$p.o1 = (function(coll) {
  var k = coll.q();
  if ((k >= 0)) {
    var array = this.ot(this.mJ, 0, k);
    var actual = ($is_sc_Iterable(coll) ? coll.bh(array, 0, 2147483647) : coll.c().bh(array, 0, 2147483647));
    if ((actual !== k)) {
      throw new $c_jl_IllegalStateException(((("Copied " + actual) + " of ") + k));
    }
    return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k);
  } else {
    return $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer()).nn(coll);
  }
});
$p.V = (function() {
  return new $c_scm_ArrayBuffer$$anon$1();
});
$p.rC = (function(arrayLen, targetLen) {
  if ((targetLen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((((("Overflow while resizing array of array-backed collection. Requested length: " + targetLen) + "; current length: ") + arrayLen) + "; increase: ") + ((targetLen - arrayLen) | 0)));
  } else if ((targetLen <= arrayLen)) {
    return (-1);
  } else {
    if ((targetLen > 2147483639)) {
      throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), ((("Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: " + targetLen) + "; current length: ") + arrayLen));
    }
    if ((arrayLen > 1073741819)) {
      return 2147483639;
    } else {
      var x = (arrayLen << 1);
      var y = ((x > 16) ? x : 16);
      return ((targetLen > y) ? targetLen : y);
    }
  }
});
$p.ot = (function(array, curSize, targetSize) {
  var newLen = this.rC(array.a.length, targetSize);
  if ((newLen < 0)) {
    return array;
  } else {
    var res = new $ac_O(newLen);
    array.s(0, res, 0, curSize);
    return res;
  }
});
$p.a4 = (function(source) {
  return this.o1(source);
});
var $d_scm_ArrayBuffer$ = new $TypeData().i($c_scm_ArrayBuffer$, "scala.collection.mutable.ArrayBuffer$", ({
  gq: 1,
  a: 1,
  C: 1,
  V: 1,
  ar: 1
}));
var $n_scm_ArrayBuffer$;
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$();
  }
  return $n_scm_ArrayBuffer$;
}
/** @constructor */
function $c_scm_ArrayBuffer$$anon$1() {
  this.dI = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, ($m_scm_ArrayBuffer$(), $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer())));
}
$p = $c_scm_ArrayBuffer$$anon$1.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_ArrayBuffer$$anon$1;
/** @constructor */
function $h_scm_ArrayBuffer$$anon$1() {
}
$h_scm_ArrayBuffer$$anon$1.prototype = $p;
$p.aO = (function(size) {
  this.dI.aO(size);
});
var $d_scm_ArrayBuffer$$anon$1 = new $TypeData().i($c_scm_ArrayBuffer$$anon$1, "scala.collection.mutable.ArrayBuffer$$anon$1", ({
  gr: 1,
  aI: 1,
  z: 1,
  A: 1,
  F: 1
}));
/** @constructor */
function $c_scm_Buffer$() {
  this.e3 = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
}
$p = $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_Buffer$;
/** @constructor */
function $h_scm_Buffer$() {
}
$h_scm_Buffer$.prototype = $p;
var $d_scm_Buffer$ = new $TypeData().i($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
  gx: 1,
  aC: 1,
  a: 1,
  C: 1,
  V: 1
}));
var $n_scm_Buffer$;
function $m_scm_Buffer$() {
  if ((!$n_scm_Buffer$)) {
    $n_scm_Buffer$ = new $c_scm_Buffer$();
  }
  return $n_scm_Buffer$;
}
/** @constructor */
function $c_scm_HashMap$$anon$6(initialCapacity$1, loadFactor$1) {
  this.dI = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashMap__I__D__(new $c_scm_HashMap(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashMap$$anon$6.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashMap$$anon$6;
/** @constructor */
function $h_scm_HashMap$$anon$6() {
}
$h_scm_HashMap$$anon$6.prototype = $p;
$p.aO = (function(size) {
  this.dI.aO(size);
});
var $d_scm_HashMap$$anon$6 = new $TypeData().i($c_scm_HashMap$$anon$6, "scala.collection.mutable.HashMap$$anon$6", ({
  gH: 1,
  aI: 1,
  z: 1,
  A: 1,
  F: 1
}));
function $ct_scm_HashMap$HashMapIterator__scm_HashMap__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.ha = outer;
  $thiz.eP = 0;
  $thiz.ed = null;
  $thiz.hb = outer.T.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashMap$HashMapIterator() {
  this.eP = 0;
  this.ed = null;
  this.hb = 0;
  this.ha = null;
}
$p = $c_scm_HashMap$HashMapIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashMap$HashMapIterator;
/** @constructor */
function $h_scm_HashMap$HashMapIterator() {
}
$h_scm_HashMap$HashMapIterator.prototype = $p;
$p.i = (function() {
  if ((this.ed !== null)) {
    return true;
  } else {
    while ((this.eP < this.hb)) {
      var n = this.ha.T.a[this.eP];
      this.eP = ((1 + this.eP) | 0);
      if ((n !== null)) {
        this.ed = n;
        return true;
      }
    }
    return false;
  }
});
$p.e = (function() {
  if ((!this.i())) {
    return $m_sc_Iterator$().G.e();
  } else {
    var x$proxy14 = this.ed;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().bp();
    }
    var r = this.kx(x$proxy14);
    var x$proxy15 = this.ed;
    if ((x$proxy15 === null)) {
      $m_sr_Scala3RunTime$().bp();
    }
    this.ed = x$proxy15.bg;
    return r;
  }
});
/** @constructor */
function $c_scm_HashSet$$anon$4(initialCapacity$1, loadFactor$1) {
  this.dI = null;
  $ct_scm_GrowableBuilder__scm_Growable__(this, $ct_scm_HashSet__I__D__(new $c_scm_HashSet(), initialCapacity$1, loadFactor$1));
}
$p = $c_scm_HashSet$$anon$4.prototype = new $h_scm_GrowableBuilder();
$p.constructor = $c_scm_HashSet$$anon$4;
/** @constructor */
function $h_scm_HashSet$$anon$4() {
}
$h_scm_HashSet$$anon$4.prototype = $p;
$p.aO = (function(size) {
  this.dI.aO(size);
});
var $d_scm_HashSet$$anon$4 = new $TypeData().i($c_scm_HashSet$$anon$4, "scala.collection.mutable.HashSet$$anon$4", ({
  gN: 1,
  aI: 1,
  z: 1,
  A: 1,
  F: 1
}));
function $ct_scm_HashSet$HashSetIterator__scm_HashSet__($thiz, outer) {
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $thiz.hc = outer;
  $thiz.eS = 0;
  $thiz.ee = null;
  $thiz.hd = outer.bB.a.length;
  return $thiz;
}
/** @constructor */
function $c_scm_HashSet$HashSetIterator() {
  this.eS = 0;
  this.ee = null;
  this.hd = 0;
  this.hc = null;
}
$p = $c_scm_HashSet$HashSetIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_HashSet$HashSetIterator;
/** @constructor */
function $h_scm_HashSet$HashSetIterator() {
}
$h_scm_HashSet$HashSetIterator.prototype = $p;
$p.i = (function() {
  if ((this.ee !== null)) {
    return true;
  } else {
    while ((this.eS < this.hd)) {
      var n = this.hc.bB.a[this.eS];
      this.eS = ((1 + this.eS) | 0);
      if ((n !== null)) {
        this.ee = n;
        return true;
      }
    }
    return false;
  }
});
$p.e = (function() {
  if ((!this.i())) {
    return $m_sc_Iterator$().G.e();
  } else {
    var x$proxy10 = this.ee;
    if ((x$proxy10 === null)) {
      $m_sr_Scala3RunTime$().bp();
    }
    var r = this.ky(x$proxy10);
    var x$proxy11 = this.ee;
    if ((x$proxy11 === null)) {
      $m_sr_Scala3RunTime$().bp();
    }
    this.ee = x$proxy11.bC;
    return r;
  }
});
function $ct_scm_ImmutableBuilder__sc_IterableOnce__($thiz, empty) {
  $thiz.he = empty;
  return $thiz;
}
/** @constructor */
function $c_scm_ImmutableBuilder() {
  this.he = null;
}
$p = $c_scm_ImmutableBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ImmutableBuilder;
/** @constructor */
function $h_scm_ImmutableBuilder() {
}
$h_scm_ImmutableBuilder.prototype = $p;
$p.aU = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.aO = (function(size) {
});
$p.aN = (function() {
  return this.he;
});
/** @constructor */
function $c_scm_IndexedSeq$() {
  this.e3 = null;
  $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$());
}
$p = $c_scm_IndexedSeq$.prototype = new $h_sc_SeqFactory$Delegate();
$p.constructor = $c_scm_IndexedSeq$;
/** @constructor */
function $h_scm_IndexedSeq$() {
}
$h_scm_IndexedSeq$.prototype = $p;
var $d_scm_IndexedSeq$ = new $TypeData().i($c_scm_IndexedSeq$, "scala.collection.mutable.IndexedSeq$", ({
  gQ: 1,
  aC: 1,
  a: 1,
  C: 1,
  V: 1
}));
var $n_scm_IndexedSeq$;
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$();
  }
  return $n_scm_IndexedSeq$;
}
/** @constructor */
function $c_scm_ListBuffer$() {
}
$p = $c_scm_ListBuffer$.prototype = new $h_O();
$p.constructor = $c_scm_ListBuffer$;
/** @constructor */
function $h_scm_ListBuffer$() {
}
$h_scm_ListBuffer$.prototype = $p;
$p.ek = (function(elems) {
  return new $c_scm_ListBuffer().j6(elems);
});
$p.V = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), new $c_scm_ListBuffer());
});
$p.a4 = (function(source) {
  return new $c_scm_ListBuffer().j6(source);
});
var $d_scm_ListBuffer$ = new $TypeData().i($c_scm_ListBuffer$, "scala.collection.mutable.ListBuffer$", ({
  gU: 1,
  a: 1,
  C: 1,
  V: 1,
  ar: 1
}));
var $n_scm_ListBuffer$;
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$();
  }
  return $n_scm_ListBuffer$;
}
/** @constructor */
function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
  this.k3 = null;
  this.mU = null;
  this.mT = 0;
  this.k3 = underlying;
  this.mU = mutationCount;
  this.mT = (mutationCount.Q() | 0);
}
$p = $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_scm_MutationTracker$CheckedIterator;
/** @constructor */
function $h_scm_MutationTracker$CheckedIterator() {
}
$h_scm_MutationTracker$CheckedIterator.prototype = $p;
$p.i = (function() {
  $m_scm_MutationTracker$().kl(this.mT, (this.mU.Q() | 0), "mutation occurred during iteration");
  return this.k3.i();
});
$p.e = (function() {
  return this.k3.e();
});
var $d_scm_MutationTracker$CheckedIterator = new $TypeData().i($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
  gX: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_s_concurrent_ExecutionContext$parasitic$() {
  this.mY = null;
  $n_s_concurrent_ExecutionContext$parasitic$ = this;
  this.mY = new $c_jl_ThreadLocal();
}
$p = $c_s_concurrent_ExecutionContext$parasitic$.prototype = new $h_O();
$p.constructor = $c_s_concurrent_ExecutionContext$parasitic$;
/** @constructor */
function $h_s_concurrent_ExecutionContext$parasitic$() {
}
$h_s_concurrent_ExecutionContext$parasitic$.prototype = $p;
$p.kw = (function(runnable) {
  $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V(this, runnable);
});
$p.kV = (function(t) {
  $m_s_concurrent_ExecutionContext$().gk.d(t);
});
var $d_s_concurrent_ExecutionContext$parasitic$ = new $TypeData().i($c_s_concurrent_ExecutionContext$parasitic$, "scala.concurrent.ExecutionContext$parasitic$", ({
  h5: 1,
  b7: 1,
  aS: 1,
  b8: 1,
  h1: 1
}));
var $n_s_concurrent_ExecutionContext$parasitic$;
function $m_s_concurrent_ExecutionContext$parasitic$() {
  if ((!$n_s_concurrent_ExecutionContext$parasitic$)) {
    $n_s_concurrent_ExecutionContext$parasitic$ = new $c_s_concurrent_ExecutionContext$parasitic$();
  }
  return $n_s_concurrent_ExecutionContext$parasitic$;
}
/** @constructor */
function $c_s_concurrent_duration_Duration$Infinite() {
}
$p = $c_s_concurrent_duration_Duration$Infinite.prototype = new $h_s_concurrent_duration_Duration();
$p.constructor = $c_s_concurrent_duration_Duration$Infinite;
/** @constructor */
function $h_s_concurrent_duration_Duration$Infinite() {
}
$h_s_concurrent_duration_Duration$Infinite.prototype = $p;
function $p_s_concurrent_duration_FiniteDuration__bounded__J__Z($thiz, max_$_lo, max_$_hi) {
  var lo = ((-max_$_lo) | 0);
  var hi = ((((-max_$_hi) | 0) - ((lo !== 0) | 0)) | 0);
  var x_$_lo = $thiz.dk;
  var x_$_hi = $thiz.dl;
  if (((hi === x_$_hi) ? ((lo >>> 0) <= (x_$_lo >>> 0)) : (hi < x_$_hi))) {
    var x$1_$_lo = $thiz.dk;
    var x$1_$_hi = $thiz.dl;
    return ((x$1_$_hi === max_$_hi) ? ((x$1_$_lo >>> 0) <= (max_$_lo >>> 0)) : (x$1_$_hi < max_$_hi));
  } else {
    return false;
  }
}
function $p_s_concurrent_duration_FiniteDuration__unitString__T($thiz) {
  var $x_1 = $m_s_concurrent_duration_Duration$().n5.d($thiz.eU);
  var x_$_lo = $thiz.dk;
  var x_$_hi = $thiz.dl;
  return ($x_1 + ((((1 ^ x_$_lo) | x_$_hi) === 0) ? "" : "s"));
}
/** @constructor */
function $c_s_concurrent_duration_FiniteDuration(length_$_lo, length_$_hi, unit) {
  this.dk = 0;
  this.dl = 0;
  this.eU = null;
  this.dk = length_$_lo;
  this.dl = length_$_hi;
  this.eU = unit;
  matchResult9: {
    var $x_1;
    var x = $m_s_concurrent_duration_package$().k8;
    if (((x === null) ? (unit === null) : (x === unit))) {
      var $x_1 = $p_s_concurrent_duration_FiniteDuration__bounded__J__Z(this, (-1), 2147483647);
      break matchResult9;
    }
    var x$3 = $m_s_concurrent_duration_package$().k6;
    if (((x$3 === null) ? (unit === null) : (x$3 === unit))) {
      var $x_1 = $p_s_concurrent_duration_FiniteDuration__bounded__J__Z(this, (-1511828489), 2147483);
      break matchResult9;
    }
    var x$5 = $m_s_concurrent_duration_package$().iz;
    if (((x$5 === null) ? (unit === null) : (x$5 === unit))) {
      var $x_1 = $p_s_concurrent_duration_FiniteDuration__bounded__J__Z(this, 2077252342, 2147);
      break matchResult9;
    }
    var x$7 = $m_s_concurrent_duration_package$().k9;
    if (((x$7 === null) ? (unit === null) : (x$7 === unit))) {
      var $x_1 = $p_s_concurrent_duration_FiniteDuration__bounded__J__Z(this, 633437444, 2);
      break matchResult9;
    }
    var x$9 = $m_s_concurrent_duration_package$().k7;
    if (((x$9 === null) ? (unit === null) : (x$9 === unit))) {
      var $x_1 = $p_s_concurrent_duration_FiniteDuration__bounded__J__Z(this, 153722867, 0);
      break matchResult9;
    }
    var x$11 = $m_s_concurrent_duration_package$().k5;
    if (((x$11 === null) ? (unit === null) : (x$11 === unit))) {
      var $x_1 = $p_s_concurrent_duration_FiniteDuration__bounded__J__Z(this, 2562047, 0);
      break matchResult9;
    }
    var x$13 = $m_s_concurrent_duration_package$().iy;
    if (((x$13 === null) ? (unit === null) : (x$13 === unit))) {
      var $x_1 = $p_s_concurrent_duration_FiniteDuration__bounded__J__Z(this, 106751, 0);
      break matchResult9;
    }
    throw new $c_s_MatchError(unit);
  }
  if ((!$x_1)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed: Duration is limited to +-(2^63-1)ns (ca. 292 years)");
  }
}
$p = $c_s_concurrent_duration_FiniteDuration.prototype = new $h_s_concurrent_duration_Duration();
$p.constructor = $c_s_concurrent_duration_FiniteDuration;
/** @constructor */
function $h_s_concurrent_duration_FiniteDuration() {
}
$h_s_concurrent_duration_FiniteDuration.prototype = $p;
$p.v = (function() {
  return (($s_RTLong__toString__I__I__T(this.dk, this.dl) + " ") + $p_s_concurrent_duration_FiniteDuration__unitString__T(this));
});
$p.kn = (function(other) {
  if ((other instanceof $c_s_concurrent_duration_FiniteDuration)) {
    var $x_1 = this.eU.dv(this.dk, this.dl);
    var self_$_lo = $x_1.l;
    var self_$_hi = $x_1.h;
    var $x_4 = other.eU;
    var $x_3 = other;
    var $x_2 = $x_4.dv($x_3.dk, $x_3.dl);
    var that_$_lo = $x_2.l;
    var that_$_hi = $x_2.h;
    return ((self_$_hi === that_$_hi) ? ((self_$_lo === that_$_lo) ? 0 : (((self_$_lo >>> 0) < (that_$_lo >>> 0)) ? (-1) : 1)) : ((self_$_hi < that_$_hi) ? (-1) : 1));
  } else {
    return ((-other.kn(this)) | 0);
  }
});
$p.p = (function(other) {
  if ((other instanceof $c_s_concurrent_duration_FiniteDuration)) {
    var $x_1 = this.eU.dv(this.dk, this.dl);
    var x_$_lo = $x_1.l;
    var x_$_hi = $x_1.h;
    var $x_4 = other.eU;
    var $x_3 = other;
    var $x_2 = $x_4.dv($x_3.dk, $x_3.dl);
    var x$1_$_lo = $x_2.l;
    var x$1_$_hi = $x_2.h;
    return (((x_$_lo ^ x$1_$_lo) | (x_$_hi ^ x$1_$_hi)) === 0);
  } else {
    return (this === other);
  }
});
$p.u = (function() {
  var $x_1 = this.eU.dv(this.dk, this.dl);
  return $s_RTLong__toInt__I__I__I($x_1.l, $x_1.h);
});
function $isArrayOf_s_concurrent_duration_FiniteDuration(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cO)));
}
var $d_s_concurrent_duration_FiniteDuration = new $TypeData().i($c_s_concurrent_duration_FiniteDuration, "scala.concurrent.duration.FiniteDuration", ({
  cO: 1,
  cN: 1,
  a: 1,
  H: 1,
  cV: 1
}));
function $f_s_math_Ordering__gt__O__O__Z($thiz, x, y) {
  return ($thiz.av(x, y) > 0);
}
function $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z($thiz, other) {
  if ((other instanceof $c_s_math_Ordering$Reverse)) {
    var x = other.eV;
    return ((x !== null) && x.p($thiz));
  } else {
    return false;
  }
}
function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
  if ($is_s_reflect_ClassTag(x)) {
    var x$2 = $thiz.bk();
    var x$3 = x.bk();
    return ((x$2 === null) ? (x$3 === null) : (x$2 === x$3));
  } else {
    return false;
  }
}
function $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz) {
  return (clazz.L.Z ? (("Array[" + $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T($thiz, clazz.L.Q())) + "]") : clazz.L.N);
}
function $is_s_reflect_ClassTag(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.O)));
}
function $isArrayOf_s_reflect_ClassTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.O)));
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.nd = null;
  this.hm = 0;
  this.nc = 0;
  this.nd = x$1;
  this.hm = 0;
  this.nc = x$1.bF();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.i = (function() {
  return (this.hm < this.nc);
});
$p.e = (function() {
  var result = this.nd.bG(this.hm);
  this.hm = ((1 + this.hm) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  ij: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_sjs_js_ArrayOps$ArrayIterator(xs) {
  this.hn = null;
  this.eW = 0;
  this.hn = xs;
  this.eW = 0;
}
$p = $c_sjs_js_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sjs_js_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sjs_js_ArrayOps$ArrayIterator() {
}
$h_sjs_js_ArrayOps$ArrayIterator.prototype = $p;
$p.i = (function() {
  return (this.eW < (this.hn.length | 0));
});
$p.e = (function() {
  if ((this.eW >= (this.hn.length | 0))) {
    throw $ct_ju_NoSuchElementException__(new $c_ju_NoSuchElementException());
  }
  var r = this.hn[this.eW];
  this.eW = ((1 + this.eW) | 0);
  return r;
});
$p.cG = (function(n) {
  if ((n > 0)) {
    this.eW = (Math.min((this.hn.length | 0), ((this.eW + n) | 0)) | 0);
  }
  return this;
});
var $d_sjs_js_ArrayOps$ArrayIterator = new $TypeData().i($c_sjs_js_ArrayOps$ArrayIterator, "scala.scalajs.js.ArrayOps$ArrayIterator", ({
  it: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray$() {
}
$p = $c_sjs_js_WrappedArray$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedArray$;
/** @constructor */
function $h_sjs_js_WrappedArray$() {
}
$h_sjs_js_WrappedArray$.prototype = $p;
$p.ek = (function(elems) {
  return this.o2(elems);
});
$p.V = (function() {
  return $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
});
$p.o2 = (function(source) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray()), source).aN();
});
$p.a4 = (function(source) {
  return this.o2(source);
});
var $d_sjs_js_WrappedArray$ = new $TypeData().i($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
  iz: 1,
  ar: 1,
  a: 1,
  C: 1,
  V: 1
}));
var $n_sjs_js_WrappedArray$;
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$();
  }
  return $n_sjs_js_WrappedArray$;
}
/** @constructor */
function $c_sjsr_WrappedVarArgs$() {
}
$p = $c_sjsr_WrappedVarArgs$.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs$;
/** @constructor */
function $h_sjsr_WrappedVarArgs$() {
}
$h_sjsr_WrappedVarArgs$.prototype = $p;
$p.ek = (function(elems) {
  return this.kF(elems);
});
$p.kF = (function(source) {
  return this.V().aU(source).aN();
});
$p.V = (function() {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2$2) => new $c_sjsr_WrappedVarArgs(x$1$2$2.ei))), $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), []));
});
$p.a4 = (function(source) {
  return this.kF(source);
});
var $d_sjsr_WrappedVarArgs$ = new $TypeData().i($c_sjsr_WrappedVarArgs$, "scala.scalajs.runtime.WrappedVarArgs$", ({
  iH: 1,
  ar: 1,
  a: 1,
  C: 1,
  V: 1
}));
var $n_sjsr_WrappedVarArgs$;
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$();
  }
  return $n_sjsr_WrappedVarArgs$;
}
/** @constructor */
function $c_s_util_Failure(exception) {
  this.eX = null;
  this.eX = exception;
}
$p = $c_s_util_Failure.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Failure;
/** @constructor */
function $h_s_util_Failure() {
}
$h_s_util_Failure.prototype = $p;
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().ds(this, (-1408943127), true);
});
$p.p = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_s_util_Failure)) {
    var x = this.eX;
    var x$2 = x$0.eX;
    return ((x === null) ? (x$2 === null) : x.p(x$2));
  } else {
    return false;
  }
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().dK(this);
});
$p.bF = (function() {
  return 1;
});
$p.bH = (function() {
  return "Failure";
});
$p.bG = (function(n) {
  if ((n === 0)) {
    return this.eX;
  }
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.R = (function() {
  var $x_1 = this.eX;
  throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.d3 : $x_1);
});
$p.dN = (function(f) {
});
$p.oj = (function(pf) {
  var marker = $m_sr_Statics$PFMarker$();
  try {
    var v = pf.bK(this.eX, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => marker)));
    return ((marker !== v) ? new $c_s_util_Success(v) : this);
  } catch (e) {
    var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
    var x18 = $m_s_util_control_NonFatal$().s6(e$2);
    if ((!x18.g())) {
      return new $c_s_util_Failure(x18.R());
    }
    throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.d3 : e$2);
  }
});
function $isArrayOf_s_util_Failure(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d0)));
}
var $d_s_util_Failure = new $TypeData().i($c_s_util_Failure, "scala.util.Failure", ({
  d0: 1,
  bb: 1,
  d: 1,
  J: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_Success(value) {
  this.fx = null;
  this.fx = value;
}
$p = $c_s_util_Success.prototype = new $h_s_util_Try();
$p.constructor = $c_s_util_Success;
/** @constructor */
function $h_s_util_Success() {
}
$h_s_util_Success.prototype = $p;
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().ds(this, (-1750213842), true);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_util_Success) && $m_sr_BoxesRunTime$().n(this.fx, x$0.fx)));
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().dK(this);
});
$p.bF = (function() {
  return 1;
});
$p.bH = (function() {
  return "Success";
});
$p.bG = (function(n) {
  if ((n === 0)) {
    return this.fx;
  }
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.R = (function() {
  return this.fx;
});
$p.dN = (function(f) {
  f.d(this.fx);
});
$p.oj = (function(pf) {
  return this;
});
function $isArrayOf_s_util_Success(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d1)));
}
var $d_s_util_Success = new $TypeData().i($c_s_util_Success, "scala.util.Success", ({
  d1: 1,
  bb: 1,
  d: 1,
  J: 1,
  a: 1
}));
function $ct_jl_ArrayIndexOutOfBoundsException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_ArrayIndexOutOfBoundsException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
var $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().i($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
  dn: 1,
  bu: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Double__compareTo__O__I($thiz, o) {
  return $m_jl_Double$().km($thiz, o);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bs)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  bs: 1,
  ai: 1,
  a: 1,
  H: 1,
  a3: 1,
  ay: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Float__compareTo__O__I($thiz, o) {
  return $m_jl_Double$().km($thiz, o);
}
function $isArrayOf_jl_Float(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bt)));
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  bt: 1,
  ai: 1,
  a: 1,
  H: 1,
  a3: 1,
  ay: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
function $f_jl_Integer__compareTo__O__I($thiz, o) {
  return (($thiz === o) ? 0 : (($thiz < o) ? (-1) : 1));
}
function $isArrayOf_jl_Integer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bv)));
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  bv: 1,
  ai: 1,
  a: 1,
  H: 1,
  a3: 1,
  ay: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, $thizhi, that) {
  if ((that instanceof $Long)) {
    var $x_1 = that;
    var this$1_$_lo = $x_1.l;
    var this$1_$_hi = $x_1.h;
    return ((($thiz ^ this$1_$_lo) | ($thizhi ^ this$1_$_hi)) === 0);
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().oH($thiz, $thizhi);
}
function $f_jl_Long__compareTo__O__I($thiz, $thizhi, o) {
  var $x_1 = o;
  var this$1_$_lo = $x_1.l;
  var this$1_$_hi = $x_1.h;
  return (($thizhi === this$1_$_hi) ? (($thiz === this$1_$_lo) ? 0 : ((($thiz >>> 0) < (this$1_$_lo >>> 0)) ? (-1) : 1)) : (($thizhi < this$1_$_hi) ? (-1) : 1));
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bw)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  bw: 1,
  ai: 1,
  a: 1,
  H: 1,
  a3: 1,
  ay: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  dC: 1,
  aR: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1
}));
function $f_T__codePointAt__I__I($thiz, index) {
  return ($thiz.codePointAt(index) | 0);
}
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    h = (((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__compareTo__T__I($thiz, anotherString) {
  var thisLength = $thiz.length;
  var strLength = anotherString.length;
  var minLength = ((thisLength < strLength) ? thisLength : strLength);
  var i = 0;
  while ((i !== minLength)) {
    var cmp = (($thiz.charCodeAt(i) - anotherString.charCodeAt(i)) | 0);
    if ((cmp !== 0)) {
      return cmp;
    }
    i = ((1 + i) | 0);
  }
  return ((thisLength - strLength) | 0);
}
function $f_T__getChars__I__I__AC__I__V($thiz, srcBegin, srcEnd, dst, dstBegin) {
  var offset = ((dstBegin - srcBegin) | 0);
  var i = srcBegin;
  while ((i < srcEnd)) {
    dst.a[((i + offset) | 0)] = $thiz.charCodeAt(i);
    i = ((1 + i) | 0);
  }
}
function $f_T__repeat__I__T($thiz, count) {
  if ((count < 0)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  } else {
    return $thiz.repeat(count);
  }
}
function $f_T__split__T__I__AT($thiz, regex, limit) {
  return $m_ju_regex_PatternCompiler$().nC(regex, 0).r8($thiz, limit);
}
function $f_T__trim__T($thiz) {
  var len = $thiz.length;
  var start = 0;
  while (((start !== len) && ($thiz.charCodeAt(start) <= 32))) {
    start = ((1 + start) | 0);
  }
  if ((start === len)) {
    return "";
  } else {
    var end = len;
    while (($thiz.charCodeAt(((end - 1) | 0)) <= 32)) {
      end = ((end - 1) | 0);
    }
    if (((start | (end ^ len)) === 0)) {
      return $thiz;
    } else {
      var beginIndex = start;
      var endIndex = end;
      return $thiz.substring(beginIndex, endIndex);
    }
  }
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
function $f_T__compareTo__O__I($thiz, o) {
  return $f_T__compareTo__T__I($thiz, o);
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bz)));
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bz: 1,
  a: 1,
  H: 1,
  aP: 1,
  a3: 1,
  ay: 1
}), ((x) => ((typeof x) === "string")));
class $c_ju_regex_PatternSyntaxException extends $c_jl_IllegalArgumentException {
  constructor(desc, regex, index) {
    super();
    this.m0 = null;
    this.m2 = null;
    this.m1 = 0;
    this.m0 = desc;
    this.m2 = regex;
    this.m1 = index;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hF() {
    var idx = this.m1;
    var re = this.m2;
    var indexHint = ((idx < 0) ? "" : (" near index " + idx));
    var base = (((this.m0 + indexHint) + "\n") + re);
    return ((((idx >= 0) && (re !== null)) && (idx < re.length)) ? (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^") : base);
  }
}
var $d_ju_regex_PatternSyntaxException = new $TypeData().i($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
  eh: 1,
  aR: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1
}));
/** @constructor */
function $c_s_None$() {
}
$p = $c_s_None$.prototype = new $h_s_Option();
$p.constructor = $c_s_None$;
/** @constructor */
function $h_s_None$() {
}
$h_s_None$.prototype = $p;
$p.u = (function() {
  return 2433880;
});
$p.v = (function() {
  return "None";
});
$p.bF = (function() {
  return 0;
});
$p.bH = (function() {
  return "None";
});
$p.bG = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.qO = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get");
});
$p.R = (function() {
  this.qO();
});
var $d_s_None$ = new $TypeData().i($c_s_None$, "scala.None$", ({
  es: 1,
  bD: 1,
  b: 1,
  d: 1,
  J: 1,
  a: 1
}));
var $n_s_None$;
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$();
  }
  return $n_s_None$;
}
/** @constructor */
function $c_s_Some(value) {
  this.c2 = null;
  this.c2 = value;
}
$p = $c_s_Some.prototype = new $h_s_Option();
$p.constructor = $c_s_Some;
/** @constructor */
function $h_s_Some() {
}
$h_s_Some.prototype = $p;
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().ds(this, 1323286827, true);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_s_Some) && $m_sr_BoxesRunTime$().n(this.c2, x$0.c2)));
});
$p.v = (function() {
  return $m_sr_ScalaRunTime$().dK(this);
});
$p.bF = (function() {
  return 1;
});
$p.bH = (function() {
  return "Some";
});
$p.bG = (function(n) {
  if ((n === 0)) {
    return this.c2;
  }
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.R = (function() {
  return this.c2;
});
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bF)));
}
var $d_s_Some = new $TypeData().i($c_s_Some, "scala.Some", ({
  bF: 1,
  bD: 1,
  b: 1,
  d: 1,
  J: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.q = (function() {
  return (-1);
});
$p.dN = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.dM = (function(p) {
  return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
});
$p.fA = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.hC = (function(p) {
  return $f_sc_IterableOnceOps__find__F1__s_Option(this, p);
});
$p.d5 = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.g = (function() {
  return $f_sc_IterableOnceOps__isEmpty__Z(this);
});
$p.K = (function() {
  return $f_sc_IterableOnceOps__size__I(this);
});
$p.bh = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.cl = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.c1 = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().cd(this);
});
$p.d7 = (function() {
  return $f_sc_IterableOnceOps__reversed__sc_Iterable(this);
});
$p.m = (function() {
  return this.c().e();
});
$p.aw = (function(f) {
  return $f_sc_IterableOps__map__F1__O(this, f);
});
$p.fC = (function(coll) {
  return this.aG().a4(coll);
});
$p.cq = (function() {
  return this.aG().V();
});
$p.bL = (function() {
  return this.bl();
});
$p.el = (function(coll) {
  return this.fC(coll);
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.ia = null;
  this.e0 = 0;
  this.gQ = 0;
  this.ia = xs;
  this.e0 = 0;
  this.gQ = $m_jl_reflect_Array$().b9(this.ia);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.q = (function() {
  return ((this.gQ - this.e0) | 0);
});
$p.i = (function() {
  return (this.e0 < this.gQ);
});
$p.e = (function() {
  if ((this.e0 >= $m_jl_reflect_Array$().b9(this.ia))) {
    $m_sc_Iterator$().G.e();
  }
  var r = $m_sr_ScalaRunTime$().aL(this.ia, this.e0);
  this.e0 = ((1 + this.e0) | 0);
  return r;
});
$p.cG = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.e0 + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.gQ;
    } else {
      var a = this.gQ;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.e0 = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  eF: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.jC = self;
  $thiz.e1 = 0;
  $thiz.bs = self.l();
  return $thiz;
}
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.bs) ? $thiz.bs : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator() {
  this.jC = null;
  this.e1 = 0;
  this.bs = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.q = (function() {
  return this.bs;
});
$p.i = (function() {
  return (this.bs > 0);
});
$p.e = (function() {
  if ((this.bs > 0)) {
    var r = this.jC.r(this.e1);
    this.e1 = ((1 + this.e1) | 0);
    this.bs = ((this.bs - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().G.e();
  }
});
$p.cG = (function(n) {
  if ((n > 0)) {
    this.e1 = ((this.e1 + n) | 0);
    var b = ((this.bs - n) | 0);
    this.bs = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.gy = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.bs = ((b < 0) ? 0 : b);
  this.e1 = ((this.e1 + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  bM: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1,
  a: 1
}));
function $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__($thiz, self) {
  $thiz.jD = self;
  $thiz.bJ = self.l();
  $thiz.fb = (($thiz.bJ - 1) | 0);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
  this.jD = null;
  this.bJ = 0;
  this.fb = 0;
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewReverseIterator.prototype = $p;
$p.i = (function() {
  return (this.bJ > 0);
});
$p.e = (function() {
  if ((this.bJ > 0)) {
    var r = this.jD.r(this.fb);
    this.fb = ((this.fb - 1) | 0);
    this.bJ = ((this.bJ - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().G.e();
  }
});
$p.gy = (function(from, until) {
  if ((this.bJ > 0)) {
    if ((this.bJ <= from)) {
      this.bJ = 0;
    } else if ((from <= 0)) {
      if (((until >= 0) && (until < this.bJ))) {
        this.bJ = until;
      }
    } else {
      this.fb = ((this.fb - from) | 0);
      if (((until >= 0) && (until < this.bJ))) {
        if ((until <= from)) {
          this.bJ = 0;
        } else {
          this.bJ = ((until - from) | 0);
        }
      } else {
        this.bJ = ((this.bJ - from) | 0);
      }
    }
  }
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewReverseIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewReverseIterator, "scala.collection.IndexedSeqView$IndexedSeqViewReverseIterator", ({
  bN: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$21() {
  this.he = null;
  $ct_scm_ImmutableBuilder__sc_IterableOnce__(this, $m_sc_Iterator$().G);
}
$p = $c_sc_Iterator$$anon$21.prototype = new $h_scm_ImmutableBuilder();
$p.constructor = $c_sc_Iterator$$anon$21;
/** @constructor */
function $h_sc_Iterator$$anon$21() {
}
$h_sc_Iterator$$anon$21.prototype = $p;
$p.pA = (function(elem) {
  this.he = this.he.fz(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$$anon$20(elem))));
  return this;
});
$p.ac = (function(elem) {
  return this.pA(elem);
});
var $d_sc_Iterator$$anon$21 = new $TypeData().i($c_sc_Iterator$$anon$21, "scala.collection.Iterator$$anon$21", ({
  eS: 1,
  gP: 1,
  z: 1,
  A: 1,
  F: 1,
  a7: 1
}));
/** @constructor */
function $c_sc_Iterator$$anon$7(pf$2, outer) {
  this.mf = null;
  this.me = null;
  this.g6 = 0;
  this.jF = null;
  this.mf = pf$2;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.jF = outer;
  this.g6 = 0;
}
$p = $c_sc_Iterator$$anon$7.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$7;
/** @constructor */
function $h_sc_Iterator$$anon$7() {
}
$h_sc_Iterator$$anon$7.prototype = $p;
$p.v = (function() {
  return "<function1>";
});
$p.d = (function(value) {
  return $m_sr_Statics$PFMarker$();
});
$p.i = (function() {
  var marker = $m_sr_Statics$PFMarker$();
  while ((this.g6 === 0)) {
    if (this.jF.i()) {
      var x = this.jF.e();
      var v = this.mf.bK(x, this);
      if ((marker !== v)) {
        this.me = v;
        this.g6 = 1;
      }
    } else {
      this.g6 = (-1);
    }
  }
  return (this.g6 === 1);
});
$p.e = (function() {
  if (this.i()) {
    this.g6 = 0;
    return this.me;
  } else {
    return $m_sc_Iterator$().G.e();
  }
});
var $d_sc_Iterator$$anon$7 = new $TypeData().i($c_sc_Iterator$$anon$7, "scala.collection.Iterator$$anon$7", ({
  eT: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1,
  h: 1
}));
function $f_sc_MapOps__getOrElse__O__F0__O($thiz, key, default$1) {
  var x5 = $thiz.cc(key);
  if ((x5 instanceof $c_s_Some)) {
    return x5.c2;
  }
  if (($m_s_None$() === x5)) {
    return default$1.Q();
  }
  throw new $c_s_MatchError(x5);
}
function $f_sc_MapOps__apply__O__O($thiz, key) {
  var x8 = $thiz.cc(key);
  if (($m_s_None$() === x8)) {
    return $f_sc_MapOps__default__O__O($thiz, key);
  }
  if ((x8 instanceof $c_s_Some)) {
    return x8.c2;
  }
  throw new $c_s_MatchError(x8);
}
function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
  return $thiz.dQ(x, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => default$1.d(x))));
}
function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
  var it = $thiz.c();
  while (it.i()) {
    var next = it.e();
    f.ca(next.aa(), next.ab());
  }
}
function $f_sc_MapOps__default__O__O($thiz, key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
}
function $f_sc_MapOps__contains__O__Z($thiz, key) {
  return (!$thiz.cc(key).g());
}
function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(new $c_sc_Iterator$$anon$9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$1$2) => {
    var k = x$1$2.aa();
    var v = x$1$2.ab();
    return ((k + " -> ") + v);
  })), $thiz.c()), sb, start, sep, end);
}
function $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  var builder = $thiz.cq();
  var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
  var it = $thiz.c();
  while (it.i()) {
    var next = it.e();
    if (seen.iL(f.d(next))) {
      builder.ac(next);
    }
  }
  return builder.aN();
}
function $f_sc_StrictOptimizedSeqOps__prepended__O__O($thiz, elem) {
  var b = $thiz.en().V();
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(b, $thiz, 1);
  b.ac(elem);
  b.aU($thiz);
  return b.aN();
}
function $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O($thiz, suffix) {
  var b = $thiz.en().V();
  b.aU($thiz);
  b.aU(suffix);
  return b.aN();
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.jM = null;
  $n_sci_ArraySeq$ = this;
  this.jM = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
$p.kD = (function(it, tag) {
  return ((it instanceof $c_sci_ArraySeq) ? it : this.hT($m_s_Array$().nY(it, tag)));
});
$p.iZ = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((b$2) => this.hT($f_sc_IterableOnceOps__toArray__s_reflect_ClassTag__O(b$2, evidence$1)))), ($m_scm_ArrayBuffer$(), new $c_scm_ArrayBuffer$$anon$1()));
});
$p.hT = (function(x) {
  if ((x === null)) {
    return null;
  }
  if ((x instanceof $ac_O)) {
    return new $c_sci_ArraySeq$ofRef(x);
  }
  if ((x instanceof $ac_I)) {
    return new $c_sci_ArraySeq$ofInt(x);
  }
  if ((x instanceof $ac_D)) {
    return new $c_sci_ArraySeq$ofDouble(x);
  }
  if ((x instanceof $ac_J)) {
    return new $c_sci_ArraySeq$ofLong(x);
  }
  if ((x instanceof $ac_F)) {
    return new $c_sci_ArraySeq$ofFloat(x);
  }
  if ((x instanceof $ac_C)) {
    return new $c_sci_ArraySeq$ofChar(x);
  }
  if ((x instanceof $ac_B)) {
    return new $c_sci_ArraySeq$ofByte(x);
  }
  if ((x instanceof $ac_S)) {
    return new $c_sci_ArraySeq$ofShort(x);
  }
  if ((x instanceof $ac_Z)) {
    return new $c_sci_ArraySeq$ofBoolean(x);
  }
  if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_sci_ArraySeq$ofUnit(x);
  }
  throw new $c_s_MatchError(x);
});
$p.kC = (function(it, evidence$1) {
  return this.kD(it, evidence$1);
});
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  fh: 1,
  a: 1,
  bL: 1,
  bJ: 1,
  bK: 1,
  bW: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
/** @constructor */
function $c_sci_HashMapBuilder$$anon$1(hm$1, outer) {
  this.aJ = 0;
  this.ev = 0;
  this.cj = null;
  this.bO = 0;
  this.cR = null;
  this.ew = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_ChampBaseIterator__sci_Node__(this, hm$1.bP);
  while (this.i()) {
    var originalHash = this.cj.cn(this.aJ);
    outer.gB(outer.dB, this.cj.dO(this.aJ), this.cj.dq(this.aJ), originalHash, $m_sc_Hashing$().bE(originalHash), 0);
    this.aJ = ((1 + this.aJ) | 0);
  }
}
$p = $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashMapBuilder$$anon$1;
/** @constructor */
function $h_sci_HashMapBuilder$$anon$1() {
}
$h_sci_HashMapBuilder$$anon$1.prototype = $p;
$p.e = (function() {
  return $m_sc_Iterator$().G.e();
});
var $d_sci_HashMapBuilder$$anon$1 = new $TypeData().i($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
  fm: 1,
  aD: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_sci_HashSetBuilder$$anon$1(hm$1, outer) {
  this.aJ = 0;
  this.ev = 0;
  this.cj = null;
  this.bO = 0;
  this.cR = null;
  this.ew = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_ChampBaseIterator__sci_Node__(this, hm$1.c4);
  while (this.i()) {
    var originalHash = this.cj.cn(this.aJ);
    outer.l4(outer.fi, this.cj.dR(this.aJ), originalHash, $m_sc_Hashing$().bE(originalHash), 0);
    this.aJ = ((1 + this.aJ) | 0);
  }
}
$p = $c_sci_HashSetBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_HashSetBuilder$$anon$1;
/** @constructor */
function $h_sci_HashSetBuilder$$anon$1() {
}
$h_sci_HashSetBuilder$$anon$1.prototype = $p;
$p.e = (function() {
  return $m_sc_Iterator$().G.e();
});
var $d_sci_HashSetBuilder$$anon$1 = new $TypeData().i($c_sci_HashSetBuilder$$anon$1, "scala.collection.immutable.HashSetBuilder$$anon$1", ({
  fp: 1,
  aD: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
function $is_sci_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.q)));
}
function $isArrayOf_sci_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.q)));
}
/** @constructor */
function $c_sci_Map$Map2$$anon$1(outer) {
  this.eA = 0;
  this.gf = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
}
$p = $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
$p.constructor = $c_sci_Map$Map2$$anon$1;
/** @constructor */
function $h_sci_Map$Map2$$anon$1() {
}
$h_sci_Map$Map2$$anon$1.prototype = $p;
var $d_sci_Map$Map2$$anon$1 = new $TypeData().i($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
  fI: 1,
  fJ: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_sci_Map$Map3$$anon$4(outer) {
  this.eC = 0;
  this.eB = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
}
$p = $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
$p.constructor = $c_sci_Map$Map3$$anon$4;
/** @constructor */
function $h_sci_Map$Map3$$anon$4() {
}
$h_sci_Map$Map3$$anon$4.prototype = $p;
var $d_sci_Map$Map3$$anon$4 = new $TypeData().i($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
  fK: 1,
  fL: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_sci_Map$Map4$$anon$7(outer) {
  this.eD = 0;
  this.dF = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
}
$p = $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
$p.constructor = $c_sci_Map$Map4$$anon$7;
/** @constructor */
function $h_sci_Map$Map4$$anon$7() {
}
$h_sci_Map$Map4$$anon$7.prototype = $p;
var $d_sci_Map$Map4$$anon$7 = new $TypeData().i($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
  fM: 1,
  fN: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
  this.ex = 0;
  this.ip = null;
  this.cy = 0;
  this.h1 = null;
  this.h2 = null;
  this.jO = 0;
  this.mA = null;
  $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
  this.jO = 0;
}
$p = $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
$p.constructor = $c_sci_MapKeyValueTupleHashIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleHashIterator() {
}
$h_sci_MapKeyValueTupleHashIterator.prototype = $p;
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().oK(this.jO, $m_sr_Statics$().y(this.mA), (-889275714));
});
$p.rm = (function() {
  if ((!this.i())) {
    $m_sc_Iterator$().G.e();
  }
  this.jO = this.ip.cn(this.ex);
  this.mA = this.ip.dq(this.ex);
  this.ex = ((this.ex - 1) | 0);
  return this;
});
$p.e = (function() {
  return this.rm();
});
var $d_sci_MapKeyValueTupleHashIterator = new $TypeData().i($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
  fP: 1,
  fi: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_sci_MapKeyValueTupleIterator(rootNode) {
  this.aJ = 0;
  this.ev = 0;
  this.cj = null;
  this.bO = 0;
  this.cR = null;
  this.ew = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_MapKeyValueTupleIterator;
/** @constructor */
function $h_sci_MapKeyValueTupleIterator() {
}
$h_sci_MapKeyValueTupleIterator.prototype = $p;
$p.gw = (function() {
  if ((!this.i())) {
    $m_sc_Iterator$().G.e();
  }
  var payload = this.cj.o7(this.aJ);
  this.aJ = ((1 + this.aJ) | 0);
  return payload;
});
$p.e = (function() {
  return this.gw();
});
var $d_sci_MapKeyValueTupleIterator = new $TypeData().i($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
  fQ: 1,
  aD: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
  if (($thiz.ck <= $thiz.ba)) {
    $m_sc_Iterator$().G.e();
  }
  $thiz.eF = ((1 + $thiz.eF) | 0);
  var slice = $thiz.jQ.dX($thiz.eF);
  while ((slice.a.length === 0)) {
    $thiz.eF = ((1 + $thiz.eF) | 0);
    slice = $thiz.jQ.dX($thiz.eF);
  }
  $thiz.h4 = $thiz.fl;
  var count = $thiz.mC;
  var idx = $thiz.eF;
  var c = (((count + ((count >>> 31) | 0)) | 0) >> 1);
  var a = ((idx - c) | 0);
  var sign = (a >> 31);
  $thiz.eE = ((((1 + c) | 0) - (((a ^ sign) - sign) | 0)) | 0);
  var x46 = $thiz.eE;
  switch (x46) {
    case 1: {
      $thiz.bv = slice;
      break;
    }
    case 2: {
      $thiz.bw = slice;
      break;
    }
    case 3: {
      $thiz.c9 = slice;
      break;
    }
    case 4: {
      $thiz.di = slice;
      break;
    }
    case 5: {
      $thiz.fk = slice;
      break;
    }
    case 6: {
      $thiz.jP = slice;
      break;
    }
    default: {
      throw new $c_s_MatchError(x46);
    }
  }
  $thiz.fl = (($thiz.h4 + Math.imul(slice.a.length, (1 << Math.imul(5, (($thiz.eE - 1) | 0))))) | 0);
  if (($thiz.fl > $thiz.ea)) {
    $thiz.fl = $thiz.ea;
  }
  if (($thiz.eE > 1)) {
    $thiz.gg = (((1 << Math.imul(5, $thiz.eE)) - 1) | 0);
  }
}
function $p_sci_NewVectorIterator__advance__V($thiz) {
  var pos = (((($thiz.ba - $thiz.ck) | 0) + $thiz.ea) | 0);
  if ((pos === $thiz.fl)) {
    $p_sci_NewVectorIterator__advanceSlice__V($thiz);
  }
  if (($thiz.eE > 1)) {
    var io = ((pos - $thiz.h4) | 0);
    $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, ($thiz.gg ^ io));
    $thiz.gg = io;
  }
  $thiz.ck = (($thiz.ck - $thiz.ba) | 0);
  var a = $thiz.bv.a.length;
  var b = $thiz.ck;
  $thiz.e9 = ((a < b) ? a : b);
  $thiz.ba = 0;
}
function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bv = $thiz.bw.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bw = $thiz.c9.a[(31 & ((io >>> 10) | 0))];
    $thiz.bv = $thiz.bw.a[0];
  } else if ((xor < 1048576)) {
    $thiz.c9 = $thiz.di.a[(31 & ((io >>> 15) | 0))];
    $thiz.bw = $thiz.c9.a[0];
    $thiz.bv = $thiz.bw.a[0];
  } else if ((xor < 33554432)) {
    $thiz.di = $thiz.fk.a[(31 & ((io >>> 20) | 0))];
    $thiz.c9 = $thiz.di.a[0];
    $thiz.bw = $thiz.c9.a[0];
    $thiz.bv = $thiz.bw.a[0];
  } else {
    $thiz.fk = $thiz.jP.a[((io >>> 25) | 0)];
    $thiz.di = $thiz.fk.a[0];
    $thiz.c9 = $thiz.di.a[0];
    $thiz.bw = $thiz.c9.a[0];
    $thiz.bv = $thiz.bw.a[0];
  }
}
function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
  if ((xor < 1024)) {
    $thiz.bv = $thiz.bw.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 32768)) {
    $thiz.bw = $thiz.c9.a[(31 & ((io >>> 10) | 0))];
    $thiz.bv = $thiz.bw.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 1048576)) {
    $thiz.c9 = $thiz.di.a[(31 & ((io >>> 15) | 0))];
    $thiz.bw = $thiz.c9.a[(31 & ((io >>> 10) | 0))];
    $thiz.bv = $thiz.bw.a[(31 & ((io >>> 5) | 0))];
  } else if ((xor < 33554432)) {
    $thiz.di = $thiz.fk.a[(31 & ((io >>> 20) | 0))];
    $thiz.c9 = $thiz.di.a[(31 & ((io >>> 15) | 0))];
    $thiz.bw = $thiz.c9.a[(31 & ((io >>> 10) | 0))];
    $thiz.bv = $thiz.bw.a[(31 & ((io >>> 5) | 0))];
  } else {
    $thiz.fk = $thiz.jP.a[((io >>> 25) | 0)];
    $thiz.di = $thiz.fk.a[(31 & ((io >>> 20) | 0))];
    $thiz.c9 = $thiz.di.a[(31 & ((io >>> 15) | 0))];
    $thiz.bw = $thiz.c9.a[(31 & ((io >>> 10) | 0))];
    $thiz.bv = $thiz.bw.a[(31 & ((io >>> 5) | 0))];
  }
}
/** @constructor */
function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
  this.jQ = null;
  this.ea = 0;
  this.mC = 0;
  this.bv = null;
  this.bw = null;
  this.c9 = null;
  this.di = null;
  this.fk = null;
  this.jP = null;
  this.e9 = 0;
  this.ba = 0;
  this.gg = 0;
  this.ck = 0;
  this.eF = 0;
  this.eE = 0;
  this.h4 = 0;
  this.fl = 0;
  this.jQ = v;
  this.ea = totalLength;
  this.mC = sliceCount;
  this.bv = v.f;
  this.e9 = this.bv.a.length;
  this.ba = 0;
  this.gg = 0;
  this.ck = this.ea;
  this.eF = 0;
  this.eE = 1;
  this.h4 = 0;
  this.fl = this.e9;
}
$p = $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_NewVectorIterator;
/** @constructor */
function $h_sci_NewVectorIterator() {
}
$h_sci_NewVectorIterator.prototype = $p;
$p.q = (function() {
  return ((this.ck - this.ba) | 0);
});
$p.i = (function() {
  return (this.ck > this.ba);
});
$p.e = (function() {
  if ((this.ba === this.e9)) {
    $p_sci_NewVectorIterator__advance__V(this);
  }
  var r = this.bv.a[this.ba];
  this.ba = ((1 + this.ba) | 0);
  return r;
});
$p.cG = (function(n) {
  if ((n > 0)) {
    var oldpos = ((((this.ba - this.ck) | 0) + this.ea) | 0);
    var a = ((oldpos + n) | 0);
    var b = this.ea;
    var newpos = ((a < b) ? a : b);
    if ((newpos === this.ea)) {
      this.ba = 0;
      this.ck = 0;
      this.e9 = 0;
    } else {
      while ((newpos >= this.fl)) {
        $p_sci_NewVectorIterator__advanceSlice__V(this);
      }
      var io = ((newpos - this.h4) | 0);
      if ((this.eE > 1)) {
        $p_sci_NewVectorIterator__setA__I__I__V(this, io, (this.gg ^ io));
        this.gg = io;
      }
      this.e9 = this.bv.a.length;
      this.ba = (31 & io);
      this.ck = ((this.ba + ((this.ea - newpos) | 0)) | 0);
      if ((this.e9 > this.ck)) {
        this.e9 = this.ck;
      }
    }
  }
  return this;
});
$p.bh = (function(xs, start, len) {
  var xsLen = $m_jl_reflect_Array$().b9(xs);
  var srcLen = ((this.ck - this.ba) | 0);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? xsLen : ((xsLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var total$1 = ((total < 0) ? 0 : total);
  var copied = 0;
  var isBoxed = (xs instanceof $ac_O);
  while ((copied < total$1)) {
    if ((this.ba === this.e9)) {
      $p_sci_NewVectorIterator__advance__V(this);
    }
    var a = ((total$1 - copied) | 0);
    var b = ((this.bv.a.length - this.ba) | 0);
    var count = ((a < b) ? a : b);
    if (isBoxed) {
      var src = this.bv;
      var srcPos = this.ba;
      var destPos = ((start + copied) | 0);
      src.s(srcPos, xs, destPos, count);
    } else {
      $m_s_Array$().bT(this.bv, this.ba, xs, ((start + copied) | 0), count);
    }
    this.ba = ((this.ba + count) | 0);
    copied = ((copied + count) | 0);
  }
  return total$1;
});
var $d_sci_NewVectorIterator = new $TypeData().i($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
  fT: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1,
  B: 1
}));
function $ct_sci_Set$SetNIterator__I__($thiz, n) {
  $thiz.eb = 0;
  $thiz.dG = n;
  return $thiz;
}
/** @constructor */
function $c_sci_Set$SetNIterator() {
  this.eb = 0;
  this.dG = 0;
}
$p = $c_sci_Set$SetNIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_Set$SetNIterator;
/** @constructor */
function $h_sci_Set$SetNIterator() {
}
$h_sci_Set$SetNIterator.prototype = $p;
$p.q = (function() {
  return this.dG;
});
$p.i = (function() {
  return (this.dG > 0);
});
$p.e = (function() {
  if (this.i()) {
    var r = this.r(this.eb);
    this.eb = ((1 + this.eb) | 0);
    this.dG = ((this.dG - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().G.e();
  }
});
$p.cG = (function(n) {
  if ((n > 0)) {
    this.eb = ((this.eb + n) | 0);
    var b = ((this.dG - n) | 0);
    this.dG = ((b < 0) ? 0 : b);
  }
  return this;
});
/** @constructor */
function $c_sci_SetHashIterator(rootNode) {
  this.aJ = 0;
  this.ev = 0;
  this.cj = null;
  this.bO = 0;
  this.cR = null;
  this.ew = null;
  this.jR = 0;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
  this.jR = 0;
}
$p = $c_sci_SetHashIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_SetHashIterator;
/** @constructor */
function $h_sci_SetHashIterator() {
}
$h_sci_SetHashIterator.prototype = $p;
$p.u = (function() {
  return this.jR;
});
$p.e = (function() {
  if ((!this.i())) {
    $m_sc_Iterator$().G.e();
  }
  this.jR = this.cj.cn(this.aJ);
  this.aJ = ((1 + this.aJ) | 0);
  return this;
});
var $d_sci_SetHashIterator = new $TypeData().i($c_sci_SetHashIterator, "scala.collection.immutable.SetHashIterator", ({
  g7: 1,
  aD: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_sci_SetIterator(rootNode) {
  this.aJ = 0;
  this.ev = 0;
  this.cj = null;
  this.bO = 0;
  this.cR = null;
  this.ew = null;
  $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
}
$p = $c_sci_SetIterator.prototype = new $h_sci_ChampBaseIterator();
$p.constructor = $c_sci_SetIterator;
/** @constructor */
function $h_sci_SetIterator() {
}
$h_sci_SetIterator.prototype = $p;
$p.e = (function() {
  if ((!this.i())) {
    $m_sc_Iterator$().G.e();
  }
  var payload = this.cj.dR(this.aJ);
  this.aJ = ((1 + this.aJ) | 0);
  return payload;
});
var $d_sci_SetIterator = new $TypeData().i($c_sci_SetIterator, "scala.collection.immutable.SetIterator", ({
  g8: 1,
  aD: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
function $ct_scm_ArrayBuilder__($thiz) {
  $thiz.jV = 0;
  $thiz.mK = 0;
  return $thiz;
}
/** @constructor */
function $c_scm_ArrayBuilder() {
  this.jV = 0;
  this.mK = 0;
}
$p = $c_scm_ArrayBuilder.prototype = new $h_O();
$p.constructor = $c_scm_ArrayBuilder;
/** @constructor */
function $h_scm_ArrayBuilder() {
}
$h_scm_ArrayBuilder.prototype = $p;
$p.aO = (function(size) {
  if ((this.jV < size)) {
    this.rB(size);
  }
});
/** @constructor */
function $c_scm_ArraySeq$() {
  this.jX = null;
  this.mM = null;
  $n_scm_ArraySeq$ = this;
  this.jX = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
  this.mM = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
$p.qE = (function(it, evidence$1) {
  return this.iX($m_s_Array$().nY(it, evidence$1));
});
$p.iZ = (function(evidence$1) {
  return new $c_scm_Builder$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2) => this.iX(x$2))), new $c_scm_ArrayBuilder$generic(evidence$1.bk()));
});
$p.iX = (function(x) {
  if ((x === null)) {
    return null;
  }
  if ((x instanceof $ac_O)) {
    return new $c_scm_ArraySeq$ofRef(x);
  }
  if ((x instanceof $ac_I)) {
    return new $c_scm_ArraySeq$ofInt(x);
  }
  if ((x instanceof $ac_D)) {
    return new $c_scm_ArraySeq$ofDouble(x);
  }
  if ((x instanceof $ac_J)) {
    return new $c_scm_ArraySeq$ofLong(x);
  }
  if ((x instanceof $ac_F)) {
    return new $c_scm_ArraySeq$ofFloat(x);
  }
  if ((x instanceof $ac_C)) {
    return new $c_scm_ArraySeq$ofChar(x);
  }
  if ((x instanceof $ac_B)) {
    return new $c_scm_ArraySeq$ofByte(x);
  }
  if ((x instanceof $ac_S)) {
    return new $c_scm_ArraySeq$ofShort(x);
  }
  if ((x instanceof $ac_Z)) {
    return new $c_scm_ArraySeq$ofBoolean(x);
  }
  if ($isArrayOf_jl_Void(x, 1)) {
    return new $c_scm_ArraySeq$ofUnit(x);
  }
  throw new $c_s_MatchError(x);
});
$p.kC = (function(it, evidence$1) {
  return this.qE(it, evidence$1);
});
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  gw: 1,
  a: 1,
  bL: 1,
  bJ: 1,
  bK: 1,
  bW: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
/** @constructor */
function $c_scm_HashMap$$anon$1(outer) {
  this.eP = 0;
  this.ed = null;
  this.hb = 0;
  this.ha = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer);
}
$p = $c_scm_HashMap$$anon$1.prototype = new $h_scm_HashMap$HashMapIterator();
$p.constructor = $c_scm_HashMap$$anon$1;
/** @constructor */
function $h_scm_HashMap$$anon$1() {
}
$h_scm_HashMap$$anon$1.prototype = $p;
$p.kx = (function(nd) {
  return $ct_T2__O__O__(new $c_T2(), nd.eQ, nd.cD);
});
var $d_scm_HashMap$$anon$1 = new $TypeData().i($c_scm_HashMap$$anon$1, "scala.collection.mutable.HashMap$$anon$1", ({
  gE: 1,
  b4: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_scm_HashMap$$anon$4(outer) {
  this.eP = 0;
  this.ed = null;
  this.hb = 0;
  this.ha = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer);
}
$p = $c_scm_HashMap$$anon$4.prototype = new $h_scm_HashMap$HashMapIterator();
$p.constructor = $c_scm_HashMap$$anon$4;
/** @constructor */
function $h_scm_HashMap$$anon$4() {
}
$h_scm_HashMap$$anon$4.prototype = $p;
$p.kx = (function(nd) {
  return nd;
});
var $d_scm_HashMap$$anon$4 = new $TypeData().i($c_scm_HashMap$$anon$4, "scala.collection.mutable.HashMap$$anon$4", ({
  gF: 1,
  b4: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_scm_HashMap$$anon$5(outer) {
  this.eP = 0;
  this.ed = null;
  this.hb = 0;
  this.ha = null;
  this.jZ = 0;
  this.p5 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.p5 = outer;
  $ct_scm_HashMap$HashMapIterator__scm_HashMap__(this, outer);
  this.jZ = 0;
}
$p = $c_scm_HashMap$$anon$5.prototype = new $h_scm_HashMap$HashMapIterator();
$p.constructor = $c_scm_HashMap$$anon$5;
/** @constructor */
function $h_scm_HashMap$$anon$5() {
}
$h_scm_HashMap$$anon$5.prototype = $p;
$p.u = (function() {
  return this.jZ;
});
$p.kx = (function(nd) {
  var $x_1 = $m_s_util_hashing_MurmurHash3$();
  var improvedHash = nd.dJ;
  this.jZ = $x_1.d8((improvedHash ^ ((improvedHash >>> 16) | 0)), $m_sr_Statics$().y(nd.cD));
  return this;
});
var $d_scm_HashMap$$anon$5 = new $TypeData().i($c_scm_HashMap$$anon$5, "scala.collection.mutable.HashMap$$anon$5", ({
  gG: 1,
  b4: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$1(outer) {
  this.eS = 0;
  this.ee = null;
  this.hd = 0;
  this.hc = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$1.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$1;
/** @constructor */
function $h_scm_HashSet$$anon$1() {
}
$h_scm_HashSet$$anon$1.prototype = $p;
$p.ky = (function(nd) {
  return nd.gj;
});
var $d_scm_HashSet$$anon$1 = new $TypeData().i($c_scm_HashSet$$anon$1, "scala.collection.mutable.HashSet$$anon$1", ({
  gK: 1,
  b5: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$2(outer) {
  this.eS = 0;
  this.ee = null;
  this.hd = 0;
  this.hc = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
}
$p = $c_scm_HashSet$$anon$2.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$2;
/** @constructor */
function $h_scm_HashSet$$anon$2() {
}
$h_scm_HashSet$$anon$2.prototype = $p;
$p.ky = (function(nd) {
  return nd;
});
var $d_scm_HashSet$$anon$2 = new $TypeData().i($c_scm_HashSet$$anon$2, "scala.collection.mutable.HashSet$$anon$2", ({
  gL: 1,
  b5: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_scm_HashSet$$anon$3(outer) {
  this.eS = 0;
  this.ee = null;
  this.hd = 0;
  this.hc = null;
  this.k2 = 0;
  this.mS = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mS = outer;
  $ct_scm_HashSet$HashSetIterator__scm_HashSet__(this, outer);
  this.k2 = 0;
}
$p = $c_scm_HashSet$$anon$3.prototype = new $h_scm_HashSet$HashSetIterator();
$p.constructor = $c_scm_HashSet$$anon$3;
/** @constructor */
function $h_scm_HashSet$$anon$3() {
}
$h_scm_HashSet$$anon$3.prototype = $p;
$p.u = (function() {
  return this.k2;
});
$p.ky = (function(nd) {
  this.k2 = $p_scm_HashSet__improveHash__I__I(this.mS, nd.ef);
  return this;
});
var $d_scm_HashSet$$anon$3 = new $TypeData().i($c_scm_HashSet$$anon$3, "scala.collection.mutable.HashSet$$anon$3", ({
  gM: 1,
  b5: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1
}));
/** @constructor */
function $c_s_concurrent_duration_Duration$$anon$1() {
}
$p = $c_s_concurrent_duration_Duration$$anon$1.prototype = new $h_s_concurrent_duration_Duration$Infinite();
$p.constructor = $c_s_concurrent_duration_Duration$$anon$1;
/** @constructor */
function $h_s_concurrent_duration_Duration$$anon$1() {
}
$h_s_concurrent_duration_Duration$$anon$1.prototype = $p;
$p.v = (function() {
  return "Duration.Undefined";
});
$p.p = (function(other) {
  return false;
});
$p.kn = (function(other) {
  return ((other !== this) | 0);
});
var $d_s_concurrent_duration_Duration$$anon$1 = new $TypeData().i($c_s_concurrent_duration_Duration$$anon$1, "scala.concurrent.duration.Duration$$anon$1", ({
  hf: 1,
  hg: 1,
  cN: 1,
  a: 1,
  H: 1,
  cV: 1
}));
/** @constructor */
function $c_s_math_Ordering$$anon$1(f$4, outer) {
  this.ka = null;
  this.n6 = null;
  this.ka = f$4;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.n6 = outer;
}
$p = $c_s_math_Ordering$$anon$1.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$$anon$1;
/** @constructor */
function $h_s_math_Ordering$$anon$1() {
}
$h_s_math_Ordering$$anon$1.prototype = $p;
$p.dS = (function(x, y) {
  return $f_s_math_Ordering__gt__O__O__Z(this, x, y);
});
$p.dV = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.av = (function(x, y) {
  return this.n6.av(this.ka.d(x), this.ka.d(y));
});
var $d_s_math_Ordering$$anon$1 = new $TypeData().i($c_s_math_Ordering$$anon$1, "scala.math.Ordering$$anon$1", ({
  ho: 1,
  P: 1,
  a: 1,
  a9: 1,
  ab: 1,
  aa: 1
}));
function $f_s_math_Ordering$CachedReverse__isReverseOf__s_math_Ordering__Z($thiz, other) {
  return (other === $thiz.n7);
}
/** @constructor */
function $c_s_math_Ordering$Reverse(outer) {
  this.eV = null;
  this.eV = outer;
}
$p = $c_s_math_Ordering$Reverse.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Reverse;
/** @constructor */
function $h_s_math_Ordering$Reverse() {
}
$h_s_math_Ordering$Reverse.prototype = $p;
$p.dV = (function(other) {
  var x$2 = this.eV;
  return ((other === null) ? (x$2 === null) : other.p(x$2));
});
$p.av = (function(x, y) {
  return this.eV.av(y, x);
});
$p.dS = (function(x, y) {
  return this.eV.dS(y, x);
});
$p.p = (function(obj) {
  if ((obj !== null)) {
    if ((this === obj)) {
      return true;
    }
  }
  if ((obj instanceof $c_s_math_Ordering$Reverse)) {
    var x = this.eV;
    var x$2 = obj.eV;
    return ((x === null) ? (x$2 === null) : x.p(x$2));
  }
  return false;
});
$p.u = (function() {
  return Math.imul(41, this.eV.u());
});
function $isArrayOf_s_math_Ordering$Reverse(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cW)));
}
var $d_s_math_Ordering$Reverse = new $TypeData().i($c_s_math_Ordering$Reverse, "scala.math.Ordering$Reverse", ({
  cW: 1,
  P: 1,
  a: 1,
  a9: 1,
  ab: 1,
  aa: 1
}));
/** @constructor */
function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
  this.hl = null;
  this.hl = runtimeClass;
}
$p = $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
$p.constructor = $c_s_reflect_ClassTag$GenericClassTag;
/** @constructor */
function $h_s_reflect_ClassTag$GenericClassTag() {
}
$h_s_reflect_ClassTag$GenericClassTag.prototype = $p;
$p.p = (function(x) {
  return $f_s_reflect_ClassTag__equals__O__Z(this, x);
});
$p.u = (function() {
  return $m_sr_Statics$().y(this.hl);
});
$p.v = (function() {
  return $p_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this, this.hl);
});
$p.bk = (function() {
  return this.hl;
});
$p.bU = (function(len) {
  return this.hl.L.U(len);
});
var $d_s_reflect_ClassTag$GenericClassTag = new $TypeData().i($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
  hG: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  O: 1
}));
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$p = $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$p.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $p;
$p.fH = (function(s) {
  this.ru(s);
  this.kQ("\n");
});
/** @constructor */
function $c_T2$mcII$sp(_1$mcI$sp, _2$mcI$sp) {
  this.jy = null;
  this.jz = null;
  this.jA = 0;
  this.jB = 0;
  this.jA = _1$mcI$sp;
  this.jB = _2$mcI$sp;
  $ct_T2__O__O__(this, null, null);
}
$p = $c_T2$mcII$sp.prototype = new $h_T2();
$p.constructor = $c_T2$mcII$sp;
/** @constructor */
function $h_T2$mcII$sp() {
}
$h_T2$mcII$sp.prototype = $p;
$p.nj = (function() {
  return this.jA;
});
$p.kg = (function() {
  return this.jB;
});
$p.ab = (function() {
  return this.jB;
});
$p.aa = (function() {
  return this.jA;
});
var $d_T2$mcII$sp = new $TypeData().i($c_T2$mcII$sp, "scala.Tuple2$mcII$sp", ({
  eD: 1,
  aV: 1,
  bE: 1,
  J: 1,
  d: 1,
  a: 1,
  eB: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.bL() + "(<not computed>)");
}
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.D)));
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
}
/** @constructor */
function $c_sci_Set$Set2$$anon$1(outer) {
  this.eb = 0;
  this.dG = 0;
  this.mD = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mD = outer;
  $ct_sci_Set$SetNIterator__I__(this, 2);
}
$p = $c_sci_Set$Set2$$anon$1.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set2$$anon$1;
/** @constructor */
function $h_sci_Set$Set2$$anon$1() {
}
$h_sci_Set$Set2$$anon$1.prototype = $p;
$p.r = (function(i) {
  return this.mD.rI(i);
});
var $d_sci_Set$Set2$$anon$1 = new $TypeData().i($c_sci_Set$Set2$$anon$1, "scala.collection.immutable.Set$Set2$$anon$1", ({
  g3: 1,
  b1: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set3$$anon$2(outer) {
  this.eb = 0;
  this.dG = 0;
  this.mE = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mE = outer;
  $ct_sci_Set$SetNIterator__I__(this, 3);
}
$p = $c_sci_Set$Set3$$anon$2.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set3$$anon$2;
/** @constructor */
function $h_sci_Set$Set3$$anon$2() {
}
$h_sci_Set$Set3$$anon$2.prototype = $p;
$p.r = (function(i) {
  return this.mE.rJ(i);
});
var $d_sci_Set$Set3$$anon$2 = new $TypeData().i($c_sci_Set$Set3$$anon$2, "scala.collection.immutable.Set$Set3$$anon$2", ({
  g4: 1,
  b1: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set4$$anon$3(outer) {
  this.eb = 0;
  this.dG = 0;
  this.mF = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.mF = outer;
  $ct_sci_Set$SetNIterator__I__(this, 4);
}
$p = $c_sci_Set$Set4$$anon$3.prototype = new $h_sci_Set$SetNIterator();
$p.constructor = $c_sci_Set$Set4$$anon$3;
/** @constructor */
function $h_sci_Set$Set4$$anon$3() {
}
$h_sci_Set$Set4$$anon$3.prototype = $p;
$p.r = (function(i) {
  return this.mF.rK(i);
});
var $d_sci_Set$Set4$$anon$3 = new $TypeData().i($c_sci_Set$Set4$$anon$3, "scala.collection.immutable.Set$Set4$$anon$3", ({
  g5: 1,
  b1: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArrayBuilder$generic(elementClass) {
  this.jV = 0;
  this.mK = 0;
  this.gi = null;
  this.mL = false;
  this.jW = null;
  this.gi = elementClass;
  $ct_scm_ArrayBuilder__(this);
  this.mL = (elementClass === $d_C.l());
  this.jW = [];
}
$p = $c_scm_ArrayBuilder$generic.prototype = new $h_scm_ArrayBuilder();
$p.constructor = $c_scm_ArrayBuilder$generic;
/** @constructor */
function $h_scm_ArrayBuilder$generic() {
}
$h_scm_ArrayBuilder$generic.prototype = $p;
$p.nq = (function(elem) {
  var unboxedElem = (this.mL ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().j5(this.gi) : elem));
  this.jW.push(unboxedElem);
  return this;
});
$p.pp = (function(xs) {
  var it = xs.c();
  while (it.i()) {
    this.nq(it.e());
  }
  return this;
});
$p.rB = (function(size) {
});
$p.aN = (function() {
  return $m_scm_ArrayBuilder$().j4(((this.gi === $d_V.l()) ? $d_jl_Void.l() : (((this.gi === $d_sr_Null$.l()) || (this.gi === $d_sr_Nothing$.l())) ? $d_O.l() : this.gi)), this.jW);
});
$p.v = (function() {
  return "ArrayBuilder.generic";
});
$p.ac = (function(elem) {
  return this.nq(elem);
});
$p.aU = (function(elems) {
  return this.pp(elems);
});
var $d_scm_ArrayBuilder$generic = new $TypeData().i($c_scm_ArrayBuilder$generic, "scala.collection.mutable.ArrayBuilder$generic", ({
  gv: 1,
  gt: 1,
  z: 1,
  A: 1,
  F: 1,
  a7: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedIterator(self, mutationCount) {
  this.jC = null;
  this.e1 = 0;
  this.bs = 0;
  this.mP = null;
  this.mO = 0;
  this.mP = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(this, self);
  this.mO = (mutationCount.Q() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedIterator.prototype = $p;
$p.i = (function() {
  $m_scm_MutationTracker$().kl(this.mO, (this.mP.Q() | 0), "mutation occurred during iteration");
  return (this.bs > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator", ({
  gA: 1,
  bM: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1,
  a: 1
}));
/** @constructor */
function $c_scm_CheckedIndexedSeqView$CheckedReverseIterator(self, mutationCount) {
  this.jD = null;
  this.bJ = 0;
  this.fb = 0;
  this.mR = null;
  this.mQ = 0;
  this.mR = mutationCount;
  $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(this, self);
  this.mQ = (mutationCount.Q() | 0);
}
$p = $c_scm_CheckedIndexedSeqView$CheckedReverseIterator.prototype = new $h_sc_IndexedSeqView$IndexedSeqViewReverseIterator();
$p.constructor = $c_scm_CheckedIndexedSeqView$CheckedReverseIterator;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$CheckedReverseIterator() {
}
$h_scm_CheckedIndexedSeqView$CheckedReverseIterator.prototype = $p;
$p.i = (function() {
  $m_scm_MutationTracker$().kl(this.mQ, (this.mR.Q() | 0), "mutation occurred during iteration");
  return (this.bJ > 0);
});
var $d_scm_CheckedIndexedSeqView$CheckedReverseIterator = new $TypeData().i($c_scm_CheckedIndexedSeqView$CheckedReverseIterator, "scala.collection.mutable.CheckedIndexedSeqView$CheckedReverseIterator", ({
  gB: 1,
  bN: 1,
  n: 1,
  b: 1,
  c: 1,
  m: 1,
  a: 1
}));
class $c_s_concurrent_Future$$anon$1 extends $c_ju_NoSuchElementException {
  constructor(t$2) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("Future.collect partial function is not defined at: " + t$2), null, true, true);
  }
  gr() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$1 = new $TypeData().i($c_s_concurrent_Future$$anon$1, "scala.concurrent.Future$$anon$1", ({
  h7: 1,
  aG: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1,
  aO: 1
}));
class $c_s_concurrent_Future$$anon$2 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.filter predicate is not satisfied", null, true, true);
  }
  gr() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$2 = new $TypeData().i($c_s_concurrent_Future$$anon$2, "scala.concurrent.Future$$anon$2", ({
  h8: 1,
  aG: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1,
  aO: 1
}));
class $c_s_concurrent_Future$$anon$3 extends $c_ju_NoSuchElementException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.failed not completed with a throwable.", null, true, true);
  }
  gr() {
    return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
  }
}
var $d_s_concurrent_Future$$anon$3 = new $TypeData().i($c_s_concurrent_Future$$anon$3, "scala.concurrent.Future$$anon$3", ({
  h9: 1,
  aG: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1,
  aO: 1
}));
function $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, initial) {
  $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, initial);
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__($thiz, result) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().hP(result));
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz) {
  $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().fv);
  return $thiz;
}
function $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try($thiz) {
  var \u03b4this$tailLocal2 = $thiz;
  while (true) {
    var state = \u03b4this$tailLocal2.J;
    if ((state instanceof $c_s_util_Try)) {
      return state;
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      \u03b4this$tailLocal2 = state.gx(\u03b4this$tailLocal2);
    } else {
      return null;
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks($thiz, state, callbacks) {
  var \u03b4this$tailLocal4 = $thiz;
  var state$tailLocal2 = state;
  while (true) {
    if ((state$tailLocal2 instanceof $c_s_util_Try)) {
      $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(\u03b4this$tailLocal4, callbacks, state$tailLocal2);
      return callbacks;
    } else if ($is_s_concurrent_impl_Promise$Callbacks(state$tailLocal2)) {
      if (\u03b4this$tailLocal4.eZ(state$tailLocal2, ((state$tailLocal2 !== $m_s_concurrent_impl_Promise$().fv) ? $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(\u03b4this$tailLocal4, callbacks, state$tailLocal2) : callbacks))) {
        return callbacks;
      } else {
        state$tailLocal2 = \u03b4this$tailLocal4.J;
      }
    } else {
      var p = state$tailLocal2.gx(\u03b4this$tailLocal4);
      var state$tailLocal2$tmp1 = p.J;
      \u03b4this$tailLocal4 = p;
      state$tailLocal2 = state$tailLocal2$tmp1;
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__unregisterCallback__s_concurrent_impl_Promise$Transformation__V($thiz, t) {
  while (true) {
    var state = $thiz.J;
    if ((state === t)) {
      if ((!$thiz.eZ(state, $m_s_concurrent_impl_Promise$().fv))) {
      } else {
        return (void 0);
      }
    } else if ((state instanceof $c_s_concurrent_impl_Promise$ManyCallbacks)) {
      if ((!$thiz.eZ(state, $p_s_concurrent_impl_Promise$DefaultPromise__removeCallback__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Transformation__s_concurrent_impl_Promise$Callbacks__O($thiz, state, t, null)))) {
      } else {
        return (void 0);
      }
    } else {
      return (void 0);
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks($thiz, left, right) {
  var right$tailLocal1 = right;
  var left$tailLocal1 = left;
  while (true) {
    if ((left$tailLocal1 instanceof $c_s_concurrent_impl_Promise$Transformation)) {
      return new $c_s_concurrent_impl_Promise$ManyCallbacks(left$tailLocal1, right$tailLocal1);
    } else {
      var m = left$tailLocal1;
      var left$tailLocal1$tmp1 = m.gm;
      var right$tailLocal1$tmp1 = new $c_s_concurrent_impl_Promise$ManyCallbacks(m.gl, right$tailLocal1);
      left$tailLocal1 = left$tailLocal1$tmp1;
      right$tailLocal1 = right$tailLocal1$tmp1;
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__removeCallback__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Transformation__s_concurrent_impl_Promise$Callbacks__O($thiz, cs, t, result) {
  var result$tailLocal1 = result;
  var cs$tailLocal1 = cs;
  while (true) {
    if ((cs$tailLocal1 === t)) {
      return ((result$tailLocal1 === null) ? $m_s_concurrent_impl_Promise$().fv : result$tailLocal1);
    } else if ((cs$tailLocal1 instanceof $c_s_concurrent_impl_Promise$ManyCallbacks)) {
      var m = cs$tailLocal1;
      if ((m.gl === t)) {
        return ((result$tailLocal1 === null) ? m.gm : $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks($thiz, m.gm, result$tailLocal1));
      } else {
        var cs$tailLocal1$tmp1 = m.gm;
        var result$tailLocal1$tmp1 = ((result$tailLocal1 === null) ? m.gl : new $c_s_concurrent_impl_Promise$ManyCallbacks(m.gl, result$tailLocal1));
        cs$tailLocal1 = cs$tailLocal1$tmp1;
        result$tailLocal1 = result$tailLocal1$tmp1;
      }
    } else {
      return cs$tailLocal1;
    }
  }
}
function $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V($thiz, callbacks, resolved) {
  var callbacks$tailLocal1 = callbacks;
  while (true) {
    if ((callbacks$tailLocal1 instanceof $c_s_concurrent_impl_Promise$ManyCallbacks)) {
      var m = callbacks$tailLocal1;
      m.gl.oB(resolved);
      callbacks$tailLocal1 = m.gm;
    } else {
      callbacks$tailLocal1.oB(resolved);
      return (void 0);
    }
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$DefaultPromise() {
  this.J = null;
}
$p = $c_s_concurrent_impl_Promise$DefaultPromise.prototype = new $h_ju_concurrent_atomic_AtomicReference();
$p.constructor = $c_s_concurrent_impl_Promise$DefaultPromise;
/** @constructor */
function $h_s_concurrent_impl_Promise$DefaultPromise() {
}
$h_s_concurrent_impl_Promise$DefaultPromise.prototype = $p;
$p.nX = (function(f, executor) {
  var state = this.J;
  if ((!(state instanceof $c_s_util_Failure))) {
    $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 5, f, executor));
  }
});
$p.nW = (function(f, executor) {
  var state = this.J;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 2, f, executor)) : this);
});
$p.hJ = (function(f, executor) {
  var state = this.J;
  return ((!(state instanceof $c_s_util_Failure)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 1, f, executor)) : this);
});
$p.oi = (function(pf, executor) {
  var state = this.J;
  return ((!(state instanceof $c_s_util_Success)) ? $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, state, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 7, pf, executor)) : this);
});
$p.j0 = (function(func, executor) {
  $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, this.J, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 6, func, executor));
});
$p.ro = (function(func, executor) {
  var t = $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 6, func, executor);
  $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, this.J, t);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    $p_s_concurrent_impl_Promise$DefaultPromise__unregisterCallback__s_concurrent_impl_Promise$Transformation__V(this, t);
  }));
});
$p.v = (function() {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    var state = \u03b4this$tailLocal1.J;
    if ((state instanceof $c_s_util_Try)) {
      return (("Future(" + state) + ")");
    } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      \u03b4this$tailLocal1 = state.gx(\u03b4this$tailLocal1);
    } else {
      return "Future(<not completed>)";
    }
  }
});
$p.oS = (function() {
  return $m_s_Option$().hy($p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(this));
});
$p.oJ = (function(value) {
  var state = this.J;
  return ((!(state instanceof $c_s_util_Try)) && this.fJ(state, $m_s_concurrent_impl_Promise$().hP(value)));
});
$p.fJ = (function(state, resolved) {
  var \u03b4this$tailLocal3 = this;
  var state$tailLocal1 = state;
  while (true) {
    if ($is_s_concurrent_impl_Promise$Callbacks(state$tailLocal1)) {
      if ((!\u03b4this$tailLocal3.eZ(state$tailLocal1, resolved))) {
        state$tailLocal1 = \u03b4this$tailLocal3.J;
        continue;
      }
      if ((state$tailLocal1 !== $m_s_concurrent_impl_Promise$().fv)) {
        $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V(\u03b4this$tailLocal3, state$tailLocal1, resolved);
      }
      return true;
    } else if ((state$tailLocal1 instanceof $c_s_concurrent_impl_Promise$Link)) {
      var p = state$tailLocal1.gx(\u03b4this$tailLocal3);
      if ((p !== \u03b4this$tailLocal3)) {
        var state$tailLocal1$tmp1 = p.J;
        \u03b4this$tailLocal3 = p;
        state$tailLocal1 = state$tailLocal1$tmp1;
        continue;
      }
      return false;
    } else {
      return false;
    }
  }
});
$p.ko = (function(other) {
  if ((other !== this)) {
    var state = this.J;
    if ((!(state instanceof $c_s_util_Try))) {
      if ((other instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
        var resolved = $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(other);
      } else {
        var this$1 = other.oS();
        var resolved = (this$1.g() ? null : this$1.R());
      }
      if ((resolved !== null)) {
        this.fJ(state, resolved);
      } else {
        other.j0(this, $m_s_concurrent_ExecutionContext$parasitic$());
      }
    }
  }
  return this;
});
$p.kS = (function(target, link) {
  var \u03b4this$tailLocal5 = this;
  var link$tailLocal1 = link;
  var target$tailLocal2 = target;
  while (true) {
    if ((\u03b4this$tailLocal5 !== target$tailLocal2)) {
      var state = \u03b4this$tailLocal5.J;
      if ((state instanceof $c_s_util_Try)) {
        if ((!target$tailLocal2.fJ(target$tailLocal2.J, state))) {
          throw new $c_jl_IllegalStateException("Cannot link completed promises together");
        } else {
          return (void 0);
        }
      } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
        var l = ((link$tailLocal1 !== null) ? link$tailLocal1 : new $c_s_concurrent_impl_Promise$Link(target$tailLocal2));
        var p = l.gx(\u03b4this$tailLocal5);
        if (((\u03b4this$tailLocal5 !== p) && \u03b4this$tailLocal5.eZ(state, l))) {
          if ((state !== $m_s_concurrent_impl_Promise$().fv)) {
            $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(p, p.J, state);
            return (void 0);
          } else {
            return (void 0);
          }
        } else {
          target$tailLocal2 = p;
          link$tailLocal1 = l;
        }
      } else {
        \u03b4this$tailLocal5 = state.gx(\u03b4this$tailLocal5);
      }
    } else {
      return (void 0);
    }
  }
});
$p.s7 = (function(resolved) {
  var \u03b4this$tailLocal6 = this;
  while (true) {
    var state = \u03b4this$tailLocal6.J;
    if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
      var next = (\u03b4this$tailLocal6.eZ(state, resolved) ? state.J : \u03b4this$tailLocal6);
      \u03b4this$tailLocal6 = next;
    } else {
      \u03b4this$tailLocal6.fJ(state, resolved);
      return (void 0);
    }
  }
});
$p.d = (function(v1) {
  this.fJ(this.J, v1);
});
function $isArrayOf_s_concurrent_impl_Promise$DefaultPromise(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ba)));
}
var $d_s_concurrent_impl_Promise$DefaultPromise = new $TypeData().i($c_s_concurrent_impl_Promise$DefaultPromise, "scala.concurrent.impl.Promise$DefaultPromise", ({
  ba: 1,
  aH: 1,
  a: 1,
  cM: 1,
  b6: 1,
  b9: 1,
  h: 1
}));
/** @constructor */
function $c_s_math_Ordering$Boolean$() {
}
$p = $c_s_math_Ordering$Boolean$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Boolean$;
/** @constructor */
function $h_s_math_Ordering$Boolean$() {
}
$h_s_math_Ordering$Boolean$.prototype = $p;
$p.dS = (function(x, y) {
  return $f_s_math_Ordering__gt__O__O__Z(this, x, y);
});
$p.dV = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.av = (function(x, y) {
  var x$1 = (!(!x));
  return ((x$1 === (!(!y))) ? 0 : (x$1 ? 1 : (-1)));
});
var $d_s_math_Ordering$Boolean$ = new $TypeData().i($c_s_math_Ordering$Boolean$, "scala.math.Ordering$Boolean$", ({
  hp: 1,
  P: 1,
  a: 1,
  a9: 1,
  ab: 1,
  aa: 1,
  hq: 1
}));
var $n_s_math_Ordering$Boolean$;
function $m_s_math_Ordering$Boolean$() {
  if ((!$n_s_math_Ordering$Boolean$)) {
    $n_s_math_Ordering$Boolean$ = new $c_s_math_Ordering$Boolean$();
  }
  return $n_s_math_Ordering$Boolean$;
}
/** @constructor */
function $c_s_math_Ordering$Byte$() {
}
$p = $c_s_math_Ordering$Byte$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Byte$;
/** @constructor */
function $h_s_math_Ordering$Byte$() {
}
$h_s_math_Ordering$Byte$.prototype = $p;
$p.dS = (function(x, y) {
  return $f_s_math_Ordering__gt__O__O__Z(this, x, y);
});
$p.dV = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.av = (function(x, y) {
  return (((x | 0) - (y | 0)) | 0);
});
var $d_s_math_Ordering$Byte$ = new $TypeData().i($c_s_math_Ordering$Byte$, "scala.math.Ordering$Byte$", ({
  hr: 1,
  P: 1,
  a: 1,
  a9: 1,
  ab: 1,
  aa: 1,
  hs: 1
}));
var $n_s_math_Ordering$Byte$;
function $m_s_math_Ordering$Byte$() {
  if ((!$n_s_math_Ordering$Byte$)) {
    $n_s_math_Ordering$Byte$ = new $c_s_math_Ordering$Byte$();
  }
  return $n_s_math_Ordering$Byte$;
}
/** @constructor */
function $c_s_math_Ordering$Char$() {
}
$p = $c_s_math_Ordering$Char$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Char$;
/** @constructor */
function $h_s_math_Ordering$Char$() {
}
$h_s_math_Ordering$Char$.prototype = $p;
$p.dS = (function(x, y) {
  return $f_s_math_Ordering__gt__O__O__Z(this, x, y);
});
$p.dV = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.av = (function(x, y) {
  return (($uC(x) - $uC(y)) | 0);
});
var $d_s_math_Ordering$Char$ = new $TypeData().i($c_s_math_Ordering$Char$, "scala.math.Ordering$Char$", ({
  hu: 1,
  P: 1,
  a: 1,
  a9: 1,
  ab: 1,
  aa: 1,
  hv: 1
}));
var $n_s_math_Ordering$Char$;
function $m_s_math_Ordering$Char$() {
  if ((!$n_s_math_Ordering$Char$)) {
    $n_s_math_Ordering$Char$ = new $c_s_math_Ordering$Char$();
  }
  return $n_s_math_Ordering$Char$;
}
/** @constructor */
function $c_s_math_Ordering$DeprecatedDoubleOrdering$() {
}
$p = $c_s_math_Ordering$DeprecatedDoubleOrdering$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$DeprecatedDoubleOrdering$;
/** @constructor */
function $h_s_math_Ordering$DeprecatedDoubleOrdering$() {
}
$h_s_math_Ordering$DeprecatedDoubleOrdering$.prototype = $p;
$p.dS = (function(x, y) {
  return $f_s_math_Ordering__gt__O__O__Z(this, x, y);
});
$p.dV = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.av = (function(x, y) {
  return $m_jl_Double$().km((+x), (+y));
});
var $d_s_math_Ordering$DeprecatedDoubleOrdering$ = new $TypeData().i($c_s_math_Ordering$DeprecatedDoubleOrdering$, "scala.math.Ordering$DeprecatedDoubleOrdering$", ({
  hw: 1,
  P: 1,
  a: 1,
  a9: 1,
  ab: 1,
  aa: 1,
  hx: 1
}));
var $n_s_math_Ordering$DeprecatedDoubleOrdering$;
function $m_s_math_Ordering$DeprecatedDoubleOrdering$() {
  if ((!$n_s_math_Ordering$DeprecatedDoubleOrdering$)) {
    $n_s_math_Ordering$DeprecatedDoubleOrdering$ = new $c_s_math_Ordering$DeprecatedDoubleOrdering$();
  }
  return $n_s_math_Ordering$DeprecatedDoubleOrdering$;
}
/** @constructor */
function $c_s_math_Ordering$Long$() {
}
$p = $c_s_math_Ordering$Long$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Long$;
/** @constructor */
function $h_s_math_Ordering$Long$() {
}
$h_s_math_Ordering$Long$.prototype = $p;
$p.dS = (function(x, y) {
  return $f_s_math_Ordering__gt__O__O__Z(this, x, y);
});
$p.dV = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.av = (function(x, y) {
  var $x_1 = $uJ(x);
  var x$1_$_lo = $x_1.l;
  var x$1_$_hi = $x_1.h;
  var $x_2 = $uJ(y);
  var y$1_$_lo = $x_2.l;
  var y$1_$_hi = $x_2.h;
  return ((x$1_$_hi === y$1_$_hi) ? ((x$1_$_lo === y$1_$_lo) ? 0 : (((x$1_$_lo >>> 0) < (y$1_$_lo >>> 0)) ? (-1) : 1)) : ((x$1_$_hi < y$1_$_hi) ? (-1) : 1));
});
var $d_s_math_Ordering$Long$ = new $TypeData().i($c_s_math_Ordering$Long$, "scala.math.Ordering$Long$", ({
  hA: 1,
  P: 1,
  a: 1,
  a9: 1,
  ab: 1,
  aa: 1,
  hB: 1
}));
var $n_s_math_Ordering$Long$;
function $m_s_math_Ordering$Long$() {
  if ((!$n_s_math_Ordering$Long$)) {
    $n_s_math_Ordering$Long$ = new $c_s_math_Ordering$Long$();
  }
  return $n_s_math_Ordering$Long$;
}
/** @constructor */
function $c_s_math_Ordering$Short$() {
}
$p = $c_s_math_Ordering$Short$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Short$;
/** @constructor */
function $h_s_math_Ordering$Short$() {
}
$h_s_math_Ordering$Short$.prototype = $p;
$p.dS = (function(x, y) {
  return $f_s_math_Ordering__gt__O__O__Z(this, x, y);
});
$p.dV = (function(other) {
  return $f_s_math_Ordering__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.av = (function(x, y) {
  return (((x | 0) - (y | 0)) | 0);
});
var $d_s_math_Ordering$Short$ = new $TypeData().i($c_s_math_Ordering$Short$, "scala.math.Ordering$Short$", ({
  hC: 1,
  P: 1,
  a: 1,
  a9: 1,
  ab: 1,
  aa: 1,
  hD: 1
}));
var $n_s_math_Ordering$Short$;
function $m_s_math_Ordering$Short$() {
  if ((!$n_s_math_Ordering$Short$)) {
    $n_s_math_Ordering$Short$ = new $c_s_math_Ordering$Short$();
  }
  return $n_s_math_Ordering$Short$;
}
/** @constructor */
function $c_s_reflect_AnyValManifest() {
  this.au = null;
}
$p = $c_s_reflect_AnyValManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_AnyValManifest;
/** @constructor */
function $h_s_reflect_AnyValManifest() {
}
$h_s_reflect_AnyValManifest.prototype = $p;
$p.v = (function() {
  return this.au;
});
$p.p = (function(that) {
  return (this === that);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$p = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $p;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.d3 = null;
    this.d3 = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hF() {
    return $dp_toString__T(this.d3);
  }
  bH() {
    return "JavaScriptException";
  }
  bF() {
    return 1;
  }
  bG(x$1) {
    return ((x$1 === 0) ? this.d3 : $m_sr_Statics$().r2(x$1));
  }
  ce() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  u() {
    return $m_s_util_hashing_MurmurHash3$().ds(this, 1744042595, true);
  }
  p(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().n(this.d3, x$1.d3)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cZ)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  cZ: 1,
  K: 1,
  I: 1,
  v: 1,
  a: 1,
  J: 1,
  d: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.lx && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.lx = false;
  this.gH = null;
  this.lx = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.gH = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.ru = (function(s) {
  this.kQ(((s === null) ? "null" : s));
});
$p.kQ = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.gH = (("" + this.gH) + rest);
      rest = "";
    } else {
      var $x_1 = this.gH;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.gH = "";
      var this$4 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$4.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  dy: 1,
  dl: 1,
  dk: 1,
  bm: 1,
  bk: 1,
  bo: 1,
  bl: 1,
  bn: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.g())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.o();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
function $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O($thiz, f) {
  if (($thiz.aH(1) <= 0)) {
    return $thiz;
  } else {
    var builder = $thiz.cq();
    var seen = $ct_scm_HashSet__(new $c_scm_HashSet());
    var it = $thiz.c();
    var different = false;
    while (it.i()) {
      var next = it.e();
      if (seen.iL(f.d(next))) {
        builder.ac(next);
      } else {
        different = true;
      }
    }
    return (different ? builder.aN() : $thiz);
  }
}
/** @constructor */
function $c_s_math_Ordering$Int$() {
  this.n7 = null;
  $n_s_math_Ordering$Int$ = this;
  this.n7 = new $c_s_math_Ordering$Reverse(this);
}
$p = $c_s_math_Ordering$Int$.prototype = new $h_O();
$p.constructor = $c_s_math_Ordering$Int$;
/** @constructor */
function $h_s_math_Ordering$Int$() {
}
$h_s_math_Ordering$Int$.prototype = $p;
$p.dS = (function(x, y) {
  return $f_s_math_Ordering__gt__O__O__Z(this, x, y);
});
$p.dV = (function(other) {
  return $f_s_math_Ordering$CachedReverse__isReverseOf__s_math_Ordering__Z(this, other);
});
$p.av = (function(x, y) {
  var x$1 = (x | 0);
  var y$1 = (y | 0);
  return ((x$1 === y$1) ? 0 : ((x$1 < y$1) ? (-1) : 1));
});
var $d_s_math_Ordering$Int$ = new $TypeData().i($c_s_math_Ordering$Int$, "scala.math.Ordering$Int$", ({
  hy: 1,
  P: 1,
  a: 1,
  a9: 1,
  ab: 1,
  aa: 1,
  hz: 1,
  ht: 1
}));
var $n_s_math_Ordering$Int$;
function $m_s_math_Ordering$Int$() {
  if ((!$n_s_math_Ordering$Int$)) {
    $n_s_math_Ordering$Int$ = new $c_s_math_Ordering$Int$();
  }
  return $n_s_math_Ordering$Int$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest() {
  this.au = null;
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest() {
}
$h_s_reflect_ManifestFactory$BooleanManifest.prototype = $p;
$p.bk = (function() {
  return $d_Z.l();
});
$p.bU = (function(len) {
  return new $ac_Z(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest() {
  this.au = null;
}
$p = $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest() {
}
$h_s_reflect_ManifestFactory$ByteManifest.prototype = $p;
$p.bk = (function() {
  return $d_B.l();
});
$p.bU = (function(len) {
  return new $ac_B(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest() {
  this.au = null;
}
$p = $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest() {
}
$h_s_reflect_ManifestFactory$CharManifest.prototype = $p;
$p.bk = (function() {
  return $d_C.l();
});
$p.bU = (function(len) {
  return new $ac_C(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest() {
  this.au = null;
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest() {
}
$h_s_reflect_ManifestFactory$DoubleManifest.prototype = $p;
$p.bk = (function() {
  return $d_D.l();
});
$p.bU = (function(len) {
  return new $ac_D(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest() {
  this.au = null;
}
$p = $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest() {
}
$h_s_reflect_ManifestFactory$FloatManifest.prototype = $p;
$p.bk = (function() {
  return $d_F.l();
});
$p.bU = (function(len) {
  return new $ac_F(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest() {
  this.au = null;
}
$p = $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest() {
}
$h_s_reflect_ManifestFactory$IntManifest.prototype = $p;
$p.bk = (function() {
  return $d_I.l();
});
$p.bU = (function(len) {
  return new $ac_I(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest() {
  this.au = null;
}
$p = $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest() {
}
$h_s_reflect_ManifestFactory$LongManifest.prototype = $p;
$p.bk = (function() {
  return $d_J.l();
});
$p.bU = (function(len) {
  return new $ac_J(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.eh = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.v = (function() {
  return this.eh;
});
$p.p = (function(that) {
  return (this === that);
});
$p.u = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest() {
  this.au = null;
}
$p = $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest() {
}
$h_s_reflect_ManifestFactory$ShortManifest.prototype = $p;
$p.bk = (function() {
  return $d_S.l();
});
$p.bU = (function(len) {
  return new $ac_S(len);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest() {
  this.au = null;
}
$p = $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest() {
}
$h_s_reflect_ManifestFactory$UnitManifest.prototype = $p;
$p.bk = (function() {
  return $d_V.l();
});
$p.bU = (function(len) {
  return new ($d_jl_Void.r().C)(len);
});
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.aG = (function() {
  return $m_sc_View$();
});
$p.v = (function() {
  return $f_sc_View__toString__T(this);
});
$p.bl = (function() {
  return "View";
});
function $f_sc_Set__equals__O__Z($thiz, that) {
  if (($thiz === that)) {
    return true;
  } else if ($is_sc_Set(that)) {
    if (($thiz.K() === that.K())) {
      try {
        return $thiz.l2(that);
      } catch (e) {
        if (false) {
          return false;
        } else {
          throw e;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function $is_sc_Set(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.a8)));
}
function $isArrayOf_sc_Set(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
/** @constructor */
function $c_s_reflect_ManifestFactory$AnyManifest$() {
  this.eh = null;
  this.eh = "Any";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$AnyManifest$() {
}
$h_s_reflect_ManifestFactory$AnyManifest$.prototype = $p;
$p.bk = (function() {
  return $d_O.l();
});
$p.bU = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$AnyManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
  hH: 1,
  aM: 1,
  aL: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  O: 1,
  Z: 1
}));
var $n_s_reflect_ManifestFactory$AnyManifest$;
function $m_s_reflect_ManifestFactory$AnyManifest$() {
  if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
    $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$();
  }
  return $n_s_reflect_ManifestFactory$AnyManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$BooleanManifest$() {
  this.au = null;
  this.au = "Boolean";
}
$p = $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
$p.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$BooleanManifest$() {
}
$h_s_reflect_ManifestFactory$BooleanManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$BooleanManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
  hJ: 1,
  hI: 1,
  ac: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  O: 1,
  Z: 1
}));
var $n_s_reflect_ManifestFactory$BooleanManifest$;
function $m_s_reflect_ManifestFactory$BooleanManifest$() {
  if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
    $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$();
  }
  return $n_s_reflect_ManifestFactory$BooleanManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ByteManifest$() {
  this.au = null;
  this.au = "Byte";
}
$p = $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ByteManifest$() {
}
$h_s_reflect_ManifestFactory$ByteManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ByteManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
  hL: 1,
  hK: 1,
  ac: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  O: 1,
  Z: 1
}));
var $n_s_reflect_ManifestFactory$ByteManifest$;
function $m_s_reflect_ManifestFactory$ByteManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
    $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$();
  }
  return $n_s_reflect_ManifestFactory$ByteManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$CharManifest$() {
  this.au = null;
  this.au = "Char";
}
$p = $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
$p.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$CharManifest$() {
}
$h_s_reflect_ManifestFactory$CharManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$CharManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
  hN: 1,
  hM: 1,
  ac: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  O: 1,
  Z: 1
}));
var $n_s_reflect_ManifestFactory$CharManifest$;
function $m_s_reflect_ManifestFactory$CharManifest$() {
  if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
    $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$();
  }
  return $n_s_reflect_ManifestFactory$CharManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$DoubleManifest$() {
  this.au = null;
  this.au = "Double";
}
$p = $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
$p.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$DoubleManifest$() {
}
$h_s_reflect_ManifestFactory$DoubleManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$DoubleManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
  hP: 1,
  hO: 1,
  ac: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  O: 1,
  Z: 1
}));
var $n_s_reflect_ManifestFactory$DoubleManifest$;
function $m_s_reflect_ManifestFactory$DoubleManifest$() {
  if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
    $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$();
  }
  return $n_s_reflect_ManifestFactory$DoubleManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$FloatManifest$() {
  this.au = null;
  this.au = "Float";
}
$p = $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
$p.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$FloatManifest$() {
}
$h_s_reflect_ManifestFactory$FloatManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$FloatManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
  hR: 1,
  hQ: 1,
  ac: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  O: 1,
  Z: 1
}));
var $n_s_reflect_ManifestFactory$FloatManifest$;
function $m_s_reflect_ManifestFactory$FloatManifest$() {
  if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
    $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$();
  }
  return $n_s_reflect_ManifestFactory$FloatManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$IntManifest$() {
  this.au = null;
  this.au = "Int";
}
$p = $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
$p.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$IntManifest$() {
}
$h_s_reflect_ManifestFactory$IntManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$IntManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
  hT: 1,
  hS: 1,
  ac: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  O: 1,
  Z: 1
}));
var $n_s_reflect_ManifestFactory$IntManifest$;
function $m_s_reflect_ManifestFactory$IntManifest$() {
  if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
    $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$();
  }
  return $n_s_reflect_ManifestFactory$IntManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$LongManifest$() {
  this.au = null;
  this.au = "Long";
}
$p = $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
$p.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$LongManifest$() {
}
$h_s_reflect_ManifestFactory$LongManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$LongManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
  hV: 1,
  hU: 1,
  ac: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  O: 1,
  Z: 1
}));
var $n_s_reflect_ManifestFactory$LongManifest$;
function $m_s_reflect_ManifestFactory$LongManifest$() {
  if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
    $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$();
  }
  return $n_s_reflect_ManifestFactory$LongManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NothingManifest$() {
  this.eh = null;
  this.eh = "Nothing";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NothingManifest$() {
}
$h_s_reflect_ManifestFactory$NothingManifest$.prototype = $p;
$p.bk = (function() {
  return $d_sr_Nothing$.l();
});
$p.bU = (function(len) {
  return new ($d_sr_Nothing$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NothingManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
  hW: 1,
  aM: 1,
  aL: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  O: 1,
  Z: 1
}));
var $n_s_reflect_ManifestFactory$NothingManifest$;
function $m_s_reflect_ManifestFactory$NothingManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
    $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$();
  }
  return $n_s_reflect_ManifestFactory$NothingManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$NullManifest$() {
  this.eh = null;
  this.eh = "Null";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$NullManifest$() {
}
$h_s_reflect_ManifestFactory$NullManifest$.prototype = $p;
$p.bk = (function() {
  return $d_sr_Null$.l();
});
$p.bU = (function(len) {
  return new ($d_sr_Null$.r().C)(len);
});
var $d_s_reflect_ManifestFactory$NullManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
  hX: 1,
  aM: 1,
  aL: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  O: 1,
  Z: 1
}));
var $n_s_reflect_ManifestFactory$NullManifest$;
function $m_s_reflect_ManifestFactory$NullManifest$() {
  if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
    $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$();
  }
  return $n_s_reflect_ManifestFactory$NullManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.eh = null;
  this.eh = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
$p.bk = (function() {
  return $d_O.l();
});
$p.bU = (function(len) {
  return new $ac_O(len);
});
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  hY: 1,
  aM: 1,
  aL: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  O: 1,
  Z: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ShortManifest$() {
  this.au = null;
  this.au = "Short";
}
$p = $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ShortManifest$() {
}
$h_s_reflect_ManifestFactory$ShortManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ShortManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
  i0: 1,
  hZ: 1,
  ac: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  O: 1,
  Z: 1
}));
var $n_s_reflect_ManifestFactory$ShortManifest$;
function $m_s_reflect_ManifestFactory$ShortManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
    $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$();
  }
  return $n_s_reflect_ManifestFactory$ShortManifest$;
}
/** @constructor */
function $c_s_reflect_ManifestFactory$UnitManifest$() {
  this.au = null;
  this.au = "Unit";
}
$p = $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
$p.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$UnitManifest$() {
}
$h_s_reflect_ManifestFactory$UnitManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$UnitManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
  i2: 1,
  i1: 1,
  ac: 1,
  a: 1,
  U: 1,
  T: 1,
  d: 1,
  O: 1,
  Z: 1
}));
var $n_s_reflect_ManifestFactory$UnitManifest$;
function $m_s_reflect_ManifestFactory$UnitManifest$() {
  if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
    $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$();
  }
  return $n_s_reflect_ManifestFactory$UnitManifest$;
}
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.go($thiz)) {
        return $thiz.f2(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.p)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.p)));
}
function $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__($thiz, underlying_, len, ord) {
  $thiz.dA = len;
  $thiz.g8 = ord;
  $thiz.gY = underlying_;
  $thiz.jJ = false;
  return $thiz;
}
function $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__($thiz, underlying, ord) {
  $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__($thiz, underlying, underlying.l(), ord);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Sorted() {
  this.dA = 0;
  this.g8 = null;
  this.gY = null;
  this.jJ = false;
  this.mn = null;
  this.mo = false;
}
$p = $c_sc_SeqView$Sorted.prototype = new $h_O();
$p.constructor = $c_sc_SeqView$Sorted;
/** @constructor */
function $h_sc_SeqView$Sorted() {
}
$h_sc_SeqView$Sorted.prototype = $p;
$p.fA = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.d5 = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.bh = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.cl = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.c1 = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().cd(this);
});
$p.m = (function() {
  return this.c().e();
});
$p.cb = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bj = (function() {
  return new $c_sc_SeqView$Sorted$ReverseSorted(this).c();
});
$p.dU = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.c(), p, from);
});
$p.aH = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.cq = (function() {
  return $m_sc_View$().V();
});
$p.bL = (function() {
  return "SeqView";
});
$p.aG = (function() {
  return $m_sc_View$();
});
$p.v = (function() {
  return $f_sc_View__toString__T(this);
});
$p.j3 = (function() {
  if ((!this.mo)) {
    var len = this.dA;
    if ((len === 0)) {
      var res = $m_sci_Nil$();
    } else if ((len === 1)) {
      $m_sci_List$();
      var elems = new $c_sjsr_WrappedVarArgs([this.gY.m()]);
      var res = $m_sci_Nil$().cd(elems);
    } else {
      var arr = new $ac_O(len);
      this.gY.bh(arr, 0, 2147483647);
      $m_ju_Arrays$().gz(arr, this.g8);
      var res = $m_sci_ArraySeq$().hT(arr);
    }
    this.jJ = true;
    this.gY = null;
    this.mn = res;
    this.mo = true;
  }
  return this.mn;
});
$p.op = (function() {
  return (this.jJ ? this.j3() : this.gY);
});
$p.r = (function(i) {
  return this.j3().r(i);
});
$p.l = (function() {
  return this.dA;
});
$p.c = (function() {
  return $m_sc_Iterator$().G.fz(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.j3().c())));
});
$p.q = (function() {
  return this.dA;
});
$p.g = (function() {
  return (this.dA === 0);
});
$p.l0 = (function(ord1) {
  var x$2 = this.g8;
  if (((ord1 === null) ? (x$2 === null) : ord1.p(x$2))) {
    return this;
  } else {
    return (ord1.dV(this.g8) ? new $c_sc_SeqView$Sorted$ReverseSorted(this) : $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this.op(), this.dA, ord1));
  }
});
$p.bI = (function(ord) {
  return this.l0(ord);
});
$p.el = (function(coll) {
  return $m_sc_View$().iS(coll);
});
var $d_sc_SeqView$Sorted = new $TypeData().i($c_sc_SeqView$Sorted, "scala.collection.SeqView$Sorted", ({
  f4: 1,
  b: 1,
  c: 1,
  g: 1,
  k: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  a0: 1
}));
function $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse($thiz) {
  if ((!$thiz.mq)) {
    $thiz.mp = $ct_sc_SeqView$Reverse__sc_SeqOps__(new $c_sc_SeqView$Reverse(), $thiz.da.j3());
    $thiz.mq = true;
  }
  return $thiz.mp;
}
/** @constructor */
function $c_sc_SeqView$Sorted$ReverseSorted(outer) {
  this.mp = null;
  this.mq = false;
  this.da = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.da = outer;
}
$p = $c_sc_SeqView$Sorted$ReverseSorted.prototype = new $h_O();
$p.constructor = $c_sc_SeqView$Sorted$ReverseSorted;
/** @constructor */
function $h_sc_SeqView$Sorted$ReverseSorted() {
}
$h_sc_SeqView$Sorted$ReverseSorted.prototype = $p;
$p.fA = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.d5 = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.bh = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.cl = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.c1 = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().cd(this);
});
$p.m = (function() {
  return this.c().e();
});
$p.cb = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bj = (function() {
  return this.da.c();
});
$p.dU = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.c(), p, from);
});
$p.aH = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.cq = (function() {
  return $m_sc_View$().V();
});
$p.bL = (function() {
  return "SeqView";
});
$p.aG = (function() {
  return $m_sc_View$();
});
$p.v = (function() {
  return $f_sc_View__toString__T(this);
});
$p.r = (function(i) {
  return $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse(this).r(i);
});
$p.l = (function() {
  return this.da.dA;
});
$p.c = (function() {
  return $m_sc_Iterator$().G.fz(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $p_sc_SeqView$Sorted$ReverseSorted___reversed__sc_SeqView$Reverse(this).c())));
});
$p.q = (function() {
  return this.da.dA;
});
$p.g = (function() {
  return (this.da.dA === 0);
});
$p.l0 = (function(ord1) {
  var x$2 = this.da.g8;
  if (((ord1 === null) ? (x$2 === null) : ord1.p(x$2))) {
    return this.da;
  } else {
    return (ord1.dV(this.da.g8) ? this : $ct_sc_SeqView$Sorted__sc_SeqOps__I__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this.da.op(), this.da.dA, ord1));
  }
});
$p.bI = (function(ord) {
  return this.l0(ord);
});
$p.el = (function(coll) {
  return $m_sc_View$().iS(coll);
});
var $d_sc_SeqView$Sorted$ReverseSorted = new $TypeData().i($c_sc_SeqView$Sorted$ReverseSorted, "scala.collection.SeqView$Sorted$ReverseSorted", ({
  f5: 1,
  b: 1,
  c: 1,
  g: 1,
  k: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  a0: 1
}));
/** @constructor */
function $c_sc_View$$anon$1(it$3) {
  this.ms = null;
  this.ms = it$3;
}
$p = $c_sc_View$$anon$1.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$$anon$1;
/** @constructor */
function $h_sc_View$$anon$1() {
}
$h_sc_View$$anon$1.prototype = $p;
$p.c = (function() {
  return this.ms.Q();
});
var $d_sc_View$$anon$1 = new $TypeData().i($c_sc_View$$anon$1, "scala.collection.View$$anon$1", ({
  fb: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1
}));
/** @constructor */
function $c_sc_View$Collect(underlying, pf) {
  this.mu = null;
  this.mt = null;
  this.mu = underlying;
  this.mt = pf;
}
$p = $c_sc_View$Collect.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Collect;
/** @constructor */
function $h_sc_View$Collect() {
}
$h_sc_View$Collect.prototype = $p;
$p.c = (function() {
  var this$1 = this.mu.c();
  return new $c_sc_Iterator$$anon$7(this.mt, this$1);
});
var $d_sc_View$Collect = new $TypeData().i($c_sc_View$Collect, "scala.collection.View$Collect", ({
  fc: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1
}));
/** @constructor */
function $c_sc_View$DistinctBy(underlying, f) {
  this.im = null;
  this.mv = null;
  this.im = underlying;
  this.mv = f;
}
$p = $c_sc_View$DistinctBy.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$DistinctBy;
/** @constructor */
function $h_sc_View$DistinctBy() {
}
$h_sc_View$DistinctBy.prototype = $p;
$p.c = (function() {
  var this$1 = this.im.c();
  return new $c_sc_Iterator$$anon$8(this.mv, this$1);
});
$p.q = (function() {
  return ((this.im.q() === 0) ? 0 : (-1));
});
$p.g = (function() {
  return this.im.g();
});
var $d_sc_View$DistinctBy = new $TypeData().i($c_sc_View$DistinctBy, "scala.collection.View$DistinctBy", ({
  fd: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1
}));
function $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f) {
  $thiz.ff = underlying;
  $thiz.h0 = f;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Map() {
  this.ff = null;
  this.h0 = null;
}
$p = $c_sc_View$Map.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Map;
/** @constructor */
function $h_sc_View$Map() {
}
$h_sc_View$Map.prototype = $p;
$p.c = (function() {
  var this$1 = this.ff.c();
  return new $c_sc_Iterator$$anon$9(this.h0, this$1);
});
$p.q = (function() {
  return this.ff.q();
});
$p.g = (function() {
  return this.ff.g();
});
var $d_sc_View$Map = new $TypeData().i($c_sc_View$Map, "scala.collection.View$Map", ({
  aX: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1
}));
function $ct_sc_View$Prepended__O__sc_IterableOps__($thiz, elem, underlying) {
  $thiz.jK = elem;
  $thiz.jL = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_View$Prepended() {
  this.jK = null;
  this.jL = null;
}
$p = $c_sc_View$Prepended.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$Prepended;
/** @constructor */
function $h_sc_View$Prepended() {
}
$h_sc_View$Prepended.prototype = $p;
/** @constructor */
function $c_sc_View$ZipWithIndex(underlying) {
  this.io = null;
  this.io = underlying;
}
$p = $c_sc_View$ZipWithIndex.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_View$ZipWithIndex;
/** @constructor */
function $h_sc_View$ZipWithIndex() {
}
$h_sc_View$ZipWithIndex.prototype = $p;
$p.c = (function() {
  return new $c_sc_Iterator$$anon$16(this.io.c());
});
$p.q = (function() {
  return this.io.q();
});
$p.g = (function() {
  return this.io.g();
});
var $d_sc_View$ZipWithIndex = new $TypeData().i($c_sc_View$ZipWithIndex, "scala.collection.View$ZipWithIndex", ({
  ff: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1
}));
/** @constructor */
function $c_Lorg_scalajs_dom_DOMList$DOMListSeq(domList) {
  this.i6 = null;
  this.i6 = domList;
}
$p = $c_Lorg_scalajs_dom_DOMList$DOMListSeq.prototype = new $h_O();
$p.constructor = $c_Lorg_scalajs_dom_DOMList$DOMListSeq;
/** @constructor */
function $h_Lorg_scalajs_dom_DOMList$DOMListSeq() {
}
$h_Lorg_scalajs_dom_DOMList$DOMListSeq.prototype = $p;
$p.q = (function() {
  return (-1);
});
$p.fA = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.d5 = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.bh = (function(xs, start, len) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
});
$p.cl = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.c1 = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().cd(this);
});
$p.m = (function() {
  return this.c().e();
});
$p.cq = (function() {
  return $m_sc_Seq$().V();
});
$p.bL = (function() {
  return "Seq";
});
$p.bK = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cb = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bj = (function() {
  return $f_sc_IterableOnceOps__reversed__sc_Iterable(this).c();
});
$p.dU = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.c(), p, from);
});
$p.bI = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.aH = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.g = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.f2 = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.go = (function(that) {
  return true;
});
$p.p = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().kY(this);
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.l = (function() {
  return (this.i6.length | 0);
});
$p.r = (function(x) {
  return this.i6[x];
});
$p.c = (function() {
  return new $c_Lorg_scalajs_dom_DOMList$DOMListIterator(this.i6);
});
$p.d = (function(v1) {
  return this.r((v1 | 0));
});
$p.aG = (function() {
  return $m_sc_Seq$();
});
$p.co = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.el = (function(coll) {
  return $m_sc_Seq$().fB(coll);
});
$p.eY = (function(v1) {
  return (this.r(v1) | 0);
});
var $d_Lorg_scalajs_dom_DOMList$DOMListSeq = new $TypeData().i($c_Lorg_scalajs_dom_DOMList$DOMListSeq, "org.scalajs.dom.DOMList$DOMListSeq", ({
  ej: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1
}));
/** @constructor */
function $c_sc_AbstractSet() {
}
$p = $c_sc_AbstractSet.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSet;
/** @constructor */
function $h_sc_AbstractSet() {
}
$h_sc_AbstractSet.prototype = $p;
$p.l2 = (function(that) {
  return this.dM(that);
});
$p.p = (function(that) {
  return $f_sc_Set__equals__O__Z(this, that);
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.gA(this, this$1.iG);
});
$p.bl = (function() {
  return "Set";
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.d = (function(v1) {
  return this.b8(v1);
});
function $f_sc_Map__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else if ($is_sc_Map(o)) {
    if (($thiz.K() === o.K())) {
      try {
        return $thiz.dM(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((map$1) => ((kv$2) => $m_sr_BoxesRunTime$().n(map$1.dQ(kv$2.aa(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => $m_sc_Map$().mm.Q()))), kv$2.ab())))(o)));
      } catch (e) {
        if (false) {
          return false;
        } else {
          throw e;
        }
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function $is_sc_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.a5)));
}
function $isArrayOf_sc_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
function $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, _fun, _ec, _arg, _xform) {
  $thiz.iA = _fun;
  $thiz.hj = _ec;
  $thiz.hi = _arg;
  $thiz.hk = _xform;
  $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz);
  return $thiz;
}
function $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__($thiz, xform, f, ec) {
  $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, f, ec, null, xform);
  return $thiz;
}
function $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V($thiz, t, e) {
  if ((false || $m_s_util_control_NonFatal$().iQ(t))) {
    var completed = $thiz.fJ($thiz.J, $m_s_concurrent_impl_Promise$().hP(new $c_s_util_Failure(t)));
    if (((($thiz.hk === 5) || ($thiz.hk === 6)) || (!completed))) {
      e.kV(t);
    }
  } else {
    var $x_1 = t;
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.d3 : $x_1);
  }
}
/** @constructor */
function $c_s_concurrent_impl_Promise$Transformation() {
  this.J = null;
  this.iA = null;
  this.hj = null;
  this.hi = null;
  this.hk = 0;
}
$p = $c_s_concurrent_impl_Promise$Transformation.prototype = new $h_s_concurrent_impl_Promise$DefaultPromise();
$p.constructor = $c_s_concurrent_impl_Promise$Transformation;
/** @constructor */
function $h_s_concurrent_impl_Promise$Transformation() {
}
$h_s_concurrent_impl_Promise$Transformation.prototype = $p;
$p.oB = (function(resolved) {
  this.hi = resolved;
  var e = this.hj;
  try {
    if ((e === null)) {
      $m_sr_Scala3RunTime$().bp();
    }
    e.kw(this);
  } catch (e$2) {
    var e$3 = ((e$2 instanceof $c_jl_Throwable) ? e$2 : new $c_sjs_js_JavaScriptException(e$2));
    this.iA = null;
    this.hi = null;
    this.hj = null;
    if ((e === null)) {
      $m_sr_Scala3RunTime$().bp();
    }
    $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, e$3, e);
  }
  return this;
});
$p.f1 = (function() {
  var x$proxy4 = this.hi;
  if ((x$proxy4 === null)) {
    $m_sr_Scala3RunTime$().bp();
  }
  var x$proxy5 = this.iA;
  if ((x$proxy5 === null)) {
    $m_sr_Scala3RunTime$().bp();
  }
  var x$proxy6 = this.hj;
  if ((x$proxy6 === null)) {
    $m_sr_Scala3RunTime$().bp();
  }
  this.iA = null;
  this.hi = null;
  this.hj = null;
  try {
    var resolvedResult;
    switch (this.hk) {
      case 0: {
        var resolvedResult = null;
        break;
      }
      case 1: {
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Success) ? new $c_s_util_Success(x$proxy5.d(x$proxy4.R())) : x$proxy4);
        break;
      }
      case 2: {
        if ((x$proxy4 instanceof $c_s_util_Success)) {
          var f = x$proxy5.d(x$proxy4.R());
          if ((f instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
            f.kS(this, null);
          } else {
            this.ko(f);
          }
          var resolvedResult = null;
        } else {
          var resolvedResult = x$proxy4;
        }
        break;
      }
      case 3: {
        var resolvedResult = $m_s_concurrent_impl_Promise$().hP(x$proxy5.d(x$proxy4));
        break;
      }
      case 4: {
        var f$2 = x$proxy5.d(x$proxy4);
        if ((f$2 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
          f$2.kS(this, null);
        } else {
          this.ko(f$2);
        }
        var resolvedResult = null;
        break;
      }
      case 5: {
        x$proxy4.dN(x$proxy5);
        var resolvedResult = null;
        break;
      }
      case 6: {
        x$proxy5.d(x$proxy4);
        var resolvedResult = null;
        break;
      }
      case 7: {
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Failure) ? $m_s_concurrent_impl_Promise$().hP(x$proxy4.oj(x$proxy5)) : x$proxy4);
        break;
      }
      case 8: {
        if ((x$proxy4 instanceof $c_s_util_Failure)) {
          var f$3 = x$proxy5.bK(x$proxy4.eX, $m_s_concurrent_Future$().n2);
          var resolvedResult = ((f$3 !== $m_s_concurrent_Future$().k4) ? (((f$3 instanceof $c_s_concurrent_impl_Promise$DefaultPromise) ? f$3.kS(this, null) : this.ko(f$3)), null) : x$proxy4);
        } else {
          var resolvedResult = x$proxy4;
        }
        break;
      }
      case 9: {
        var resolvedResult = (((x$proxy4 instanceof $c_s_util_Failure) || (!(!x$proxy5.d(x$proxy4.R())))) ? x$proxy4 : $m_s_concurrent_Future$().n1);
        break;
      }
      case 10: {
        var resolvedResult = ((x$proxy4 instanceof $c_s_util_Success) ? new $c_s_util_Success(x$proxy5.bK(x$proxy4.R(), $m_s_concurrent_Future$().mZ)) : x$proxy4);
        break;
      }
      default: {
        var resolvedResult = new $c_s_util_Failure(new $c_jl_IllegalStateException(("BUG: encountered transformation promise with illegal type: " + this.hk)));
      }
    }
    if ((resolvedResult !== null)) {
      this.fJ(this.J, resolvedResult);
    }
  } catch (e) {
    $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e)), x$proxy6);
  }
});
function $isArrayOf_s_concurrent_impl_Promise$Transformation(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cS)));
}
var $d_s_concurrent_impl_Promise$Transformation = new $TypeData().i($c_s_concurrent_impl_Promise$Transformation, "scala.concurrent.impl.Promise$Transformation", ({
  cS: 1,
  ba: 1,
  aH: 1,
  a: 1,
  cM: 1,
  b6: 1,
  b9: 1,
  h: 1,
  aK: 1,
  aF: 1,
  h0: 1
}));
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.eY = (function(x$0) {
  return (this.d(x$0) | 0);
});
$p.bK = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.cb = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bj = (function() {
  return this.d7().c();
});
$p.kN = (function(idx) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
});
$p.dU = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.c(), p, from);
});
$p.bI = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.aH = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.g = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.f2 = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.go = (function(that) {
  return true;
});
$p.p = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().kY(this);
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.co = (function(x) {
  return this.kN((x | 0));
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
$p.cb = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.bj = (function() {
  return this.d7().c();
});
$p.dU = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.c(), p, from);
});
$p.aH = (function(len) {
  return $f_sc_IterableOps__sizeCompare__I__I(this, len);
});
$p.g = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bl = (function() {
  return "SeqView";
});
$p.bI = (function(ord) {
  return $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this, ord);
});
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.s)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.s)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aA)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
function $f_scm_CheckedIndexedSeqView__iterator__sc_Iterator($thiz) {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.of().Q() | 0))));
}
function $f_scm_CheckedIndexedSeqView__reverseIterator__sc_Iterator($thiz) {
  return new $c_scm_CheckedIndexedSeqView$CheckedReverseIterator($thiz, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => ($thiz.of().Q() | 0))));
}
/** @constructor */
function $c_sc_AbstractMap() {
}
$p = $c_sc_AbstractMap.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractMap;
/** @constructor */
function $h_sc_AbstractMap() {
}
$h_sc_AbstractMap.prototype = $p;
$p.eY = (function(x$0) {
  return (this.d(x$0) | 0);
});
$p.bK = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.dn = (function(f) {
  $f_sc_MapOps__foreachEntry__F2__V(this, f);
});
$p.co = (function(key) {
  return this.b8(key);
});
$p.cl = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
$p.fC = (function(coll) {
  return this.hK().a4(coll);
});
$p.cq = (function() {
  return this.hK().V();
});
$p.p = (function(o) {
  return $f_sc_Map__equals__O__Z(this, o);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().rf(this);
});
$p.bl = (function() {
  return "Map";
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.fc = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.fc = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.r = (function(idx) {
  return this.fc.r(idx);
});
$p.l = (function() {
  return this.fc.l();
});
$p.c = (function() {
  return this.fc.c();
});
$p.q = (function() {
  return this.fc.q();
});
$p.g = (function() {
  return this.fc.g();
});
var $d_sc_SeqView$Id = new $TypeData().i($c_sc_SeqView$Id, "scala.collection.SeqView$Id", ({
  bT: 1,
  aq: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a0: 1
}));
function $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f) {
  $thiz.gX = underlying;
  $thiz.ik = f;
  $ct_sc_View$Map__sc_IterableOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Map() {
  this.ff = null;
  this.h0 = null;
  this.gX = null;
  this.ik = null;
}
$p = $c_sc_SeqView$Map.prototype = new $h_sc_View$Map();
$p.constructor = $c_sc_SeqView$Map;
/** @constructor */
function $h_sc_SeqView$Map() {
}
$h_sc_SeqView$Map.prototype = $p;
$p.cb = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.dU = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.c(), p, from);
});
$p.g = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.r = (function(idx) {
  return this.ik.d(this.gX.r(idx));
});
$p.l = (function() {
  return this.gX.l();
});
$p.bI = (function(ord) {
  return $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this, ord);
});
function $ct_sc_SeqView$Prepended__O__sc_SeqOps__($thiz, elem, underlying) {
  $thiz.jI = elem;
  $thiz.il = underlying;
  $ct_sc_View$Prepended__O__sc_IterableOps__($thiz, elem, underlying);
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Prepended() {
  this.jK = null;
  this.jL = null;
  this.jI = null;
  this.il = null;
}
$p = $c_sc_SeqView$Prepended.prototype = new $h_sc_View$Prepended();
$p.constructor = $c_sc_SeqView$Prepended;
/** @constructor */
function $h_sc_SeqView$Prepended() {
}
$h_sc_SeqView$Prepended.prototype = $p;
$p.cb = (function(f) {
  return $f_sc_SeqOps__distinctBy__F1__O(this, f);
});
$p.dU = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I(this.c(), p, from);
});
$p.g = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.r = (function(idx) {
  return ((idx === 0) ? this.jI : this.il.r(((idx - 1) | 0)));
});
$p.l = (function() {
  return ((1 + this.il.l()) | 0);
});
$p.bI = (function(ord) {
  return $ct_sc_SeqView$Sorted__sc_SeqOps__s_math_Ordering__(new $c_sc_SeqView$Sorted(), this, ord);
});
function $ct_sc_SeqView$Reverse__sc_SeqOps__($thiz, underlying) {
  $thiz.fd = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Reverse() {
  this.fd = null;
}
$p = $c_sc_SeqView$Reverse.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Reverse;
/** @constructor */
function $h_sc_SeqView$Reverse() {
}
$h_sc_SeqView$Reverse.prototype = $p;
$p.r = (function(i) {
  return this.fd.r(((((this.l() - 1) | 0) - i) | 0));
});
$p.l = (function() {
  return this.fd.l();
});
$p.c = (function() {
  return this.fd.bj();
});
$p.q = (function() {
  return this.fd.q();
});
$p.g = (function() {
  return this.fd.g();
});
var $d_sc_SeqView$Reverse = new $TypeData().i($c_sc_SeqView$Reverse, "scala.collection.SeqView$Reverse", ({
  bV: 1,
  aq: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a0: 1
}));
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.u)));
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
function $f_scm_MapOps__getOrElseUpdate__O__F0__O($thiz, key, defaultValue) {
  var x12 = $thiz.cc(key);
  if ((x12 instanceof $c_s_Some)) {
    return x12.c2;
  }
  if (($m_s_None$() === x12)) {
    var d = defaultValue.Q();
    $thiz.oL(key, d);
    return d;
  }
  throw new $c_s_MatchError(x12);
}
/** @constructor */
function $c_sc_AbstractMapView() {
}
$p = $c_sc_AbstractMapView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractMapView;
/** @constructor */
function $h_sc_AbstractMapView() {
}
$h_sc_AbstractMapView.prototype = $p;
$p.eY = (function(x$0) {
  return ($f_sc_MapOps__apply__O__O(this, x$0) | 0);
});
$p.dQ = (function(key, default$1) {
  return $f_sc_MapOps__getOrElse__O__F0__O(this, key, default$1);
});
$p.d = (function(key) {
  return $f_sc_MapOps__apply__O__O(this, key);
});
$p.bK = (function(x, default$1) {
  return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
});
$p.co = (function(key) {
  return $f_sc_MapOps__contains__O__Z(this, key);
});
$p.cl = (function(sb, start, sep, end) {
  return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
});
$p.v = (function() {
  return $f_sc_View__toString__T(this);
});
$p.bl = (function() {
  return "MapView";
});
function $is_sci_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.af)));
}
function $isArrayOf_sci_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
/** @constructor */
function $c_sc_AbstractIndexedSeqView() {
}
$p = $c_sc_AbstractIndexedSeqView.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_AbstractIndexedSeqView;
/** @constructor */
function $h_sc_AbstractIndexedSeqView() {
}
$h_sc_AbstractIndexedSeqView.prototype = $p;
$p.d7 = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aH = (function(len) {
  var x = this.l();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.l();
});
$p.c = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bj = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.f0 = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bl = (function() {
  return "IndexedSeqView";
});
$p.aw = (function(f) {
  return this.f0(f);
});
/** @constructor */
function $c_sc_MapView$Id(underlying) {
  this.gV = null;
  this.gV = underlying;
}
$p = $c_sc_MapView$Id.prototype = new $h_sc_AbstractMapView();
$p.constructor = $c_sc_MapView$Id;
/** @constructor */
function $h_sc_MapView$Id() {
}
$h_sc_MapView$Id.prototype = $p;
$p.cc = (function(key) {
  return this.gV.cc(key);
});
$p.c = (function() {
  return this.gV.c();
});
$p.q = (function() {
  return this.gV.q();
});
$p.g = (function() {
  return this.gV.g();
});
var $d_sc_MapView$Id = new $TypeData().i($c_sc_MapView$Id, "scala.collection.MapView$Id", ({
  f0: 1,
  bI: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  h: 1,
  j: 1,
  a6: 1,
  bS: 1
}));
/** @constructor */
function $c_sc_MapView$MapValues(underlying, f) {
  this.gW = null;
  this.jH = null;
  this.gW = underlying;
  this.jH = f;
}
$p = $c_sc_MapView$MapValues.prototype = new $h_sc_AbstractMapView();
$p.constructor = $c_sc_MapView$MapValues;
/** @constructor */
function $h_sc_MapView$MapValues() {
}
$h_sc_MapView$MapValues.prototype = $p;
$p.c = (function() {
  return new $c_sc_Iterator$$anon$9(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((kv$2) => $ct_T2__O__O__(new $c_T2(), kv$2.aa(), this.jH.d(kv$2.ab())))), this.gW.c());
});
$p.cc = (function(key) {
  var this$1 = this.gW.cc(key);
  var f = this.jH;
  return (this$1.g() ? $m_s_None$() : new $c_s_Some(f.d(this$1.R())));
});
$p.q = (function() {
  return this.gW.q();
});
$p.g = (function() {
  return this.gW.g();
});
var $d_sc_MapView$MapValues = new $TypeData().i($c_sc_MapView$MapValues, "scala.collection.MapView$MapValues", ({
  f1: 1,
  bI: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  h: 1,
  j: 1,
  a6: 1,
  bS: 1
}));
/** @constructor */
function $c_sci_AbstractSet() {
}
$p = $c_sci_AbstractSet.prototype = new $h_sc_AbstractSet();
$p.constructor = $c_sci_AbstractSet;
/** @constructor */
function $h_sci_AbstractSet() {
}
$h_sci_AbstractSet.prototype = $p;
$p.aG = (function() {
  return $m_sci_Set$();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.fc = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.d7 = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aH = (function(len) {
  var x = this.l();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.l();
});
$p.c = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bj = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.bl = (function() {
  return "IndexedSeqView";
});
$p.aw = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  eK: 1,
  bT: 1,
  aq: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a0: 1,
  o: 1,
  al: 1
}));
function $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__($thiz, underlying, f) {
  $ct_sc_SeqView$Map__sc_SeqOps__F1__($thiz, underlying, f);
  return $thiz;
}
/** @constructor */
function $c_sc_IndexedSeqView$Map() {
  this.ff = null;
  this.h0 = null;
  this.gX = null;
  this.ik = null;
}
$p = $c_sc_IndexedSeqView$Map.prototype = new $h_sc_SeqView$Map();
$p.constructor = $c_sc_IndexedSeqView$Map;
/** @constructor */
function $h_sc_IndexedSeqView$Map() {
}
$h_sc_IndexedSeqView$Map.prototype = $p;
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aH = (function(len) {
  var x = this.l();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.l();
});
$p.c = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bj = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.f0 = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bl = (function() {
  return "IndexedSeqView";
});
$p.aw = (function(f) {
  return this.f0(f);
});
var $d_sc_IndexedSeqView$Map = new $TypeData().i($c_sc_IndexedSeqView$Map, "scala.collection.IndexedSeqView$Map", ({
  bO: 1,
  bU: 1,
  aX: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a0: 1,
  o: 1,
  al: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Prepended(elem, underlying) {
  this.jK = null;
  this.jL = null;
  this.jI = null;
  this.il = null;
  $ct_sc_SeqView$Prepended__O__sc_SeqOps__(this, elem, underlying);
}
$p = $c_sc_IndexedSeqView$Prepended.prototype = new $h_sc_SeqView$Prepended();
$p.constructor = $c_sc_IndexedSeqView$Prepended;
/** @constructor */
function $h_sc_IndexedSeqView$Prepended() {
}
$h_sc_IndexedSeqView$Prepended.prototype = $p;
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aH = (function(len) {
  var x = this.l();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.l();
});
$p.c = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bj = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.f0 = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
$p.bl = (function() {
  return "IndexedSeqView";
});
$p.aw = (function(f) {
  return this.f0(f);
});
var $d_sc_IndexedSeqView$Prepended = new $TypeData().i($c_sc_IndexedSeqView$Prepended, "scala.collection.IndexedSeqView$Prepended", ({
  eL: 1,
  f3: 1,
  fe: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a0: 1,
  o: 1,
  al: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$Reverse(underlying) {
  this.fd = null;
  $ct_sc_SeqView$Reverse__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Reverse.prototype = new $h_sc_SeqView$Reverse();
$p.constructor = $c_sc_IndexedSeqView$Reverse;
/** @constructor */
function $h_sc_IndexedSeqView$Reverse() {
}
$h_sc_IndexedSeqView$Reverse.prototype = $p;
$p.d7 = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aH = (function(len) {
  var x = this.l();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.l();
});
$p.c = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), this);
});
$p.bj = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), this);
});
$p.bl = (function() {
  return "IndexedSeqView";
});
$p.aw = (function(f) {
  return $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(new $c_sc_IndexedSeqView$Map(), this, f);
});
var $d_sc_IndexedSeqView$Reverse = new $TypeData().i($c_sc_IndexedSeqView$Reverse, "scala.collection.IndexedSeqView$Reverse", ({
  eM: 1,
  bV: 1,
  aq: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a0: 1,
  o: 1,
  al: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_ArrayBufferView(underlying, mutationCount) {
  this.jU = null;
  this.iu = null;
  this.jU = underlying;
  this.iu = mutationCount;
}
$p = $c_scm_ArrayBufferView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_scm_ArrayBufferView;
/** @constructor */
function $h_scm_ArrayBufferView() {
}
$h_scm_ArrayBufferView.prototype = $p;
$p.r = (function(n) {
  return this.jU.r(n);
});
$p.l = (function() {
  return this.jU.bA;
});
$p.bL = (function() {
  return "ArrayBufferView";
});
$p.c = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedIterator(this, this.iu);
});
$p.bj = (function() {
  return new $c_scm_CheckedIndexedSeqView$CheckedReverseIterator(this, this.iu);
});
$p.f0 = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.iu);
});
$p.aw = (function(f) {
  return this.f0(f);
});
var $d_scm_ArrayBufferView = new $TypeData().i($c_scm_ArrayBufferView, "scala.collection.mutable.ArrayBufferView", ({
  gs: 1,
  bH: 1,
  aq: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a0: 1,
  o: 1,
  al: 1
}));
/** @constructor */
function $c_sci_AbstractMap() {
}
$p = $c_sci_AbstractMap.prototype = new $h_sc_AbstractMap();
$p.constructor = $c_sci_AbstractMap;
/** @constructor */
function $h_sci_AbstractMap() {
}
$h_sci_AbstractMap.prototype = $p;
$p.aG = (function() {
  return $m_sci_Iterable$();
});
$p.hK = (function() {
  return $m_sci_Map$();
});
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ($is_sci_IndexedSeq(that) ? ($thiz.l() === that.l()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.l();
      var equal = (length === o.l());
      if (equal) {
        var index = 0;
        var a = $thiz.hz();
        var b = o.hz();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? ((length >>> 0) > (lo >>> 0)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().n($thiz.r(index), o.r(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.c().cG(index);
          var thatIt = o.c().cG(index);
          while ((equal && thisIt.i())) {
            equal = $m_sr_BoxesRunTime$().n(thisIt.e(), thatIt.e());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.y)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.y)));
}
/** @constructor */
function $c_sci_Set$EmptySet$() {
}
$p = $c_sci_Set$EmptySet$.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$EmptySet$;
/** @constructor */
function $h_sci_Set$EmptySet$() {
}
$h_sci_Set$EmptySet$.prototype = $p;
$p.K = (function() {
  return 0;
});
$p.g = (function() {
  return true;
});
$p.q = (function() {
  return 0;
});
$p.l2 = (function(that) {
  return true;
});
$p.b8 = (function(elem) {
  return false;
});
$p.c = (function() {
  return $m_sc_Iterator$().G;
});
$p.dT = (function(elem) {
  return new $c_sci_Set$Set1(elem);
});
var $d_sci_Set$EmptySet$ = new $TypeData().i($c_sci_Set$EmptySet$, "scala.collection.immutable.Set$EmptySet$", ({
  g2: 1,
  at: 1,
  ak: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  am: 1,
  d: 1,
  a8: 1,
  q: 1,
  aw: 1,
  av: 1,
  a: 1
}));
var $n_sci_Set$EmptySet$;
function $m_sci_Set$EmptySet$() {
  if ((!$n_sci_Set$EmptySet$)) {
    $n_sci_Set$EmptySet$ = new $c_sci_Set$EmptySet$();
  }
  return $n_sci_Set$EmptySet$;
}
/** @constructor */
function $c_sc_StringView(s) {
  this.fe = null;
  this.fe = s;
}
$p = $c_sc_StringView.prototype = new $h_sc_AbstractIndexedSeqView();
$p.constructor = $c_sc_StringView;
/** @constructor */
function $h_sc_StringView() {
}
$h_sc_StringView.prototype = $p;
$p.ce = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().ds(this, (-351294208), true);
});
$p.p = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_sc_StringView) && (this.fe === x$0.fe)));
});
$p.bF = (function() {
  return 1;
});
$p.bH = (function() {
  return "StringView";
});
$p.bG = (function(n) {
  if ((n === 0)) {
    return this.fe;
  }
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.l = (function() {
  return this.fe.length;
});
$p.v = (function() {
  return (("StringView(" + this.fe) + ")");
});
$p.r = (function(i) {
  return $bC(this.fe.charCodeAt(i));
});
function $isArrayOf_sc_StringView(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bZ)));
}
var $d_sc_StringView = new $TypeData().i($c_sc_StringView, "scala.collection.StringView", ({
  bZ: 1,
  bH: 1,
  aq: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a0: 1,
  o: 1,
  al: 1,
  d: 1,
  J: 1
}));
function $ct_sci_LazyListBase__O__($thiz, initialTail) {
  $thiz.dg = initialTail;
  return $thiz;
}
/** @constructor */
function $c_sci_LazyListBase() {
  this.dg = null;
}
$p = $c_sci_LazyListBase.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_LazyListBase;
/** @constructor */
function $h_sci_LazyListBase() {
}
$h_sci_LazyListBase.prototype = $p;
function $isArrayOf_sci_MapOps$LazyImmutableKeySet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fS)));
}
function $isArrayOf_sci_SeqMap$SeqMap1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fX)));
}
function $isArrayOf_sci_SeqMap$SeqMap2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fY)));
}
function $isArrayOf_sci_SeqMap$SeqMap3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fZ)));
}
function $isArrayOf_sci_SeqMap$SeqMap4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.g0)));
}
/** @constructor */
function $c_sci_Set$Set1(elem1) {
  this.fm = null;
  this.fm = elem1;
}
$p = $c_sci_Set$Set1.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set1;
/** @constructor */
function $h_sci_Set$Set1() {
}
$h_sci_Set$Set1.prototype = $p;
$p.K = (function() {
  return 1;
});
$p.g = (function() {
  return false;
});
$p.q = (function() {
  return 1;
});
$p.b8 = (function(elem) {
  return $m_sr_BoxesRunTime$().n(elem, this.fm);
});
$p.fD = (function(elem) {
  return (this.b8(elem) ? this : new $c_sci_Set$Set2(this.fm, elem));
});
$p.c = (function() {
  return new $c_sc_Iterator$$anon$20(this.fm);
});
$p.dM = (function(p) {
  return (!(!p.d(this.fm)));
});
$p.hC = (function(p) {
  return ((!(!p.d(this.fm))) ? new $c_s_Some(this.fm) : $m_s_None$());
});
$p.dT = (function(elem) {
  return this.fD(elem);
});
function $isArrayOf_sci_Set$Set1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cn)));
}
var $d_sci_Set$Set1 = new $TypeData().i($c_sci_Set$Set1, "scala.collection.immutable.Set$Set1", ({
  cn: 1,
  at: 1,
  ak: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  am: 1,
  d: 1,
  a8: 1,
  q: 1,
  aw: 1,
  av: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set2(elem1, elem2) {
  this.fn = null;
  this.fo = null;
  this.fn = elem1;
  this.fo = elem2;
}
$p = $c_sci_Set$Set2.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set2;
/** @constructor */
function $h_sci_Set$Set2() {
}
$h_sci_Set$Set2.prototype = $p;
$p.K = (function() {
  return 2;
});
$p.g = (function() {
  return false;
});
$p.q = (function() {
  return 2;
});
$p.b8 = (function(elem) {
  return ($m_sr_BoxesRunTime$().n(elem, this.fn) || $m_sr_BoxesRunTime$().n(elem, this.fo));
});
$p.fD = (function(elem) {
  return (this.b8(elem) ? this : new $c_sci_Set$Set3(this.fn, this.fo, elem));
});
$p.c = (function() {
  return new $c_sci_Set$Set2$$anon$1(this);
});
$p.rI = (function(i) {
  if ((i === 0)) {
    return this.fn;
  }
  if ((i === 1)) {
    return this.fo;
  }
  throw new $c_s_MatchError(i);
});
$p.dM = (function(p) {
  return ((!(!p.d(this.fn))) && (!(!p.d(this.fo))));
});
$p.hC = (function(p) {
  return ((!(!p.d(this.fn))) ? new $c_s_Some(this.fn) : ((!(!p.d(this.fo))) ? new $c_s_Some(this.fo) : $m_s_None$()));
});
$p.dT = (function(elem) {
  return this.fD(elem);
});
function $isArrayOf_sci_Set$Set2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.co)));
}
var $d_sci_Set$Set2 = new $TypeData().i($c_sci_Set$Set2, "scala.collection.immutable.Set$Set2", ({
  co: 1,
  at: 1,
  ak: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  am: 1,
  d: 1,
  a8: 1,
  q: 1,
  aw: 1,
  av: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set3(elem1, elem2, elem3) {
  this.fp = null;
  this.fq = null;
  this.fr = null;
  this.fp = elem1;
  this.fq = elem2;
  this.fr = elem3;
}
$p = $c_sci_Set$Set3.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set3;
/** @constructor */
function $h_sci_Set$Set3() {
}
$h_sci_Set$Set3.prototype = $p;
$p.K = (function() {
  return 3;
});
$p.g = (function() {
  return false;
});
$p.q = (function() {
  return 3;
});
$p.b8 = (function(elem) {
  return (($m_sr_BoxesRunTime$().n(elem, this.fp) || $m_sr_BoxesRunTime$().n(elem, this.fq)) || $m_sr_BoxesRunTime$().n(elem, this.fr));
});
$p.fD = (function(elem) {
  return (this.b8(elem) ? this : new $c_sci_Set$Set4(this.fp, this.fq, this.fr, elem));
});
$p.c = (function() {
  return new $c_sci_Set$Set3$$anon$2(this);
});
$p.rJ = (function(i) {
  switch (i) {
    case 0: {
      return this.fp;
      break;
    }
    case 1: {
      return this.fq;
      break;
    }
    case 2: {
      return this.fr;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.dM = (function(p) {
  return (((!(!p.d(this.fp))) && (!(!p.d(this.fq)))) && (!(!p.d(this.fr))));
});
$p.hC = (function(p) {
  return ((!(!p.d(this.fp))) ? new $c_s_Some(this.fp) : ((!(!p.d(this.fq))) ? new $c_s_Some(this.fq) : ((!(!p.d(this.fr))) ? new $c_s_Some(this.fr) : $m_s_None$())));
});
$p.dT = (function(elem) {
  return this.fD(elem);
});
function $isArrayOf_sci_Set$Set3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cp)));
}
var $d_sci_Set$Set3 = new $TypeData().i($c_sci_Set$Set3, "scala.collection.immutable.Set$Set3", ({
  cp: 1,
  at: 1,
  ak: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  am: 1,
  d: 1,
  a8: 1,
  q: 1,
  aw: 1,
  av: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Set$Set4(elem1, elem2, elem3, elem4) {
  this.eG = null;
  this.eH = null;
  this.eI = null;
  this.eJ = null;
  this.eG = elem1;
  this.eH = elem2;
  this.eI = elem3;
  this.eJ = elem4;
}
$p = $c_sci_Set$Set4.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_Set$Set4;
/** @constructor */
function $h_sci_Set$Set4() {
}
$h_sci_Set$Set4.prototype = $p;
$p.K = (function() {
  return 4;
});
$p.g = (function() {
  return false;
});
$p.q = (function() {
  return 4;
});
$p.b8 = (function(elem) {
  return ((($m_sr_BoxesRunTime$().n(elem, this.eG) || $m_sr_BoxesRunTime$().n(elem, this.eH)) || $m_sr_BoxesRunTime$().n(elem, this.eI)) || $m_sr_BoxesRunTime$().n(elem, this.eJ));
});
$p.fD = (function(elem) {
  return (this.b8(elem) ? this : $m_sci_HashSet$().is.gt(this.eG).gt(this.eH).gt(this.eI).gt(this.eJ).gt(elem));
});
$p.c = (function() {
  return new $c_sci_Set$Set4$$anon$3(this);
});
$p.rK = (function(i) {
  switch (i) {
    case 0: {
      return this.eG;
      break;
    }
    case 1: {
      return this.eH;
      break;
    }
    case 2: {
      return this.eI;
      break;
    }
    case 3: {
      return this.eJ;
      break;
    }
    default: {
      throw new $c_s_MatchError(i);
    }
  }
});
$p.dM = (function(p) {
  return ((((!(!p.d(this.eG))) && (!(!p.d(this.eH)))) && (!(!p.d(this.eI)))) && (!(!p.d(this.eJ))));
});
$p.hC = (function(p) {
  return ((!(!p.d(this.eG))) ? new $c_s_Some(this.eG) : ((!(!p.d(this.eH))) ? new $c_s_Some(this.eH) : ((!(!p.d(this.eI))) ? new $c_s_Some(this.eI) : ((!(!p.d(this.eJ))) ? new $c_s_Some(this.eJ) : $m_s_None$()))));
});
$p.pY = (function(builder) {
  return builder.ac(this.eG).ac(this.eH).ac(this.eI).ac(this.eJ);
});
$p.dT = (function(elem) {
  return this.fD(elem);
});
function $isArrayOf_sci_Set$Set4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cq)));
}
var $d_sci_Set$Set4 = new $TypeData().i($c_sci_Set$Set4, "scala.collection.immutable.Set$Set4", ({
  cq: 1,
  at: 1,
  ak: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  am: 1,
  d: 1,
  a8: 1,
  q: 1,
  aw: 1,
  av: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_CheckedIndexedSeqView$Map(underlying, f, mutationCount) {
  this.ff = null;
  this.h0 = null;
  this.gX = null;
  this.ik = null;
  this.iv = null;
  this.iv = mutationCount;
  $ct_sc_IndexedSeqView$Map__sc_IndexedSeqOps__F1__(this, underlying, f);
}
$p = $c_scm_CheckedIndexedSeqView$Map.prototype = new $h_sc_IndexedSeqView$Map();
$p.constructor = $c_scm_CheckedIndexedSeqView$Map;
/** @constructor */
function $h_scm_CheckedIndexedSeqView$Map() {
}
$h_scm_CheckedIndexedSeqView$Map.prototype = $p;
$p.c = (function() {
  return $f_scm_CheckedIndexedSeqView__iterator__sc_Iterator(this);
});
$p.bj = (function() {
  return $f_scm_CheckedIndexedSeqView__reverseIterator__sc_Iterator(this);
});
$p.f0 = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.iv);
});
$p.of = (function() {
  return this.iv;
});
$p.aw = (function(f) {
  return new $c_scm_CheckedIndexedSeqView$Map(this, f, this.iv);
});
var $d_scm_CheckedIndexedSeqView$Map = new $TypeData().i($c_scm_CheckedIndexedSeqView$Map, "scala.collection.mutable.CheckedIndexedSeqView$Map", ({
  gC: 1,
  bO: 1,
  bU: 1,
  aX: 1,
  N: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  a: 1,
  D: 1,
  k: 1,
  a0: 1,
  o: 1,
  al: 1,
  gz: 1
}));
function $isArrayOf_sci_HashMap$HashKeySet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fk)));
}
/** @constructor */
function $c_sci_Map$EmptyMap$() {
}
$p = $c_sci_Map$EmptyMap$.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$EmptyMap$;
/** @constructor */
function $h_sci_Map$EmptyMap$() {
}
$h_sci_Map$EmptyMap$.prototype = $p;
$p.K = (function() {
  return 0;
});
$p.q = (function() {
  return 0;
});
$p.g = (function() {
  return true;
});
$p.iP = (function(key) {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
});
$p.b8 = (function(key) {
  return false;
});
$p.cc = (function(key) {
  return $m_s_None$();
});
$p.dQ = (function(key, default$1) {
  return default$1.Q();
});
$p.c = (function() {
  return $m_sc_Iterator$().G;
});
$p.d = (function(key) {
  this.iP(key);
});
$p.fM = (function(key, value) {
  return new $c_sci_Map$Map1(key, value);
});
var $d_sci_Map$EmptyMap$ = new $TypeData().i($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
  fH: 1,
  as: 1,
  ad: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  a6: 1,
  ae: 1,
  d: 1,
  a5: 1,
  q: 1,
  au: 1,
  af: 1,
  a: 1
}));
var $n_sci_Map$EmptyMap$;
function $m_sci_Map$EmptyMap$() {
  if ((!$n_sci_Map$EmptyMap$)) {
    $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$();
  }
  return $n_sci_Map$EmptyMap$;
}
/** @constructor */
function $c_sci_Map$Map1(key1, value1) {
  this.dh = null;
  this.ez = null;
  this.dh = key1;
  this.ez = value1;
}
$p = $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map1;
/** @constructor */
function $h_sci_Map$Map1() {
}
$h_sci_Map$Map1.prototype = $p;
$p.aw = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.K = (function() {
  return 1;
});
$p.q = (function() {
  return 1;
});
$p.g = (function() {
  return false;
});
$p.d = (function(key) {
  if ($m_sr_BoxesRunTime$().n(key, this.dh)) {
    return this.ez;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.b8 = (function(key) {
  return $m_sr_BoxesRunTime$().n(key, this.dh);
});
$p.cc = (function(key) {
  return ($m_sr_BoxesRunTime$().n(key, this.dh) ? new $c_s_Some(this.ez) : $m_s_None$());
});
$p.dQ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.dh) ? this.ez : default$1.Q());
});
$p.c = (function() {
  return new $c_sc_Iterator$$anon$20($ct_T2__O__O__(new $c_T2(), this.dh, this.ez));
});
$p.fL = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.dh) ? new $c_sci_Map$Map1(this.dh, value) : new $c_sci_Map$Map2(this.dh, this.ez, key, value));
});
$p.dM = (function(p) {
  return (!(!p.d($ct_T2__O__O__(new $c_T2(), this.dh, this.ez))));
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().d8(this.dh, this.ez);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().ej;
  h = $m_s_util_hashing_MurmurHash3$().x(h, a);
  h = $m_s_util_hashing_MurmurHash3$().x(h, b);
  h = $m_s_util_hashing_MurmurHash3$().eo(h, c);
  return $m_s_util_hashing_MurmurHash3$().bc(h, 1);
});
$p.fM = (function(key, value) {
  return this.fL(key, value);
});
function $isArrayOf_sci_Map$Map1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ci)));
}
var $d_sci_Map$Map1 = new $TypeData().i($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
  ci: 1,
  as: 1,
  ad: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  a6: 1,
  ae: 1,
  d: 1,
  a5: 1,
  q: 1,
  au: 1,
  af: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map2(key1, value1, key2, value2) {
  this.cS = null;
  this.e6 = null;
  this.cT = null;
  this.e7 = null;
  this.cS = key1;
  this.e6 = value1;
  this.cT = key2;
  this.e7 = value2;
}
$p = $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map2;
/** @constructor */
function $h_sci_Map$Map2() {
}
$h_sci_Map$Map2.prototype = $p;
$p.aw = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.K = (function() {
  return 2;
});
$p.q = (function() {
  return 2;
});
$p.g = (function() {
  return false;
});
$p.d = (function(key) {
  if ($m_sr_BoxesRunTime$().n(key, this.cS)) {
    return this.e6;
  } else if ($m_sr_BoxesRunTime$().n(key, this.cT)) {
    return this.e7;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.b8 = (function(key) {
  return ($m_sr_BoxesRunTime$().n(key, this.cS) || $m_sr_BoxesRunTime$().n(key, this.cT));
});
$p.cc = (function(key) {
  return ($m_sr_BoxesRunTime$().n(key, this.cS) ? new $c_s_Some(this.e6) : ($m_sr_BoxesRunTime$().n(key, this.cT) ? new $c_s_Some(this.e7) : $m_s_None$()));
});
$p.dQ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.cS) ? this.e6 : ($m_sr_BoxesRunTime$().n(key, this.cT) ? this.e7 : default$1.Q()));
});
$p.c = (function() {
  return new $c_sci_Map$Map2$$anon$1(this);
});
$p.fL = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.cS) ? new $c_sci_Map$Map2(this.cS, value, this.cT, this.e7) : ($m_sr_BoxesRunTime$().n(key, this.cT) ? new $c_sci_Map$Map2(this.cS, this.e6, this.cT, value) : new $c_sci_Map$Map3(this.cS, this.e6, this.cT, this.e7, key, value)));
});
$p.dM = (function(p) {
  return ((!(!p.d($ct_T2__O__O__(new $c_T2(), this.cS, this.e6)))) && (!(!p.d($ct_T2__O__O__(new $c_T2(), this.cT, this.e7)))));
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().d8(this.cS, this.e6);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d8(this.cT, this.e7);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().ej;
  h = $m_s_util_hashing_MurmurHash3$().x(h, a);
  h = $m_s_util_hashing_MurmurHash3$().x(h, b);
  h = $m_s_util_hashing_MurmurHash3$().eo(h, c);
  return $m_s_util_hashing_MurmurHash3$().bc(h, 2);
});
$p.fM = (function(key, value) {
  return this.fL(key, value);
});
function $isArrayOf_sci_Map$Map2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cj)));
}
var $d_sci_Map$Map2 = new $TypeData().i($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
  cj: 1,
  as: 1,
  ad: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  a6: 1,
  ae: 1,
  d: 1,
  a5: 1,
  q: 1,
  au: 1,
  af: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
  this.cz = null;
  this.dC = null;
  this.cA = null;
  this.dD = null;
  this.cB = null;
  this.dE = null;
  this.cz = key1;
  this.dC = value1;
  this.cA = key2;
  this.dD = value2;
  this.cB = key3;
  this.dE = value3;
}
$p = $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map3;
/** @constructor */
function $h_sci_Map$Map3() {
}
$h_sci_Map$Map3.prototype = $p;
$p.aw = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.K = (function() {
  return 3;
});
$p.q = (function() {
  return 3;
});
$p.g = (function() {
  return false;
});
$p.d = (function(key) {
  if ($m_sr_BoxesRunTime$().n(key, this.cz)) {
    return this.dC;
  } else if ($m_sr_BoxesRunTime$().n(key, this.cA)) {
    return this.dD;
  } else if ($m_sr_BoxesRunTime$().n(key, this.cB)) {
    return this.dE;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.b8 = (function(key) {
  return (($m_sr_BoxesRunTime$().n(key, this.cz) || $m_sr_BoxesRunTime$().n(key, this.cA)) || $m_sr_BoxesRunTime$().n(key, this.cB));
});
$p.cc = (function(key) {
  return ($m_sr_BoxesRunTime$().n(key, this.cz) ? new $c_s_Some(this.dC) : ($m_sr_BoxesRunTime$().n(key, this.cA) ? new $c_s_Some(this.dD) : ($m_sr_BoxesRunTime$().n(key, this.cB) ? new $c_s_Some(this.dE) : $m_s_None$())));
});
$p.dQ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.cz) ? this.dC : ($m_sr_BoxesRunTime$().n(key, this.cA) ? this.dD : ($m_sr_BoxesRunTime$().n(key, this.cB) ? this.dE : default$1.Q())));
});
$p.c = (function() {
  return new $c_sci_Map$Map3$$anon$4(this);
});
$p.fL = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.cz) ? new $c_sci_Map$Map3(this.cz, value, this.cA, this.dD, this.cB, this.dE) : ($m_sr_BoxesRunTime$().n(key, this.cA) ? new $c_sci_Map$Map3(this.cz, this.dC, this.cA, value, this.cB, this.dE) : ($m_sr_BoxesRunTime$().n(key, this.cB) ? new $c_sci_Map$Map3(this.cz, this.dC, this.cA, this.dD, this.cB, value) : new $c_sci_Map$Map4(this.cz, this.dC, this.cA, this.dD, this.cB, this.dE, key, value))));
});
$p.dM = (function(p) {
  return (((!(!p.d($ct_T2__O__O__(new $c_T2(), this.cz, this.dC)))) && (!(!p.d($ct_T2__O__O__(new $c_T2(), this.cA, this.dD))))) && (!(!p.d($ct_T2__O__O__(new $c_T2(), this.cB, this.dE)))));
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().d8(this.cz, this.dC);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d8(this.cA, this.dD);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d8(this.cB, this.dE);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().ej;
  h = $m_s_util_hashing_MurmurHash3$().x(h, a);
  h = $m_s_util_hashing_MurmurHash3$().x(h, b);
  h = $m_s_util_hashing_MurmurHash3$().eo(h, c);
  return $m_s_util_hashing_MurmurHash3$().bc(h, 3);
});
$p.fM = (function(key, value) {
  return this.fL(key, value);
});
function $isArrayOf_sci_Map$Map3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ck)));
}
var $d_sci_Map$Map3 = new $TypeData().i($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
  ck: 1,
  as: 1,
  ad: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  a6: 1,
  ae: 1,
  d: 1,
  a5: 1,
  q: 1,
  au: 1,
  af: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
  this.c5 = null;
  this.cU = null;
  this.c6 = null;
  this.cV = null;
  this.c7 = null;
  this.cW = null;
  this.c8 = null;
  this.cX = null;
  this.c5 = key1;
  this.cU = value1;
  this.c6 = key2;
  this.cV = value2;
  this.c7 = key3;
  this.cW = value3;
  this.c8 = key4;
  this.cX = value4;
}
$p = $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_Map$Map4;
/** @constructor */
function $h_sci_Map$Map4() {
}
$h_sci_Map$Map4.prototype = $p;
$p.aw = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.K = (function() {
  return 4;
});
$p.q = (function() {
  return 4;
});
$p.g = (function() {
  return false;
});
$p.d = (function(key) {
  if ($m_sr_BoxesRunTime$().n(key, this.c5)) {
    return this.cU;
  } else if ($m_sr_BoxesRunTime$().n(key, this.c6)) {
    return this.cV;
  } else if ($m_sr_BoxesRunTime$().n(key, this.c7)) {
    return this.cW;
  } else if ($m_sr_BoxesRunTime$().n(key, this.c8)) {
    return this.cX;
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.b8 = (function(key) {
  return ((($m_sr_BoxesRunTime$().n(key, this.c5) || $m_sr_BoxesRunTime$().n(key, this.c6)) || $m_sr_BoxesRunTime$().n(key, this.c7)) || $m_sr_BoxesRunTime$().n(key, this.c8));
});
$p.cc = (function(key) {
  return ($m_sr_BoxesRunTime$().n(key, this.c5) ? new $c_s_Some(this.cU) : ($m_sr_BoxesRunTime$().n(key, this.c6) ? new $c_s_Some(this.cV) : ($m_sr_BoxesRunTime$().n(key, this.c7) ? new $c_s_Some(this.cW) : ($m_sr_BoxesRunTime$().n(key, this.c8) ? new $c_s_Some(this.cX) : $m_s_None$()))));
});
$p.dQ = (function(key, default$1) {
  return ($m_sr_BoxesRunTime$().n(key, this.c5) ? this.cU : ($m_sr_BoxesRunTime$().n(key, this.c6) ? this.cV : ($m_sr_BoxesRunTime$().n(key, this.c7) ? this.cW : ($m_sr_BoxesRunTime$().n(key, this.c8) ? this.cX : default$1.Q()))));
});
$p.c = (function() {
  return new $c_sci_Map$Map4$$anon$7(this);
});
$p.fL = (function(key, value) {
  return ($m_sr_BoxesRunTime$().n(key, this.c5) ? new $c_sci_Map$Map4(this.c5, value, this.c6, this.cV, this.c7, this.cW, this.c8, this.cX) : ($m_sr_BoxesRunTime$().n(key, this.c6) ? new $c_sci_Map$Map4(this.c5, this.cU, this.c6, value, this.c7, this.cW, this.c8, this.cX) : ($m_sr_BoxesRunTime$().n(key, this.c7) ? new $c_sci_Map$Map4(this.c5, this.cU, this.c6, this.cV, this.c7, value, this.c8, this.cX) : ($m_sr_BoxesRunTime$().n(key, this.c8) ? new $c_sci_Map$Map4(this.c5, this.cU, this.c6, this.cV, this.c7, this.cW, this.c8, value) : $m_sci_HashMap$().gb.fK(this.c5, this.cU).fK(this.c6, this.cV).fK(this.c7, this.cW).fK(this.c8, this.cX).fK(key, value)))));
});
$p.dM = (function(p) {
  return ((((!(!p.d($ct_T2__O__O__(new $c_T2(), this.c5, this.cU)))) && (!(!p.d($ct_T2__O__O__(new $c_T2(), this.c6, this.cV))))) && (!(!p.d($ct_T2__O__O__(new $c_T2(), this.c7, this.cW))))) && (!(!p.d($ct_T2__O__O__(new $c_T2(), this.c8, this.cX)))));
});
$p.pX = (function(builder) {
  return builder.fy(this.c5, this.cU).fy(this.c6, this.cV).fy(this.c7, this.cW).fy(this.c8, this.cX);
});
$p.u = (function() {
  var a = 0;
  var b = 0;
  var c = 1;
  var h = $m_s_util_hashing_MurmurHash3$().d8(this.c5, this.cU);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d8(this.c6, this.cV);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d8(this.c7, this.cW);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().d8(this.c8, this.cX);
  a = ((a + h) | 0);
  b = (b ^ h);
  c = Math.imul(c, (1 | h));
  h = $m_s_util_hashing_MurmurHash3$().ej;
  h = $m_s_util_hashing_MurmurHash3$().x(h, a);
  h = $m_s_util_hashing_MurmurHash3$().x(h, b);
  h = $m_s_util_hashing_MurmurHash3$().eo(h, c);
  return $m_s_util_hashing_MurmurHash3$().bc(h, 4);
});
$p.fM = (function(key, value) {
  return this.fL(key, value);
});
function $isArrayOf_sci_Map$Map4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cl)));
}
var $d_sci_Map$Map4 = new $TypeData().i($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
  cl: 1,
  as: 1,
  ad: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  a6: 1,
  ae: 1,
  d: 1,
  a5: 1,
  q: 1,
  au: 1,
  af: 1,
  l: 1,
  a: 1
}));
function $is_scm_Map(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.aJ)));
}
function $isArrayOf_scm_Map(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aJ)));
}
function $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet($thiz, newRootNode) {
  return (($thiz.c4 === newRootNode) ? $thiz : new $c_sci_HashSet(newRootNode));
}
/** @constructor */
function $c_sci_HashSet(rootNode) {
  this.c4 = null;
  this.c4 = rootNode;
}
$p = $c_sci_HashSet.prototype = new $h_sci_AbstractSet();
$p.constructor = $c_sci_HashSet;
/** @constructor */
function $h_sci_HashSet() {
}
$h_sci_HashSet.prototype = $p;
$p.aG = (function() {
  return $m_sci_HashSet$();
});
$p.q = (function() {
  return this.c4.bu;
});
$p.K = (function() {
  return this.c4.bu;
});
$p.g = (function() {
  return (this.c4.bu === 0);
});
$p.c = (function() {
  return (this.g() ? $m_sc_Iterator$().G : new $c_sci_SetIterator(this.c4));
});
$p.b8 = (function(element) {
  var elementUnimprovedHash = $m_sr_Statics$().y(element);
  var elementHash = $m_sc_Hashing$().bE(elementUnimprovedHash);
  return this.c4.hA(element, elementUnimprovedHash, elementHash, 0);
});
$p.gt = (function(element) {
  var elementUnimprovedHash = $m_sr_Statics$().y(element);
  var elementHash = $m_sc_Hashing$().bE(elementUnimprovedHash);
  return $p_sci_HashSet__newHashSetOrThis__sci_BitmapIndexedSetNode__sci_HashSet(this, this.c4.oN(element, elementUnimprovedHash, elementHash, 0));
});
$p.l2 = (function(that) {
  return (this.g() || ((!that.g()) && ((that instanceof $c_sci_HashSet) ? this.c4.l3(that.c4, 0) : $f_sc_IterableOnceOps__forall__F1__Z(this, that))));
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_HashSet)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.c4;
      var x$2 = that.c4;
      return ((x === null) ? (x$2 === null) : x.p(x$2));
    }
  } else {
    return $f_sc_Set__equals__O__Z(this, that);
  }
});
$p.bL = (function() {
  return "HashSet";
});
$p.u = (function() {
  var it = new $c_sci_SetHashIterator(this.c4);
  return $m_s_util_hashing_MurmurHash3$().gA(it, $m_s_util_hashing_MurmurHash3$().iG);
});
$p.dT = (function(elem) {
  return this.gt(elem);
});
function $isArrayOf_sci_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cg)));
}
var $d_sci_HashSet = new $TypeData().i($c_sci_HashSet, "scala.collection.immutable.HashSet", ({
  cg: 1,
  at: 1,
  ak: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  am: 1,
  d: 1,
  a8: 1,
  q: 1,
  aw: 1,
  av: 1,
  l: 1,
  f8: 1,
  gb: 1,
  a: 1,
  W: 1
}));
function $isArrayOf_sci_ListSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fF)));
}
/** @constructor */
function $c_scm_AbstractSet() {
}
$p = $c_scm_AbstractSet.prototype = new $h_sc_AbstractSet();
$p.constructor = $c_scm_AbstractSet;
/** @constructor */
function $h_scm_AbstractSet() {
}
$h_scm_AbstractSet.prototype = $p;
$p.aN = (function() {
  return this;
});
/** @constructor */
function $c_sci_WrappedString(self) {
  this.bY = null;
  this.bY = self;
}
$p = $c_sci_WrappedString.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_WrappedString;
/** @constructor */
function $h_sci_WrappedString() {
}
$h_sci_WrappedString.prototype = $p;
$p.c = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_StringView(this.bY));
});
$p.bj = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_StringView(this.bY));
});
$p.d7 = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.bq = (function(elem) {
  return $f_sc_IndexedSeqOps__prepended__O__O(this, elem);
});
$p.aw = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aH = (function(len) {
  var this$1 = this.bY;
  var x = this$1.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.bY.length;
});
$p.bl = (function() {
  return "IndexedSeq";
});
$p.go = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.cq = (function() {
  return $m_sci_WrappedString$().V();
});
$p.l = (function() {
  return this.bY.length;
});
$p.v = (function() {
  return this.bY;
});
$p.bh = (function(xs, start, len) {
  if ((xs instanceof $ac_C)) {
    var this$1 = this.bY;
    var srcLen = this$1.length;
    var destLen = xs.a.length;
    var limit = ((len < srcLen) ? len : srcLen);
    var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
    var total = ((capacity < limit) ? capacity : limit);
    var copied = ((total < 0) ? 0 : total);
    $f_T__getChars__I__I__AC__I__V(this.bY, 0, copied, xs, start);
    return copied;
  } else {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
  }
});
$p.f2 = (function(o) {
  return ((o instanceof $c_sci_WrappedString) ? (this.bY === o.bY) : $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o));
});
$p.bL = (function() {
  return "WrappedString";
});
$p.hz = (function() {
  return 2147483647;
});
$p.p = (function(other) {
  return ((other instanceof $c_sci_WrappedString) ? (this.bY === other.bY) : $f_sc_Seq__equals__O__Z(this, other));
});
$p.r = (function(i) {
  return $bC(this.bY.charCodeAt(i));
});
$p.d = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.bY.charCodeAt(i));
});
$p.fC = (function(coll) {
  return $m_sci_WrappedString$().o3(coll);
});
$p.el = (function(coll) {
  return $m_sci_WrappedString$().o3(coll);
});
$p.aG = (function() {
  return $m_sci_IndexedSeq$();
});
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cs)));
}
var $d_sci_WrappedString = new $TypeData().i($c_sci_WrappedString, "scala.collection.immutable.WrappedString", ({
  cs: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  a: 1
}));
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.kd = null;
  this.kd = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.cb = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.bI = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.bq = (function(elem) {
  return $f_sc_StrictOptimizedSeqOps__prepended__O__O(this, elem);
});
$p.aw = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.go = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.f2 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.hz = (function() {
  return $m_sci_IndexedSeqDefaults$().mw;
});
$p.c = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bj = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aH = (function(len) {
  var x = this.l();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.l();
});
$p.p = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.u = (function() {
  return $m_s_util_hashing_MurmurHash3$().kY(this);
});
$p.v = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.dU = (function(p, from) {
  return $f_sc_Iterator__indexWhere__F1__I__I($ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this)), p, from);
});
$p.g = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.bK = (function(x, default$1) {
  return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
});
$p.eY = (function(v1) {
  return (this.r(v1) | 0);
});
$p.cq = (function() {
  return $m_sjsr_WrappedVarArgs$().V();
});
$p.dN = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.fA = (function(p) {
  return $f_sc_IterableOnceOps__exists__F1__Z(this, p);
});
$p.d5 = (function(z, op) {
  return $f_sc_IterableOnceOps__foldLeft__O__F2__O(this, z, op);
});
$p.bh = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.cl = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.c1 = (function() {
  $m_sci_List$();
  return $m_sci_Nil$().cd(this);
});
$p.en = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
$p.l = (function() {
  return (this.kd.length | 0);
});
$p.r = (function(idx) {
  return this.kd[idx];
});
$p.bL = (function() {
  return "WrappedVarArgs";
});
$p.el = (function(coll) {
  return $m_sjsr_WrappedVarArgs$().kF(coll);
});
$p.co = (function(x) {
  return $f_sc_SeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.d = (function(v1) {
  return this.r((v1 | 0));
});
$p.aG = (function() {
  return $m_sjsr_WrappedVarArgs$();
});
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  iG: 1,
  y: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  q: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  E: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_sci_HashMap(rootNode) {
  this.bP = null;
  this.bP = rootNode;
}
$p = $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
$p.constructor = $c_sci_HashMap;
/** @constructor */
function $h_sci_HashMap() {
}
$h_sci_HashMap.prototype = $p;
$p.aw = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.hK = (function() {
  return $m_sci_HashMap$();
});
$p.q = (function() {
  return this.bP.bt;
});
$p.K = (function() {
  return this.bP.bt;
});
$p.g = (function() {
  return (this.bP.bt === 0);
});
$p.c = (function() {
  return (this.g() ? $m_sc_Iterator$().G : new $c_sci_MapKeyValueTupleIterator(this.bP));
});
$p.b8 = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().y(key);
  var keyHash = $m_sc_Hashing$().bE(keyUnimprovedHash);
  return this.bP.kp(key, keyUnimprovedHash, keyHash, 0);
});
$p.d = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().y(key);
  var keyHash = $m_sc_Hashing$().bE(keyUnimprovedHash);
  return this.bP.kk(key, keyUnimprovedHash, keyHash, 0);
});
$p.cc = (function(key) {
  var keyUnimprovedHash = $m_sr_Statics$().y(key);
  var keyHash = $m_sc_Hashing$().bE(keyUnimprovedHash);
  return this.bP.iU(key, keyUnimprovedHash, keyHash, 0);
});
$p.dQ = (function(key, default$1) {
  var keyUnimprovedHash = $m_sr_Statics$().y(key);
  var keyHash = $m_sc_Hashing$().bE(keyUnimprovedHash);
  return this.bP.kI(key, keyUnimprovedHash, keyHash, 0, default$1);
});
$p.fK = (function(key, value) {
  var keyUnimprovedHash = $m_sr_Statics$().y(key);
  var newRootNode = this.bP.oP(key, value, keyUnimprovedHash, $m_sc_Hashing$().bE(keyUnimprovedHash), 0, true);
  return ((newRootNode === this.bP) ? this : new $c_sci_HashMap(newRootNode));
});
$p.dn = (function(f) {
  this.bP.dn(f);
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_HashMap)) {
    if ((this === that)) {
      return true;
    } else {
      var x = this.bP;
      var x$2 = that.bP;
      return ((x === null) ? (x$2 === null) : x.p(x$2));
    }
  } else {
    return $f_sc_Map__equals__O__Z(this, that);
  }
});
$p.u = (function() {
  if (this.g()) {
    return $m_s_util_hashing_MurmurHash3$().iF;
  } else {
    var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.bP);
    return $m_s_util_hashing_MurmurHash3$().gA(hashIterator, $m_s_util_hashing_MurmurHash3$().ej);
  }
});
$p.bL = (function() {
  return "HashMap";
});
$p.fM = (function(key, value) {
  return this.fK(key, value);
});
function $isArrayOf_sci_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cf)));
}
var $d_sci_HashMap = new $TypeData().i($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
  cf: 1,
  as: 1,
  ad: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  a6: 1,
  ae: 1,
  d: 1,
  a5: 1,
  q: 1,
  au: 1,
  af: 1,
  l: 1,
  bY: 1,
  ga: 1,
  a: 1,
  W: 1
}));
function $ct_sci_LazyList__O__($thiz, lazyState) {
  $ct_sci_LazyListBase__O__($thiz, ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : lazyState));
  $thiz.bX = ((lazyState === $m_sci_LazyList$EmptyMarker$()) ? null : $m_sci_LazyList$Uninitialized$());
  return $thiz;
}
function $ct_sci_LazyList__O__sci_LazyList__($thiz, head, tail) {
  $ct_sci_LazyList__O__($thiz, $m_sci_LazyList$EmptyMarker$());
  $thiz.bX = head;
  $thiz.dg = tail;
  return $thiz;
}
function $p_sci_LazyList__initState__V($thiz) {
  while (($thiz.bX === $m_sci_LazyList$Uninitialized$())) {
    var x3 = $thiz.dg;
    if ((x3 instanceof $c_jl_Thread)) {
      $p_sci_LazyList__selfRef$1__E($thiz);
    }
    if (false) {
      if ((x3.sg(), true)) {
        $p_sci_LazyList__selfRef$1__E($thiz);
      }
      x3.s9();
      continue;
    }
    if ($is_F0(x3)) {
      $m_sci_LazyList$().oq();
      var value = $m_jl_Thread$().lA;
      if (($thiz.dg === x3)) {
        $thiz.dg = value;
        var $x_1 = true;
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var ex = null;
        try {
          var l = $p_sci_LazyList__evaluated__sci_LazyList(x3.Q());
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          ex = e$2;
          var l = null;
        }
        if ((ex === null)) {
          if ((l === null)) {
            $m_sr_Scala3RunTime$().bp();
          }
          var newTail = l.dg;
        } else {
          var newTail = x3;
        }
        $m_sci_LazyList$().oq();
        var old = $thiz.dg;
        $thiz.dg = newTail;
        if ((ex === null)) {
          if ((l === null)) {
            $m_sr_Scala3RunTime$().bp();
          }
          $thiz.bX = l.bX;
        }
        if (false) {
          old.sc();
        }
        if ((ex !== null)) {
          var x$proxy1 = ex;
          if ((x$proxy1 === null)) {
            $m_sr_Scala3RunTime$().bp();
          }
          var $x_2 = x$proxy1;
          throw (($x_2 instanceof $c_sjs_js_JavaScriptException) ? $x_2.d3 : $x_2);
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
  }
}
function $p_sci_LazyList__evaluated__sci_LazyList($thiz) {
  while (true) {
    if (($thiz.bX !== $m_sci_LazyList$Uninitialized$())) {
      return (($thiz.dg === null) ? $m_sci_LazyList$().aR : $thiz);
    } else {
      $p_sci_LazyList__initState__V($thiz);
    }
  }
}
function $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder($thiz, b, start, sep, end) {
  b.w = (("" + b.w) + start);
  if (($thiz.bX === $m_sci_LazyList$Uninitialized$())) {
    b.w = (b.w + "<not computed>");
  } else if (($p_sci_LazyList__evaluated__sci_LazyList($thiz) !== $m_sci_LazyList$().aR)) {
    var obj = $thiz.m();
    b.w = (("" + b.w) + obj);
    var cursor = $thiz;
    var scout = $thiz.bN();
    if ((cursor !== scout)) {
      cursor = scout;
      var this$1 = scout;
      if (((this$1.bX !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$1) !== $m_sci_LazyList$().aR))) {
        scout = scout.bN();
        while (true) {
          if ((cursor !== scout)) {
            var this$2 = scout;
            var $x_1 = ((this$2.bX !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$2) !== $m_sci_LazyList$().aR));
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var c = cursor;
            b.w = (("" + b.w) + sep);
            var obj$1 = c.m();
            b.w = (("" + b.w) + obj$1);
            cursor = cursor.bN();
            scout = scout.bN();
            var this$3 = scout;
            if (((this$3.bX !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$3) !== $m_sci_LazyList$().aR))) {
              scout = scout.bN();
            }
          } else {
            break;
          }
        }
      }
    }
    var this$4 = scout;
    if ((!((this$4.bX !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this$4) !== $m_sci_LazyList$().aR)))) {
      while ((cursor !== scout)) {
        var c$1 = cursor;
        b.w = (("" + b.w) + sep);
        var obj$2 = c$1.m();
        b.w = (("" + b.w) + obj$2);
        cursor = cursor.bN();
      }
      if ((!(cursor.bX !== $m_sci_LazyList$Uninitialized$()))) {
        b.w = (("" + b.w) + sep);
        b.w = (b.w + "<not computed>");
      }
    } else {
      if ((cursor !== $thiz)) {
        var runner = $thiz;
        while ((runner !== scout)) {
          runner = runner.bN();
          scout = scout.bN();
        }
        while (true) {
          var ct = cursor.bN();
          if ((ct !== scout)) {
            var c$2 = cursor;
            b.w = (("" + b.w) + sep);
            var obj$3 = c$2.m();
            b.w = (("" + b.w) + obj$3);
          }
          cursor = ct;
          if ((cursor !== scout)) {
          } else {
            break;
          }
        }
      }
      b.w = (("" + b.w) + sep);
      b.w = (b.w + "<cycle>");
    }
  }
  b.w = (("" + b.w) + end);
  return b;
}
function $p_sci_LazyList__selfRef$1__E($thiz) {
  throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), "LazyList evaluation depends on its own result (self-reference); see docs for more info");
}
/** @constructor */
function $c_sci_LazyList() {
  this.dg = null;
  this.bX = null;
}
$p = $c_sci_LazyList.prototype = new $h_sci_LazyListBase();
$p.constructor = $c_sci_LazyList;
/** @constructor */
function $h_sci_LazyList() {
}
$h_sci_LazyList.prototype = $p;
$p.l = (function() {
  return $f_sc_LinearSeqOps__length__I(this);
});
$p.aH = (function(len) {
  return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len);
});
$p.kN = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.r = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.fA = (function(p) {
  return $f_sc_LinearSeqOps__exists__F1__Z(this, p);
});
$p.f2 = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.dU = (function(p, from) {
  return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from);
});
$p.bl = (function() {
  return "LinearSeq";
});
$p.g = (function() {
  return ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aR);
});
$p.q = (function() {
  return (((this.bX !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aR)) ? 0 : (-1));
});
$p.m = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aR)) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty lazy list");
  } else {
    return this.bX;
  }
});
$p.bN = (function() {
  if (($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aR)) {
    throw new $c_jl_UnsupportedOperationException("tail of empty lazy list");
  } else {
    return this.dg;
  }
});
$p.qC = (function() {
  var these = this;
  var those = this;
  if ((!($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().aR))) {
    these = these.bN();
  }
  while ((those !== these)) {
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().aR)) {
      return this;
    }
    these = these.bN();
    if (($p_sci_LazyList__evaluated__sci_LazyList(these) === $m_sci_LazyList$().aR)) {
      return this;
    }
    these = these.bN();
    if ((these === those)) {
      return this;
    }
    those = those.bN();
  }
  return this;
});
$p.c = (function() {
  return (((this.bX !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aR)) ? $m_sc_Iterator$().G : new $c_sci_LazyList$LazyIterator(this));
});
$p.dN = (function(f) {
  var \u03b4this$tailLocal1 = this;
  while (true) {
    if ((!($p_sci_LazyList__evaluated__sci_LazyList(\u03b4this$tailLocal1) === $m_sci_LazyList$().aR))) {
      f.d(\u03b4this$tailLocal1.m());
      \u03b4this$tailLocal1 = \u03b4this$tailLocal1.bN();
    } else {
      return (void 0);
    }
  }
});
$p.d5 = (function(z, op) {
  var \u03b4this$tailLocal2 = this;
  var z$tailLocal1 = z;
  while (true) {
    if (($p_sci_LazyList__evaluated__sci_LazyList(\u03b4this$tailLocal2) === $m_sci_LazyList$().aR)) {
      return z$tailLocal1;
    } else {
      var \u03b4this$tailLocal2$tmp1 = \u03b4this$tailLocal2.bN();
      var z$tailLocal1$tmp1 = op.ca(z$tailLocal1, \u03b4this$tailLocal2.m());
      \u03b4this$tailLocal2 = \u03b4this$tailLocal2$tmp1;
      z$tailLocal1 = z$tailLocal1$tmp1;
    }
  }
});
$p.bL = (function() {
  return "LazyList";
});
$p.qk = (function(n) {
  return ((n <= 0) ? this : (((this.bX !== $m_sci_LazyList$Uninitialized$()) && ($p_sci_LazyList__evaluated__sci_LazyList(this) === $m_sci_LazyList$().aR)) ? $m_sci_LazyList$().aR : $m_sci_LazyList$().rH(this, n)));
});
$p.cl = (function(sb, start, sep, end) {
  this.qC();
  $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.bD, start, sep, end);
  return sb;
});
$p.v = (function() {
  return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").w;
});
$p.aG = (function() {
  return $m_sci_LazyList$();
});
$p.o = (function() {
  return this.bN();
});
$p.bq = (function(elem) {
  $m_sci_LazyList$();
  return $ct_sci_LazyList__O__sci_LazyList__(new $c_sci_LazyList(), elem, this);
});
$p.kt = (function(n) {
  return this.qk(n);
});
$p.co = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.d = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ch)));
}
var $d_sci_LazyList = new $TypeData().i($c_sci_LazyList, "scala.collection.immutable.LazyList", ({
  ch: 1,
  fz: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  a: 1,
  aW: 1,
  aA: 1,
  aZ: 1,
  aY: 1
}));
function $isArrayOf_sci_TreeSeqMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gc)));
}
function $isArrayOf_sci_VectorMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gm)));
}
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
$p.aU = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
/** @constructor */
function $c_scm_AbstractMap() {
}
$p = $c_scm_AbstractMap.prototype = new $h_sc_AbstractMap();
$p.constructor = $c_scm_AbstractMap;
/** @constructor */
function $h_scm_AbstractMap() {
}
$h_scm_AbstractMap.prototype = $p;
$p.aG = (function() {
  return $m_scm_Iterable$();
});
$p.aU = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.aO = (function(size) {
});
$p.q = (function() {
  return (-1);
});
$p.hK = (function() {
  return $m_scm_Map$();
});
$p.aN = (function() {
  return this;
});
function $ct_scm_HashSet__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.k0 = loadFactor;
  $thiz.bB = new ($d_scm_HashSet$Node.r().C)($p_scm_HashSet__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.k1 = $p_scm_HashSet__newThreshold__I__I($thiz, $thiz.bB.a.length);
  $thiz.eR = 0;
  return $thiz;
}
function $ct_scm_HashSet__($thiz) {
  $ct_scm_HashSet__I__D__($thiz, 16, 0.75);
  return $thiz;
}
function $p_scm_HashSet__improveHash__I__I($thiz, originalHash) {
  return (originalHash ^ ((originalHash >>> 16) | 0));
}
function $p_scm_HashSet__addElem__O__I__Z($thiz, elem, hash) {
  var idx = (hash & (($thiz.bB.a.length - 1) | 0));
  matchResult4: {
    var x10 = $thiz.bB.a[idx];
    if ((x10 === null)) {
      $thiz.bB.a[idx] = new $c_scm_HashSet$Node(elem, hash, null);
      break matchResult4;
    }
    var prev = null;
    var n = x10;
    while (((n !== null) && (n.ef <= hash))) {
      if (((n.ef === hash) && $m_sr_BoxesRunTime$().n(elem, n.gj))) {
        return false;
      }
      prev = n;
      n = n.bC;
    }
    if ((prev === null)) {
      $thiz.bB.a[idx] = new $c_scm_HashSet$Node(elem, hash, x10);
    } else {
      var this$3 = prev;
      var n$1 = new $c_scm_HashSet$Node(elem, hash, prev.bC);
      this$3.bC = n$1;
    }
  }
  $thiz.eR = ((1 + $thiz.eR) | 0);
  return true;
}
function $p_scm_HashSet__growTable__I__V($thiz, newlen) {
  var oldlen = $thiz.bB.a.length;
  $thiz.k1 = $p_scm_HashSet__newThreshold__I__I($thiz, newlen);
  if (($thiz.eR === 0)) {
    $thiz.bB = new ($d_scm_HashSet$Node.r().C)(newlen);
  } else {
    $thiz.bB = $m_ju_Arrays$().ad($thiz.bB, newlen);
    var preLow = new $c_scm_HashSet$Node(null, 0, null);
    var preHigh = new $c_scm_HashSet$Node(null, 0, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.bB.a[i];
        if ((old !== null)) {
          preLow.bC = null;
          preHigh.bC = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.bC;
            if (((n.ef & oldlen) === 0)) {
              var this$2 = lastLow;
              var n$1 = n;
              this$2.bC = n$1;
              lastLow = n;
            } else {
              var this$3 = lastHigh;
              var n$2 = n;
              this$3.bC = n$2;
              lastHigh = n;
            }
            n = next;
          }
          var this$4 = lastLow;
          this$4.bC = null;
          if ((old !== preLow.bC)) {
            $thiz.bB.a[i] = preLow.bC;
          }
          if ((preHigh.bC !== null)) {
            $thiz.bB.a[((i + oldlen) | 0)] = preHigh.bC;
            var this$5 = lastHigh;
            this$5.bC = null;
          }
        }
        i = ((1 + i) | 0);
      }
      oldlen = (oldlen << 1);
    }
  }
}
function $p_scm_HashSet__tableSizeFor__I__I($thiz, capacity) {
  var self = ((capacity - 1) | 0);
  var i = ((self > 4) ? self : 4);
  var self$1 = ((((-2147483648) >> Math.clz32(i)) & i) << 1);
  return ((self$1 < 1073741824) ? self$1 : 1073741824);
}
function $p_scm_HashSet__newThreshold__I__I($thiz, size) {
  return $doubleToInt((size * $thiz.k0));
}
/** @constructor */
function $c_scm_HashSet() {
  this.k0 = 0.0;
  this.bB = null;
  this.k1 = 0;
  this.eR = 0;
}
$p = $c_scm_HashSet.prototype = new $h_scm_AbstractSet();
$p.constructor = $c_scm_HashSet;
/** @constructor */
function $h_scm_HashSet() {
}
$h_scm_HashSet.prototype = $p;
$p.K = (function() {
  return this.eR;
});
$p.b8 = (function(elem) {
  var hash = $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().y(elem));
  matchResult1: {
    var $x_1;
    var x1 = this.bB.a[(hash & ((this.bB.a.length - 1) | 0))];
    if ((x1 === null)) {
      var $x_1 = null;
      break matchResult1;
    }
    var $x_1 = x1.qz(elem, hash);
  }
  return ($x_1 !== null);
});
$p.aO = (function(size) {
  var target = $p_scm_HashSet__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.k0)));
  if ((target > this.bB.a.length)) {
    $p_scm_HashSet__growTable__I__V(this, target);
  }
});
$p.iL = (function(elem) {
  if ((((1 + this.eR) | 0) >= this.k1)) {
    $p_scm_HashSet__growTable__I__V(this, (this.bB.a.length << 1));
  }
  return $p_scm_HashSet__addElem__O__I__Z(this, elem, $p_scm_HashSet__improveHash__I__I(this, $m_sr_Statics$().y(elem)));
});
$p.np = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if ((xs instanceof $c_sci_HashSet)) {
    var f = new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      $p_scm_HashSet__addElem__O__I__Z(this, v1$2, $p_scm_HashSet__improveHash__I__I(this, (v2$2 | 0)));
    }));
    xs.c4.kA(f);
    return this;
  } else if ((xs instanceof $c_scm_HashSet)) {
    var iter = new $c_scm_HashSet$$anon$2(xs);
    while (iter.i()) {
      var next = iter.e();
      $p_scm_HashSet__addElem__O__I__Z(this, next.gj, next.ef);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.nP();
    while (iter$2.i()) {
      var next$2 = iter$2.e();
      $p_scm_HashSet__addElem__O__I__Z(this, next$2.od(), next$2.o9());
    }
    return this;
  } else {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs);
  }
});
$p.c = (function() {
  return new $c_scm_HashSet$$anon$1(this);
});
$p.aG = (function() {
  return $m_scm_HashSet$();
});
$p.q = (function() {
  return this.eR;
});
$p.g = (function() {
  return (this.eR === 0);
});
$p.bL = (function() {
  return "HashSet";
});
$p.u = (function() {
  var setIterator = new $c_scm_HashSet$$anon$1(this);
  var hashIterator = ((!setIterator.i()) ? setIterator : new $c_scm_HashSet$$anon$3(this));
  return $m_s_util_hashing_MurmurHash3$().gA(hashIterator, $m_s_util_hashing_MurmurHash3$().iG);
});
$p.aU = (function(elems) {
  return this.np(elems);
});
$p.ac = (function(elem) {
  this.iL(elem);
  return this;
});
function $isArrayOf_scm_HashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cG)));
}
var $d_scm_HashSet = new $TypeData().i($c_scm_HashSet, "scala.collection.mutable.HashSet", ({
  cG: 1,
  gp: 1,
  ak: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  am: 1,
  d: 1,
  a8: 1,
  M: 1,
  B: 1,
  L: 1,
  z: 1,
  A: 1,
  F: 1,
  ax: 1,
  gZ: 1,
  gY: 1,
  l: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedDictionary(dict) {
  this.cE = null;
  this.cE = dict;
}
$p = $c_sjs_js_WrappedDictionary.prototype = new $h_scm_AbstractMap();
$p.constructor = $c_sjs_js_WrappedDictionary;
/** @constructor */
function $h_sjs_js_WrappedDictionary() {
}
$h_sjs_js_WrappedDictionary.prototype = $p;
$p.qM = (function(coll) {
  var d = new $c_sjs_js_WrappedDictionary(({}));
  $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(d, coll);
  return d;
});
$p.cq = (function() {
  return new $c_sjs_js_WrappedDictionary$WrappedDictionaryBuilder();
});
$p.qN = (function(key) {
  var dict = this.cE;
  if ((!(!$m_sjs_js_WrappedDictionary$Cache$().fw.call(dict, key)))) {
    return new $c_s_Some(this.cE[key]);
  } else {
    return $m_s_None$();
  }
});
$p.pP = (function(key) {
  var dict = this.cE;
  if ((!(!$m_sjs_js_WrappedDictionary$Cache$().fw.call(dict, key)))) {
    return this.cE[key];
  } else {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
  }
});
$p.qQ = (function(key, default$1) {
  var dict = this.cE;
  if ((!(!$m_sjs_js_WrappedDictionary$Cache$().fw.call(dict, key)))) {
    return this.cE[key];
  } else {
    return default$1.Q();
  }
});
$p.qR = (function(key, op) {
  var dict = this.cE;
  if ((!(!$m_sjs_js_WrappedDictionary$Cache$().fw.call(dict, key)))) {
    return this.cE[key];
  } else {
    var v = op.Q();
    this.oM(key, v);
    return v;
  }
});
$p.oM = (function(key, value) {
  this.cE[key] = value;
});
$p.pI = (function(kv) {
  var dict = this.cE;
  var key = kv.aa();
  var value = kv.ab();
  dict[key] = value;
  return this;
});
$p.c = (function() {
  return new $c_sjs_js_WrappedDictionary$DictionaryIterator(this.cE);
});
$p.ac = (function(elem) {
  return this.pI(elem);
});
$p.oL = (function(key, value) {
  this.oM(key, value);
});
$p.b8 = (function(key) {
  var dict = this.cE;
  return (!(!$m_sjs_js_WrappedDictionary$Cache$().fw.call(dict, key)));
});
$p.o6 = (function(key, defaultValue) {
  return this.qR(key, defaultValue);
});
$p.dQ = (function(key, default$1) {
  return this.qQ(key, default$1);
});
$p.d = (function(key) {
  return this.pP(key);
});
$p.cc = (function(key) {
  return this.qN(key);
});
$p.fC = (function(coll) {
  return this.qM(coll);
});
var $d_sjs_js_WrappedDictionary = new $TypeData().i($c_sjs_js_WrappedDictionary, "scala.scalajs.js.WrappedDictionary", ({
  iA: 1,
  ct: 1,
  ad: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  a6: 1,
  ae: 1,
  d: 1,
  a5: 1,
  M: 1,
  B: 1,
  L: 1,
  z: 1,
  A: 1,
  F: 1,
  ax: 1,
  cJ: 1,
  aJ: 1
}));
function $isArrayOf_sci_ListMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.fE)));
}
function $isArrayOf_scm_LinkedHashSet(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gT)));
}
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.bj = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.d7 = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aH = (function(len) {
  var x = this.l();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.l();
});
$p.bl = (function() {
  return "IndexedSeq";
});
$p.go = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.f2 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.cb = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.fC = (function(coll) {
  return $m_sci_ArraySeq$().kD(coll, this.aV());
});
$p.cq = (function() {
  return $m_sci_ArraySeq$().iZ(this.aV());
});
$p.en = (function() {
  return $m_sci_ArraySeq$().jM;
});
$p.rc = (function(f) {
  var a = new $ac_O(this.l());
  var i = 0;
  while ((i < a.a.length)) {
    a.a[i] = f.d(this.r(i));
    i = ((1 + i) | 0);
  }
  return $m_sci_ArraySeq$().hT(a);
});
$p.aW = (function(elem) {
  var $x_1 = $m_sci_ArraySeq$();
  var xs = this.cs();
  var dest = new $ac_O(((1 + $m_jl_reflect_Array$().b9(xs)) | 0));
  dest.a[0] = elem;
  $m_s_Array$().bT(xs, 0, dest, 1, $m_jl_reflect_Array$().b9(xs));
  return $x_1.hT(dest);
});
$p.d5 = (function(z, f) {
  var array = this.cs();
  var b = z;
  var i = 0;
  while ((i < $m_jl_reflect_Array$().b9(array))) {
    var a = $m_sr_ScalaRunTime$().aL(array, i);
    b = f.ca(b, a);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.bL = (function() {
  return "ArraySeq";
});
$p.bh = (function(xs, start, len) {
  var srcLen = this.l();
  var destLen = $m_jl_reflect_Array$().b9(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().bT(this.cs(), 0, xs, start, copied);
  }
  return copied;
});
$p.hz = (function() {
  return 2147483647;
});
$p.br = (function(ord) {
  if (($m_jl_reflect_Array$().b9(this.cs()) <= 1)) {
    return this;
  } else {
    var original = this.cs();
    var newLength = this.l();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    if ($d_O.R($objectGetClass(original).L.Q().L)) {
      var a = $m_ju_Arrays$().kq(original, newLength, $m_sr_ScalaRunTime$().iO(new $ac_O(0)));
    } else {
      var dest = new $ac_O(newLength);
      $m_s_Array$().bT(original, 0, dest, 0, $m_jl_reflect_Array$().b9(original));
      var a = dest;
    }
    $m_ju_Arrays$().gz(a, ord);
    return new $c_sci_ArraySeq$ofRef(a);
  }
});
$p.aG = (function() {
  return $m_sci_ArraySeq$().jM;
});
$p.aw = (function(f) {
  return this.rc(f);
});
$p.bq = (function(elem) {
  return this.aW(elem);
});
$p.bI = (function(ord) {
  return this.br(ord);
});
$p.el = (function(coll) {
  return $m_sci_ArraySeq$().kD(coll, this.aV());
});
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a1)));
}
function $ct_sci_Vector__AO__($thiz, prefix1) {
  $thiz.f = prefix1;
  return $thiz;
}
/** @constructor */
function $c_sci_Vector() {
  this.f = null;
}
$p = $c_sci_Vector.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Vector;
/** @constructor */
function $h_sci_Vector() {
}
$h_sci_Vector.prototype = $p;
$p.bj = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.d7 = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.aH = (function(len) {
  var x = this.l();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.l();
});
$p.bl = (function() {
  return "IndexedSeq";
});
$p.go = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.f2 = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.cb = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.bI = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.en = (function() {
  return $m_sci_Vector$();
});
$p.l = (function() {
  return ((this instanceof $c_sci_BigVector) ? this.k : this.f.a.length);
});
$p.c = (function() {
  return ((this === $m_sci_Vector0$()) ? $m_sci_Vector$().mI : new $c_sci_NewVectorIterator(this, this.l(), this.dY()));
});
$p.bL = (function() {
  return "Vector";
});
$p.bh = (function(xs, start, len) {
  return this.c().bh(xs, start, len);
});
$p.hz = (function() {
  return $m_sci_Vector$().mH;
});
$p.bi = (function(index) {
  return $m_scg_CommonErrors$().kL(index, ((this.l() - 1) | 0));
});
$p.m = (function() {
  if ((this.f.a.length === 0)) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "empty.head");
  } else {
    return this.f.a[0];
  }
});
$p.dN = (function(f) {
  var c = this.dY();
  var i = 0;
  while ((i < c)) {
    var $x_1 = $m_sci_VectorStatics$();
    var idx = i;
    var c$1 = (((c + ((c >>> 31) | 0)) | 0) >> 1);
    var a = ((idx - c$1) | 0);
    var sign = (a >> 31);
    $x_1.kz(((((((1 + c$1) | 0) - (((a ^ sign) - sign) | 0)) | 0) - 1) | 0), this.dX(i), f);
    i = ((1 + i) | 0);
  }
});
$p.aG = (function() {
  return $m_sci_Vector$();
});
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.bj = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.d7 = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aH = (function(len) {
  var x = this.l();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.q = (function() {
  return this.l();
});
$p.bl = (function() {
  return "IndexedSeq";
});
$p.aw = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.cb = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.en = (function() {
  return $m_scm_ArraySeq$().jX;
});
$p.o4 = (function(coll) {
  var evidence$1 = this.aV();
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = evidence$1.bk();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $d_C.l());
  jsElems = [];
  coll.q();
  var it = coll.c();
  while (it.i()) {
    var elem = it.e();
    var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $m_scm_ArrayBuilder$().j5(elementClass) : elem));
    jsElems.push(unboxedElem);
  }
  return $m_scm_ArraySeq$().iX($m_scm_ArrayBuilder$().j4(((elementClass === $d_V.l()) ? $d_jl_Void.l() : (((elementClass === $d_sr_Null$.l()) || (elementClass === $d_sr_Nothing$.l())) ? $d_O.l() : elementClass)), jsElems));
});
$p.cq = (function() {
  return $m_scm_ArraySeq$().iZ(this.aV());
});
$p.bL = (function() {
  return "ArraySeq";
});
$p.bh = (function(xs, start, len) {
  var srcLen = this.l();
  var destLen = $m_jl_reflect_Array$().b9(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().bT(this.cF(), 0, xs, start, copied);
  }
  return copied;
});
$p.p = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if (($m_jl_reflect_Array$().b9(this.cF()) !== $m_jl_reflect_Array$().b9(other.cF()))) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
$p.rX = (function(ord) {
  return $m_scm_ArraySeq$().iX($m_sc_ArrayOps$().rY(this.cF(), ord));
});
$p.aG = (function() {
  return $m_scm_ArraySeq$().jX;
});
$p.fC = (function(coll) {
  return this.o4(coll);
});
$p.el = (function(coll) {
  return this.o4(coll);
});
$p.bI = (function(ord) {
  return this.rX(ord);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
/** @constructor */
function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
  this.db = null;
  this.db = unsafeArray;
}
$p = $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofBoolean;
/** @constructor */
function $h_sci_ArraySeq$ofBoolean() {
}
$h_sci_ArraySeq$ofBoolean.prototype = $p;
$p.l = (function() {
  return this.db.a.length;
});
$p.hx = (function(i) {
  return this.db.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.db, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofBoolean) ? $m_ju_Arrays$().nU(this.db, that.db) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.br = (function(ord) {
  if ((this.db.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Boolean$()))) {
    var this$1 = this.db;
    var a = this$1.h();
    $m_s_util_Sorting$().l1(a, 0, a.a.length, $m_s_math_Ordering$Boolean$());
    return new $c_sci_ArraySeq$ofBoolean(a);
  } else {
    return $c_sci_ArraySeq.prototype.br.call(this, ord);
  }
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.db);
});
$p.aW = (function(elem) {
  if (((typeof elem) === "boolean")) {
    var x85 = (!(!elem));
    var xs = this.db;
    $m_s_reflect_ManifestFactory$BooleanManifest$();
    var dest = new $ac_Z(((1 + xs.a.length) | 0));
    dest.a[0] = x85;
    $m_s_Array$().bT(xs, 0, dest, 1, xs.a.length);
    return new $c_sci_ArraySeq$ofBoolean(dest);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.cs = (function() {
  return this.db;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.r = (function(i) {
  return this.hx(i);
});
$p.d = (function(v1) {
  return this.hx((v1 | 0));
});
$p.bI = (function(ord) {
  return this.br(ord);
});
$p.bq = (function(elem) {
  return this.aW(elem);
});
function $isArrayOf_sci_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c1)));
}
var $d_sci_ArraySeq$ofBoolean = new $TypeData().i($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
  c1: 1,
  a1: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofByte(unsafeArray) {
  this.dc = null;
  this.dc = unsafeArray;
}
$p = $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofByte;
/** @constructor */
function $h_sci_ArraySeq$ofByte() {
}
$h_sci_ArraySeq$ofByte.prototype = $p;
$p.l = (function() {
  return this.dc.a.length;
});
$p.hp = (function(i) {
  return this.dc.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.dc, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofByte) ? $m_ju_Arrays$().nQ(this.dc, that.dc) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.br = (function(ord) {
  if ((this.dc.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Byte$()))) {
    var this$1 = this.dc;
    var a = this$1.h();
    $m_ju_Arrays$().ou(a);
    return new $c_sci_ArraySeq$ofByte(a);
  } else {
    return $c_sci_ArraySeq.prototype.br.call(this, ord);
  }
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dc);
});
$p.aW = (function(elem) {
  if ($isByte(elem)) {
    var x29 = (elem | 0);
    var xs = this.dc;
    $m_s_reflect_ManifestFactory$ByteManifest$();
    var dest = new $ac_B(((1 + xs.a.length) | 0));
    dest.a[0] = x29;
    $m_s_Array$().bT(xs, 0, dest, 1, xs.a.length);
    return new $c_sci_ArraySeq$ofByte(dest);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.cs = (function() {
  return this.dc;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.r = (function(i) {
  return this.hp(i);
});
$p.d = (function(v1) {
  return this.hp((v1 | 0));
});
$p.bI = (function(ord) {
  return this.br(ord);
});
$p.bq = (function(elem) {
  return this.aW(elem);
});
function $isArrayOf_sci_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c2)));
}
var $d_sci_ArraySeq$ofByte = new $TypeData().i($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
  c2: 1,
  a1: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofChar(unsafeArray) {
  this.cP = null;
  this.cP = unsafeArray;
}
$p = $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofChar;
/** @constructor */
function $h_sci_ArraySeq$ofChar() {
}
$h_sci_ArraySeq$ofChar.prototype = $p;
$p.l = (function() {
  return this.cP.a.length;
});
$p.hq = (function(i) {
  return this.cP.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.cP, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofChar) ? $m_ju_Arrays$().nR(this.cP, that.cP) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.br = (function(ord) {
  if ((this.cP.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Char$()))) {
    var this$1 = this.cP;
    var a = this$1.h();
    $m_ju_Arrays$().ov(a);
    return new $c_sci_ArraySeq$ofChar(a);
  } else {
    return $c_sci_ArraySeq.prototype.br.call(this, ord);
  }
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cP);
});
$p.aW = (function(elem) {
  if ((elem instanceof $Char)) {
    var x45 = $uC(elem);
    var xs = this.cP;
    $m_s_reflect_ManifestFactory$CharManifest$();
    var dest = new $ac_C(((1 + xs.a.length) | 0));
    dest.a[0] = x45;
    $m_s_Array$().bT(xs, 0, dest, 1, xs.a.length);
    return new $c_sci_ArraySeq$ofChar(dest);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.cl = (function(sb, start, sep, end) {
  return new $c_scm_ArraySeq$ofChar(this.cP).cl(sb, start, sep, end);
});
$p.cs = (function() {
  return this.cP;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.r = (function(i) {
  return $bC(this.hq(i));
});
$p.d = (function(v1) {
  return $bC(this.hq((v1 | 0)));
});
$p.bI = (function(ord) {
  return this.br(ord);
});
$p.bq = (function(elem) {
  return this.aW(elem);
});
function $isArrayOf_sci_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c3)));
}
var $d_sci_ArraySeq$ofChar = new $TypeData().i($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
  c3: 1,
  a1: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofDouble(unsafeArray) {
  this.e4 = null;
  this.e4 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofDouble;
/** @constructor */
function $h_sci_ArraySeq$ofDouble() {
}
$h_sci_ArraySeq$ofDouble.prototype = $p;
$p.l = (function() {
  return this.e4.a.length;
});
$p.hr = (function(i) {
  return this.e4.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.e4, this$1.b0);
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofDouble)) {
    var array = this.e4;
    var thatArray = that.e4;
    if ((array === thatArray)) {
      return true;
    } else if ((array.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < array.a.length) && (array.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= array.a.length);
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.e4);
});
$p.aW = (function(elem) {
  if (((typeof elem) === "number")) {
    var x77 = (+elem);
    var xs = this.e4;
    $m_s_reflect_ManifestFactory$DoubleManifest$();
    var dest = new $ac_D(((1 + xs.a.length) | 0));
    dest.a[0] = x77;
    $m_s_Array$().bT(xs, 0, dest, 1, xs.a.length);
    return new $c_sci_ArraySeq$ofDouble(dest);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.cs = (function() {
  return this.e4;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.r = (function(i) {
  return this.hr(i);
});
$p.d = (function(v1) {
  return this.hr((v1 | 0));
});
$p.bq = (function(elem) {
  return this.aW(elem);
});
function $isArrayOf_sci_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c4)));
}
var $d_sci_ArraySeq$ofDouble = new $TypeData().i($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
  c4: 1,
  a1: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofFloat(unsafeArray) {
  this.e5 = null;
  this.e5 = unsafeArray;
}
$p = $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofFloat;
/** @constructor */
function $h_sci_ArraySeq$ofFloat() {
}
$h_sci_ArraySeq$ofFloat.prototype = $p;
$p.l = (function() {
  return this.e5.a.length;
});
$p.hs = (function(i) {
  return this.e5.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.e5, this$1.b0);
});
$p.p = (function(that) {
  if ((that instanceof $c_sci_ArraySeq$ofFloat)) {
    var array = this.e5;
    var thatArray = that.e5;
    if ((array === thatArray)) {
      return true;
    } else if ((array.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < array.a.length) && (array.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= array.a.length);
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, that);
  }
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.e5);
});
$p.aW = (function(elem) {
  if ($isFloat(elem)) {
    var x69 = Math.fround(elem);
    var xs = this.e5;
    $m_s_reflect_ManifestFactory$FloatManifest$();
    var dest = new $ac_F(((1 + xs.a.length) | 0));
    dest.a[0] = x69;
    $m_s_Array$().bT(xs, 0, dest, 1, xs.a.length);
    return new $c_sci_ArraySeq$ofFloat(dest);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.cs = (function() {
  return this.e5;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.r = (function(i) {
  return this.hs(i);
});
$p.d = (function(v1) {
  return this.hs((v1 | 0));
});
$p.bq = (function(elem) {
  return this.aW(elem);
});
function $isArrayOf_sci_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c5)));
}
var $d_sci_ArraySeq$ofFloat = new $TypeData().i($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
  c5: 1,
  a1: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofInt(unsafeArray) {
  this.dd = null;
  this.dd = unsafeArray;
}
$p = $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofInt;
/** @constructor */
function $h_sci_ArraySeq$ofInt() {
}
$h_sci_ArraySeq$ofInt.prototype = $p;
$p.l = (function() {
  return this.dd.a.length;
});
$p.ht = (function(i) {
  return this.dd.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.dd, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofInt) ? $m_ju_Arrays$().iR(this.dd, that.dd) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.br = (function(ord) {
  if ((this.dd.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Int$()))) {
    var this$1 = this.dd;
    var a = this$1.h();
    $m_ju_Arrays$().ow(a);
    return new $c_sci_ArraySeq$ofInt(a);
  } else {
    return $c_sci_ArraySeq.prototype.br.call(this, ord);
  }
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.dd);
});
$p.aW = (function(elem) {
  if ($isInt(elem)) {
    var x53 = (elem | 0);
    var xs = this.dd;
    $m_s_reflect_ManifestFactory$IntManifest$();
    var dest = new $ac_I(((1 + xs.a.length) | 0));
    dest.a[0] = x53;
    $m_s_Array$().bT(xs, 0, dest, 1, xs.a.length);
    return new $c_sci_ArraySeq$ofInt(dest);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.cs = (function() {
  return this.dd;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.r = (function(i) {
  return this.ht(i);
});
$p.d = (function(v1) {
  return this.ht((v1 | 0));
});
$p.bI = (function(ord) {
  return this.br(ord);
});
$p.bq = (function(elem) {
  return this.aW(elem);
});
function $isArrayOf_sci_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c6)));
}
var $d_sci_ArraySeq$ofInt = new $TypeData().i($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
  c6: 1,
  a1: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofLong(unsafeArray) {
  this.de = null;
  this.de = unsafeArray;
}
$p = $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofLong;
/** @constructor */
function $h_sci_ArraySeq$ofLong() {
}
$h_sci_ArraySeq$ofLong.prototype = $p;
$p.l = (function() {
  return ((this.de.a.length >>> 1) | 0);
});
$p.hu = (function(i) {
  var $x_1 = this.de.a;
  var $x_2 = (i << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.de, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofLong) ? $m_ju_Arrays$().nS(this.de, that.de) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.br = (function(ord) {
  if ((((this.de.a.length >>> 1) | 0) <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Long$()))) {
    var this$1 = this.de;
    var a = this$1.h();
    $m_ju_Arrays$().ox(a);
    return new $c_sci_ArraySeq$ofLong(a);
  } else {
    return $c_sci_ArraySeq.prototype.br.call(this, ord);
  }
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.de);
});
$p.aW = (function(elem) {
  if ((elem instanceof $Long)) {
    var $x_1 = $uJ(elem);
    var x61_$_lo = $x_1.l;
    var x61_$_hi = $x_1.h;
    var xs = this.de;
    $m_s_reflect_ManifestFactory$LongManifest$();
    var dest = new $ac_J(((1 + ((xs.a.length >>> 1) | 0)) | 0));
    var $x_2 = dest.a;
    $x_2[0] = x61_$_lo;
    $x_2[1] = x61_$_hi;
    $m_s_Array$().bT(xs, 0, dest, 1, ((xs.a.length >>> 1) | 0));
    return new $c_sci_ArraySeq$ofLong(dest);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.cs = (function() {
  return this.de;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.r = (function(i) {
  return this.hu(i);
});
$p.d = (function(v1) {
  return this.hu((v1 | 0));
});
$p.bI = (function(ord) {
  return this.br(ord);
});
$p.bq = (function(elem) {
  return this.aW(elem);
});
function $isArrayOf_sci_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c7)));
}
var $d_sci_ArraySeq$ofLong = new $TypeData().i($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
  c7: 1,
  a1: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.cQ = null;
  this.cQ = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.aV = (function() {
  return $m_s_reflect_ClassTag$().kj($objectGetClass(this.cQ).L.Q());
});
$p.l = (function() {
  return this.cQ.a.length;
});
$p.r = (function(i) {
  return this.cQ.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.cQ, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().nV(this.cQ, that.cQ) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.oz = (function(ord) {
  if ((this.cQ.a.length <= 1)) {
    return this;
  } else {
    var this$1 = this.cQ;
    var a = this$1.h();
    $m_ju_Arrays$().gz(a, ord);
    return new $c_sci_ArraySeq$ofRef(a);
  }
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cQ);
});
$p.cs = (function() {
  return this.cQ;
});
$p.d = (function(v1) {
  return this.r((v1 | 0));
});
$p.br = (function(ord) {
  return this.oz(ord);
});
$p.bI = (function(ord) {
  return this.oz(ord);
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c8)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  c8: 1,
  a1: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofShort(unsafeArray) {
  this.df = null;
  this.df = unsafeArray;
}
$p = $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofShort;
/** @constructor */
function $h_sci_ArraySeq$ofShort() {
}
$h_sci_ArraySeq$ofShort.prototype = $p;
$p.l = (function() {
  return this.df.a.length;
});
$p.hv = (function(i) {
  return this.df.a[i];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.df, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofShort) ? $m_ju_Arrays$().nT(this.df, that.df) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.br = (function(ord) {
  if ((this.df.a.length <= 1)) {
    return this;
  } else if ((ord === ($m_s_math_Ordering$(), $m_s_math_Ordering$Short$()))) {
    var this$1 = this.df;
    var a = this$1.h();
    $m_ju_Arrays$().oy(a);
    return new $c_sci_ArraySeq$ofShort(a);
  } else {
    return $c_sci_ArraySeq.prototype.br.call(this, ord);
  }
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.df);
});
$p.aW = (function(elem) {
  if ($isShort(elem)) {
    var x37 = (elem | 0);
    var xs = this.df;
    $m_s_reflect_ManifestFactory$ShortManifest$();
    var dest = new $ac_S(((1 + xs.a.length) | 0));
    dest.a[0] = x37;
    $m_s_Array$().bT(xs, 0, dest, 1, xs.a.length);
    return new $c_sci_ArraySeq$ofShort(dest);
  } else {
    return $c_sci_ArraySeq.prototype.aW.call(this, elem);
  }
});
$p.cs = (function() {
  return this.df;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.r = (function(i) {
  return this.hv(i);
});
$p.d = (function(v1) {
  return this.hv((v1 | 0));
});
$p.bI = (function(ord) {
  return this.br(ord);
});
$p.bq = (function(elem) {
  return this.aW(elem);
});
function $isArrayOf_sci_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c9)));
}
var $d_sci_ArraySeq$ofShort = new $TypeData().i($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
  c9: 1,
  a1: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a4: 1,
  a: 1
}));
/** @constructor */
function $c_sci_ArraySeq$ofUnit(unsafeArray) {
  this.fg = null;
  this.fg = unsafeArray;
}
$p = $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofUnit;
/** @constructor */
function $h_sci_ArraySeq$ofUnit() {
}
$h_sci_ArraySeq$ofUnit.prototype = $p;
$p.l = (function() {
  return this.fg.a.length;
});
$p.hw = (function(i) {
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.fg, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofUnit) ? (this.fg.a.length === that.fg.a.length) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.fg);
});
$p.cs = (function() {
  return this.fg;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.r = (function(i) {
  this.hw(i);
});
$p.d = (function(v1) {
  this.hw((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ca)));
}
var $d_sci_ArraySeq$ofUnit = new $TypeData().i($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
  ca: 1,
  a1: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a4: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    if ((i$tailLocal1 === len$1)) {
      return ((!xs$tailLocal1.g()) | 0);
    } else {
      if ((!xs$tailLocal1.g())) {
        var i$tailLocal1$tmp1 = ((1 + i$tailLocal1) | 0);
        var xs$tailLocal1$tmp1 = xs$tailLocal1.o();
        i$tailLocal1 = i$tailLocal1$tmp1;
        xs$tailLocal1 = xs$tailLocal1$tmp1;
        continue;
      }
      return (-1);
    }
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.g();
      var bEmpty = b$tailLocal1.g();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().n(a$tailLocal1.m(), b$tailLocal1.m()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.o();
        var b$tailLocal1$tmp1 = b$tailLocal1.o();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (aEmpty && bEmpty);
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.kN = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
});
$p.r = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.d5 = (function(z, op) {
  return $f_sc_LinearSeqOps__foldLeft__O__F2__O(this, z, op);
});
$p.f2 = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.dU = (function(p, from) {
  return $f_sc_LinearSeqOps__indexWhere__F1__I__I(this, p, from);
});
$p.bl = (function() {
  return "LinearSeq";
});
$p.c = (function() {
  return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
});
$p.cb = (function(f) {
  return $f_sci_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.bI = (function(ord) {
  return $f_sc_SeqOps__sorted__s_math_Ordering__O(this, ord);
});
$p.en = (function() {
  return $m_sci_List$();
});
$p.ni = (function(prefix) {
  if (this.g()) {
    return prefix;
  } else if (prefix.g()) {
    return this;
  } else {
    var result = new $c_sci_$colon$colon(prefix.m(), this);
    var curr = result;
    var that = prefix.o();
    while ((!that.g())) {
      var temp = new $c_sci_$colon$colon(that.m(), this);
      curr.M = temp;
      curr = temp;
      that = that.o();
    }
    return result;
  }
});
$p.g = (function() {
  return (this === $m_sci_Nil$());
});
$p.cd = (function(prefix) {
  if ((prefix instanceof $c_sci_List)) {
    return this.ni(prefix);
  }
  if ((prefix.q() === 0)) {
    return this;
  }
  if ((prefix instanceof $c_scm_ListBuffer)) {
    if (this.g()) {
      return prefix.c1();
    }
  }
  var iter = prefix.c();
  if (iter.i()) {
    var result = new $c_sci_$colon$colon(iter.e(), this);
    var curr = result;
    while (iter.i()) {
      var temp = new $c_sci_$colon$colon(iter.e(), this);
      curr.M = temp;
      curr = temp;
    }
    return result;
  } else {
    return this;
  }
});
$p.pL = (function(suffix) {
  return ((suffix instanceof $c_sci_List) ? suffix.ni(this) : $f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this, suffix));
});
$p.oC = (function(n) {
  if ((this.g() || (n <= 0))) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(this.m(), $m_sci_Nil$());
    var t = h;
    var rest = this.o();
    var i = 1;
    while (true) {
      if (rest.g()) {
        return this;
      }
      if ((i < n)) {
        i = ((1 + i) | 0);
        var nx = new $c_sci_$colon$colon(rest.m(), $m_sci_Nil$());
        t.M = nx;
        t = nx;
        rest = rest.o();
      } else {
        break;
      }
    }
    var $x_1 = h;
  }
  return $x_1;
});
$p.iY = (function(f) {
  if ((this === $m_sci_Nil$())) {
    var $x_1 = $m_sci_Nil$();
  } else {
    var h = new $c_sci_$colon$colon(f.d(this.m()), $m_sci_Nil$());
    var t = h;
    var rest = this.o();
    while ((rest !== $m_sci_Nil$())) {
      var nx = new $c_sci_$colon$colon(f.d(rest.m()), $m_sci_Nil$());
      t.M = nx;
      t = nx;
      rest = rest.o();
    }
    var $x_1 = h;
  }
  return $x_1;
});
$p.dN = (function(f) {
  var these = this;
  while ((!these.g())) {
    f.d(these.m());
    these = these.o();
  }
});
$p.l = (function() {
  var these = this;
  var len = 0;
  while ((!these.g())) {
    len = ((1 + len) | 0);
    these = these.o();
  }
  return len;
});
$p.aH = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.fA = (function(p) {
  var these = this;
  while ((!these.g())) {
    if ((!(!p.d(these.m())))) {
      return true;
    }
    these = these.o();
  }
  return false;
});
$p.oe = (function() {
  if (this.g()) {
    throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "List.last");
  } else {
    var these = this;
    var scout = this.o();
    while ((!scout.g())) {
      these = scout;
      scout = scout.o();
    }
    return these.m();
  }
});
$p.bL = (function() {
  return "List";
});
$p.c1 = (function() {
  return this;
});
$p.p = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.aG = (function() {
  return $m_sci_List$();
});
$p.bq = (function(elem) {
  return new $c_sci_$colon$colon(elem, this);
});
$p.kt = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.co = (function(x) {
  return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, (x | 0));
});
$p.d = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b0)));
}
/** @constructor */
function $c_sci_VectorImpl() {
  this.f = null;
}
$p = $c_sci_VectorImpl.prototype = new $h_sci_Vector();
$p.constructor = $c_sci_VectorImpl;
/** @constructor */
function $h_sci_VectorImpl() {
}
$h_sci_VectorImpl.prototype = $p;
/** @constructor */
function $c_scm_ArraySeq$ofBoolean(array) {
  this.eK = null;
  this.eK = array;
}
$p = $c_scm_ArraySeq$ofBoolean.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofBoolean;
/** @constructor */
function $h_scm_ArraySeq$ofBoolean() {
}
$h_scm_ArraySeq$ofBoolean.prototype = $p;
$p.l = (function() {
  return this.eK.a.length;
});
$p.hx = (function(index) {
  return this.eK.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.eK, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofBoolean) ? $m_ju_Arrays$().nU(this.eK, that.eK) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.eK);
});
$p.cF = (function() {
  return this.eK;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$BooleanManifest$();
});
$p.r = (function(i) {
  return this.hx(i);
});
$p.d = (function(v1) {
  return this.hx((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofBoolean(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cv)));
}
var $d_scm_ArraySeq$ofBoolean = new $TypeData().i($c_scm_ArraySeq$ofBoolean, "scala.collection.mutable.ArraySeq$ofBoolean", ({
  cv: 1,
  a2: 1,
  Q: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  M: 1,
  B: 1,
  L: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  Y: 1,
  X: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofByte(array) {
  this.eL = null;
  this.eL = array;
}
$p = $c_scm_ArraySeq$ofByte.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofByte;
/** @constructor */
function $h_scm_ArraySeq$ofByte() {
}
$h_scm_ArraySeq$ofByte.prototype = $p;
$p.l = (function() {
  return this.eL.a.length;
});
$p.hp = (function(index) {
  return this.eL.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.eL, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofByte) ? $m_ju_Arrays$().nQ(this.eL, that.eL) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.eL);
});
$p.cF = (function() {
  return this.eL;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$ByteManifest$();
});
$p.r = (function(i) {
  return this.hp(i);
});
$p.d = (function(v1) {
  return this.hp((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofByte(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cw)));
}
var $d_scm_ArraySeq$ofByte = new $TypeData().i($c_scm_ArraySeq$ofByte, "scala.collection.mutable.ArraySeq$ofByte", ({
  cw: 1,
  a2: 1,
  Q: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  M: 1,
  B: 1,
  L: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  Y: 1,
  X: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofChar(array) {
  this.cC = null;
  this.cC = array;
}
$p = $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofChar;
/** @constructor */
function $h_scm_ArraySeq$ofChar() {
}
$h_scm_ArraySeq$ofChar.prototype = $p;
$p.l = (function() {
  return this.cC.a.length;
});
$p.hq = (function(index) {
  return this.cC.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.cC, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofChar) ? $m_ju_Arrays$().nR(this.cC, that.cC) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cC);
});
$p.cl = (function(sb, start, sep, end) {
  var jsb = sb.bD;
  if ((start.length !== 0)) {
    jsb.w = (("" + jsb.w) + start);
  }
  var len = this.cC.a.length;
  if ((len !== 0)) {
    if ((sep === "")) {
      jsb.ns(this.cC);
    } else {
      jsb.l();
      var c = this.cC.a[0];
      var str = ("" + $cToS(c));
      jsb.w = (jsb.w + str);
      var i = 1;
      while ((i < len)) {
        jsb.w = (("" + jsb.w) + sep);
        var c$1 = this.cC.a[i];
        var str$1 = ("" + $cToS(c$1));
        jsb.w = (jsb.w + str$1);
        i = ((1 + i) | 0);
      }
    }
  }
  if ((end.length !== 0)) {
    jsb.w = (("" + jsb.w) + end);
  }
  return sb;
});
$p.cF = (function() {
  return this.cC;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$CharManifest$();
});
$p.r = (function(i) {
  return $bC(this.hq(i));
});
$p.d = (function(v1) {
  return $bC(this.hq((v1 | 0)));
});
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cx)));
}
var $d_scm_ArraySeq$ofChar = new $TypeData().i($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
  cx: 1,
  a2: 1,
  Q: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  M: 1,
  B: 1,
  L: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  Y: 1,
  X: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofDouble(array) {
  this.cY = null;
  this.cY = array;
}
$p = $c_scm_ArraySeq$ofDouble.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofDouble;
/** @constructor */
function $h_scm_ArraySeq$ofDouble() {
}
$h_scm_ArraySeq$ofDouble.prototype = $p;
$p.l = (function() {
  return this.cY.a.length;
});
$p.hr = (function(index) {
  return this.cY.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.cY, this$1.b0);
});
$p.p = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofDouble)) {
    var thatArray = that.cY;
    if ((this.cY === thatArray)) {
      return true;
    } else if ((this.cY.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < this.cY.a.length) && (this.cY.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= this.cY.a.length);
    } else {
      return false;
    }
  } else {
    return $c_scm_ArraySeq.prototype.p.call(this, that);
  }
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cY);
});
$p.cF = (function() {
  return this.cY;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$DoubleManifest$();
});
$p.r = (function(i) {
  return this.hr(i);
});
$p.d = (function(v1) {
  return this.hr((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofDouble(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cy)));
}
var $d_scm_ArraySeq$ofDouble = new $TypeData().i($c_scm_ArraySeq$ofDouble, "scala.collection.mutable.ArraySeq$ofDouble", ({
  cy: 1,
  a2: 1,
  Q: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  M: 1,
  B: 1,
  L: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  Y: 1,
  X: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofFloat(array) {
  this.cZ = null;
  this.cZ = array;
}
$p = $c_scm_ArraySeq$ofFloat.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofFloat;
/** @constructor */
function $h_scm_ArraySeq$ofFloat() {
}
$h_scm_ArraySeq$ofFloat.prototype = $p;
$p.l = (function() {
  return this.cZ.a.length;
});
$p.hs = (function(index) {
  return this.cZ.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.cZ, this$1.b0);
});
$p.p = (function(that) {
  if ((that instanceof $c_scm_ArraySeq$ofFloat)) {
    var thatArray = that.cZ;
    if ((this.cZ === thatArray)) {
      return true;
    } else if ((this.cZ.a.length === thatArray.a.length)) {
      var i = 0;
      while (((i < this.cZ.a.length) && (this.cZ.a[i] === thatArray.a[i]))) {
        i = ((1 + i) | 0);
      }
      return (i >= this.cZ.a.length);
    } else {
      return false;
    }
  } else {
    return $c_scm_ArraySeq.prototype.p.call(this, that);
  }
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.cZ);
});
$p.cF = (function() {
  return this.cZ;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$FloatManifest$();
});
$p.r = (function(i) {
  return this.hs(i);
});
$p.d = (function(v1) {
  return this.hs((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofFloat(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cz)));
}
var $d_scm_ArraySeq$ofFloat = new $TypeData().i($c_scm_ArraySeq$ofFloat, "scala.collection.mutable.ArraySeq$ofFloat", ({
  cz: 1,
  a2: 1,
  Q: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  M: 1,
  B: 1,
  L: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  Y: 1,
  X: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofInt(array) {
  this.eM = null;
  this.eM = array;
}
$p = $c_scm_ArraySeq$ofInt.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofInt;
/** @constructor */
function $h_scm_ArraySeq$ofInt() {
}
$h_scm_ArraySeq$ofInt.prototype = $p;
$p.l = (function() {
  return this.eM.a.length;
});
$p.ht = (function(index) {
  return this.eM.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.eM, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofInt) ? $m_ju_Arrays$().iR(this.eM, that.eM) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.eM);
});
$p.cF = (function() {
  return this.eM;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$IntManifest$();
});
$p.r = (function(i) {
  return this.ht(i);
});
$p.d = (function(v1) {
  return this.ht((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofInt(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cA)));
}
var $d_scm_ArraySeq$ofInt = new $TypeData().i($c_scm_ArraySeq$ofInt, "scala.collection.mutable.ArraySeq$ofInt", ({
  cA: 1,
  a2: 1,
  Q: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  M: 1,
  B: 1,
  L: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  Y: 1,
  X: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofLong(array) {
  this.eN = null;
  this.eN = array;
}
$p = $c_scm_ArraySeq$ofLong.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofLong;
/** @constructor */
function $h_scm_ArraySeq$ofLong() {
}
$h_scm_ArraySeq$ofLong.prototype = $p;
$p.l = (function() {
  return ((this.eN.a.length >>> 1) | 0);
});
$p.hu = (function(index) {
  var $x_1 = this.eN.a;
  var $x_2 = (index << 1);
  return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.eN, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofLong) ? $m_ju_Arrays$().nS(this.eN, that.eN) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.eN);
});
$p.cF = (function() {
  return this.eN;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$LongManifest$();
});
$p.r = (function(i) {
  return this.hu(i);
});
$p.d = (function(v1) {
  return this.hu((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cB)));
}
var $d_scm_ArraySeq$ofLong = new $TypeData().i($c_scm_ArraySeq$ofLong, "scala.collection.mutable.ArraySeq$ofLong", ({
  cB: 1,
  a2: 1,
  Q: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  M: 1,
  B: 1,
  L: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  Y: 1,
  X: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.ec = null;
  this.ec = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.aV = (function() {
  return $m_s_reflect_ClassTag$().kj($objectGetClass(this.ec).L.Q());
});
$p.l = (function() {
  return this.ec.a.length;
});
$p.r = (function(index) {
  return this.ec.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.ec, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().nV(this.ec, that.ec) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ec);
});
$p.cF = (function() {
  return this.ec;
});
$p.d = (function(v1) {
  return this.r((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cC)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  cC: 1,
  a2: 1,
  Q: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  M: 1,
  B: 1,
  L: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  Y: 1,
  X: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofShort(array) {
  this.eO = null;
  this.eO = array;
}
$p = $c_scm_ArraySeq$ofShort.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofShort;
/** @constructor */
function $h_scm_ArraySeq$ofShort() {
}
$h_scm_ArraySeq$ofShort.prototype = $p;
$p.l = (function() {
  return this.eO.a.length;
});
$p.hv = (function(index) {
  return this.eO.a[index];
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.eO, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofShort) ? $m_ju_Arrays$().nT(this.eO, that.eO) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.eO);
});
$p.cF = (function() {
  return this.eO;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$ShortManifest$();
});
$p.r = (function(i) {
  return this.hv(i);
});
$p.d = (function(v1) {
  return this.hv((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofShort(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cD)));
}
var $d_scm_ArraySeq$ofShort = new $TypeData().i($c_scm_ArraySeq$ofShort, "scala.collection.mutable.ArraySeq$ofShort", ({
  cD: 1,
  a2: 1,
  Q: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  M: 1,
  B: 1,
  L: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  Y: 1,
  X: 1,
  l: 1,
  t: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$ofUnit(array) {
  this.fu = null;
  this.fu = array;
}
$p = $c_scm_ArraySeq$ofUnit.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofUnit;
/** @constructor */
function $h_scm_ArraySeq$ofUnit() {
}
$h_scm_ArraySeq$ofUnit.prototype = $p;
$p.l = (function() {
  return this.fu.a.length;
});
$p.hw = (function(index) {
});
$p.u = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.bo(this.fu, this$1.b0);
});
$p.p = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofUnit) ? (this.fu.a.length === that.fu.a.length) : $c_scm_ArraySeq.prototype.p.call(this, that));
});
$p.c = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.fu);
});
$p.cF = (function() {
  return this.fu;
});
$p.aV = (function() {
  return $m_s_reflect_ManifestFactory$UnitManifest$();
});
$p.r = (function(i) {
  this.hw(i);
});
$p.d = (function(v1) {
  this.hw((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cE)));
}
var $d_scm_ArraySeq$ofUnit = new $TypeData().i($c_scm_ArraySeq$ofUnit, "scala.collection.mutable.ArraySeq$ofUnit", ({
  cE: 1,
  a2: 1,
  Q: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  M: 1,
  B: 1,
  L: 1,
  S: 1,
  R: 1,
  o: 1,
  s: 1,
  Y: 1,
  X: 1,
  l: 1,
  t: 1,
  a: 1
}));
function $ct_scm_HashMap__I__D__($thiz, initialCapacity, loadFactor) {
  $thiz.jY = loadFactor;
  $thiz.T = new ($d_scm_HashMap$Node.r().C)($p_scm_HashMap__tableSizeFor__I__I($thiz, initialCapacity));
  $thiz.h9 = $p_scm_HashMap__newThreshold__I__I($thiz, $thiz.T.a.length);
  $thiz.d0 = 0;
  return $thiz;
}
function $ct_scm_HashMap__($thiz) {
  $ct_scm_HashMap__I__D__($thiz, 16, 0.75);
  return $thiz;
}
function $p_scm_HashMap__put0__O__O__I__Z__s_Some($thiz, key, value, hash, getOld) {
  if ((((1 + $thiz.d0) | 0) >= $thiz.h9)) {
    $p_scm_HashMap__growTable__I__V($thiz, ($thiz.T.a.length << 1));
  }
  return $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, (hash & (($thiz.T.a.length - 1) | 0)));
}
function $p_scm_HashMap__put0__O__O__Z__s_Some($thiz, key, value, getOld) {
  if ((((1 + $thiz.d0) | 0) >= $thiz.h9)) {
    $p_scm_HashMap__growTable__I__V($thiz, ($thiz.T.a.length << 1));
  }
  var originalHash = $m_sr_Statics$().y(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  return $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, (hash & (($thiz.T.a.length - 1) | 0)));
}
function $p_scm_HashMap__put0__O__O__Z__I__I__s_Some($thiz, key, value, getOld, hash, idx) {
  matchResult7: {
    var x30 = $thiz.T.a[idx];
    if ((x30 === null)) {
      $thiz.T.a[idx] = new $c_scm_HashMap$Node(key, hash, value, null);
      break matchResult7;
    }
    var prev = null;
    var n = x30;
    while (((n !== null) && (n.dJ <= hash))) {
      if (((n.dJ === hash) && $m_sr_BoxesRunTime$().n(key, n.eQ))) {
        var old$2 = n.cD;
        var this$2 = n;
        this$2.cD = value;
        return (getOld ? new $c_s_Some(old$2) : null);
      }
      prev = n;
      n = n.bg;
    }
    if ((prev === null)) {
      $thiz.T.a[idx] = new $c_scm_HashMap$Node(key, hash, value, x30);
    } else {
      var this$6 = prev;
      var n$1 = new $c_scm_HashMap$Node(key, hash, value, prev.bg);
      this$6.bg = n$1;
    }
  }
  $thiz.d0 = ((1 + $thiz.d0) | 0);
  return null;
}
function $p_scm_HashMap__growTable__I__V($thiz, newlen) {
  if ((newlen < 0)) {
    throw $ct_jl_RuntimeException__T__(new $c_jl_RuntimeException(), (("new HashMap table size " + newlen) + " exceeds maximum"));
  }
  var oldlen = $thiz.T.a.length;
  $thiz.h9 = $p_scm_HashMap__newThreshold__I__I($thiz, newlen);
  if (($thiz.d0 === 0)) {
    $thiz.T = new ($d_scm_HashMap$Node.r().C)(newlen);
  } else {
    $thiz.T = $m_ju_Arrays$().ad($thiz.T, newlen);
    var preLow = new $c_scm_HashMap$Node(null, 0, null, null);
    var preHigh = new $c_scm_HashMap$Node(null, 0, null, null);
    while ((oldlen < newlen)) {
      var i = 0;
      while ((i < oldlen)) {
        var old = $thiz.T.a[i];
        if ((old !== null)) {
          preLow.bg = null;
          preHigh.bg = null;
          var lastLow = preLow;
          var lastHigh = preHigh;
          var n = old;
          while ((n !== null)) {
            var next = n.bg;
            if (((n.dJ & oldlen) === 0)) {
              var this$2 = lastLow;
              var n$1 = n;
              this$2.bg = n$1;
              lastLow = n;
            } else {
              var this$3 = lastHigh;
              var n$2 = n;
              this$3.bg = n$2;
              lastHigh = n;
            }
            n = next;
          }
          var this$4 = lastLow;
          this$4.bg = null;
          if ((old !== preLow.bg)) {
            $thiz.T.a[i] = preLow.bg;
          }
          if ((preHigh.bg !== null)) {
            $thiz.T.a[((i + oldlen) | 0)] = preHigh.bg;
            var this$5 = lastHigh;
            this$5.bg = null;
          }
        }
        i = ((1 + i) | 0);
      }
      oldlen = (oldlen << 1);
    }
  }
}
function $p_scm_HashMap__tableSizeFor__I__I($thiz, capacity) {
  var self = ((capacity - 1) | 0);
  var i = ((self > 4) ? self : 4);
  var self$1 = ((((-2147483648) >> Math.clz32(i)) & i) << 1);
  return ((self$1 < 1073741824) ? self$1 : 1073741824);
}
function $p_scm_HashMap__newThreshold__I__I($thiz, size) {
  return $doubleToInt((size * $thiz.jY));
}
/** @constructor */
function $c_scm_HashMap() {
  this.jY = 0.0;
  this.T = null;
  this.h9 = 0;
  this.d0 = 0;
}
$p = $c_scm_HashMap.prototype = new $h_scm_AbstractMap();
$p.constructor = $c_scm_HashMap;
/** @constructor */
function $h_scm_HashMap() {
}
$h_scm_HashMap.prototype = $p;
$p.K = (function() {
  return this.d0;
});
$p.b8 = (function(key) {
  var originalHash = $m_sr_Statics$().y(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  matchResult1: {
    var $x_1;
    var x1 = this.T.a[(hash & ((this.T.a.length - 1) | 0))];
    if ((x1 === null)) {
      var $x_1 = null;
      break matchResult1;
    }
    var $x_1 = x1.hD(key, hash);
  }
  return ($x_1 !== null);
});
$p.aO = (function(size) {
  var target = $p_scm_HashMap__tableSizeFor__I__I(this, $doubleToInt((((1 + size) | 0) / this.jY)));
  if ((target > this.T.a.length)) {
    $p_scm_HashMap__growTable__I__V(this, target);
  }
});
$p.no = (function(xs) {
  $f_scm_Builder__sizeHint__sc_IterableOnce__I__V(this, xs, 0);
  if ((xs instanceof $c_sci_HashMap)) {
    var f = new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2, v2$2, v3$2) => {
      var h = (v3$2 | 0);
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, v1$2, v2$2, (h ^ ((h >>> 16) | 0)), false);
    }));
    xs.bP.kB(f);
    return this;
  } else if ((xs instanceof $c_scm_HashMap)) {
    var iter = xs.og();
    while (iter.i()) {
      var next = iter.e();
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, next.eQ, next.cD, next.dJ, false);
    }
    return this;
  } else if (false) {
    var iter$2 = xs.nP();
    while (iter$2.i()) {
      var entry = iter$2.e();
      $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, entry.od(), entry.oR(), entry.o9(), false);
    }
    return this;
  } else {
    return ($is_scm_Map(xs) ? (xs.dn(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((key$2, value$2) => {
      var originalHash = $m_sr_Statics$().y(key$2);
      return $p_scm_HashMap__put0__O__O__I__Z__s_Some(this, key$2, value$2, (originalHash ^ ((originalHash >>> 16) | 0)), false);
    }))), this) : $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
  }
});
$p.c = (function() {
  return ((this.d0 === 0) ? $m_sc_Iterator$().G : new $c_scm_HashMap$$anon$1(this));
});
$p.og = (function() {
  return ((this.d0 === 0) ? $m_sc_Iterator$().G : new $c_scm_HashMap$$anon$4(this));
});
$p.cc = (function(key) {
  var originalHash = $m_sr_Statics$().y(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  matchResult1: {
    var x34;
    var x1 = this.T.a[(hash & ((this.T.a.length - 1) | 0))];
    if ((x1 === null)) {
      var x34 = null;
      break matchResult1;
    }
    var x34 = x1.hD(key, hash);
  }
  if ((x34 === null)) {
    return $m_s_None$();
  }
  return new $c_s_Some(x34.cD);
});
$p.d = (function(key) {
  var originalHash = $m_sr_Statics$().y(key);
  var hash = (originalHash ^ ((originalHash >>> 16) | 0));
  matchResult1: {
    var x35;
    var x1 = this.T.a[(hash & ((this.T.a.length - 1) | 0))];
    if ((x1 === null)) {
      var x35 = null;
      break matchResult1;
    }
    var x35 = x1.hD(key, hash);
  }
  if ((x35 === null)) {
    return $f_sc_MapOps__default__O__O(this, key);
  }
  return x35.cD;
});
$p.dQ = (function(key, default$1) {
  if ((!($objectGetClass(this) === $d_scm_HashMap.l()))) {
    return $f_sc_MapOps__getOrElse__O__F0__O(this, key, default$1);
  } else {
    var originalHash = $m_sr_Statics$().y(key);
    var hash = (originalHash ^ ((originalHash >>> 16) | 0));
    matchResult1: {
      var nd;
      var x1 = this.T.a[(hash & ((this.T.a.length - 1) | 0))];
      if ((x1 === null)) {
        var nd = null;
        break matchResult1;
      }
      var nd = x1.hD(key, hash);
    }
    return ((nd === null) ? default$1.Q() : nd.cD);
  }
});
$p.o6 = (function(key, defaultValue) {
  if ((!($objectGetClass(this) === $d_scm_HashMap.l()))) {
    return $f_scm_MapOps__getOrElseUpdate__O__F0__O(this, key, defaultValue);
  } else {
    var originalHash = $m_sr_Statics$().y(key);
    var hash = (originalHash ^ ((originalHash >>> 16) | 0));
    var idx = (hash & ((this.T.a.length - 1) | 0));
    matchResult13: {
      var nd$2;
      var x36 = this.T.a[idx];
      if ((x36 === null)) {
        var nd$2 = null;
        break matchResult13;
      }
      var nd$2 = x36.hD(key, hash);
    }
    if ((nd$2 !== null)) {
      return nd$2.cD;
    } else {
      var table0 = this.T;
      var default$1 = defaultValue.Q();
      if ((((1 + this.d0) | 0) >= this.h9)) {
        $p_scm_HashMap__growTable__I__V(this, (this.T.a.length << 1));
      }
      $p_scm_HashMap__put0__O__O__Z__I__I__s_Some(this, key, default$1, false, hash, ((table0 === this.T) ? idx : (hash & ((this.T.a.length - 1) | 0))));
      return default$1;
    }
  }
});
$p.oL = (function(key, value) {
  $p_scm_HashMap__put0__O__O__Z__s_Some(this, key, value, false);
});
$p.pH = (function(elem) {
  $p_scm_HashMap__put0__O__O__Z__s_Some(this, elem.aa(), elem.ab(), false);
  return this;
});
$p.q = (function() {
  return this.d0;
});
$p.g = (function() {
  return (this.d0 === 0);
});
$p.dn = (function(f) {
  var len = this.T.a.length;
  var i = 0;
  while ((i < len)) {
    var n = this.T.a[i];
    if ((n !== null)) {
      n.dn(f);
    }
    i = ((1 + i) | 0);
  }
});
$p.hK = (function() {
  return $m_scm_HashMap$();
});
$p.bl = (function() {
  return "HashMap";
});
$p.u = (function() {
  if (this.g()) {
    return $m_s_util_hashing_MurmurHash3$().iF;
  } else {
    var tupleHashIterator = new $c_scm_HashMap$$anon$5(this);
    return $m_s_util_hashing_MurmurHash3$().gA(tupleHashIterator, $m_s_util_hashing_MurmurHash3$().ej);
  }
});
$p.aU = (function(elems) {
  return this.no(elems);
});
$p.ac = (function(elem) {
  return this.pH(elem);
});
function $isArrayOf_scm_HashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cF)));
}
var $d_scm_HashMap = new $TypeData().i($c_scm_HashMap, "scala.collection.mutable.HashMap", ({
  cF: 1,
  ct: 1,
  ad: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  a6: 1,
  ae: 1,
  d: 1,
  a5: 1,
  M: 1,
  B: 1,
  L: 1,
  z: 1,
  A: 1,
  F: 1,
  ax: 1,
  cJ: 1,
  aJ: 1,
  l: 1,
  bY: 1,
  a: 1
}));
function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
  $thiz.j = suffix1;
  $thiz.k = length0;
  $ct_sci_Vector__AO__($thiz, _prefix1);
  return $thiz;
}
/** @constructor */
function $c_sci_BigVector() {
  this.f = null;
  this.j = null;
  this.k = 0;
}
$p = $c_sci_BigVector.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_BigVector;
/** @constructor */
function $h_sci_BigVector() {
}
$h_sci_BigVector.prototype = $p;
function $isArrayOf_sci_BigVector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
/** @constructor */
function $c_sci_Vector1(_data1) {
  this.f = null;
  $ct_sci_Vector__AO__(this, _data1);
}
$p = $c_sci_Vector1.prototype = new $h_sci_VectorImpl();
$p.constructor = $c_sci_Vector1;
/** @constructor */
function $h_sci_Vector1() {
}
$h_sci_Vector1.prototype = $p;
$p.r = (function(index) {
  if (((index >= 0) && (index < this.f.a.length))) {
    return this.f.a[index];
  } else {
    throw this.bi(index);
  }
});
$p.ep = (function(index, elem) {
  if (((index >= 0) && (index < this.f.a.length))) {
    var a1 = this.f;
    var a1c = a1.h();
    a1c.a[index] = elem;
    return new $c_sci_Vector1(a1c);
  } else {
    throw this.bi(index);
  }
});
$p.dL = (function(elem) {
  if ((this.f.a.length < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().gp(this.f, elem));
  } else {
    var $x_2 = this.f;
    var $x_1 = $m_sci_VectorStatics$().ap;
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
  }
});
$p.cJ = (function(elem) {
  var len1 = this.f.a.length;
  if ((len1 < 32)) {
    return new $c_sci_Vector1($m_sci_VectorStatics$().gq(elem, this.f));
  } else {
    var a = new $ac_O(1);
    a.a[0] = elem;
    return new $c_sci_Vector2(a, 1, $m_sci_VectorStatics$().ap, this.f, ((1 + len1) | 0));
  }
});
$p.dr = (function(f) {
  return new $c_sci_Vector1($m_sci_VectorStatics$().d6(this.f, f));
});
$p.dY = (function() {
  return 1;
});
$p.dX = (function(idx) {
  return this.f;
});
$p.d = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.f.a.length))) {
    return this.f.a[index];
  } else {
    throw this.bi(index);
  }
});
$p.bq = (function(elem) {
  return this.cJ(elem);
});
$p.aw = (function(f) {
  return this.dr(f);
});
var $d_sci_Vector1 = new $TypeData().i($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
  gf: 1,
  ao: 1,
  ag: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a: 1,
  W: 1
}));
/** @constructor */
function $c_sci_$colon$colon(head, next) {
  this.g9 = null;
  this.M = null;
  this.g9 = head;
  this.M = next;
}
$p = $c_sci_$colon$colon.prototype = new $h_sci_List();
$p.constructor = $c_sci_$colon$colon;
/** @constructor */
function $h_sci_$colon$colon() {
}
$h_sci_$colon$colon.prototype = $p;
$p.ce = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.bF = (function() {
  return 2;
});
$p.bH = (function() {
  return "::";
});
$p.bG = (function(n) {
  if ((n === 0)) {
    return this.g9;
  }
  if ((n === 1)) {
    return this.M;
  }
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.m = (function() {
  return this.g9;
});
$p.o = (function() {
  return this.M;
});
function $isArrayOf_sci_$colon$colon(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.c0)));
}
var $d_sci_$colon$colon = new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
  c0: 1,
  b0: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  aW: 1,
  aA: 1,
  aZ: 1,
  aY: 1,
  l: 1,
  t: 1,
  bX: 1,
  E: 1,
  a: 1,
  W: 1,
  J: 1
}));
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.ce = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.bF = (function() {
  return 0;
});
$p.bH = (function() {
  return "Nil";
});
$p.bG = (function(n) {
  throw $ct_jl_IndexOutOfBoundsException__I__(new $c_jl_IndexOutOfBoundsException(), n);
});
$p.qW = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list");
});
$p.s1 = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.r9 = (function() {
  throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "last of empty list");
});
$p.q = (function() {
  return 0;
});
$p.c = (function() {
  return $m_sc_Iterator$().G;
});
$p.m = (function() {
  this.qW();
});
$p.o = (function() {
  this.s1();
});
$p.oe = (function() {
  this.r9();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  fU: 1,
  b0: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  aW: 1,
  aA: 1,
  aZ: 1,
  aY: 1,
  l: 1,
  t: 1,
  bX: 1,
  E: 1,
  a: 1,
  W: 1,
  J: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
/** @constructor */
function $c_sci_Vector0$() {
  this.f = null;
  this.j = null;
  this.k = 0;
  $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().jS, $m_sci_VectorStatics$().jS, 0);
}
$p = $c_sci_Vector0$.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector0$;
/** @constructor */
function $h_sci_Vector0$() {
}
$h_sci_Vector0$.prototype = $p;
$p.nu = (function(index) {
  throw this.bi(index);
});
$p.ep = (function(index, elem) {
  throw this.bi(index);
});
$p.dL = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.cJ = (function(elem) {
  var a = new $ac_O(1);
  a.a[0] = elem;
  return new $c_sci_Vector1(a);
});
$p.dY = (function() {
  return 0;
});
$p.dX = (function(idx) {
  return null;
});
$p.p = (function(o) {
  return ((this === o) || ((o instanceof $c_sci_Vector) ? false : $f_sc_Seq__equals__O__Z(this, o)));
});
$p.bi = (function(index) {
  return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
});
$p.r = (function(i) {
  this.nu(i);
});
$p.d = (function(v1) {
  this.nu((v1 | 0));
});
$p.bq = (function(elem) {
  return this.cJ(elem);
});
$p.aw = (function(f) {
  return this;
});
var $d_sci_Vector0$ = new $TypeData().i($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
  ge: 1,
  an: 1,
  ao: 1,
  ag: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a: 1,
  W: 1
}));
var $n_sci_Vector0$;
function $m_sci_Vector0$() {
  if ((!$n_sci_Vector0$)) {
    $n_sci_Vector0$ = new $c_sci_Vector0$();
  }
  return $n_sci_Vector0$;
}
/** @constructor */
function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
  this.f = null;
  this.j = null;
  this.k = 0;
  this.bQ = 0;
  this.bn = null;
  this.bQ = len1;
  this.bn = data2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector2.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector2;
/** @constructor */
function $h_sci_Vector2() {
}
$h_sci_Vector2.prototype = $p;
$p.r = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.bQ) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bn.a.length) ? this.bn.a[i2].a[i1] : this.j.a[(31 & io)]);
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.ep = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.bQ)) {
      var io = ((index - this.bQ) | 0);
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      if ((i2 < this.bn.a.length)) {
        var a2 = this.bn;
        var a2c = a2.h();
        var a1 = a2c.a[i2];
        var a1c = a1.h();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        return new $c_sci_Vector2(this.f, this.bQ, a2c, this.j, this.k);
      } else {
        var a1$1 = this.j;
        var a1c$1 = a1$1.h();
        a1c$1.a[i1] = elem;
        return new $c_sci_Vector2(this.f, this.bQ, this.bn, a1c$1, this.k);
      }
    } else {
      var a1$2 = this.f;
      var a1c$2 = a1$2.h();
      a1c$2.a[index] = elem;
      return new $c_sci_Vector2(a1c$2, this.bQ, this.bn, this.j, this.k);
    }
  } else {
    throw this.bi(index);
  }
});
$p.dL = (function(elem) {
  if ((this.j.a.length < 32)) {
    var suffix1$3 = $m_sci_VectorStatics$().gp(this.j, elem);
    var length0$3 = ((1 + this.k) | 0);
    return new $c_sci_Vector2(this.f, this.bQ, this.bn, suffix1$3, length0$3);
  } else if ((this.bn.a.length < 30)) {
    var data2$4 = $m_sci_VectorStatics$().F(this.bn, this.j);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$4 = ((1 + this.k) | 0);
    return new $c_sci_Vector2(this.f, this.bQ, data2$4, a, length0$4);
  } else {
    var $x_5 = this.f;
    var $x_4 = this.bQ;
    var $x_3 = this.bn;
    var $x_2 = this.bQ;
    var $x_1 = $m_sci_VectorStatics$().bz;
    var x = this.j;
    var a$1 = new ($d_O.r().r().C)(1);
    a$1.a[0] = x;
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.k) | 0));
  }
});
$p.cJ = (function(elem) {
  if ((this.bQ < 32)) {
    var prefix1$5 = $m_sci_VectorStatics$().gq(elem, this.f);
    var len1$5 = ((1 + this.bQ) | 0);
    var length0$5 = ((1 + this.k) | 0);
    return new $c_sci_Vector2(prefix1$5, len1$5, this.bn, this.j, length0$5);
  } else if ((this.bn.a.length < 30)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var data2$6 = $m_sci_VectorStatics$().B(this.f, this.bn);
    var length0$6 = ((1 + this.k) | 0);
    return new $c_sci_Vector2(a, 1, data2$6, this.j, length0$6);
  } else {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var x = this.f;
    var a$2 = new ($d_O.r().r().C)(1);
    a$2.a[0] = x;
    return new $c_sci_Vector3(a$1, 1, a$2, ((1 + this.bQ) | 0), $m_sci_VectorStatics$().bz, this.bn, this.j, ((1 + this.k) | 0));
  }
});
$p.dr = (function(f) {
  var prefix1$7 = $m_sci_VectorStatics$().d6(this.f, f);
  var data2$7 = $m_sci_VectorStatics$().aI(2, this.bn, f);
  var suffix1$7 = $m_sci_VectorStatics$().d6(this.j, f);
  return new $c_sci_Vector2(prefix1$7, this.bQ, data2$7, suffix1$7, this.k);
});
$p.dY = (function() {
  return 3;
});
$p.dX = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.bn;
      break;
    }
    case 2: {
      return this.j;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.d = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.bQ) | 0);
    if ((io >= 0)) {
      var i2 = ((io >>> 5) | 0);
      var i1 = (31 & io);
      return ((i2 < this.bn.a.length) ? this.bn.a[i2].a[i1] : this.j.a[(31 & io)]);
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.bq = (function(elem) {
  return this.cJ(elem);
});
$p.aw = (function(f) {
  return this.dr(f);
});
var $d_sci_Vector2 = new $TypeData().i($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
  gg: 1,
  an: 1,
  ao: 1,
  ag: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a: 1,
  W: 1
}));
/** @constructor */
function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.j = null;
  this.k = 0;
  this.bx = 0;
  this.by = null;
  this.be = 0;
  this.aZ = null;
  this.b4 = null;
  this.bx = len1;
  this.by = prefix2;
  this.be = len12;
  this.aZ = data3;
  this.b4 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector3.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector3;
/** @constructor */
function $h_sci_Vector3() {
}
$h_sci_Vector3.prototype = $p;
$p.r = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.be) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aZ.a.length) ? this.aZ.a[i3].a[i2].a[i1] : ((i2 < this.b4.a.length) ? this.b4.a[i2].a[i1] : this.j.a[i1]));
    } else if ((index >= this.bx)) {
      var io$2 = ((index - this.bx) | 0);
      return this.by.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.ep = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.be)) {
      var io = ((index - this.be) | 0);
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i3 < this.aZ.a.length)) {
        var a3 = this.aZ;
        var a3c = a3.h();
        var a2 = a3c.a[i3];
        var a2c = a2.h();
        var a1 = a2c.a[i2];
        var a1c = a1.h();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        return new $c_sci_Vector3(this.f, this.bx, this.by, this.be, a3c, this.b4, this.j, this.k);
      } else if ((i2 < this.b4.a.length)) {
        var a2$1 = this.b4;
        var a2c$1 = a2$1.h();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.h();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        return new $c_sci_Vector3(this.f, this.bx, this.by, this.be, this.aZ, a2c$1, this.j, this.k);
      } else {
        var a1$2 = this.j;
        var a1c$2 = a1$2.h();
        a1c$2.a[i1] = elem;
        return new $c_sci_Vector3(this.f, this.bx, this.by, this.be, this.aZ, this.b4, a1c$2, this.k);
      }
    } else if ((index >= this.bx)) {
      var io$2 = ((index - this.bx) | 0);
      var a2$2 = this.by;
      var idx2 = ((io$2 >>> 5) | 0);
      var idx1 = (31 & io$2);
      var a2c$2 = a2$2.h();
      var a1$3 = a2c$2.a[idx2];
      var a1c$3 = a1$3.h();
      a1c$3.a[idx1] = elem;
      a2c$2.a[idx2] = a1c$3;
      return new $c_sci_Vector3(this.f, this.bx, a2c$2, this.be, this.aZ, this.b4, this.j, this.k);
    } else {
      var a1$4 = this.f;
      var a1c$4 = a1$4.h();
      a1c$4.a[index] = elem;
      return new $c_sci_Vector3(a1c$4, this.bx, this.by, this.be, this.aZ, this.b4, this.j, this.k);
    }
  } else {
    throw this.bi(index);
  }
});
$p.dL = (function(elem) {
  if ((this.j.a.length < 32)) {
    var suffix1$16 = $m_sci_VectorStatics$().gp(this.j, elem);
    var length0$16 = ((1 + this.k) | 0);
    return new $c_sci_Vector3(this.f, this.bx, this.by, this.be, this.aZ, this.b4, suffix1$16, length0$16);
  } else if ((this.b4.a.length < 31)) {
    var suffix2$6 = $m_sci_VectorStatics$().F(this.b4, this.j);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$17 = ((1 + this.k) | 0);
    return new $c_sci_Vector3(this.f, this.bx, this.by, this.be, this.aZ, suffix2$6, a, length0$17);
  } else if ((this.aZ.a.length < 30)) {
    var data3$7 = $m_sci_VectorStatics$().F(this.aZ, $m_sci_VectorStatics$().F(this.b4, this.j));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$18 = ((1 + this.k) | 0);
    return new $c_sci_Vector3(this.f, this.bx, this.by, this.be, data3$7, $m_sci_VectorStatics$().ap, a$1, length0$18);
  } else {
    var $x_8 = this.f;
    var $x_7 = this.bx;
    var $x_6 = this.by;
    var $x_5 = this.be;
    var $x_4 = this.aZ;
    var $x_3 = this.be;
    var $x_2 = $m_sci_VectorStatics$().dj;
    var x = $m_sci_VectorStatics$().F(this.b4, this.j);
    var a$2 = new ($d_O.r().r().r().C)(1);
    a$2.a[0] = x;
    var $x_1 = $m_sci_VectorStatics$().ap;
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.k) | 0));
  }
});
$p.cJ = (function(elem) {
  if ((this.bx < 32)) {
    var prefix1$18 = $m_sci_VectorStatics$().gq(elem, this.f);
    var len1$18 = ((1 + this.bx) | 0);
    var len12$8 = ((1 + this.be) | 0);
    var length0$19 = ((1 + this.k) | 0);
    return new $c_sci_Vector3(prefix1$18, len1$18, this.by, len12$8, this.aZ, this.b4, this.j, length0$19);
  } else if ((this.be < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var prefix2$9 = $m_sci_VectorStatics$().B(this.f, this.by);
    var len12$9 = ((1 + this.be) | 0);
    var length0$20 = ((1 + this.k) | 0);
    return new $c_sci_Vector3(a, 1, prefix2$9, len12$9, this.aZ, this.b4, this.j, length0$20);
  } else if ((this.aZ.a.length < 30)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var data3$10 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.f, this.by), this.aZ);
    var length0$21 = ((1 + this.k) | 0);
    var suffix2$9 = this.b4;
    var suffix1$21 = this.j;
    return new $c_sci_Vector3(a$1, 1, $m_sci_VectorStatics$().ap, 1, data3$10, suffix2$9, suffix1$21, length0$21);
  } else {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var $x_1 = $m_sci_VectorStatics$().ap;
    var x = $m_sci_VectorStatics$().B(this.f, this.by);
    var a$3 = new ($d_O.r().r().r().C)(1);
    a$3.a[0] = x;
    return new $c_sci_Vector4(a$2, 1, $x_1, 1, a$3, ((1 + this.be) | 0), $m_sci_VectorStatics$().dj, this.aZ, this.b4, this.j, ((1 + this.k) | 0));
  }
});
$p.dr = (function(f) {
  var prefix1$21 = $m_sci_VectorStatics$().d6(this.f, f);
  var prefix2$10 = $m_sci_VectorStatics$().aI(2, this.by, f);
  var data3$11 = $m_sci_VectorStatics$().aI(3, this.aZ, f);
  var suffix2$10 = $m_sci_VectorStatics$().aI(2, this.b4, f);
  var suffix1$22 = $m_sci_VectorStatics$().d6(this.j, f);
  return new $c_sci_Vector3(prefix1$21, this.bx, prefix2$10, this.be, data3$11, suffix2$10, suffix1$22, this.k);
});
$p.dY = (function() {
  return 5;
});
$p.dX = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.by;
      break;
    }
    case 2: {
      return this.aZ;
      break;
    }
    case 3: {
      return this.b4;
      break;
    }
    case 4: {
      return this.j;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.d = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.be) | 0);
    if ((io >= 0)) {
      var i3 = ((io >>> 10) | 0);
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i3 < this.aZ.a.length) ? this.aZ.a[i3].a[i2].a[i1] : ((i2 < this.b4.a.length) ? this.b4.a[i2].a[i1] : this.j.a[i1]));
    } else if ((index >= this.bx)) {
      var io$2 = ((index - this.bx) | 0);
      return this.by.a[((io$2 >>> 5) | 0)].a[(31 & io$2)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.bq = (function(elem) {
  return this.cJ(elem);
});
$p.aw = (function(f) {
  return this.dr(f);
});
var $d_sci_Vector3 = new $TypeData().i($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
  gh: 1,
  an: 1,
  ao: 1,
  ag: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a: 1,
  W: 1
}));
/** @constructor */
function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.j = null;
  this.k = 0;
  this.bb = 0;
  this.b6 = null;
  this.b5 = 0;
  this.b7 = null;
  this.aS = 0;
  this.ar = null;
  this.aA = null;
  this.az = null;
  this.bb = len1;
  this.b6 = prefix2;
  this.b5 = len12;
  this.b7 = prefix3;
  this.aS = len123;
  this.ar = data4;
  this.aA = suffix3;
  this.az = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector4.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector4;
/** @constructor */
function $h_sci_Vector4() {
}
$h_sci_Vector4.prototype = $p;
$p.r = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.aS) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ar.a.length) ? this.ar.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aA.a.length) ? this.aA.a[i3].a[i2].a[i1] : ((i2 < this.az.a.length) ? this.az.a[i2].a[i1] : this.j.a[i1])));
    } else if ((index >= this.b5)) {
      var io$2 = ((index - this.b5) | 0);
      return this.b7.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.bb)) {
      var io$3 = ((index - this.bb) | 0);
      return this.b6.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.ep = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.aS)) {
      var io = ((index - this.aS) | 0);
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i4 < this.ar.a.length)) {
        var a4 = this.ar;
        var a4c = a4.h();
        var a3 = a4c.a[i4];
        var a3c = a3.h();
        var a2 = a3c.a[i3];
        var a2c = a2.h();
        var a1 = a2c.a[i2];
        var a1c = a1.h();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        return new $c_sci_Vector4(this.f, this.bb, this.b6, this.b5, this.b7, this.aS, a4c, this.aA, this.az, this.j, this.k);
      } else if ((i3 < this.aA.a.length)) {
        var a3$1 = this.aA;
        var a3c$1 = a3$1.h();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.h();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.h();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        return new $c_sci_Vector4(this.f, this.bb, this.b6, this.b5, this.b7, this.aS, this.ar, a3c$1, this.az, this.j, this.k);
      } else if ((i2 < this.az.a.length)) {
        var a2$2 = this.az;
        var a2c$2 = a2$2.h();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.h();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        return new $c_sci_Vector4(this.f, this.bb, this.b6, this.b5, this.b7, this.aS, this.ar, this.aA, a2c$2, this.j, this.k);
      } else {
        var a1$3 = this.j;
        var a1c$3 = a1$3.h();
        a1c$3.a[i1] = elem;
        return new $c_sci_Vector4(this.f, this.bb, this.b6, this.b5, this.b7, this.aS, this.ar, this.aA, this.az, a1c$3, this.k);
      }
    } else if ((index >= this.b5)) {
      var io$2 = ((index - this.b5) | 0);
      var a3$2 = this.b7;
      var idx3 = ((io$2 >>> 10) | 0);
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a3c$2 = a3$2.h();
      var a2$3 = a3c$2.a[idx3];
      var a2c$3 = a2$3.h();
      var a1$4 = a2c$3.a[idx2];
      var a1c$4 = a1$4.h();
      a1c$4.a[idx1] = elem;
      a2c$3.a[idx2] = a1c$4;
      a3c$2.a[idx3] = a2c$3;
      return new $c_sci_Vector4(this.f, this.bb, this.b6, this.b5, a3c$2, this.aS, this.ar, this.aA, this.az, this.j, this.k);
    } else if ((index >= this.bb)) {
      var io$3 = ((index - this.bb) | 0);
      var a2$4 = this.b6;
      var idx2$1 = ((io$3 >>> 5) | 0);
      var idx1$1 = (31 & io$3);
      var a2c$4 = a2$4.h();
      var a1$5 = a2c$4.a[idx2$1];
      var a1c$5 = a1$5.h();
      a1c$5.a[idx1$1] = elem;
      a2c$4.a[idx2$1] = a1c$5;
      return new $c_sci_Vector4(this.f, this.bb, a2c$4, this.b5, this.b7, this.aS, this.ar, this.aA, this.az, this.j, this.k);
    } else {
      var a1$6 = this.f;
      var a1c$6 = a1$6.h();
      a1c$6.a[index] = elem;
      return new $c_sci_Vector4(a1c$6, this.bb, this.b6, this.b5, this.b7, this.aS, this.ar, this.aA, this.az, this.j, this.k);
    }
  } else {
    throw this.bi(index);
  }
});
$p.dL = (function(elem) {
  if ((this.j.a.length < 32)) {
    var suffix1$33 = $m_sci_VectorStatics$().gp(this.j, elem);
    var length0$33 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.bb, this.b6, this.b5, this.b7, this.aS, this.ar, this.aA, this.az, suffix1$33, length0$33);
  } else if ((this.az.a.length < 31)) {
    var suffix2$22 = $m_sci_VectorStatics$().F(this.az, this.j);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$34 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.bb, this.b6, this.b5, this.b7, this.aS, this.ar, this.aA, suffix2$22, a, length0$34);
  } else if ((this.aA.a.length < 31)) {
    var suffix3$9 = $m_sci_VectorStatics$().F(this.aA, $m_sci_VectorStatics$().F(this.az, this.j));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$35 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.bb, this.b6, this.b5, this.b7, this.aS, this.ar, suffix3$9, $m_sci_VectorStatics$().ap, a$1, length0$35);
  } else if ((this.ar.a.length < 30)) {
    var data4$10 = $m_sci_VectorStatics$().F(this.ar, $m_sci_VectorStatics$().F(this.aA, $m_sci_VectorStatics$().F(this.az, this.j)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$36 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(this.f, this.bb, this.b6, this.b5, this.b7, this.aS, data4$10, $m_sci_VectorStatics$().bz, $m_sci_VectorStatics$().ap, a$2, length0$36);
  } else {
    var $x_11 = this.f;
    var $x_10 = this.bb;
    var $x_9 = this.b6;
    var $x_8 = this.b5;
    var $x_7 = this.b7;
    var $x_6 = this.aS;
    var $x_5 = this.ar;
    var $x_4 = this.aS;
    var $x_3 = $m_sci_VectorStatics$().h7;
    var x = $m_sci_VectorStatics$().F(this.aA, $m_sci_VectorStatics$().F(this.az, this.j));
    var a$3 = new ($d_O.r().r().r().r().C)(1);
    a$3.a[0] = x;
    var $x_2 = $m_sci_VectorStatics$().bz;
    var $x_1 = $m_sci_VectorStatics$().ap;
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.k) | 0));
  }
});
$p.cJ = (function(elem) {
  if ((this.bb < 32)) {
    var prefix1$35 = $m_sci_VectorStatics$().gq(elem, this.f);
    var len1$34 = ((1 + this.bb) | 0);
    var len12$25 = ((1 + this.b5) | 0);
    var len123$11 = ((1 + this.aS) | 0);
    var length0$37 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(prefix1$35, len1$34, this.b6, len12$25, this.b7, len123$11, this.ar, this.aA, this.az, this.j, length0$37);
  } else if ((this.b5 < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var prefix2$26 = $m_sci_VectorStatics$().B(this.f, this.b6);
    var len12$26 = ((1 + this.b5) | 0);
    var len123$12 = ((1 + this.aS) | 0);
    var length0$38 = ((1 + this.k) | 0);
    return new $c_sci_Vector4(a, 1, prefix2$26, len12$26, this.b7, len123$12, this.ar, this.aA, this.az, this.j, length0$38);
  } else if ((this.aS < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var prefix3$13 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.f, this.b6), this.b7);
    var len123$13 = ((1 + this.aS) | 0);
    var length0$39 = ((1 + this.k) | 0);
    var data4$13 = this.ar;
    var suffix3$12 = this.aA;
    var suffix2$25 = this.az;
    var suffix1$39 = this.j;
    return new $c_sci_Vector4(a$1, 1, $m_sci_VectorStatics$().ap, 1, prefix3$13, len123$13, data4$13, suffix3$12, suffix2$25, suffix1$39, length0$39);
  } else if ((this.ar.a.length < 30)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var data4$14 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.f, this.b6), this.b7), this.ar);
    var length0$40 = ((1 + this.k) | 0);
    var suffix3$13 = this.aA;
    var suffix2$26 = this.az;
    var suffix1$40 = this.j;
    return new $c_sci_Vector4(a$2, 1, $m_sci_VectorStatics$().ap, 1, $m_sci_VectorStatics$().bz, 1, data4$14, suffix3$13, suffix2$26, suffix1$40, length0$40);
  } else {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var $x_2 = $m_sci_VectorStatics$().ap;
    var $x_1 = $m_sci_VectorStatics$().bz;
    var x = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.f, this.b6), this.b7);
    var a$4 = new ($d_O.r().r().r().r().C)(1);
    a$4.a[0] = x;
    return new $c_sci_Vector5(a$3, 1, $x_2, 1, $x_1, 1, a$4, ((1 + this.aS) | 0), $m_sci_VectorStatics$().h7, this.ar, this.aA, this.az, this.j, ((1 + this.k) | 0));
  }
});
$p.dr = (function(f) {
  var prefix1$39 = $m_sci_VectorStatics$().d6(this.f, f);
  var prefix2$27 = $m_sci_VectorStatics$().aI(2, this.b6, f);
  var prefix3$14 = $m_sci_VectorStatics$().aI(3, this.b7, f);
  var data4$15 = $m_sci_VectorStatics$().aI(4, this.ar, f);
  var suffix3$14 = $m_sci_VectorStatics$().aI(3, this.aA, f);
  var suffix2$27 = $m_sci_VectorStatics$().aI(2, this.az, f);
  var suffix1$41 = $m_sci_VectorStatics$().d6(this.j, f);
  return new $c_sci_Vector4(prefix1$39, this.bb, prefix2$27, this.b5, prefix3$14, this.aS, data4$15, suffix3$14, suffix2$27, suffix1$41, this.k);
});
$p.dY = (function() {
  return 7;
});
$p.dX = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.b6;
      break;
    }
    case 2: {
      return this.b7;
      break;
    }
    case 3: {
      return this.ar;
      break;
    }
    case 4: {
      return this.aA;
      break;
    }
    case 5: {
      return this.az;
      break;
    }
    case 6: {
      return this.j;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.d = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.aS) | 0);
    if ((io >= 0)) {
      var i4 = ((io >>> 15) | 0);
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i4 < this.ar.a.length) ? this.ar.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.aA.a.length) ? this.aA.a[i3].a[i2].a[i1] : ((i2 < this.az.a.length) ? this.az.a[i2].a[i1] : this.j.a[i1])));
    } else if ((index >= this.b5)) {
      var io$2 = ((index - this.b5) | 0);
      return this.b7.a[((io$2 >>> 10) | 0)].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.bb)) {
      var io$3 = ((index - this.bb) | 0);
      return this.b6.a[((io$3 >>> 5) | 0)].a[(31 & io$3)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.bq = (function(elem) {
  return this.cJ(elem);
});
$p.aw = (function(f) {
  return this.dr(f);
});
var $d_sci_Vector4 = new $TypeData().i($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
  gi: 1,
  an: 1,
  ao: 1,
  ag: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a: 1,
  W: 1
}));
/** @constructor */
function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.j = null;
  this.k = 0;
  this.aT = 0;
  this.aC = null;
  this.aK = 0;
  this.aD = null;
  this.aB = 0;
  this.aE = null;
  this.aj = 0;
  this.a2 = null;
  this.a9 = null;
  this.a8 = null;
  this.a7 = null;
  this.aT = len1;
  this.aC = prefix2;
  this.aK = len12;
  this.aD = prefix3;
  this.aB = len123;
  this.aE = prefix4;
  this.aj = len1234;
  this.a2 = data5;
  this.a9 = suffix4;
  this.a8 = suffix3;
  this.a7 = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector5.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector5;
/** @constructor */
function $h_sci_Vector5() {
}
$h_sci_Vector5.prototype = $p;
$p.r = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.aj) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a2.a.length) ? this.a2.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a9.a.length) ? this.a9.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a8.a.length) ? this.a8.a[i3].a[i2].a[i1] : ((i2 < this.a7.a.length) ? this.a7.a[i2].a[i1] : this.j.a[i1]))));
    } else if ((index >= this.aB)) {
      var io$2 = ((index - this.aB) | 0);
      return this.aE.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aK)) {
      var io$3 = ((index - this.aK) | 0);
      return this.aD.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aT)) {
      var io$4 = ((index - this.aT) | 0);
      return this.aC.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.ep = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.aj)) {
      var io = ((index - this.aj) | 0);
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i5 < this.a2.a.length)) {
        var a5 = this.a2;
        var a5c = a5.h();
        var a4 = a5c.a[i5];
        var a4c = a4.h();
        var a3 = a4c.a[i4];
        var a3c = a3.h();
        var a2 = a3c.a[i3];
        var a2c = a2.h();
        var a1 = a2c.a[i2];
        var a1c = a1.h();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        return new $c_sci_Vector5(this.f, this.aT, this.aC, this.aK, this.aD, this.aB, this.aE, this.aj, a5c, this.a9, this.a8, this.a7, this.j, this.k);
      } else if ((i4 < this.a9.a.length)) {
        var a4$1 = this.a9;
        var a4c$1 = a4$1.h();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.h();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.h();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.h();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        return new $c_sci_Vector5(this.f, this.aT, this.aC, this.aK, this.aD, this.aB, this.aE, this.aj, this.a2, a4c$1, this.a8, this.a7, this.j, this.k);
      } else if ((i3 < this.a8.a.length)) {
        var a3$2 = this.a8;
        var a3c$2 = a3$2.h();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.h();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.h();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        return new $c_sci_Vector5(this.f, this.aT, this.aC, this.aK, this.aD, this.aB, this.aE, this.aj, this.a2, this.a9, a3c$2, this.a7, this.j, this.k);
      } else if ((i2 < this.a7.a.length)) {
        var a2$3 = this.a7;
        var a2c$3 = a2$3.h();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.h();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        return new $c_sci_Vector5(this.f, this.aT, this.aC, this.aK, this.aD, this.aB, this.aE, this.aj, this.a2, this.a9, this.a8, a2c$3, this.j, this.k);
      } else {
        var a1$4 = this.j;
        var a1c$4 = a1$4.h();
        a1c$4.a[i1] = elem;
        return new $c_sci_Vector5(this.f, this.aT, this.aC, this.aK, this.aD, this.aB, this.aE, this.aj, this.a2, this.a9, this.a8, this.a7, a1c$4, this.k);
      }
    } else if ((index >= this.aB)) {
      var io$2 = ((index - this.aB) | 0);
      var a4$2 = this.aE;
      var idx4 = ((io$2 >>> 15) | 0);
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a4c$2 = a4$2.h();
      var a3$3 = a4c$2.a[idx4];
      var a3c$3 = a3$3.h();
      var a2$4 = a3c$3.a[idx3];
      var a2c$4 = a2$4.h();
      var a1$5 = a2c$4.a[idx2];
      var a1c$5 = a1$5.h();
      a1c$5.a[idx1] = elem;
      a2c$4.a[idx2] = a1c$5;
      a3c$3.a[idx3] = a2c$4;
      a4c$2.a[idx4] = a3c$3;
      return new $c_sci_Vector5(this.f, this.aT, this.aC, this.aK, this.aD, this.aB, a4c$2, this.aj, this.a2, this.a9, this.a8, this.a7, this.j, this.k);
    } else if ((index >= this.aK)) {
      var io$3 = ((index - this.aK) | 0);
      var a3$4 = this.aD;
      var idx3$1 = ((io$3 >>> 10) | 0);
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a3c$4 = a3$4.h();
      var a2$5 = a3c$4.a[idx3$1];
      var a2c$5 = a2$5.h();
      var a1$6 = a2c$5.a[idx2$1];
      var a1c$6 = a1$6.h();
      a1c$6.a[idx1$1] = elem;
      a2c$5.a[idx2$1] = a1c$6;
      a3c$4.a[idx3$1] = a2c$5;
      return new $c_sci_Vector5(this.f, this.aT, this.aC, this.aK, a3c$4, this.aB, this.aE, this.aj, this.a2, this.a9, this.a8, this.a7, this.j, this.k);
    } else if ((index >= this.aT)) {
      var io$4 = ((index - this.aT) | 0);
      var a2$6 = this.aC;
      var idx2$2 = ((io$4 >>> 5) | 0);
      var idx1$2 = (31 & io$4);
      var a2c$6 = a2$6.h();
      var a1$7 = a2c$6.a[idx2$2];
      var a1c$7 = a1$7.h();
      a1c$7.a[idx1$2] = elem;
      a2c$6.a[idx2$2] = a1c$7;
      return new $c_sci_Vector5(this.f, this.aT, a2c$6, this.aK, this.aD, this.aB, this.aE, this.aj, this.a2, this.a9, this.a8, this.a7, this.j, this.k);
    } else {
      var a1$8 = this.f;
      var a1c$8 = a1$8.h();
      a1c$8.a[index] = elem;
      return new $c_sci_Vector5(a1c$8, this.aT, this.aC, this.aK, this.aD, this.aB, this.aE, this.aj, this.a2, this.a9, this.a8, this.a7, this.j, this.k);
    }
  } else {
    throw this.bi(index);
  }
});
$p.dL = (function(elem) {
  if ((this.j.a.length < 32)) {
    var suffix1$54 = $m_sci_VectorStatics$().gp(this.j, elem);
    var length0$54 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.aT, this.aC, this.aK, this.aD, this.aB, this.aE, this.aj, this.a2, this.a9, this.a8, this.a7, suffix1$54, length0$54);
  } else if ((this.a7.a.length < 31)) {
    var suffix2$41 = $m_sci_VectorStatics$().F(this.a7, this.j);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$55 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.aT, this.aC, this.aK, this.aD, this.aB, this.aE, this.aj, this.a2, this.a9, this.a8, suffix2$41, a, length0$55);
  } else if ((this.a8.a.length < 31)) {
    var suffix3$29 = $m_sci_VectorStatics$().F(this.a8, $m_sci_VectorStatics$().F(this.a7, this.j));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$56 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.aT, this.aC, this.aK, this.aD, this.aB, this.aE, this.aj, this.a2, this.a9, suffix3$29, $m_sci_VectorStatics$().ap, a$1, length0$56);
  } else if ((this.a9.a.length < 31)) {
    var suffix4$12 = $m_sci_VectorStatics$().F(this.a9, $m_sci_VectorStatics$().F(this.a8, $m_sci_VectorStatics$().F(this.a7, this.j)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$57 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.aT, this.aC, this.aK, this.aD, this.aB, this.aE, this.aj, this.a2, suffix4$12, $m_sci_VectorStatics$().bz, $m_sci_VectorStatics$().ap, a$2, length0$57);
  } else if ((this.a2.a.length < 30)) {
    var data5$13 = $m_sci_VectorStatics$().F(this.a2, $m_sci_VectorStatics$().F(this.a9, $m_sci_VectorStatics$().F(this.a8, $m_sci_VectorStatics$().F(this.a7, this.j))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$58 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(this.f, this.aT, this.aC, this.aK, this.aD, this.aB, this.aE, this.aj, data5$13, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bz, $m_sci_VectorStatics$().ap, a$3, length0$58);
  } else {
    var $x_14 = this.f;
    var $x_13 = this.aT;
    var $x_12 = this.aC;
    var $x_11 = this.aK;
    var $x_10 = this.aD;
    var $x_9 = this.aB;
    var $x_8 = this.aE;
    var $x_7 = this.aj;
    var $x_6 = this.a2;
    var $x_5 = this.aj;
    var $x_4 = $m_sci_VectorStatics$().jT;
    var x = $m_sci_VectorStatics$().F(this.a9, $m_sci_VectorStatics$().F(this.a8, $m_sci_VectorStatics$().F(this.a7, this.j)));
    var a$4 = new ($d_O.r().r().r().r().r().C)(1);
    a$4.a[0] = x;
    var $x_3 = $m_sci_VectorStatics$().dj;
    var $x_2 = $m_sci_VectorStatics$().bz;
    var $x_1 = $m_sci_VectorStatics$().ap;
    var a$5 = new $ac_O(1);
    a$5.a[0] = elem;
    return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.k) | 0));
  }
});
$p.cJ = (function(elem) {
  if ((this.aT < 32)) {
    var prefix1$56 = $m_sci_VectorStatics$().gq(elem, this.f);
    var len1$53 = ((1 + this.aT) | 0);
    var len12$45 = ((1 + this.aK) | 0);
    var len123$32 = ((1 + this.aB) | 0);
    var len1234$14 = ((1 + this.aj) | 0);
    var length0$59 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(prefix1$56, len1$53, this.aC, len12$45, this.aD, len123$32, this.aE, len1234$14, this.a2, this.a9, this.a8, this.a7, this.j, length0$59);
  } else if ((this.aK < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var prefix2$46 = $m_sci_VectorStatics$().B(this.f, this.aC);
    var len12$46 = ((1 + this.aK) | 0);
    var len123$33 = ((1 + this.aB) | 0);
    var len1234$15 = ((1 + this.aj) | 0);
    var length0$60 = ((1 + this.k) | 0);
    return new $c_sci_Vector5(a, 1, prefix2$46, len12$46, this.aD, len123$33, this.aE, len1234$15, this.a2, this.a9, this.a8, this.a7, this.j, length0$60);
  } else if ((this.aB < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var prefix3$34 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.f, this.aC), this.aD);
    var len123$34 = ((1 + this.aB) | 0);
    var len1234$16 = ((1 + this.aj) | 0);
    var length0$61 = ((1 + this.k) | 0);
    var prefix4$16 = this.aE;
    var data5$16 = this.a2;
    var suffix4$15 = this.a9;
    var suffix3$32 = this.a8;
    var suffix2$44 = this.a7;
    var suffix1$61 = this.j;
    return new $c_sci_Vector5(a$1, 1, $m_sci_VectorStatics$().ap, 1, prefix3$34, len123$34, prefix4$16, len1234$16, data5$16, suffix4$15, suffix3$32, suffix2$44, suffix1$61, length0$61);
  } else if ((this.aj < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var prefix4$17 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.f, this.aC), this.aD), this.aE);
    var len1234$17 = ((1 + this.aj) | 0);
    var length0$62 = ((1 + this.k) | 0);
    var data5$17 = this.a2;
    var suffix4$16 = this.a9;
    var suffix3$33 = this.a8;
    var suffix2$45 = this.a7;
    var suffix1$62 = this.j;
    return new $c_sci_Vector5(a$2, 1, $m_sci_VectorStatics$().ap, 1, $m_sci_VectorStatics$().bz, 1, prefix4$17, len1234$17, data5$17, suffix4$16, suffix3$33, suffix2$45, suffix1$62, length0$62);
  } else if ((this.a2.a.length < 30)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var data5$18 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.f, this.aC), this.aD), this.aE), this.a2);
    var length0$63 = ((1 + this.k) | 0);
    var suffix4$17 = this.a9;
    var suffix3$34 = this.a8;
    var suffix2$46 = this.a7;
    var suffix1$63 = this.j;
    return new $c_sci_Vector5(a$3, 1, $m_sci_VectorStatics$().ap, 1, $m_sci_VectorStatics$().bz, 1, $m_sci_VectorStatics$().dj, 1, data5$18, suffix4$17, suffix3$34, suffix2$46, suffix1$63, length0$63);
  } else {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var $x_3 = $m_sci_VectorStatics$().ap;
    var $x_2 = $m_sci_VectorStatics$().bz;
    var $x_1 = $m_sci_VectorStatics$().dj;
    var x = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.f, this.aC), this.aD), this.aE);
    var a$5 = new ($d_O.r().r().r().r().r().C)(1);
    a$5.a[0] = x;
    return new $c_sci_Vector6(a$4, 1, $x_3, 1, $x_2, 1, $x_1, 1, a$5, ((1 + this.aj) | 0), $m_sci_VectorStatics$().jT, this.a2, this.a9, this.a8, this.a7, this.j, ((1 + this.k) | 0));
  }
});
$p.dr = (function(f) {
  var prefix1$61 = $m_sci_VectorStatics$().d6(this.f, f);
  var prefix2$47 = $m_sci_VectorStatics$().aI(2, this.aC, f);
  var prefix3$35 = $m_sci_VectorStatics$().aI(3, this.aD, f);
  var prefix4$18 = $m_sci_VectorStatics$().aI(4, this.aE, f);
  var data5$19 = $m_sci_VectorStatics$().aI(5, this.a2, f);
  var suffix4$18 = $m_sci_VectorStatics$().aI(4, this.a9, f);
  var suffix3$35 = $m_sci_VectorStatics$().aI(3, this.a8, f);
  var suffix2$47 = $m_sci_VectorStatics$().aI(2, this.a7, f);
  var suffix1$64 = $m_sci_VectorStatics$().d6(this.j, f);
  return new $c_sci_Vector5(prefix1$61, this.aT, prefix2$47, this.aK, prefix3$35, this.aB, prefix4$18, this.aj, data5$19, suffix4$18, suffix3$35, suffix2$47, suffix1$64, this.k);
});
$p.dY = (function() {
  return 9;
});
$p.dX = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.aC;
      break;
    }
    case 2: {
      return this.aD;
      break;
    }
    case 3: {
      return this.aE;
      break;
    }
    case 4: {
      return this.a2;
      break;
    }
    case 5: {
      return this.a9;
      break;
    }
    case 6: {
      return this.a8;
      break;
    }
    case 7: {
      return this.a7;
      break;
    }
    case 8: {
      return this.j;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.d = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.aj) | 0);
    if ((io >= 0)) {
      var i5 = ((io >>> 20) | 0);
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i5 < this.a2.a.length) ? this.a2.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.a9.a.length) ? this.a9.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.a8.a.length) ? this.a8.a[i3].a[i2].a[i1] : ((i2 < this.a7.a.length) ? this.a7.a[i2].a[i1] : this.j.a[i1]))));
    } else if ((index >= this.aB)) {
      var io$2 = ((index - this.aB) | 0);
      return this.aE.a[((io$2 >>> 15) | 0)].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.aK)) {
      var io$3 = ((index - this.aK) | 0);
      return this.aD.a[((io$3 >>> 10) | 0)].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.aT)) {
      var io$4 = ((index - this.aT) | 0);
      return this.aC.a[((io$4 >>> 5) | 0)].a[(31 & io$4)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.bq = (function(elem) {
  return this.cJ(elem);
});
$p.aw = (function(f) {
  return this.dr(f);
});
var $d_sci_Vector5 = new $TypeData().i($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
  gj: 1,
  an: 1,
  ao: 1,
  ag: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a: 1,
  W: 1
}));
/** @constructor */
function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
  this.f = null;
  this.j = null;
  this.k = 0;
  this.aF = 0;
  this.al = null;
  this.as = 0;
  this.am = null;
  this.ak = 0;
  this.an = null;
  this.af = 0;
  this.ao = null;
  this.ag = 0;
  this.U = null;
  this.a0 = null;
  this.Z = null;
  this.Y = null;
  this.X = null;
  this.aF = len1;
  this.al = prefix2;
  this.as = len12;
  this.am = prefix3;
  this.ak = len123;
  this.an = prefix4;
  this.af = len1234;
  this.ao = prefix5;
  this.ag = len12345;
  this.U = data6;
  this.a0 = suffix5;
  this.Z = suffix4;
  this.Y = suffix3;
  this.X = suffix2;
  $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
}
$p = $c_sci_Vector6.prototype = new $h_sci_BigVector();
$p.constructor = $c_sci_Vector6;
/** @constructor */
function $h_sci_Vector6() {
}
$h_sci_Vector6.prototype = $p;
$p.r = (function(index) {
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.ag) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.U.a.length) ? this.U.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a0.a.length) ? this.a0.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.Z.a.length) ? this.Z.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.Y.a.length) ? this.Y.a[i3].a[i2].a[i1] : ((i2 < this.X.a.length) ? this.X.a[i2].a[i1] : this.j.a[i1])))));
    } else if ((index >= this.af)) {
      var io$2 = ((index - this.af) | 0);
      return this.ao.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ak)) {
      var io$3 = ((index - this.ak) | 0);
      return this.an.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.as)) {
      var io$4 = ((index - this.as) | 0);
      return this.am.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.aF)) {
      var io$5 = ((index - this.aF) | 0);
      return this.al.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.ep = (function(index, elem) {
  if (((index >= 0) && (index < this.k))) {
    if ((index >= this.ag)) {
      var io = ((index - this.ag) | 0);
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      if ((i6 < this.U.a.length)) {
        var a6 = this.U;
        var a6c = a6.h();
        var a5 = a6c.a[i6];
        var a5c = a5.h();
        var a4 = a5c.a[i5];
        var a4c = a4.h();
        var a3 = a4c.a[i4];
        var a3c = a3.h();
        var a2 = a3c.a[i3];
        var a2c = a2.h();
        var a1 = a2c.a[i2];
        var a1c = a1.h();
        a1c.a[i1] = elem;
        a2c.a[i2] = a1c;
        a3c.a[i3] = a2c;
        a4c.a[i4] = a3c;
        a5c.a[i5] = a4c;
        a6c.a[i6] = a5c;
        return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, this.am, this.ak, this.an, this.af, this.ao, this.ag, a6c, this.a0, this.Z, this.Y, this.X, this.j, this.k);
      } else if ((i5 < this.a0.a.length)) {
        var a5$1 = this.a0;
        var a5c$1 = a5$1.h();
        var a4$1 = a5c$1.a[i5];
        var a4c$1 = a4$1.h();
        var a3$1 = a4c$1.a[i4];
        var a3c$1 = a3$1.h();
        var a2$1 = a3c$1.a[i3];
        var a2c$1 = a2$1.h();
        var a1$1 = a2c$1.a[i2];
        var a1c$1 = a1$1.h();
        a1c$1.a[i1] = elem;
        a2c$1.a[i2] = a1c$1;
        a3c$1.a[i3] = a2c$1;
        a4c$1.a[i4] = a3c$1;
        a5c$1.a[i5] = a4c$1;
        return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, this.am, this.ak, this.an, this.af, this.ao, this.ag, this.U, a5c$1, this.Z, this.Y, this.X, this.j, this.k);
      } else if ((i4 < this.Z.a.length)) {
        var a4$2 = this.Z;
        var a4c$2 = a4$2.h();
        var a3$2 = a4c$2.a[i4];
        var a3c$2 = a3$2.h();
        var a2$2 = a3c$2.a[i3];
        var a2c$2 = a2$2.h();
        var a1$2 = a2c$2.a[i2];
        var a1c$2 = a1$2.h();
        a1c$2.a[i1] = elem;
        a2c$2.a[i2] = a1c$2;
        a3c$2.a[i3] = a2c$2;
        a4c$2.a[i4] = a3c$2;
        return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, this.am, this.ak, this.an, this.af, this.ao, this.ag, this.U, this.a0, a4c$2, this.Y, this.X, this.j, this.k);
      } else if ((i3 < this.Y.a.length)) {
        var a3$3 = this.Y;
        var a3c$3 = a3$3.h();
        var a2$3 = a3c$3.a[i3];
        var a2c$3 = a2$3.h();
        var a1$3 = a2c$3.a[i2];
        var a1c$3 = a1$3.h();
        a1c$3.a[i1] = elem;
        a2c$3.a[i2] = a1c$3;
        a3c$3.a[i3] = a2c$3;
        return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, this.am, this.ak, this.an, this.af, this.ao, this.ag, this.U, this.a0, this.Z, a3c$3, this.X, this.j, this.k);
      } else if ((i2 < this.X.a.length)) {
        var a2$4 = this.X;
        var a2c$4 = a2$4.h();
        var a1$4 = a2c$4.a[i2];
        var a1c$4 = a1$4.h();
        a1c$4.a[i1] = elem;
        a2c$4.a[i2] = a1c$4;
        return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, this.am, this.ak, this.an, this.af, this.ao, this.ag, this.U, this.a0, this.Z, this.Y, a2c$4, this.j, this.k);
      } else {
        var a1$5 = this.j;
        var a1c$5 = a1$5.h();
        a1c$5.a[i1] = elem;
        return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, this.am, this.ak, this.an, this.af, this.ao, this.ag, this.U, this.a0, this.Z, this.Y, this.X, a1c$5, this.k);
      }
    } else if ((index >= this.af)) {
      var io$2 = ((index - this.af) | 0);
      var a5$2 = this.ao;
      var idx5 = ((io$2 >>> 20) | 0);
      var idx4 = (31 & ((io$2 >>> 15) | 0));
      var idx3 = (31 & ((io$2 >>> 10) | 0));
      var idx2 = (31 & ((io$2 >>> 5) | 0));
      var idx1 = (31 & io$2);
      var a5c$2 = a5$2.h();
      var a4$3 = a5c$2.a[idx5];
      var a4c$3 = a4$3.h();
      var a3$4 = a4c$3.a[idx4];
      var a3c$4 = a3$4.h();
      var a2$5 = a3c$4.a[idx3];
      var a2c$5 = a2$5.h();
      var a1$6 = a2c$5.a[idx2];
      var a1c$6 = a1$6.h();
      a1c$6.a[idx1] = elem;
      a2c$5.a[idx2] = a1c$6;
      a3c$4.a[idx3] = a2c$5;
      a4c$3.a[idx4] = a3c$4;
      a5c$2.a[idx5] = a4c$3;
      return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, this.am, this.ak, this.an, this.af, a5c$2, this.ag, this.U, this.a0, this.Z, this.Y, this.X, this.j, this.k);
    } else if ((index >= this.ak)) {
      var io$3 = ((index - this.ak) | 0);
      var a4$4 = this.an;
      var idx4$1 = ((io$3 >>> 15) | 0);
      var idx3$1 = (31 & ((io$3 >>> 10) | 0));
      var idx2$1 = (31 & ((io$3 >>> 5) | 0));
      var idx1$1 = (31 & io$3);
      var a4c$4 = a4$4.h();
      var a3$5 = a4c$4.a[idx4$1];
      var a3c$5 = a3$5.h();
      var a2$6 = a3c$5.a[idx3$1];
      var a2c$6 = a2$6.h();
      var a1$7 = a2c$6.a[idx2$1];
      var a1c$7 = a1$7.h();
      a1c$7.a[idx1$1] = elem;
      a2c$6.a[idx2$1] = a1c$7;
      a3c$5.a[idx3$1] = a2c$6;
      a4c$4.a[idx4$1] = a3c$5;
      return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, this.am, this.ak, a4c$4, this.af, this.ao, this.ag, this.U, this.a0, this.Z, this.Y, this.X, this.j, this.k);
    } else if ((index >= this.as)) {
      var io$4 = ((index - this.as) | 0);
      var a3$6 = this.am;
      var idx3$2 = ((io$4 >>> 10) | 0);
      var idx2$2 = (31 & ((io$4 >>> 5) | 0));
      var idx1$2 = (31 & io$4);
      var a3c$6 = a3$6.h();
      var a2$7 = a3c$6.a[idx3$2];
      var a2c$7 = a2$7.h();
      var a1$8 = a2c$7.a[idx2$2];
      var a1c$8 = a1$8.h();
      a1c$8.a[idx1$2] = elem;
      a2c$7.a[idx2$2] = a1c$8;
      a3c$6.a[idx3$2] = a2c$7;
      return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, a3c$6, this.ak, this.an, this.af, this.ao, this.ag, this.U, this.a0, this.Z, this.Y, this.X, this.j, this.k);
    } else if ((index >= this.aF)) {
      var io$5 = ((index - this.aF) | 0);
      var a2$8 = this.al;
      var idx2$3 = ((io$5 >>> 5) | 0);
      var idx1$3 = (31 & io$5);
      var a2c$8 = a2$8.h();
      var a1$9 = a2c$8.a[idx2$3];
      var a1c$9 = a1$9.h();
      a1c$9.a[idx1$3] = elem;
      a2c$8.a[idx2$3] = a1c$9;
      return new $c_sci_Vector6(this.f, this.aF, a2c$8, this.as, this.am, this.ak, this.an, this.af, this.ao, this.ag, this.U, this.a0, this.Z, this.Y, this.X, this.j, this.k);
    } else {
      var a1$10 = this.f;
      var a1c$10 = a1$10.h();
      a1c$10.a[index] = elem;
      return new $c_sci_Vector6(a1c$10, this.aF, this.al, this.as, this.am, this.ak, this.an, this.af, this.ao, this.ag, this.U, this.a0, this.Z, this.Y, this.X, this.j, this.k);
    }
  } else {
    throw this.bi(index);
  }
});
$p.dL = (function(elem) {
  if ((this.j.a.length < 32)) {
    var suffix1$79 = $m_sci_VectorStatics$().gp(this.j, elem);
    var length0$79 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, this.am, this.ak, this.an, this.af, this.ao, this.ag, this.U, this.a0, this.Z, this.Y, this.X, suffix1$79, length0$79);
  } else if ((this.X.a.length < 31)) {
    var suffix2$63 = $m_sci_VectorStatics$().F(this.X, this.j);
    var a = new $ac_O(1);
    a.a[0] = elem;
    var length0$80 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, this.am, this.ak, this.an, this.af, this.ao, this.ag, this.U, this.a0, this.Z, this.Y, suffix2$63, a, length0$80);
  } else if ((this.Y.a.length < 31)) {
    var suffix3$52 = $m_sci_VectorStatics$().F(this.Y, $m_sci_VectorStatics$().F(this.X, this.j));
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var length0$81 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, this.am, this.ak, this.an, this.af, this.ao, this.ag, this.U, this.a0, this.Z, suffix3$52, $m_sci_VectorStatics$().ap, a$1, length0$81);
  } else if ((this.Z.a.length < 31)) {
    var suffix4$36 = $m_sci_VectorStatics$().F(this.Z, $m_sci_VectorStatics$().F(this.Y, $m_sci_VectorStatics$().F(this.X, this.j)));
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var length0$82 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, this.am, this.ak, this.an, this.af, this.ao, this.ag, this.U, this.a0, suffix4$36, $m_sci_VectorStatics$().bz, $m_sci_VectorStatics$().ap, a$2, length0$82);
  } else if ((this.a0.a.length < 31)) {
    var suffix5$15 = $m_sci_VectorStatics$().F(this.a0, $m_sci_VectorStatics$().F(this.Z, $m_sci_VectorStatics$().F(this.Y, $m_sci_VectorStatics$().F(this.X, this.j))));
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var length0$83 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, this.am, this.ak, this.an, this.af, this.ao, this.ag, this.U, suffix5$15, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bz, $m_sci_VectorStatics$().ap, a$3, length0$83);
  } else if ((this.U.a.length < 62)) {
    var data6$16 = $m_sci_VectorStatics$().F(this.U, $m_sci_VectorStatics$().F(this.a0, $m_sci_VectorStatics$().F(this.Z, $m_sci_VectorStatics$().F(this.Y, $m_sci_VectorStatics$().F(this.X, this.j)))));
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var length0$84 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(this.f, this.aF, this.al, this.as, this.am, this.ak, this.an, this.af, this.ao, this.ag, data6$16, $m_sci_VectorStatics$().h7, $m_sci_VectorStatics$().dj, $m_sci_VectorStatics$().bz, $m_sci_VectorStatics$().ap, a$4, length0$84);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.cJ = (function(elem) {
  if ((this.aF < 32)) {
    var prefix1$81 = $m_sci_VectorStatics$().gq(elem, this.f);
    var len1$75 = ((1 + this.aF) | 0);
    var len12$68 = ((1 + this.as) | 0);
    var len123$56 = ((1 + this.ak) | 0);
    var len1234$39 = ((1 + this.af) | 0);
    var len12345$17 = ((1 + this.ag) | 0);
    var length0$85 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(prefix1$81, len1$75, this.al, len12$68, this.am, len123$56, this.an, len1234$39, this.ao, len12345$17, this.U, this.a0, this.Z, this.Y, this.X, this.j, length0$85);
  } else if ((this.as < 1024)) {
    var a = new $ac_O(1);
    a.a[0] = elem;
    var prefix2$69 = $m_sci_VectorStatics$().B(this.f, this.al);
    var len12$69 = ((1 + this.as) | 0);
    var len123$57 = ((1 + this.ak) | 0);
    var len1234$40 = ((1 + this.af) | 0);
    var len12345$18 = ((1 + this.ag) | 0);
    var length0$86 = ((1 + this.k) | 0);
    return new $c_sci_Vector6(a, 1, prefix2$69, len12$69, this.am, len123$57, this.an, len1234$40, this.ao, len12345$18, this.U, this.a0, this.Z, this.Y, this.X, this.j, length0$86);
  } else if ((this.ak < 32768)) {
    var a$1 = new $ac_O(1);
    a$1.a[0] = elem;
    var prefix3$58 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.f, this.al), this.am);
    var len123$58 = ((1 + this.ak) | 0);
    var len1234$41 = ((1 + this.af) | 0);
    var len12345$19 = ((1 + this.ag) | 0);
    var length0$87 = ((1 + this.k) | 0);
    var prefix4$41 = this.an;
    var prefix5$19 = this.ao;
    var data6$19 = this.U;
    var suffix5$18 = this.a0;
    var suffix4$39 = this.Z;
    var suffix3$55 = this.Y;
    var suffix2$66 = this.X;
    var suffix1$87 = this.j;
    return new $c_sci_Vector6(a$1, 1, $m_sci_VectorStatics$().ap, 1, prefix3$58, len123$58, prefix4$41, len1234$41, prefix5$19, len12345$19, data6$19, suffix5$18, suffix4$39, suffix3$55, suffix2$66, suffix1$87, length0$87);
  } else if ((this.af < 1048576)) {
    var a$2 = new $ac_O(1);
    a$2.a[0] = elem;
    var prefix4$42 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.f, this.al), this.am), this.an);
    var len1234$42 = ((1 + this.af) | 0);
    var len12345$20 = ((1 + this.ag) | 0);
    var length0$88 = ((1 + this.k) | 0);
    var prefix5$20 = this.ao;
    var data6$20 = this.U;
    var suffix5$19 = this.a0;
    var suffix4$40 = this.Z;
    var suffix3$56 = this.Y;
    var suffix2$67 = this.X;
    var suffix1$88 = this.j;
    return new $c_sci_Vector6(a$2, 1, $m_sci_VectorStatics$().ap, 1, $m_sci_VectorStatics$().bz, 1, prefix4$42, len1234$42, prefix5$20, len12345$20, data6$20, suffix5$19, suffix4$40, suffix3$56, suffix2$67, suffix1$88, length0$88);
  } else if ((this.ag < 33554432)) {
    var a$3 = new $ac_O(1);
    a$3.a[0] = elem;
    var prefix5$21 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.f, this.al), this.am), this.an), this.ao);
    var len12345$21 = ((1 + this.ag) | 0);
    var length0$89 = ((1 + this.k) | 0);
    var data6$21 = this.U;
    var suffix5$20 = this.a0;
    var suffix4$41 = this.Z;
    var suffix3$57 = this.Y;
    var suffix2$68 = this.X;
    var suffix1$89 = this.j;
    return new $c_sci_Vector6(a$3, 1, $m_sci_VectorStatics$().ap, 1, $m_sci_VectorStatics$().bz, 1, $m_sci_VectorStatics$().dj, 1, prefix5$21, len12345$21, data6$21, suffix5$20, suffix4$41, suffix3$57, suffix2$68, suffix1$89, length0$89);
  } else if ((this.U.a.length < 62)) {
    var a$4 = new $ac_O(1);
    a$4.a[0] = elem;
    var data6$22 = $m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B($m_sci_VectorStatics$().B(this.f, this.al), this.am), this.an), this.ao), this.U);
    var length0$90 = ((1 + this.k) | 0);
    var suffix5$21 = this.a0;
    var suffix4$42 = this.Z;
    var suffix3$58 = this.Y;
    var suffix2$69 = this.X;
    var suffix1$90 = this.j;
    return new $c_sci_Vector6(a$4, 1, $m_sci_VectorStatics$().ap, 1, $m_sci_VectorStatics$().bz, 1, $m_sci_VectorStatics$().dj, 1, $m_sci_VectorStatics$().h7, 1, data6$22, suffix5$21, suffix4$42, suffix3$58, suffix2$69, suffix1$90, length0$90);
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
});
$p.dr = (function(f) {
  var prefix1$87 = $m_sci_VectorStatics$().d6(this.f, f);
  var prefix2$70 = $m_sci_VectorStatics$().aI(2, this.al, f);
  var prefix3$59 = $m_sci_VectorStatics$().aI(3, this.am, f);
  var prefix4$43 = $m_sci_VectorStatics$().aI(4, this.an, f);
  var prefix5$22 = $m_sci_VectorStatics$().aI(5, this.ao, f);
  var data6$23 = $m_sci_VectorStatics$().aI(6, this.U, f);
  var suffix5$22 = $m_sci_VectorStatics$().aI(5, this.a0, f);
  var suffix4$43 = $m_sci_VectorStatics$().aI(4, this.Z, f);
  var suffix3$59 = $m_sci_VectorStatics$().aI(3, this.Y, f);
  var suffix2$70 = $m_sci_VectorStatics$().aI(2, this.X, f);
  var suffix1$91 = $m_sci_VectorStatics$().d6(this.j, f);
  return new $c_sci_Vector6(prefix1$87, this.aF, prefix2$70, this.as, prefix3$59, this.ak, prefix4$43, this.af, prefix5$22, this.ag, data6$23, suffix5$22, suffix4$43, suffix3$59, suffix2$70, suffix1$91, this.k);
});
$p.dY = (function() {
  return 11;
});
$p.dX = (function(idx) {
  switch (idx) {
    case 0: {
      return this.f;
      break;
    }
    case 1: {
      return this.al;
      break;
    }
    case 2: {
      return this.am;
      break;
    }
    case 3: {
      return this.an;
      break;
    }
    case 4: {
      return this.ao;
      break;
    }
    case 5: {
      return this.U;
      break;
    }
    case 6: {
      return this.a0;
      break;
    }
    case 7: {
      return this.Z;
      break;
    }
    case 8: {
      return this.Y;
      break;
    }
    case 9: {
      return this.X;
      break;
    }
    case 10: {
      return this.j;
      break;
    }
    default: {
      throw new $c_s_MatchError(idx);
    }
  }
});
$p.d = (function(v1) {
  var index = (v1 | 0);
  if (((index >= 0) && (index < this.k))) {
    var io = ((index - this.ag) | 0);
    if ((io >= 0)) {
      var i6 = ((io >>> 25) | 0);
      var i5 = (31 & ((io >>> 20) | 0));
      var i4 = (31 & ((io >>> 15) | 0));
      var i3 = (31 & ((io >>> 10) | 0));
      var i2 = (31 & ((io >>> 5) | 0));
      var i1 = (31 & io);
      return ((i6 < this.U.a.length) ? this.U.a[i6].a[i5].a[i4].a[i3].a[i2].a[i1] : ((i5 < this.a0.a.length) ? this.a0.a[i5].a[i4].a[i3].a[i2].a[i1] : ((i4 < this.Z.a.length) ? this.Z.a[i4].a[i3].a[i2].a[i1] : ((i3 < this.Y.a.length) ? this.Y.a[i3].a[i2].a[i1] : ((i2 < this.X.a.length) ? this.X.a[i2].a[i1] : this.j.a[i1])))));
    } else if ((index >= this.af)) {
      var io$2 = ((index - this.af) | 0);
      return this.ao.a[((io$2 >>> 20) | 0)].a[(31 & ((io$2 >>> 15) | 0))].a[(31 & ((io$2 >>> 10) | 0))].a[(31 & ((io$2 >>> 5) | 0))].a[(31 & io$2)];
    } else if ((index >= this.ak)) {
      var io$3 = ((index - this.ak) | 0);
      return this.an.a[((io$3 >>> 15) | 0)].a[(31 & ((io$3 >>> 10) | 0))].a[(31 & ((io$3 >>> 5) | 0))].a[(31 & io$3)];
    } else if ((index >= this.as)) {
      var io$4 = ((index - this.as) | 0);
      return this.am.a[((io$4 >>> 10) | 0)].a[(31 & ((io$4 >>> 5) | 0))].a[(31 & io$4)];
    } else if ((index >= this.aF)) {
      var io$5 = ((index - this.aF) | 0);
      return this.al.a[((io$5 >>> 5) | 0)].a[(31 & io$5)];
    } else {
      return this.f.a[index];
    }
  } else {
    throw this.bi(index);
  }
});
$p.bq = (function(elem) {
  return this.cJ(elem);
});
$p.aw = (function(f) {
  return this.dr(f);
});
var $d_sci_Vector6 = new $TypeData().i($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
  gk: 1,
  an: 1,
  ao: 1,
  ag: 1,
  x: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  q: 1,
  w: 1,
  u: 1,
  o: 1,
  s: 1,
  G: 1,
  y: 1,
  l: 1,
  t: 1,
  E: 1,
  a: 1,
  W: 1
}));
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.bD = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.bD = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.aU = (function(elems) {
  return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
});
$p.aO = (function(size) {
});
$p.c = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bj = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.d7 = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.aw = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aH = (function(len) {
  var x = this.bD.l();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.bl = (function() {
  return "IndexedSeq";
});
$p.cq = (function() {
  return $ct_scm_GrowableBuilder__scm_Growable__(new $c_scm_GrowableBuilder(), $ct_scm_StringBuilder__(new $c_scm_StringBuilder()));
});
$p.l = (function() {
  return this.bD.l();
});
$p.q = (function() {
  return this.bD.l();
});
$p.py = (function(x) {
  var this$1 = this.bD;
  var str = ("" + $cToS(x));
  this$1.w = (this$1.w + str);
  return this;
});
$p.v = (function() {
  return this.bD.w;
});
$p.nt = (function(xs) {
  if ((xs instanceof $c_sci_WrappedString)) {
    var this$3 = this.bD;
    var str = xs.bY;
    this$3.w = (("" + this$3.w) + str);
  } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
    this.bD.ns(xs.cC);
  } else if ((xs instanceof $c_scm_StringBuilder)) {
    var this$4 = this.bD;
    var s = xs.bD;
    this$4.w = (("" + this$4.w) + s);
  } else {
    var ks = xs.q();
    if ((ks !== 0)) {
      var b = this.bD;
      if ((ks > 0)) {
        b.l();
      }
      var it = xs.c();
      while (it.i()) {
        var c = $uC(it.e());
        var str$1 = ("" + $cToS(c));
        b.w = (b.w + str$1);
      }
    }
  }
  return this;
});
$p.g = (function() {
  return (this.bD.l() === 0);
});
$p.r = (function(i) {
  return $bC(this.bD.nz(i));
});
$p.d = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.bD.nz(i));
});
$p.fC = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).nt(coll);
});
$p.el = (function(coll) {
  return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).nt(coll);
});
$p.ac = (function(elem) {
  return this.py($uC(elem));
});
$p.aN = (function() {
  return this.bD.w;
});
$p.aG = (function() {
  return $m_scm_IndexedSeq$();
});
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cK)));
}
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cK: 1,
  Q: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  M: 1,
  B: 1,
  L: 1,
  S: 1,
  R: 1,
  z: 1,
  A: 1,
  F: 1,
  a7: 1,
  o: 1,
  s: 1,
  Y: 1,
  X: 1,
  aP: 1,
  a: 1
}));
function $isArrayOf_scm_LinkedHashMap(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.gS)));
}
function $p_scm_ListBuffer__copyElems__V($thiz) {
  var buf = new $c_scm_ListBuffer().j6($thiz);
  $thiz.d1 = buf.d1;
  $thiz.eg = buf.eg;
  $thiz.iw = false;
}
function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
  $thiz.ix = ((1 + $thiz.ix) | 0);
  if ($thiz.iw) {
    $p_scm_ListBuffer__copyElems__V($thiz);
  }
}
/** @constructor */
function $c_scm_ListBuffer() {
  this.ix = 0;
  this.d1 = null;
  this.eg = null;
  this.iw = false;
  this.d2 = 0;
  this.ix = 0;
  this.d1 = $m_sci_Nil$();
  this.eg = null;
  this.iw = false;
  this.d2 = 0;
}
$p = $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ListBuffer;
/** @constructor */
function $h_scm_ListBuffer() {
}
$h_scm_ListBuffer.prototype = $p;
$p.cb = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.aO = (function(size) {
});
$p.c = (function() {
  return new $c_scm_MutationTracker$CheckedIterator(this.d1.c(), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.ix)));
});
$p.en = (function() {
  return $m_scm_ListBuffer$();
});
$p.r = (function(i) {
  return $f_sc_LinearSeqOps__apply__I__O(this.d1, i);
});
$p.l = (function() {
  return this.d2;
});
$p.q = (function() {
  return this.d2;
});
$p.g = (function() {
  return (this.d2 === 0);
});
$p.c1 = (function() {
  this.iw = (!this.g());
  return this.d1;
});
$p.gn = (function(elem) {
  $p_scm_ListBuffer__ensureUnaliased__V(this);
  var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
  if ((this.d2 === 0)) {
    this.d1 = last1;
  } else {
    var x$proxy2 = this.eg;
    if ((x$proxy2 === null)) {
      $m_sr_Scala3RunTime$().bp();
    }
    x$proxy2.M = last1;
  }
  this.eg = last1;
  this.d2 = ((1 + this.d2) | 0);
  return this;
});
$p.j6 = (function(xs) {
  var it = xs.c();
  if (it.i()) {
    var len = 1;
    var last0 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
    this.d1 = last0;
    while (it.i()) {
      var last1 = new $c_sci_$colon$colon(it.e(), $m_sci_Nil$());
      last0.M = last1;
      last0 = last1;
      len = ((1 + len) | 0);
    }
    this.d2 = len;
    this.eg = last0;
  }
  return this;
});
$p.ps = (function(xs) {
  var it = xs.c();
  if (it.i()) {
    var fresh = new $c_scm_ListBuffer().j6(it);
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    if ((this.d2 === 0)) {
      this.d1 = fresh.d1;
    } else {
      var x$proxy3 = this.eg;
      if ((x$proxy3 === null)) {
        $m_sr_Scala3RunTime$().bp();
      }
      x$proxy3.M = fresh.d1;
    }
    this.eg = fresh.eg;
    this.d2 = ((this.d2 + fresh.d2) | 0);
  }
  return this;
});
$p.bl = (function() {
  return "ListBuffer";
});
$p.aG = (function() {
  return $m_scm_ListBuffer$();
});
$p.d = (function(v1) {
  var i = (v1 | 0);
  return $f_sc_LinearSeqOps__apply__I__O(this.d1, i);
});
$p.aN = (function() {
  return this.c1();
});
$p.ac = (function(elem) {
  return this.gn(elem);
});
$p.aU = (function(elems) {
  return this.ps(elems);
});
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cI)));
}
var $d_scm_ListBuffer = new $TypeData().i($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
  cI: 1,
  b2: 1,
  Q: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  M: 1,
  B: 1,
  L: 1,
  S: 1,
  R: 1,
  z: 1,
  A: 1,
  ax: 1,
  b3: 1,
  l: 1,
  t: 1,
  F: 1,
  a7: 1,
  a: 1,
  W: 1
}));
function $ct_scm_ArrayBuffer__AO__I__($thiz, initialElements, initialSize) {
  $thiz.gh = 0;
  $thiz.dH = initialElements;
  $thiz.bA = initialSize;
  return $thiz;
}
function $ct_scm_ArrayBuffer__($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, new $ac_O(16), 0);
  return $thiz;
}
function $p_scm_ArrayBuffer__foldl__I__I__O__F2__O($thiz, start, end, z, op) {
  var z$tailLocal1 = z;
  var start$tailLocal1 = start;
  while (true) {
    if ((start$tailLocal1 === end)) {
      return z$tailLocal1;
    } else {
      var start$tailLocal1$tmp1 = ((1 + start$tailLocal1) | 0);
      var z$tailLocal1$tmp1 = op.ca(z$tailLocal1, $thiz.dH.a[start$tailLocal1]);
      start$tailLocal1 = start$tailLocal1$tmp1;
      z$tailLocal1 = z$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_scm_ArrayBuffer() {
  this.gh = 0;
  this.dH = null;
  this.bA = 0;
}
$p = $c_scm_ArrayBuffer.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_scm_ArrayBuffer;
/** @constructor */
function $h_scm_ArrayBuffer() {
}
$h_scm_ArrayBuffer.prototype = $p;
$p.c = (function() {
  return this.oT().c();
});
$p.bj = (function() {
  return this.oT().bj();
});
$p.d7 = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aH = (function(len) {
  var x = this.bA;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.aw = (function(f) {
  return $f_sc_StrictOptimizedIterableOps__map__F1__O(this, f);
});
$p.cb = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.q = (function() {
  return this.bA;
});
$p.ku = (function(n) {
  this.dH = $m_scm_ArrayBuffer$().ot(this.dH, this.bA, n);
});
$p.aO = (function(size) {
  if (((size > this.bA) && (size >= 1))) {
    this.ku(size);
  }
});
$p.r = (function(n) {
  var hi = ((1 + n) | 0);
  if ((n < 0)) {
    throw $m_scg_CommonErrors$().kL(n, ((this.bA - 1) | 0));
  }
  if ((hi > this.bA)) {
    throw $m_scg_CommonErrors$().kL(((hi - 1) | 0), ((this.bA - 1) | 0));
  }
  return this.dH.a[n];
});
$p.l = (function() {
  return this.bA;
});
$p.oT = (function() {
  return new $c_scm_ArrayBufferView(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => this.gh)));
});
$p.en = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.pE = (function(elem) {
  this.gh = ((1 + this.gh) | 0);
  var newSize = ((1 + this.bA) | 0);
  if ((this.dH.a.length <= ((newSize - 1) | 0))) {
    this.ku(newSize);
  }
  this.bA = newSize;
  this.dH.a[((newSize - 1) | 0)] = elem;
  return this;
});
$p.nn = (function(elems) {
  if ((elems instanceof $c_scm_ArrayBuffer)) {
    var elemsLength = elems.bA;
    if ((elemsLength > 0)) {
      this.gh = ((1 + this.gh) | 0);
      this.ku(((this.bA + elemsLength) | 0));
      $m_s_Array$().bT(elems.dH, 0, this.dH, this.bA, elemsLength);
      this.bA = ((this.bA + elemsLength) | 0);
    }
  } else {
    $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
  }
  return this;
});
$p.bl = (function() {
  return "ArrayBuffer";
});
$p.bh = (function(xs, start, len) {
  var srcLen = this.bA;
  var destLen = $m_jl_reflect_Array$().b9(xs);
  var limit = ((len < srcLen) ? len : srcLen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var copied = ((total < 0) ? 0 : total);
  if ((copied > 0)) {
    $m_s_Array$().bT(this.dH, 0, xs, start, copied);
  }
  return copied;
});
$p.d5 = (function(z, op) {
  return $p_scm_ArrayBuffer__foldl__I__I__O__F2__O(this, 0, this.bA, z, op);
});
$p.d = (function(v1) {
  return this.r((v1 | 0));
});
$p.aG = (function() {
  return $m_scm_ArrayBuffer$();
});
$p.ac = (function(elem) {
  return this.pE(elem);
});
$p.aU = (function(elems) {
  return this.nn(elems);
});
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cu)));
}
var $d_scm_ArrayBuffer = new $TypeData().i($c_scm_ArrayBuffer, "scala.collection.mutable.ArrayBuffer", ({
  cu: 1,
  b2: 1,
  Q: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  M: 1,
  B: 1,
  L: 1,
  S: 1,
  R: 1,
  z: 1,
  A: 1,
  ax: 1,
  b3: 1,
  o: 1,
  s: 1,
  Y: 1,
  X: 1,
  cH: 1,
  l: 1,
  t: 1,
  a: 1,
  W: 1
}));
function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
  $thiz.ei = array;
  return $thiz;
}
function $ct_sjs_js_WrappedArray__($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz;
}
/** @constructor */
function $c_sjs_js_WrappedArray() {
  this.ei = null;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.aO = (function(size) {
});
$p.bl = (function() {
  return "IndexedSeq";
});
$p.c = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.bj = (function() {
  return $ct_sc_IndexedSeqView$IndexedSeqViewReverseIterator__sc_IndexedSeqView__(new $c_sc_IndexedSeqView$IndexedSeqViewReverseIterator(), new $c_sc_IndexedSeqView$Id(this));
});
$p.d7 = (function() {
  return new $c_sc_IndexedSeqView$Reverse(this);
});
$p.aw = (function(f) {
  return $f_sc_IndexedSeqOps__map__F1__O(this, f);
});
$p.m = (function() {
  return $f_sc_IndexedSeqOps__head__O(this);
});
$p.aH = (function(len) {
  var x = (this.ei.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.cb = (function(f) {
  return $f_sc_StrictOptimizedSeqOps__distinctBy__F1__O(this, f);
});
$p.en = (function() {
  return $m_sjs_js_WrappedArray$();
});
$p.r = (function(index) {
  return this.ei[index];
});
$p.l = (function() {
  return (this.ei.length | 0);
});
$p.q = (function() {
  return (this.ei.length | 0);
});
$p.bL = (function() {
  return "WrappedArray";
});
$p.aN = (function() {
  return this;
});
$p.ac = (function(elem) {
  this.ei.push(elem);
  return this;
});
$p.d = (function(v1) {
  var index = (v1 | 0);
  return this.ei[index];
});
$p.aG = (function() {
  return $m_sjs_js_WrappedArray$();
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  iy: 1,
  b2: 1,
  Q: 1,
  r: 1,
  i: 1,
  b: 1,
  c: 1,
  g: 1,
  f: 1,
  e: 1,
  h: 1,
  j: 1,
  k: 1,
  d: 1,
  p: 1,
  M: 1,
  B: 1,
  L: 1,
  S: 1,
  R: 1,
  z: 1,
  A: 1,
  ax: 1,
  b3: 1,
  t: 1,
  l: 1,
  X: 1,
  o: 1,
  s: 1,
  Y: 1,
  cH: 1,
  F: 1,
  a: 1
}));
dropdownHandler = (function(arg) {
  $m_Ldotty_tools_scaladoc_DropdownHandler$package$().ql(arg);
});
filterFunction = (function() {
  $m_Ldotty_tools_scaladoc_DropdownHandler$package$().qx();
});
$s_Ldotty_tools_scaladoc_Main__main__AT__V(new ($d_T.r().C)([]));
}).call(this);
//# sourceMappingURL=scaladoc-js-main-opt.js.map
