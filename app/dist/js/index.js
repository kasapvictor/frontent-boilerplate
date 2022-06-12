function p(r, a) {
  var e = typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
  if (!e) {
    if (Array.isArray(r) || (e = k(r)) || a && r && typeof r.length == "number") {
      e && (r = e);
      var i = 0, s = function() {
      };
      return {
        s, n: function() {
          return i >= r.length ? { done: !0 } : { done: !1, value: r[i++] };
        }, e: function(o) {
          throw o;
        }, f: s
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var u = !0, l = !1, n;
  return {
    s: function() {
      e = e.call(r);
    }, n: function() {
      var o = e.next();
      return u = o.done, o;
    }, e: function(o) {
      l = !0, n = o;
    }, f: function() {
      try {
        !u && e.return != null && e.return();
      } finally {
        if (l) throw n;
      }
    }
  };
}

function k(r, a) {
  if (!!r) {
    if (typeof r == "string") return b(r, a);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if (e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set") return Array.from(r);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return b(r, a);
  }
}

function b(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, i = new Array(a); e < a; e++) i[e] = r[e];
  return i;
}

var A = function() {
  var a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  var e = p(document.querySelectorAll("link[rel=\"modulepreload\"]")), i;
  try {
    for (e.s(); !(i = e.n()).done;) {
      var s = i.value;
      l(s);
    }
  } catch (n) {
    e.e(n);
  } finally {
    e.f();
  }
  new MutationObserver(function(n) {
    var t = p(n), o;
    try {
      for (t.s(); !(o = t.n()).done;) {
        var g = o.value;
        if (g.type === "childList") {
          var c = p(g.addedNodes), y;
          try {
            for (c.s(); !(y = c.n()).done;) {
              var f = y.value;
              f.tagName === "LINK" && f.rel === "modulepreload" && l(f);
            }
          } catch (d) {
            c.e(d);
          } finally {
            c.f();
          }
        }
      }
    } catch (d) {
      t.e(d);
    } finally {
      t.f();
    }
  }).observe(document, { childList: !0, subtree: !0 });
  
  function u(n) {
    var t = {};
    return n.integrity && (t.integrity = n.integrity), n.referrerpolicy && (t.referrerPolicy = n.referrerpolicy), n.crossorigin === "use-credentials" ? t.credentials = "include" : n.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
  }
  
  function l(n) {
    if (!n.ep) {
      n.ep = !0;
      var t = u(n);
      fetch(n.href, t);
    }
  }
};
A();
var L = function() {
  return "Hello Answer";
};
console.log("the answer is ".concat(L()));
var m = function(a) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document;
  return e.querySelector(a);
}, v = m("#app");
v && (v.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`);
var h = m("#app1");
h && (h.innerHTML = `
  <h1>Page1</h1>
`);
var w = m("#app2");
w && (w.innerHTML = `
  <h1>Page2</h1>
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3ZpdGUvbW9kdWxlcHJlbG9hZC1wb2x5ZmlsbCIsIi4uLy4uL3NyYy9qcy9hbnN3ZXIudHMiLCIuLi8uLi9zcmMvanMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcCA9IGZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAgIGNvbnN0IHJlbExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJykucmVsTGlzdDtcbiAgICBpZiAocmVsTGlzdCAmJiByZWxMaXN0LnN1cHBvcnRzICYmIHJlbExpc3Quc3VwcG9ydHMoJ21vZHVsZXByZWxvYWQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgbGluayBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cIm1vZHVsZXByZWxvYWRcIl0nKSkge1xuICAgICAgICBwcm9jZXNzUHJlbG9hZChsaW5rKTtcbiAgICB9XG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgIT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbXV0YXRpb24uYWRkZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdMSU5LJyAmJiBub2RlLnJlbCA9PT0gJ21vZHVsZXByZWxvYWQnKVxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzUHJlbG9hZChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pLm9ic2VydmUoZG9jdW1lbnQsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIGZ1bmN0aW9uIGdldEZldGNoT3B0cyhzY3JpcHQpIHtcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRzID0ge307XG4gICAgICAgIGlmIChzY3JpcHQuaW50ZWdyaXR5KVxuICAgICAgICAgICAgZmV0Y2hPcHRzLmludGVncml0eSA9IHNjcmlwdC5pbnRlZ3JpdHk7XG4gICAgICAgIGlmIChzY3JpcHQucmVmZXJyZXJwb2xpY3kpXG4gICAgICAgICAgICBmZXRjaE9wdHMucmVmZXJyZXJQb2xpY3kgPSBzY3JpcHQucmVmZXJyZXJwb2xpY3k7XG4gICAgICAgIGlmIChzY3JpcHQuY3Jvc3NvcmlnaW4gPT09ICd1c2UtY3JlZGVudGlhbHMnKVxuICAgICAgICAgICAgZmV0Y2hPcHRzLmNyZWRlbnRpYWxzID0gJ2luY2x1ZGUnO1xuICAgICAgICBlbHNlIGlmIChzY3JpcHQuY3Jvc3NvcmlnaW4gPT09ICdhbm9ueW1vdXMnKVxuICAgICAgICAgICAgZmV0Y2hPcHRzLmNyZWRlbnRpYWxzID0gJ29taXQnO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBmZXRjaE9wdHMuY3JlZGVudGlhbHMgPSAnc2FtZS1vcmlnaW4nO1xuICAgICAgICByZXR1cm4gZmV0Y2hPcHRzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcm9jZXNzUHJlbG9hZChsaW5rKSB7XG4gICAgICAgIGlmIChsaW5rLmVwKVxuICAgICAgICAgICAgLy8gZXAgbWFya2VyID0gcHJvY2Vzc2VkXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxpbmsuZXAgPSB0cnVlO1xuICAgICAgICAvLyBwcmVwb3B1bGF0ZSB0aGUgbG9hZCByZWNvcmRcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRzID0gZ2V0RmV0Y2hPcHRzKGxpbmspO1xuICAgICAgICBmZXRjaChsaW5rLmhyZWYsIGZldGNoT3B0cyk7XG4gICAgfVxufTtfX1ZJVEVfSVNfTU9ERVJOX18mJnAoKTsiLCJleHBvcnQgY29uc3QgYW5zd2VyID0gKCkgPT4ge1xuICByZXR1cm4gJ0hlbGxvIEFuc3dlcic7XG59O1xuIiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlcy5zY3NzJ1xuXG5pbXBvcnQgeyBhbnN3ZXIgfSBmcm9tIFwiLi9hbnN3ZXJcIjtcblxuY29uc29sZS5sb2coYHRoZSBhbnN3ZXIgaXMgJHthbnN3ZXIoKX1gKTtcblxuZXhwb3J0IGNvbnN0ICQgPSA8VD4oc2VsZWN0b3I6IGFueSwgc2NvcGUgPSBkb2N1bWVudCk6IFQgPT4ge1xuICByZXR1cm4gc2NvcGUucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmNvbnN0IGFwcDogSFRNTERpdkVsZW1lbnQgPSAkKFwiI2FwcFwiKTtcbmlmIChhcHApIHtcbiAgYXBwLmlubmVySFRNTCA9IGBcbiAgPGgxPkhlbGxvIFZpdGUhPC9oMT5cbiAgPGEgaHJlZj1cImh0dHBzOi8vdml0ZWpzLmRldi9ndWlkZS9mZWF0dXJlcy5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RG9jdW1lbnRhdGlvbjwvYT5cbmBcbn1cblxuY29uc3QgYXBwMTogSFRNTERpdkVsZW1lbnQgPSAkKFwiI2FwcDFcIik7XG5pZiAoYXBwMSkge1xuICBhcHAxLmlubmVySFRNTCA9IGBcbiAgPGgxPlBhZ2UxPC9oMT5cbmBcbn1cblxuY29uc3QgYXBwMjogSFRNTERpdkVsZW1lbnQgPSAkKFwiI2FwcDJcIik7XG5pZiAoYXBwMikge1xuICBhcHAyLmlubmVySFRNTCA9IGBcbiAgPGgxPlBhZ2UyPC9oMT5cbmBcbn1cbiJdLCJuYW1lcyI6WyJwIiwicmVsTGlzdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN1cHBvcnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxpbmsiLCJwcm9jZXNzUHJlbG9hZCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJtdXRhdGlvbiIsInR5cGUiLCJhZGRlZE5vZGVzIiwibm9kZSIsInRhZ05hbWUiLCJyZWwiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInNjcmlwdCIsImZldGNoT3B0cyIsImludGVncml0eSIsInJlZmVycmVycG9saWN5IiwicmVmZXJyZXJQb2xpY3kiLCJjcm9zc29yaWdpbiIsImNyZWRlbnRpYWxzIiwiZXAiLCJnZXRGZXRjaE9wdHMiLCJmZXRjaCIsImhyZWYiLCJfX1ZJVEVfSVNfTU9ERVJOX18iLCJhbnN3ZXIiLCJjb25zb2xlIiwibG9nIiwiJCIsInNlbGVjdG9yIiwic2NvcGUiLCJxdWVyeVNlbGVjdG9yIiwiYXBwIiwiaW5uZXJIVE1MIiwiYXBwMSIsImFwcDIiXSwibWFwcGluZ3MiOiI7c3FCQUFBLEdBQU1BLEdBQUksVUFBb0IsQ0FDMUIsR0FBTUMsR0FBVUMsU0FBU0MsY0FBYyxNQUF2QixFQUErQkYsUUFDL0MsR0FBSUEsR0FBV0EsRUFBUUcsVUFBWUgsRUFBUUcsU0FBUyxlQUFqQixFQUMvQixPQUhzQixHQUFBLEdBQUEsRUFLUEYsU0FBU0csaUJBQWlCLDJCQUExQixDQUxPLEVBQUEsRUFBQSxHQUFBLENBSzFCLElBQTJFLEVBQUEsRUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsR0FBaEVDLEdBQWdFLEVBQUEsTUFDdkVDLEVBQWVELENBQUQsQ0FDakIsQ0FQeUIsT0FBQSxFQUFBLENBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQSxFQUFBLENBQUEsQ0FRMUIsR0FBSUUsa0JBQWlCLFNBQUNDLEVBQWMsQ0FBQSxHQUFBLEdBQUEsRUFDVEEsQ0FEUyxFQUFBLEVBQUEsR0FBQSxDQUNoQyxJQUFrQyxFQUFBLEVBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxFQUFBLEdBQUEsTUFBQSxDQUFBLEdBQXZCQyxHQUF1QixFQUFBLE1BQzlCLEdBQUlBLEVBQVNDLE9BQVMsWUFEUSxJQUlYRCxHQUFBQSxFQUFBQSxFQUFTRSxVQUpFLEVBQUEsRUFBQSxHQUFBLENBSTlCLElBQXdDLEVBQUEsRUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEVBQUEsR0FBQSxNQUFBLENBQUEsR0FBN0JDLEdBQTZCLEVBQUEsTUFDcEMsQUFBSUEsRUFBS0MsVUFBWSxRQUFVRCxFQUFLRSxNQUFRLGlCQUN4Q1IsRUFBZU0sQ0FBRCxDQUNyQixDQVA2QixPQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxFQVFqQyxDQVQrQixPQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQVVuQyxDQVZELEVBVUdHLFFBQVFkLFNBQVUsQ0FBRWUsVUFBVyxHQUFNQyxRQUFTLEVBQTVCLENBVnJCLEVBV0EsV0FBc0JDLEVBQVEsQ0FDMUIsR0FBTUMsR0FBWSxDQUFsQixFQUNBLE1BQUlELEdBQU9FLFdBQ1BELEdBQVVDLFVBQVlGLEVBQU9FLFdBQzdCRixFQUFPRyxnQkFDUEYsR0FBVUcsZUFBaUJKLEVBQU9HLGdCQUN0QyxBQUFJSCxFQUFPSyxjQUFnQixrQkFDdkJKLEVBQVVLLFlBQWMsVUFDdkIsQUFBSU4sRUFBT0ssY0FBZ0IsWUFDNUJKLEVBQVVLLFlBQWMsT0FFeEJMLEVBQVVLLFlBQWMsY0FDckJMLENBQ1YsQ0FDRCxXQUF3QmQsRUFBTSxDQUMxQixHQUFJQSxHQUFLb0IsR0FHVHBCLEdBQUtvQixHQUFLLEdBRVYsR0FBTU4sR0FBWU8sRUFBYXJCLENBQUQsRUFDOUJzQixNQUFNdEIsRUFBS3VCLEtBQU1ULENBQVosRUFDUixDQUNKLEVBQUNVLEFBQW9COUIsRUFBcEIsRUMxQ0ssR0FBTStCLEdBQVMsVUFBTSxDQUNuQixNQUFBLGNBQ1QsRUNFQUMsUUFBUUMsSUFBcUJGLGlCQUFBQSxPQUFBQSxFQUE3QixDQUFBLENBQUEsRUFFTyxHQUFNRyxHQUFJLFNBQUlDLEVBQXVDLENBQUEsR0FBeEJDLDBEQUFRbEMsU0FDbkMsTUFBQWtDLEdBQU1DLGNBQWNGLENBQXBCLENBQ1QsRUFFTUcsRUFBc0JKLEVBQUUsUUFDOUIsQUFBSUksR0FDRkEsR0FBSUMsVUFBSjtBQUFBO0FBQUE7QUFBQSxHQU1GLEdBQU1DLEdBQXVCTixFQUFFLFNBQy9CLEFBQUlNLEdBQ0ZBLEdBQUtELFVBQUw7QUFBQTtBQUFBLEdBS0YsR0FBTUUsR0FBdUJQLEVBQUUsU0FDL0IsQUFBSU8sR0FDRkEsR0FBS0YsVUFBTDtBQUFBOyJ9
